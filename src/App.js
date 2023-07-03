import React from 'react';
import './App.css';
import GoTContainer from './containers/GoTContainer';


function App() {



  return (
    <div className="App">
      <header>
      <img src='/images/Game_of_Thrones_title_card.jpg'></img>

      <h1>Game of Thrones Houses</h1>

      </header>

      <img src='/images/arryn.webp'></img>
      <img src='/images/baratheon.webp'></img>
      <img src='/images/GreyJoy.webp'></img>
      <img src='/images/HighGarden.webp'></img>
      <img src='/images/lannister .webp'></img>
      <img src='/images/riverrun.webp'></img>
      <img src='/images/stark .webp'></img>
      <img src='/images/Sunspear.webp'></img>
      <img src='/images/targaryn.webp'></img>



      


      <GoTContainer/>
      <footer>
        <img src='/images/jon snow .webp'></img>
        </footer>
    </div>
  );
}

export default App;
