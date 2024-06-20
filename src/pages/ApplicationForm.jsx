import React, { useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import LoadingSpinner from '../components/LoadingSpinner';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as Yup from 'yup'

const ApplicationForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

  const [advertId, setAdvertId] = useState(id);
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [nationalId, setNationalId] = useState('');
  const [gender, setGender] = useState('');
  const [nationality, setNationality] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [dob, setDob] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [experience, setExperience] = useState('');
  const [referral_name_1, setRefereeName1] = useState('');
  const [referral_email_1, setRefereeEmail1] = useState('');
  const [referral_contact_1, setRefereeContact1] = useState('');
  const [referral_name_2, setRefereeName2] = useState('');
  const [referral_email_2, setRefereeEmail2] = useState('');
  const [referral_contact_2, setRefereeContact2] = useState('');

  const [referral_name_3, setRefereeName3] = useState('');
  const [referral_email_3, setRefereeEmail3] = useState('');
  const [referral_contact_3, setRefereeContact3] = useState('');

  const [cvFile, setCVFile] = useState(null);
  const [nationalIDFile, setNationalIDFile] = useState(null);
  const [qualificationFile, setQualificationFile] = useState(null);

//   const {register, handleSubmit} = useForm()

    // const schema = Yup.object().shape({
    // firstName: Yup.string().required('First Name is required'),
    // surname: Yup.string().required('Surname is required'),
    // emailAddress: Yup.string().email('Invalid email address').required('Email Address is required'),
    // nationalId: Yup.string().required('National ID is required'),
    // gender: Yup.string().required('Gender is required'),
    // nationality: Yup.string().required('Nationality is required'),
    // maritalStatus: Yup.string().required('Marital Status is required'),
    // dob: Yup.string().required('Date of Birth is required'),
    // contactNumber: Yup.string().required('Contact Number is required'),
    // experience: Yup.string().required('Experience is required'),
    // referral_name_1: Yup.string().required('Referral Name 1 is required'),
    // referral_email_1: Yup.string().email('Invalid email address').required('Referral Email 1 is required'),
    // referral_name_2: Yup.string(),
    // referral_email_2: Yup.string().email('Invalid email address'),
    // referral_name_3: Yup.string(),
    // referral_email_3: Yup.string().email('Invalid email address'),
    // cvFile: Yup.mixed().required('CV File is required'),
    // nationalIDFile: Yup.mixed().required('National ID File is required'),
    // qualificationFile: Yup.mixed().required('Qualification File is required'),
    // });

    // // Usage example:
    // const { register, handleSubmit, formState: {errors} } = useForm({
    // resolver: yupResolver(schema),
    // });

    const formSubmit = async (event) => {
        event.preventDefault();
      
        const formData = new FormData();
        formData.append('advert_id', advertId);
        formData.append('first_name', firstName);
        formData.append('surname', surname);
        formData.append('email_address', emailAddress);
        formData.append('national_id', nationalId);
        formData.append('gender', gender);
        formData.append('nationality', nationality);
        formData.append('marital_status', maritalStatus);
        formData.append('dob', dob);
        formData.append('contact_number', contactNumber);
        formData.append('experience', experience);
        formData.append('document_cv', cvFile);
        formData.append('document_national_id', nationalIDFile);
        formData.append('document_qualification', qualificationFile);
        formData.append('referral_name_1', referral_name_1);
        formData.append('referral_name_2', referral_name_2);
        formData.append('referral_name_3', referral_name_3);
        formData.append('referral_email_1', referral_email_1);
        formData.append('referral_email_2', referral_email_2);
        formData.append('referral_email_3', referral_email_3);
        formData.append('referral_contact_1', referral_email_3);
        formData.append('referral_contact_2', referral_email_3);
        formData.append('referral_contact_3', referral_email_3);
        formData.append('document_cv', cvFile);
        formData.append('document_national_id', nationalIDFile);
        formData.append('document_qualification', qualificationFile);
      
        try {
          setIsLoading(true);
      
          const timeoutPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
              reject(new Error('Request timed out'));
            }, 15000);
          });
      
          const response = await Promise.race([
            fetch('https://hrm.msu.ac.zw/api/v2/application-form', {
              method: 'POST',
              headers: {
                'Content-Type': 'multipart/form-data'
              },
              body: formData
            }),
            timeoutPromise
          ]);
      
          if (response?.ok) {
            // Form submission successful
            setAdvertId('');
            setFirstName('');
            setSurname('');
            setEmailAddress('');
            setNationalId('');
            setGender('');
            setNationality('');
            setMaritalStatus('');
            setDob('');
            setContactNumber('');
            setExperience('');
            setRefereeName1('');
            setRefereeName2('');
            setRefereeName3('');
            setRefereeEmail1('');
            setRefereeEmail2('');
            setRefereeEmail3('');
            setCVFile(null);
            console.log('Form submitted successfully');
            console.log(formData);
            setIsLoading(false);
            navigate(`/application-success/${advertId}`);
          } else {
            // Form submission failed
            console.error('Form submission failed');
            setIsLoading(false);
          }
        } catch (error) {
          console.error('An error occurred while submitting the form:', error);
          setIsLoading(false);
        }
      
        navigate(`/vacancies`);
      };

  const handleCVFileChange = (event) => {
    setCVFile(event.target.files[0]);
  };

  
  const handleNationalIDFileChange = (event) => {
    setNationalIDFile(event.target.files[0]);
  };

  const handleQualificationFileChange = (event) => {
    setQualificationFile(event.target.files[0]);
  };

  return (
    <div>
        <form onSubmit={formSubmit} className='flex justify-center'>
        <div className=' rounded-sm shadow-lg my-8 py-4 px-8 bg-white'>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className='text-4xl mt-3 font-bold text-blue-600 uppercase'>Application Form</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Please fill in below information inorder to apply.
          </p>
          </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base text-xl font-bold leading-7 text-gray-900">Personal Information</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {/* {errors['first-name'] && (
                <span className="text-red-500">{errors['first-name'].message}</span>
            )} */}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  value={surname}
          onChange={(e) => setSurname(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {/* {errors['last-name'] && (
                    <span className="text-red-500">{errors['last-name'].message}</span>
                )} */}
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email_address"
                  type="email"
                  autoComplete="email"
                  value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
          required
          
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="id" className="block text-sm font-medium leading-6 text-gray-900">
                National ID
              </label>
              <div className="mt-2">
                <input
                  id="nationalid"
                  name="nationalid"
                  type="text"
                  autoComplete="text"
                  value={nationalId}
          onChange={(e) => setNationalId(e.target.value)}
          
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                Gender
              </label>
              <div className="mt-2">
                <select
                  id="gender"
                  name="gender"
                  autoComplete="gender-name"
                  value={gender}
          onChange={(e) => setGender(e.target.value)}
          
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Nationality
              </label>
              <div className="mt-2">
                <select
                  id="nationality"
                  name="nationality"
                  autoComplete="country-name"
                  value={nationality}
          onChange={(e) => setNationality(e.target.value)}
          
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Zimbabwean</option>
                  <option>South Africa</option>
                  <option>Botswana</option>
                  <option>Kenya</option>
                  <option>Malawi</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                Marital Status
              </label>
              <div className="mt-2">
                <select
                  id="gender"
                  name="gender"
                  autoComplete="gender-name"
                  value={maritalStatus}
                  required
                  
          onChange={(e) => setMaritalStatus(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Select Marital Status</option>
                  <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                    <option value="widowed">Widowed</option>
                </select>
              </div>
            </div>

            <div class="flex flex-col mt-4">
                <label for="dob" class="text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                <input id="dob"
                 type="date"
                  min="1958-01-01" max="2006-12-31"
                  value={dob}
          onChange={(e) => setDob(e.target.value)}
          
                 class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                </div>

                <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Number of Experience
              </label>
              <div className="mt-2">
                <input
                  id="experience"
                  name="experience"
                  type="text"
                  autoComplete="text"
                  placeholder='enter number of job experience..'
                  value={experience}
          onChange={(e) => setExperience(e.target.value)}
          required
          
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>



            <div className="col-span-full">
              {/* <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Street address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div> */}
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              {/* <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                City
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div> */}
            </div>

            <div className="sm:col-span-2">
              {/* <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                State / Province
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div> */}
            </div>

            <div className="sm:col-span-2">
              {/* <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                ZIP / Postal code
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div> */}
            </div>
          </div>
        </div>

           
        <h2 className="text-base text-xl font-bold leading-7 text-gray-900">Contact Information</h2>
        <div className="">
              <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                Contact Type
              </label>
              <div className="mt-2">
                <select
                  id="contact-type"
                  name="contact-type"
                  autoComplete="contact-type"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Select Contact Type</option>
                  <option>Cell Number</option>
                  <option>Telephone</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Enter Contact
              </label>
              <div className="mt-2">
                
                <input
                  id="contact"
                  name="contact"
                  type="text"
                  autoComplete="text"
                  value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
           

        <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base text-xl font-bold leading-7 text-gray-900">Referees</h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
            NB: Enter any three Referees below
          </p>
          <div className='grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
        <div className="sm:col-span-2 mt-2">
            <label htmlFor="referral_name_1" className="block text-sm font-medium leading-6 text-gray-900">
            Referee Name 1
            </label>
            <input
            type="text"
            name="referral_name_1"
            id="referral_name_1"
            autoComplete="text"
            value={referral_name_1}
            onChange={(e) => setRefereeName1(e.target.value)}
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
        </div>
    <div className="sm:col-span-2 mt-2">
        <label htmlFor="referral_email_1" className="block text-sm font-medium leading-6 text-gray-900">
        Email
        </label>
        <input
        type="email"
        name="referral_email_1"
        id="referral_email_1"
        autoComplete="given-referral_email_1"
        value={referral_email_1}
        onChange={(e) => setRefereeEmail1(e.target.value)}
        
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
    </div>
    <div className="sm:col-span-2 mt-2">
        <label htmlFor="referral_email_1" className="block text-sm font-medium leading-6 text-gray-900">
        Contact Number
        </label>
        <input
        type="text"
        name="refferal_contact_1"
        id="refferal_contact_1"
        autoComplete="given-referral_contact_1"
        value={referral_contact_1}
        onChange={(e) => setRefereeContact1(e.target.value)}
        
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
    </div>
    
  <div className="sm:col-span-2 mt-2">
    <label htmlFor="referral_name_2" className="block text-sm font-medium leading-6 text-gray-900">
      Referee Name 2
    </label>
    <input
      type="text"
      name="referral_name_2"
      id="referral_name_2"
      autoComplete="text"
      value={referral_name_2}
      onChange={(e) => setRefereeName2(e.target.value)}
      
      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
  </div>
  <div className="sm:col-span-2 mt-2">
    <label htmlFor="referral_email_2" className="block text-sm font-medium leading-6 text-gray-900">
      Email
    </label>
    <input
      type="email"
      name="referral_email_2"
      id="referral_email_2"
      autoComplete="given-referral_email_2"
      value={referral_email_2}
      onChange={(e) => setRefereeEmail2(e.target.value)}
      
      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
  </div>
  <div className="sm:col-span-2 mt-2">
        <label htmlFor="referral_email_2" className="block text-sm font-medium leading-6 text-gray-900">
        Contact Number
        </label>
        <input
        type="text"
        name="refferal_contact_2"
        id="refferal_contact_2"
        autoComplete="given-referral_contact_2"
        value={referral_contact_2}
        onChange={(e) => setRefereeContact2(e.target.value)}
        
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
    </div>
  <div className="sm:col-span-2 mt-2">
    <label htmlFor="referral_name_3" className="block text-sm font-medium leading-6 text-gray-900">
      Referee Name 3
    </label>
    <input
      type="text"
      name="referral_name_3"
      id="referral_name_3"
      autoComplete="text"
      value={referral_name_3}
      onChange={(e) => setRefereeName3(e.target.value)}
      
      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
  </div>
  <div className="sm:col-span-2 mt-2">
    <label htmlFor="referral_email_3" className="block text-sm font-medium leading-6 text-gray-900">
      Email
    </label>
    <input
      type="email"
      name="referral_email_3"
      id="referral_email_3"
      autoComplete="given-referral_email_3"
      value={referral_email_3}
      onChange={(e) => setRefereeEmail3(e.target.value)}
      required
      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
  </div>
  <div className="sm:col-span-2 mt-2">
        <label htmlFor="referral_contact_3" className="block text-sm font-medium leading-6 text-gray-900">
        Contact Number
        </label>
        <input
        type="text"
        name="refferal_contact_3"
        id="refferal_contact_3"
        autoComplete="given-referral_contact_3"
        value={referral_contact_3}
        onChange={(e) => setRefereeContact3(e.target.value)}
        
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
    </div>
</div>
        </div>


        <h2 className="text-base text-xl font-bold leading-7 text-gray-900">Uploads</h2>
        <div>
<label class="block text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload CV</label>
<input 
onChange={handleCVFileChange}

class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" accept="application/pdf"/>
</div>
<div>
<label
 class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">National ID</label>
<input
    onChange={handleNationalIDFileChange}
    
 class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" accept=""/>
</div>

<div>
<label
 class="block mb-2 text-sm font-bold text-red-600 dark:text-white uppercase" for="file_input">NB: upload qualifications in one file</label>
<input
onChange={handleQualificationFileChange}

 class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" accept="application/pdf"/>
</div>

        <div className="border-b border-gray-900/10 pb-12">
          

          <div className="mt-10 space-y-10">
          
            
          </div>
        </div>
      </div>

      

      <div className="mt-6 flex items-center justify-end gap-x-6">
        
        <button
          type="submit"
          className="flex rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >     
          Submit
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-2">
            <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
        </svg>
        </button>
      </div>
      </div>
    </form>
    {isLoading && <LoadingSpinner />}
    </div>
  );
};

export default ApplicationForm;