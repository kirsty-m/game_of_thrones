import React from 'react'
import HouseItem from './HouseItem';

const House = ({house, onHouseClicked}) => {

    if(!house){
        return null}
    
    const characterItems = house.members.map((house, slug) => {
        return <HouseItem house={house} key={slug} onHouseClicked={onHouseClicked}/>
    })
    

    return (
        <>
        <h2>{house.name}</h2>
        <ul>
        {characterItems}
        </ul>
        </>
    )
};

export default House;
