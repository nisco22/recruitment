import React from 'react';
import { useGetAdvertsQuery } from '../services/advertsApi';
import { Link } from 'react-router-dom';
import logo from '../assets/msulogo2.png';
import AdvertSpinner from '../components/AdvertsLoadingSpinner';
// import AdvertsLoadingSpinner from '../components/AdvertsLoadingSpinner';
// import LoadingSpinner from '../components/LoadingSpinner';

function Vacancies() {
  const { data, isFetching, error } = useGetAdvertsQuery();
  console.log(data);
  const adverts = data?.data;

  if (isFetching) return <AdvertSpinner />;


  if (error) {
    return <div className='font-semibold'>Network Error. Please Reload Page!</div>;
  }

  return (
    <div className="">
        <h1 className="px-10 text-2xl font-black md:mt-6 md:text-4xl uppercase">Adverts</h1>

      <div>
        {adverts &&
          adverts.map((advert) => (
            <div
              key={advert.id}
              className="mx-2 my-10 max-w-screen-lg rounded-md border border-gray-100 text-gray-700 shadow-md md:mx-auto"
            >

<div class="flex flex-col md:flex-row bg-white rounded-md shadow-sm hover:shadow-md">
    <div class="p-5 md:w-4/6 md:p-8">
      <span class="rounded-md bg-yellow-300 px-2 py-1 text-xs uppercase text-white">Midlands state university</span>
      <p class="mt-2 text-xl font-black md:mt-6 md:text-3xl">{advert.title}</p>
      <div className='flex'>
      <p class="mt-3 text-gray-600 pr-6 flex font-semibold">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
</svg>

        Posted: <div className='ml-2 font-normal'>{advert.human_created_at}</div></p>
      <p class="mt-3 text-gray-600 pl-6 flex font-semibold ">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
</svg>


        Closing Date: <div className='ml-2 font-normal'>{advert.human_closing_date}</div></p>
      </div>
      <Link
                to={`/vacancy-details/${advert.id}`}
                className="mt-4 mr-2 flex items-center justify-center rounded-md bg-blue-700 px-8 py-2 text-center text-white duration-150 md:mb-4 hover:translate-y-1 hover:bg-blue-600"
              >
                View Advert
              </Link>

      
    </div>
    <div class="mx-auto hidden items-center px-5 md:flex md:p-8">
    <img className="rounded-3xl shadow-lg h-40 w-40 object-cover" src={logo} alt="logo image" />
  </div>
  </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Vacancies;