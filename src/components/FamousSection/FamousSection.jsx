import React, { useState, useEffect } from 'react';
import './FamousSection.css';
import axios from 'axios';
import FamousPersonForm from '../FamousPersonForm/FamousPersonForm';
import FamousPersonList from '../FamousPersonList/FamousPersonList';

function FamousSection() {
  let [famousPersonName, setPersonName] = useState('');
  let [famousPersonRole, setPersonRole] = useState('');
  let [famousPeopleArray, setPeopleArray] = useState([]);

  // TODO: on load, call the fetchPeople() function

  const fetchPeople = () => {
    // TODO: fetch the list of people from the server
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
        <p>
          {famousPersonName} is famous for "{famousPersonRole}".
        </p>
        <FamousPersonList famousPeopleArray={famousPeopleArray} />
        </>
    );
}

export default FamousSection;
