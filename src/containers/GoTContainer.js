import React, {useState, useEffect} from 'react'
import './GoTContainer.css'
import HouseSelector from '../components/HouseSelector';
import House from '../components/House';


const GoTContainer = () => {

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

    const selectedHouse = houses.find(house => house.slug === selectedHouseSlug)
      
    

    return (
        <>
        <h1>Game of Thrones!</h1>
        <HouseSelector houses={houses} onHouseSelector={handleHouseSelected}/>
        <House house={selectedHouse}/>
        </>
    )
};


export default GoTContainer;
