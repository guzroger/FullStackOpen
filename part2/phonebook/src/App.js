import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import PersonDisplay from './components/PersonDisplay';

function App() {
  
  const [persons , setPersons] = useState([ { name: 'Arto Hellas', phone: '040-123456', id: 1 },
                                          { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
                                          { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
                                          { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 } ]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ filter, setFilter ] = useState('');
  
  const addPerson = (event) => {
    event.preventDefault();

    const found = persons.find( person =>  person.name.toUpperCase() ===  newName.toUpperCase() );

    if(!found){
      const personObject = { name:  newName, id: persons.length + 1, phone: newNumber  };

      setPersons(persons.concat(personObject));
      setNewName('');
      setNewNumber('');
    }
    else
      alert(`${newName} is already added to phonebook`);
    
  }


  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  }
  
  const personsToShow = filter? persons.filter( person => person.name.startsWith(filter)):persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <form >
        <div>
            filter shown with: <input value={filter} onChange={handleFilterChange} />
        </div>
      </form>
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form > 
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map( (person) => <PersonDisplay key={person.id} person={person} />
         ) }
      </ul>
    </div>
  );
}

export default App;
