import React, {useState}from 'react'
import TinderCard from 'react-tinder-card'
import './Cards.css'
import { data } from './Cards_data'

const Cards = () => {
    const [People, setPeople] = useState(data)
    
    const swiped = (direction,nameToDelete) =>{
        console.log('removing' + nameToDelete);
        // setLastDirection(direction)
    };
    
    const outOfFrame = (name) =>{
        console.log(name + 'left the screen');
    }
    
    return (
        <div className='tinderCards'>
            <div className='tinderCards__cardContainer'>
                        
            {People.map((Person)=>{
                const {name,url} = Person
                return(
                   <TinderCard
                   className='swipe'
                   key={name}
                   preventSwipe={['up','down']}
                   onSwipe={(dir)=> swiped(dir,name)}
                   onCardLeftScreen={() => outOfFrame(name)}
                   > 
                     <div
                    style={{backgroundImage:`url(${url})`}}
                    className='card'
                    >
                        <h3>{name}</h3>
                    </div>
                   </TinderCard>
                )
                
            })}
            </div>
        </div>
    )
}
export default Cards

{/* {People.map((Person)=>{
    return(
    )
})} */}
