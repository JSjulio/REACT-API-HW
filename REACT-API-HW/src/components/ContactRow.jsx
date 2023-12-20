import react from "react"; 
import ContactList from "./Contactlist";


export default function ContactRow({ contact } ) { 
    return ( 
       <tr>
            <td>{contact.name}</td>
            <td>{contact.phone}</td>
            <td>{contact.email}</td>
        </tr> 
    );
}






