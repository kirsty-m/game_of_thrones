import React from 'react'
import HouseItem from './HouseItem';

const HouseList = ({houses, onHousesClicked}) => {

    const houseItems = houses.map((house, index) => {
        return <HouseItem house={house} key={index} onHousesClicked={onHousesClicked}/>

    })
    return (
        <div>HouseList</div>
    )
};

export default HouseList;
