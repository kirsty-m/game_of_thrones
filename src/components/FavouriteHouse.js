import React from 'react'

const FavouriteHouse = ({houses, onHouseSelected}) => {

    const favouriteHouse = houses.filter(house => house.isFavourite)

    return (
        <>
        <h2>Alliances:</h2>
        <ul>
            {favouriteHouse.map(house => {
                return (
                   
                    
                    <li key={house.slug}>
                        <button onClick={()  => onHouseSelected(house.slug)}>{house.name}</button>
                        
                    </li>
                    
                )
              
            })}
        </ul>
        </>

    )
};

export default FavouriteHouse;
