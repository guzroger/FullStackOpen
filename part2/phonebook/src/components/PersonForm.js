import { useState } from "react";


const PersonForm = (props) => {
  
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');

  const addPerson = (event) => {
    event.preventDefault();
  
    const found = props.persons.find( person =>  person.name.toUpperCase() ===  newName.toUpperCase() );
  
    if(!found){
      const personObject = { name:  newName, id: props.persons.length + 1, phone: newNumber  };
  
      props.setPersons(props.persons.concat(personObject));
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
  
  return <form onSubmit={addPerson}>
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
}

export default PersonForm