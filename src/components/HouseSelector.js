import React from 'react'

const HouseSelector = ({houses, onHouseSelector}) => {

    const handleChange = event => {
        onHouseSelector(event.target.value)
        
    }

    return(
        <select defaultValue='' onChange={handleChange}>
        <option>Choose House</option>
        {houses.map(house => {
            return(
                <option key={house.slug} value={house.slug}>
                {house.name}
                </option>
            )
        })}
        </select>
    )

};

export default HouseSelector;
