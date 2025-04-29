import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

type FormInputs = {
  firstName: string;
  lastName: string;
  school: string;
  jobTitle: string;
  email: string;
  mobileNumber: string;
};

export default function SignUpForm() {
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<FormInputs>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: FormInputs) => {
    setIsSubmitting(true);
    try {
      // Add your form submission logic here
      console.log(data);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      reset();
      // Add success notification or redirect
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <div className="relative bg-white rounded-lg shadow-lg p-8">
        <img 
          src="/assets/media/bg-squiggles-writing.png" 
          alt="background decoration" 
          className="absolute top-0 right-0 w-40 h-40 opacity-10 pointer-events-none"
        />
        
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Essential Details
        </h2>
        <p className="text-gray-600 mb-6">
          Fill in the form below and a member of our team will be in touch to set up your free trial.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
              First name
              {errors.firstName ? (
                <i className="fas fa-square-xmark text-red-500 ml-2" />
              ) : (
                <i className="fas fa-square-check text-green-500 ml-2" />
              )}
            </label>
            <input
              {...register("firstName", { required: "First name is required" })}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 
                ${errors.firstName ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
              type="text"
              id="firstName"
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
              Last name
              {errors.lastName ? (
                <i className="fas fa-square-xmark text-red-500 ml-2" />
              ) : (
                <i className="fas fa-square-check text-green-500 ml-2" />
              )}
            </label>
            <input
              {...register("lastName", { required: "Last name is required" })}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 
                ${errors.lastName ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
              type="text"
              id="lastName"
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="school">
              School
              {errors.school ? (
                <i className="fas fa-square-xmark text-red-500 ml-2" />
              ) : (
                <i className="fas fa-square-check text-green-500 ml-2" />
              )}
            </label>
            <input
              {...register("school", { required: "School name is required" })}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 
                ${errors.school ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
              type="text"
              id="school"
            />
            {errors.school && (
              <p className="text-red-500 text-xs mt-1">{errors.school.message}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jobTitle">
              Job Title
              {errors.jobTitle ? (
                <i className="fas fa-square-xmark text-red-500 ml-2" />
              ) : (
                <i className="fas fa-square-check text-green-500 ml-2" />
              )}
            </label>
            <input
              {...register("jobTitle", { required: "Job title is required" })}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 
                ${errors.jobTitle ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
              type="text"
              id="jobTitle"
            />
            {errors.jobTitle && (
              <p className="text-red-500 text-xs mt-1">{errors.jobTitle.message}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
              {errors.email ? (
                <i className="fas fa-square-xmark text-red-500 ml-2" />
              ) : (
                <i className="fas fa-square-check text-green-500 ml-2" />
              )}
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 
                ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
              type="email"
              id="email"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobileNumber">
              Mobile Number
              {errors.mobileNumber ? (
                <i className="fas fa-square-xmark text-red-500 ml-2" />
              ) : (
                <i className="fas fa-square-check text-green-500 ml-2" />
              )}
            </label>
            <input
              {...register("mobileNumber", {
                required: "Mobile number is required",
                pattern: {
                  value: /^[0-9]{11}$/,
                  message: "Please enter a valid 11-digit mobile number"
                }
              })}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 
                ${errors.mobileNumber ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
              type="tel"
              id="mobileNumber"
            />
            {errors.mobileNumber && (
              <p className="text-red-500 text-xs mt-1">{errors.mobileNumber.message}</p>
            )}
          </div>

          <div className="col-span-full flex justify-center mt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-3 bg-amber-400 text-white font-bold rounded-lg 
                hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200 
                transition-colors ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Submitting...' : 'SUBMIT'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}