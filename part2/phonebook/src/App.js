import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import PersonDisplay from './components/PersonDisplay';

function App() {
  
  const [persons , setPersons] = useState([ { name: 'Arto Hellas', id:1} ]);
  const [ newName, setNewName ] = useState('');
  
  const addPerson = (event) => {
    event.preventDefault();

    const found = persons.find( person =>  person.name.toUpperCase() ===  newName.toUpperCase() );

    if(!found){
      const personObject = { name:  newName, id: persons.length + 1 };

      setPersons(persons.concat(personObject));
      setNewName('');
    }
    else
      alert(`${newName} is already added to phonebook`);
    
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form > 
      <h2>Numbers</h2>
      <ul>
        {persons.map( (person) => <PersonDisplay key={person.id} person={person} />
         ) }
      </ul>
    </div>
  );
}

export default App;
