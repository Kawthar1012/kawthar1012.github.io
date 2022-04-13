import React from 'react';
import CardItem from './Carditem';
import './Cards.css';


function Cards(props) {

    let content = {
        English: {
          title: "Here you can find my ongoing and finished projects",
          
        },
        French: {
          title: "Ici vous trouverez mes projets en cours et passés",
        }
      };
      
      props.language === "French"
        ? (content = content.French)
        : (content = content.English);

    return (
    <div className='cards'>
        <h1>{content.title}</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                <CardItem 
                    src='/images/choices.png'
                    text="To do list"
                    label="Angular, Web Development"
                    path='/projects/choices'
                    />
                    <CardItem 
                    src='/images/bounce.png'
                    text="Bounce Reloaded"
                    label="Flutter, App Development"
                    path='/projects/bounce_reloaded'
                    />
                    <CardItem 
                    src='/images/trirac.png'
                    text="Tri-rac"
                    label="React Native, Flask, App Development"
                    path='/projects/tri_rac'
                    />
                    
                </ul>
                <ul className='cards__items'>
                <CardItem 
                    src='/images/dutchman.jpg'
                    text="The Flying Dutchman"
                    label="Web developpment"
                    path='/projects/the_flying_dutchman'
                    />
                  <CardItem 
                    src='/images/ants.jpg'
                    text="Ants"
                    label="Java"
                    path='/projects/ants'
                    />
                    <CardItem 
                    src='/images/games.png'
                    text="Multi-games"
                    label="Java"
                    path='/projects/multi_games'
                    />
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Cards;