import React from 'react'



const HouseItem = ({house, onHouseClicked}) => {

    const handleClick = function(){
        console.log(`clicked on ${house.name}`)
        onHouseClicked(house)
    }



        return <li onClick = {handleClick}>{house.name}</li>

}

export default HouseItem;