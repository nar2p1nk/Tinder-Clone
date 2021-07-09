import './App.css';
import Header from './Header/Header.jsx'
import Cards from './TinderCards/Cards.jsx';
import SwipeButtons from './Buttons/SwipeButtons.jsx';
function App() {
  return (
    <div className="app">

  <Header/>
   <Cards/>
   <SwipeButtons/>
    </div>
  );
}

export default App;
