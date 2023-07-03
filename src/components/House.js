import React from 'react'
import HouseItem from './HouseItem'
// import Sound from '../static/Voicy_Game of Thrones - Winter is Coming Compilation.mp3'
const House = ({house, onHouseClicked, onFavouriteHouse}) => {

    // let state = {
    //     audio: new Audio(Sound),
    //     isPlaying: false,}

    if(!house){
        return null}
    
    const characterItems = house.members.map((house, slug) => {
        return <HouseItem house={house} key={slug} onHouseClicked={onHouseClicked}/>
    })

    const handleClick = () => {
      onFavouriteHouse(house.slug)
      



    // const playPause = () => {
    //   let isPlaying = this.state.isPlaying;
    //   if(isPlaying){
    //     this.state.audio.pause();
    //   } else {
    //     this.setState ({isPlaying : !isPlaying });
    //   }
    }
    //   }
      



    const favouriteHouseBtnText = house.isFavourite ? 'Declare War' : 'Form an Alliance'
    
    

        
    return (
        <>
        <div id='house-info'>
            
                {/* {this.state.isPlaying ? "Sound is Playing" : "Sound is Paused"} */}
            
        <h2>{house.name}</h2>
        <button onClick={handleClick}>{favouriteHouseBtnText}</button>
        <ul>
        {characterItems}
        </ul>
        </div>
        </>
    )
};

export default House;
