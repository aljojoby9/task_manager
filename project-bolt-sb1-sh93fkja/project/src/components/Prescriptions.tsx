import React, { useState } from 'react';
import { Search, Plus, CheckCircle, XCircle, Clock } from 'lucide-react';
import type { Prescription } from '../types';

const mockPrescriptions: Prescription[] = [
  {
    id: '1',
    patientName: 'John Doe',
    doctorName: 'Dr. Smith',
    date: '2024-03-15',
    medications: [
      { name: 'Amoxicillin', dosage: '500mg', quantity: 30 },
      { name: 'Ibuprofen', dosage: '400mg', quantity: 20 }
    ],
    status: 'pending'
  },
  {
    id: '2',
    patientName: 'Jane Smith',
    doctorName: 'Dr. Johnson',
    date: '2024-03-14',
    medications: [
      { name: 'Lisinopril', dosage: '10mg', quantity: 90 }
    ],
    status: 'completed'
  }
];

const statusColors = {
  pending: { bg: 'bg-yellow-100', text: 'text-yellow-800', icon: Clock },
  completed: { bg: 'bg-green-100', text: 'text-green-800', icon: CheckCircle },
  cancelled: { bg: 'bg-red-100', text: 'text-red-800', icon: XCircle }
};

const Prescriptions = () => {
  const [prescriptions, setPrescriptions] = useState<Prescription[]>(mockPrescriptions);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPrescriptions = prescriptions.filter(prescription =>
    prescription.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prescription.doctorName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="relative w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search prescriptions..."
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus className="h-5 w-5 mr-2" />
          New Prescription
        </button>
      </div>

      <div className="grid gap-4">
        {filteredPrescriptions.map(prescription => {
          const StatusIcon = statusColors[prescription.status].icon;
          return (
            <div key={prescription.id} className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{prescription.patientName}</h3>
                  <p className="text-gray-600">{prescription.doctorName}</p>
                  <p className="text-sm text-gray-500">Date: {prescription.date}</p>
                </div>
                <div className={`flex items-center px-3 py-1 rounded-full ${statusColors[prescription.status].bg} ${statusColors[prescription.status].text}`}>
                  <StatusIcon className="h-4 w-4 mr-2" />
                  <span className="capitalize">{prescription.status}</span>
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-medium mb-2">Medications</h4>
                <div className="space-y-2">
                  {prescription.medications.map((medication, index) => (
                    <div key={index} className="flex justify-between items-center bg-gray-50 p-2 rounded">
                      <div>
                        <span className="font-medium">{medication.name}</span>
                        <span className="text-gray-600 ml-2">{medication.dosage}</span>
                      </div>
                      <span className="text-gray-600">Qty: {medication.quantity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex justify-end space-x-4">
                {prescription.status === 'pending' && (
                  <>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      Cancel
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      Process
                    </button>
                  </>
                )}
                {prescription.status === 'completed' && (
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    View Details
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Prescriptions;