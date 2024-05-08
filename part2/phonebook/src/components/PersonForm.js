import { useState } from "react";
import personsService from '../services/persons';


const PersonForm = (props) => {
  
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');

  const addPerson = (event) => {
    event.preventDefault();
  
    const found = props.persons.find( person =>  person.name.toUpperCase() ===  newName.toUpperCase() );
  
    if(!found){
      const personObject = { name:  newName,  number: newNumber  };

      personsService.create(personObject).then( response => {
        props.setPersons(props.persons.concat(response.data));
        setNewName('');
        setNewNumber('');
        props.notification( `${newName} added`,false  )
      })
      
    }
    else
    {
      if(window.confirm(newName + ' is already added to phonebook, replace the old number with a new one?')){
        const personObject = { name:  newName,  number: newNumber  };

        personsService.update(found.id, personObject).then( response => {
          props.setPersons(props.persons.map(person => person.id !== found.id ? person : response.data));
          setNewName('');
          setNewNumber('');
          props.notification( `${newName} updated`, false  )
        }).catch( ()=> {
          props.notification( `${newName} not exist to update`, true  )
          props.setPersons(props.persons.filter( item => item.id!=found.id) );
        })
      }
    }
      
    
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