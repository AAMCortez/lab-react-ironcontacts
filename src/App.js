import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
   const [fiveContacts, setContacts] = useState(contacts.slice(0, 4));
   function hasOscar(contact) {
      if (contact.wonOscar === true) {
         return <td>🏆</td>;
      } else {
         <td> </td>;
      }
   }
   function hasEmmy(contact) {
      if (contact.wonEmmy === true) {
         return <td>🏆</td>;
      } else {
         <td> </td>;
      }
   }
   function handleAddContact() {
      const randomContact =
         contacts[Math.floor(Math.random() * contacts.length)];
      setContacts([...fiveContacts, randomContact]);
   }

   function handleSortByName() {
      const sortedName = fiveContacts.sort((a, b) =>
         a.name.localeCompare(b.name)
      );
      return setContacts(() => [...sortedName]);
   }
   function handleSortByPopularity() {
      const sortedPop = fiveContacts.sort(
         (a, b) => b.popularity - a.popularity
      );
      return setContacts(() => [...sortedPop]);
   }

   function handleDeleteContact(contactId) {
      const filteredContacts = [...fiveContacts].filter((contact) => {
         return contact.id !== contactId;
      });
      return setContacts(filteredContacts);
   }
   return (
      <div className="App">
         <h1>IronContacts</h1>
         <div>
            <button onClick={handleAddContact}>Add Random Contact</button>
            <button onClick={handleSortByName}>Sort by Name</button>
            <button onClick={handleSortByPopularity}>Sort by Popularity</button>
         </div>
         <table>
            <tr>
               <th>Picture</th>
               <th>Name</th>
               <th>Popularity</th>
               <th>Won Oscar</th>
               <th>Won Emmy</th>
               <th>Action</th>
            </tr>

            {fiveContacts.map((contact) => {
               return (
                  <tr key={contact.id}>
                     <td>
                        <img
                           src={contact.pictureUrl}
                           width="100px"
                           height="140px"
                           alt="contact"
                        ></img>
                     </td>
                     <td>{contact.name}</td>
                     <td>{Math.floor(contact.popularity * 100) / 100}</td>
                     {hasOscar(contact)}
                     {hasEmmy(contact)}
                     <td>
                        <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
                     </td>
                  </tr>
               );
            })}
         </table>
      </div>
   );
}
export default App;
