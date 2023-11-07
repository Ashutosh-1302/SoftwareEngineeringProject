"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function LoginForm({ login, setLogin }) {
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
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Data is valid, you can submit it or perform other actions here
      console.log("Form data:", formData);

      // Redirect to the next step using Next.js routing
      // You can customize the path as needed
      signIn("credentials", {
        username: formData.email,
        password: formData.password,
        callbackUrl: `/`,
      });
    }
  };

  return (
    <div
      className="h-screen flex flex-col justify-center items-center"
      style={{
        background: "linear-gradient(to bottom, lightblue 50%, white 50%)",
      }}
    >
      <div
        className="bg-blue-400 w-1/3 px-4 rounded-lg py-8"
        style={{ background: "white" }}
      >
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
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

          <button
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            type="submit"
          >
            Submit
          </button>
        </form>

        {!login && (
          <button className="mt-2">
            <a onClick={() => setLogin(true)}>Login</a>
          </button>
        )}
        {!!login && (
          <button className="mt-2">
            <a onClick={() => setLogin(false)}>Sign Up</a>
          </button>
        )}
      </div>
    </div>
  );
}
