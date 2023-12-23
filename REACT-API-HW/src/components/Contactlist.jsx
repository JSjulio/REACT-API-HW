import React from "react"; 
import ContactRow from "./ContactRow";
import { useState, useEffect } from "react";
import SelectedContact from "./SelectedContactId";

// const dummyContacts = [
//     { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" }, 
//     { id: 2, name: "C-3P0", phone: "333-333-3333", email: "c3po@droids.com" }, 
//     { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" }, 
//   ];

  export default function ContactList({ contacts, setSelectedContactId }) { 

      console.log(contacts);
      
    return ( 
    <>
    <div>
        <table>
            <thead>
                <tr>
                     <th colSpan="3">Contact List</th>                
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                </tr>
                {contacts.map((contact) => { 
                    return <ContactRow 
                    key={contact.id} 
                    contact={contact} 
                    setSelectedContactId={setSelectedContactId}
                    />
                })}
            </tbody>
        </table>
    </div>
    </>
    );
}

