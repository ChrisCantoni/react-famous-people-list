import React, { useState, useEffect } from 'react';
import './FamousSection.css';
import axios from 'axios';
import FamousPersonForm from '../FamousPersonForm/FamousPersonForm';
import FamousPersonList from '../FamousPersonList/FamousPersonList';

function FamousSection() {

  let [famousPeopleArray, setPeopleArray] = useState([]);

  const fetchPeople = () => {
    axios.get('/people').then((response) => {
      setPeopleArray(response.data);
    }).catch((error) => {
      console.error('GET request error', error);
      alert('Something went wrong GET');
    })
  }

  useEffect(() => {
    fetchPeople()
  }, []);

  

    return (
      <>
        <FamousPersonForm fetchPeople={fetchPeople}/>
        <FamousPersonList famousPeopleArray={famousPeopleArray} />
      </>
    );
}

export default FamousSection;
