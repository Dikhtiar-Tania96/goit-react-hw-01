import './App.css';

const Profile = (props) => {
  return <div>
    <h2>{props.name}</h2>
    <p>{props.tag}</p>
    <p>{props.location}</p>
    <img/>
    <div>
      <p>{props.stats}</p>
      <p>{props.stats}</p>
      <p>{props.stats}</p>
    </div>
  </div>
}

function App(){
  return (
    <Profile 
    
    />
  )
}

export default App