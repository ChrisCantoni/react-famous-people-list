import {useState} from 'react';
import axios from 'axios';

const FamousPersonForm = (props) => {
    let [famousPersonName, setPersonName] = useState('');
    let [famousPersonRole, setPersonRole] = useState('');

    const addPerson = (evt) => {
        evt.preventDefault();
        console.log(`The person is ${famousPersonName} and they're famous for ${famousPersonRole}`);
        // TODO: create POST request to add this new person to the database
        axios.post('/people', {
          name: famousPersonName,
          role: famousPersonRole
        }).then((response) => {
          console.log('POST to fame was successful');
          setPersonName('');
          setPersonRole('');
          props.fetchPeople();
        })
    }

    return (
        <section className="new-person-section">
        <form onSubmit={addPerson}>
          <label htmlFor="name-input">Name:</label>
          <input value={famousPersonName} id="name-input" onChange={e => setPersonName(e.target.value)} />
          <label htmlFor="role-input">Famous for:</label>
          <input value={famousPersonRole} id="role-input" onChange={e => setPersonRole(e.target.value)} />
          <button type="submit">Done</button>
        </form>
        </section>
    )
}

export default FamousPersonForm;