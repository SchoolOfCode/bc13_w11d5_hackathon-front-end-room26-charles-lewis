import './App.css';
import {useState, useEffect} from 'react'
import {PresentList} from './PresentList/PresentList.js'
import {Navbar} from './Navbar/Navbar.js'
import {Header} from './Header/Header.js'

const url = 'localhost:3001'


function App() {
  const [people, setPeople] = useState([])
  const [name, setName] = useState()
  const [singleSearch, setSingleSearch] = useState()
 
  
  useEffect(() => {
    const search = people.filter(person => person.name === name)
    setSingleSearch(search)
  }, [name, people])



  useEffect(() => {
    async function getResults() {

      const response = await fetch(`http://${url}/api`, {
        headers: { Accept: 'application/json' },
      })
      const data = await response.json()

      setPeople(data)

    }
   
  getResults() 
     
  }, [])


  return (
    <div className="App">
      <>
        <Navbar setName={setName} name={name} people={people}></Navbar>
        <Header></Header>
        <PresentList people={singleSearch}></PresentList>
      </>
    </div>
  );
}

export default App;
