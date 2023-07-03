import React from 'react'
import HouseItem from './HouseItem';

const House = ({house, onHouseClicked, onFavouriteHouse}) => {

    if(!house){
        return null}
    
    const characterItems = house.members.map((house, slug) => {
        return <HouseItem house={house} key={slug} onHouseClicked={onHouseClicked}/>
    })

    const handleClick = () => {
      onFavouriteHouse(house.slug)
    }

    const favouriteHouseBtnText = house.isFavourite ? 'Remove from favourites' : 'Add to favourites'
    

    return (
        <>
        <h2>{house.name}</h2>
        <button onClick={handleClick}>{favouriteHouseBtnText}</button>
        <ul>
        {characterItems}
        </ul>
        </>
    )
};

export default House;
