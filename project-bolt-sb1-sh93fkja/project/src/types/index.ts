export interface User {
  id: string;
  name: string;
  role: 'admin' | 'pharmacist';
  email: string;
}

export interface Medication {
  id: string;
  name: string;
  brand: string;
  category: string;
  stock: number;
  price: number;
  expiryDate: string;
  batchNumber: string;
  minimumStock: number;
}

export interface Sale {
  id: string;
  medications: {
    medicationId: string;
    quantity: number;
    price: number;
  }[];
  total: number;
  paymentMethod: 'cash' | 'card';
  date: string;
  customerId?: string;
}

export interface Prescription {
  id: string;
  patientName: string;
  doctorName: string;
  date: string;
  medications: {
    name: string;
    dosage: string;
    quantity: number;
  }[];
  status: 'pending' | 'completed' | 'cancelled';
}