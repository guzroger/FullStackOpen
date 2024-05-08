import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'
import PersonDisplay from './components/PersonDisplay';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import personsService from './services/persons';

function App() {
  
  const [persons , setPersons] = useState([ ]);
  const [ filter, setFilter ] = useState('');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  }
  
  const personsToShow = filter? persons.filter( person => person.name.startsWith(filter)):persons;

  useEffect(() => {
    const eventHandler = response => {
      setPersons(response.data);
    }
    const promise = personsService.getAll();
    promise.then(eventHandler);
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilterChange={handleFilterChange} filter={filter} />
      <h2>Add a new</h2>
      <PersonForm  setPersons={setPersons} persons={persons} />
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map( (person) => <PersonDisplay key={person.id} person={person} persons={persons} setPersons={setPersons} />
         ) }
      </ul>
    </div>
  );
}

export default App;
