import FamousPerson from '../FamousPerson/FamousPerson';

const FamousPersonList = (props) => {

    return (
        <ul>
          {props.famousPeopleArray.map((person) => {
            return <FamousPerson key={person.id} person={person}/>
          })}
        </ul>
    )
}

export default FamousPersonList;