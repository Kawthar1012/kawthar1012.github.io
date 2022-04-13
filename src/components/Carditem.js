import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <div>
        <li className='cards__item'>
            <Link className='cards__items__link' to={props.path}> 
                <figure className='cards__items__pic-wrap' data-category={props.label}>
                    <img className='cards__items__img' alt='Food' src={props.src}/>
                </figure>
                <div className='cards__items__info'>
                    <h5 className='cards__items__text'>{props.text}</h5>
                </div>
            </Link>
        </li>
    </div>
  )
}

export default CardItem;