import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { useState } from 'react';
import VacancyDetailsComponent from '../components/VacancyDetailsComponent';

function VacancyDetails() {
    const { id } = useParams();
    const advertId = id
    const navigate = useNavigate();

  return (
    <div className=''>
           <VacancyDetailsComponent advertId={advertId}  />  
    </div>
  )
}

export default VacancyDetails