import './App.css';
import {useState, useEffect} from 'react'
import {PresentList} from './PresentList/PresentList.js'
import {Navbar} from './Navbar/Navbar.js'
import {Header} from './Header/Header.js'

const url = 'localhost:3000'

function App() {
  const [people, setPeople] = useState([])
  

  useEffect(() => {
    fetch(`${url}`, {
      headers: { Accept: 'application/json' },
    })
      .then((res) => res.json())
      .then(({response}) => setPeople(response))
      
  }, [])

  return (
    <div className="App">
      <>
        <Navbar></Navbar>
        <Header></Header>
        <PresentList people={people}></PresentList>
      </>
    </div>
  );
}

export default App;
