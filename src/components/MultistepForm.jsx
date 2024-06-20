import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  firstname: yup.string().required('First name is required'),
  surname: yup.string().required('Surname is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  gender: yup.string().required('Gender is required'),
  dateOfBirth: yup.date().required('Date of birth is required'),
  maritalStatus: yup.string().required('Marital status is required'),
  contactNumber: yup.string().required('Contact number is required'),
  documentCV: yup.mixed().required('CV document is required'),
  documentNationalId: yup.mixed().required('National ID document is required'),
  documentQualification: yup.mixed().required('Qualification document is required'),
});

const MultistepForm = () => {
  const [step, setStep] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const fields = [
    ['firstname', 'First Name'],
    ['surname', 'Surname'],
    ['email', 'Email'],
    ['gender', 'Gender'],
    ['dateOfBirth', 'Date of Birth'],
    ['maritalStatus', 'Marital Status'],
    ['contactNumber', 'Contact Number'],
    ['documentCV', 'CV Document'],
    ['documentNationalId', 'National ID Document'],
    ['documentQualification', 'Qualification Document'],
  ];

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (key.startsWith('document')) {
        formData.append(key, value[0]); // Append the file object
      } else {
        formData.append(key, value);
      }
    });

    try {
      const response = await fetch('https://hrm.msu.ac.zw/api/v2/application', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        handleNextStep();
      } else {
        console.error('Error submitting form');
      }
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.slice(0, step + 1).map(([name, label]) => (
        <div key={name}>
          <label htmlFor={name}>{label}</label>
          {name.startsWith('document') ? (
            <input {...register(name)} id={name} type="file" />
          ) : (
            <input {...register(name)} id={name} />
          )}
          {errors[name] && <p>{errors[name].message}</p>}
        </div>
      ))}

      {step !== 0 && (
        <button type="button" onClick={handlePreviousStep}>
          Previous
        </button>
      )}

      {step !== fields.length - 1 ? (
        <button type="button" onClick={handleNextStep}>
          Next
        </button>
      ) : (
        <button type="submit">Submit</button>
      )}
    </form>
  );
};

export default MultistepForm;