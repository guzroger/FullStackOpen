import personsService from '../services/persons';

const PersonDisplay = ( {person, persons, setPersons }) => {
  
  const handleEventDelete = (p) => {
    if(window.confirm('Delete ' + p.name)){
      personsService.deletePerson(p.id).then( response => {
        setPersons(persons.filter( item => item.id!=p.id) );
      } );
    }
    
  }
  
  return (
    <li>{person.name} {person.number} <button onClick={() => handleEventDelete(person)}>Delete</button>  </li>
  )
}

export default PersonDisplay;
