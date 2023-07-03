import React from 'react'

const House = ({house}) => {

    if(!house){
        return null}
    

    return (
        <>
        <h2>House: {house.name}</h2>
        <h2>Character: {house.members.name}</h2>
        </>
    )
};

export default House;
