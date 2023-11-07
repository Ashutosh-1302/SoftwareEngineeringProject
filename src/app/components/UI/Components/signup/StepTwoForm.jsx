"use client";
import Link from "next/link";
import { useState } from "react";

export default function StepOneForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear the error message when the user edits the input field
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email ID is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidEmail = (email) => {
    // Implement your email validation logic here, e.g., using a regular expression
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Data is valid, you can submit it or perform other actions here
      console.log("Form data:", formData);

      // Redirect to the next step using Next.js routing
      // You can customize the path as needed
      window.location.href = "/SignUpForm";
    }
  };

  return (
    <div className='h-screen flex flex-col justify-center items-center' style={{ background: 'linear-gradient(to bottom, lightblue 50%, white 50%)' }}>
      <div class="flex-col lg:flex lg:flex-row lg:gap-x-8 py-4">
  <div class="lg:w-1/2">
    <div class="flex-row gap-x-8 ">
      <div className='py-5'>
        <button className='bg-red-300 hover:bg-white px-7 py-2 rounded-sm'>Student</button>
      </div>
      <div>
        <button className='bg-red-300 hover:bg-white px-7 py-2 rounded-sm'>Instructor</button>
      </div>
    </div>
  </div>
  <div class="lg:w-1/2">
    <div class="flex-row gap-x-8">
      <div className='py-5'>
        <button className='bg-red-300 hover:bg-white px-7 py-2 rounded-sm'>Parent</button>
      </div>
      <div>
        <button className='bg-red-300 hover:bg-white px-7 py-2 rounded-sm'>Teaching.A</button>
      </div>
    </div>
  </div>
</div>

      <div className='bg-blue-400 w-1/3 px-4 rounded-lg py-8' style={{ background: 'white' }}>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email ID
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`border border-black p-2 rounded ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`border border-black p-2 rounded ${
                errors.password ? "border-red-500" : ""
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          <Link
            href="/SignUpForm"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Next
          </Link>
        </form>
      </div>
    </div>
  );
}
