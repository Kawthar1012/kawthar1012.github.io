import React from 'react';
import CardItem from './Carditem';
import './Cards.css';


function Cards(props) {

    let content = {
        English: {
          title: "Here you can find our articles",
          title1: "Check out our lattest pancake recipe!",
          title2: "Check out the menu!",
          title3: "Want to know more about our values?",
          keyword: "Recipe"
        },
        French: {
          title: "Nos articles",
          title1: "Retrouvez notre toute dernière recette de pancakes !",
          title2: "Retrouvez notre menu! ",
          title3: "En savoir plus sur nos valeurs",
          keyword: "Recette"
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
                    src='/images/pancakes-small.jpg'
                    text={content.title1}
                    label={content.keyword}
                    path='/'
                    />
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Cards;