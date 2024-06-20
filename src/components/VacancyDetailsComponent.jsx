import React from 'react';
import { useGetSingleAdvertQuery } from '../services/advertsApi';
import { Link } from 'react-router-dom';
import AdvertSpinner from './AdvertsLoadingSpinner';

const VacancyDetailsComponent = ({ advertId }) => {
  const { data: advert, isLoading, isError } = useGetSingleAdvertQuery(advertId);

  if (isLoading) {
    return <AdvertSpinner />;
  }

  if (isError) {
    return <div>Network Error. Please Reload page!</div>;
  }

  return (
    <div className='bg-gray-50 py-4'>
        <h1 className="px-8 text-xl mt-3 font-black md:text-2xl lg:text-3xl uppercase">{advert.title}</h1>  

       

<div class="p-10 mx-8 my-6 bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="mb-3 font-normal text-gray-700 dark:text-gray-400">
<div dangerouslySetInnerHTML={{ __html: advert.content }}/>

    </div>

    <Link to={`/application-form/${advert.id}`} class="inline-flex items-center uppercase px-5 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    Apply
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-2">
            <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
        </svg>
    </Link>
</div>
    
    </div>
  );
};

export default VacancyDetailsComponent;