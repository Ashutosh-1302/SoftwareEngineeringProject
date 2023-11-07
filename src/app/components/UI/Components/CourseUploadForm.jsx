"use client"
import React, { useState } from 'react';
import Link from 'next/link';

export default function CourseUploadForm() {
  const [formData, setFormData] = useState({
    lectureVideoTitle: '',
    lectureVideoDescription: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear the error message for the input field when the user makes a change
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    // Validate the form fields
    if (formData.lectureVideoTitle.trim() === '') {
      newErrors.lectureVideoTitle = 'Title is required';
    }
    if (formData.lectureVideoDescription.trim() === '') {
      newErrors.lectureVideoDescription = 'Description is required';
    }

    // If there are errors, don't proceed with form submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Handle form submission, e.g., send data to the server
      // You can navigate to the next step or perform other actions here
      console.log('Form data:', formData);
    }
  };

  return (
    <div className='h-screen flex justify-center items-center' style={{ background: 'linear-gradient(to bottom, lightblue 50%, white 50%)' }}>
      <div className='bg-blue-400 w-1/3 px-4 rounded-lg py-8' style={{ background: 'white' }}>
        <h1 className='py-3 px-1 font-bold text-2xl'>Course 1</h1>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col space-y-16'>
            <input
              name='lectureVideoTitle'
              placeholder='Lecture Video Title'
              type='text'
              value={formData.lectureVideoTitle}
              onChange={handleChange}
              className='border border-black p-2 rounded'
            />
            {errors.lectureVideoTitle && <p className="text-red-500">{errors.lectureVideoTitle}</p>}

            <input
              name='lectureVideoDescription'
              placeholder='Lecture Video Description'
              type='text'
              value={formData.lectureVideoDescription}
              onChange={handleChange}
              className='border border-black p-2 rounded'
            />
            {errors.lectureVideoDescription && <p className="text-red-500">{errors.lectureVideoDescription}</p>}

            <div className='flex flex-wrap justify-between'>
              <div>
                <h1 className='font-medium'> Lecture Video</h1>
              </div>
              <div className='px-3'>
                <Link href='/signup/step-two'>
                  <button className='bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600'>
                    Upload
                  </button>
                </Link>
              </div>
            </div>

            <div className='flex flex-wrap justify-between'>
              <div>
                <h1 className='font-medium'>Lecture Video Description</h1>
              </div>
              <div className='px-3'>
                <Link href='/signup/step-two'>
                  <button className='bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600'>
                    Upload
                  </button>
                </Link>
              </div>
            </div>

            <div className='flex flex-wrap justify-between'>
              <div>
                <Link href='/signup/step-two'>
                  <button className='bg-red-500 text-white px-5 py-2 rounded hover:bg-blue-600'>
                    Cancel
                  </button>
                </Link>
              </div>
              <div className='gap-x-2 gap-y-5'>
                <Link href='/signup/step-two'>
                  <button type="submit" className='bg-red-500 text-white px-5 py-2 rounded hover:bg-blue-600'>
                    Next
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
