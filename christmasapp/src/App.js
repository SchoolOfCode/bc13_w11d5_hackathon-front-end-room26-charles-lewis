import './App.css';
import {PresentList} from './PresentList/PresentList.js'
import {Navbar} from './Navbar/Navbar.js'
import {Header} from './Header/Header.js'

function App() {
  return (
    <div className="App">
      <>
        <Navbar></Navbar>
        <Header></Header>
        <PresentList></PresentList>
      </>
    </div>
  );
}

export default App;
