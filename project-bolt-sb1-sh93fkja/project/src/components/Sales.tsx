import React, { useState } from 'react';
import { Search, ShoppingCart } from 'lucide-react';
import type { Medication, Sale } from '../types';

const mockMedications: Medication[] = [
  {
    id: '1',
    name: 'Amoxicillin',
    brand: 'Generic',
    category: 'Antibiotics',
    stock: 150,
    price: 12.99,
    expiryDate: '2024-12-31',
    batchNumber: 'BAT001',
    minimumStock: 50
  },
  {
    id: '2',
    name: 'Lisinopril',
    brand: 'Zestril',
    category: 'Blood Pressure',
    stock: 30,
    price: 24.99,
    expiryDate: '2024-10-15',
    batchNumber: 'BAT002',
    minimumStock: 40
  }
];

const Sales = () => {
  const [cart, setCart] = useState<Array<{ medication: Medication; quantity: number }>>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMedications = mockMedications.filter(med =>
    med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    med.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (medication: Medication) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.medication.id === medication.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.medication.id === medication.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { medication, quantity: 1 }];
    });
  };

  const removeFromCart = (medicationId: string) => {
    setCart(prevCart => prevCart.filter(item => item.medication.id !== medicationId));
  };

  const updateQuantity = (medicationId: string, quantity: number) => {
    if (quantity < 1) return;
    setCart(prevCart =>
      prevCart.map(item =>
        item.medication.id === medicationId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const total = cart.reduce((sum, item) => sum + (item.medication.price * item.quantity), 0);

  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2 bg-white rounded-lg shadow p-6">
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search medications..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {filteredMedications.map(medication => (
            <div key={medication.id} className="border rounded-lg p-4">
              <h3 className="font-semibold text-lg">{medication.name}</h3>
              <p className="text-gray-600">{medication.brand}</p>
              <div className="mt-2 flex justify-between items-center">
                <span className="text-lg font-bold">${medication.price.toFixed(2)}</span>
                <button
                  onClick={() => addToCart(medication)}
                  className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center mb-6">
          <ShoppingCart className="h-6 w-6 text-gray-600 mr-2" />
          <h2 className="text-xl font-semibold">Cart</h2>
        </div>

        <div className="space-y-4">
          {cart.map(item => (
            <div key={item.medication.id} className="flex justify-between items-center border-b pb-4">
              <div>
                <h3 className="font-medium">{item.medication.name}</h3>
                <p className="text-sm text-gray-600">${item.medication.price.toFixed(2)} each</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(item.medication.id, item.quantity - 1)}
                    className="px-2 py-1 border rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.medication.id, item.quantity + 1)}
                    className="px-2 py-1 border rounded"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.medication.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex justify-between text-lg font-semibold">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            disabled={cart.length === 0}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sales;