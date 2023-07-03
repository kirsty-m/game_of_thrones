import React, {useState, useEffect} from 'react'
import './GoTContainer.css'
import HouseSelector from '../components/HouseSelector';
import House from '../components/House';
import FavouriteHouse from '../components/FavouriteHouse';


const GoTContainer = () => {

//     const audio = new Audio('./public/assets/Voicy_Game of Thrones - Winter is Coming Compilation.mp3');
//     const button = document.querySelectorAll("button");
  
//     button.forEach(button => {
//     button.addEventListener("click", () => {
//       audio.play();
//     });
//   });

    const [houses, setHouses] = useState([]);
    const [selectedHouseSlug, setSelectedHouseSlug] = useState('');

useEffect (() => {
    getHouses();
}, []);

    const getHouses = () => {
        fetch('https://api.gameofthronesquotes.xyz/v1/houses')
        .then(res => res.json())
        .then(houses => setHouses(houses))
    }

    const handleHouseSelected = slug => {
        setSelectedHouseSlug(slug)
    }

    const handleFavouriteHouse = (slug) => {
        const updatedHouses = houses.map((house) => {
            return house.slug === slug
            ? {...house, isFavourite: !house.isFavourite}
            : house
        })
        setHouses(updatedHouses)
    };

    const selectedHouse = houses.find(house => house.slug === selectedHouseSlug)


      
    

    return (
        <>
        <h1>Select a House of Westeros</h1>
        <HouseSelector houses={houses} onHouseSelector={handleHouseSelected}/>
        <House house={selectedHouse} onFavouriteHouse={handleFavouriteHouse}/>
        <FavouriteHouse houses={houses} onHouseSelected={handleHouseSelected}/>
        <a href='http://atlasofthrones.com' id='westeros'>Visit Westeros</a>
        </>
    )
};


export default GoTContainer;
