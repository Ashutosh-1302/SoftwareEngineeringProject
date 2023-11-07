import Link from 'next/link';
import { useState } from 'react';

export default function StepOneForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (formData.firstName.trim() === '') {
      newErrors.firstName = 'First Name is required';
    }
    if (formData.lastName.trim() === '') {
      newErrors.lastName = 'Last Name is required';
    }
    if (formData.contactNumber.trim() === '') {
      newErrors.contactNumber = 'Contact Number is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Data is valid, you can submit it or perform other actions here
      console.log('Form data:', formData);

      // Redirect to the next step using Next.js routing
      // You can customize the path as needed
      window.location.href = '/SignUpForm/Step2Form';
    }
  };

  return (
    <div className='h-screen flex justify-center items-center' style={{ background: 'linear-gradient(to bottom, lightblue 50%, white 50%)' }}>
      <div className='bg-blue-400 w-1/3 px-4 rounded-lg py-8' style={{ background: 'white' }}>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type='text'
              name='firstName'
              value={formData.firstName}
              onChange={handleChange}
              className={`border border-black p-2 rounded ${errors.firstName ? 'border-red-500' : ''}`}
            />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type='text'
              name='lastName'
              value={formData.lastName}
              onChange={handleChange}
              className={`border border-black p-2 rounded ${errors.lastName ? 'border-red-500' : ''}`}
            />
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Contact Number</label>
            <input
              type='text'
              name='contactNumber'
              value={formData.contactNumber}
              onChange={handleChange}
              className={`border border-black p-2 rounded ${errors.contactNumber ? 'border-red-500' : ''}`}
            />
            {errors.contactNumber && <p className="text-red-500 text-sm">{errors.contactNumber}</p>}
          </div>

          <button
            type="submit"
            className='bg-blue-500 text-white p-2 rounded hover:bg-blue-600'
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
}
