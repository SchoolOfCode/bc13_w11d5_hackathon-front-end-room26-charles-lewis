import './App.css';
import {useState, useEffect, useContext} from 'react'
import {PresentList} from './PresentList/PresentList.js'
import {Navbar} from './Navbar/Navbar.js'
import {Header} from './Header/Header.js'



const url = 'https://santaswishlist.onrender.com'


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

  async function postNewPresent(data) {
    console.log(data)
    const response = await fetch(`http://${url}/api`, {
      method: "POST",
      headers: { Accept: 'application/json' },
      body: JSON.stringify(data)
    })
    console.log(response)
  }


  return (
    <div className="App">
      <>
        <Navbar addPresent={postNewPresent} setName={setName} name={name} people={people} single={singleSearch}></Navbar>
        <Header></Header>
        <PresentList people={singleSearch}></PresentList>
      </>
    </div>
  );
}

export default App;
