import React from 'react';
import './App.css';
import ContactList from './components/Contactlist'
import { useState } from 'react';

function App() {
  const [contact, setContact] = useState(0); 

  const dummyContacts = [
    { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" }, 
    { id: 2, name: "C-3P0", phone: "333-333-3333", email: "c3po@droids.com" }, 
    { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" }, 
  ];
  console.log(dummyContacts);
  // Here I console.log the array as a check that I can return it

  return (

    <>
    <ContactList/> 
  </>


  );
}

export default App

