import React, { Component, useState } from 'react'
import Style from './Card.module.css'
import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

// taking all the data from parent Component ( Products.jsx ) 

const Card = ({ img, rating, title, brand, price, discount }) => {

    return (
        <div className={Style.card}>
            <div className={Style.cardImg} style={{ backgroundImage: `url(${img[0]})` }}>
                <span className={Style.cardRating}><StarIcon style={{fontSize:'16px'}} /><p>{rating}</p></span>
            </div>
            <div className={Style.cardContent}>
                <p>{title}</p>
                <p>{brand}</p>
                <div className={Style.cardContent_price}><p><CurrencyRupeeIcon />{price}</p><p>{discount}</p></div>
            </div>
        </div>
    )
}

export default Card