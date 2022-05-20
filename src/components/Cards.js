import React from 'react'
import CardItem from './CardItem'
import   './Cards.css'
import  '../images/img-9.jpg' 
function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these incredible destinations</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem src={require('../images/img-9.jpg')}
                    text='Explore the hidden waterfall deep inside the Amazon Jungle'
                    label='Adventure'
                    path='/services'/>
                    <CardItem src={require('../images/img-2.jpg')}
                    text='Travel through the Islands of Bali in a private Cruise'
                    label='Luxury'
                    path='/services'/>
                </ul>
                <ul className="cards__items">
                    <CardItem src={require('../images/img-8.jpg')}
                    text='Travel through ancient Egyptian deserts'
                    label='Adventure'
                    path='/services'/>
                    <CardItem src={require('../images/img-3.jpg')}
                    text='Set sail through the uncharted waters of the Atlantic Ocean'
                    label='Mystery'
                    path='/services'/>
                    <CardItem src={require('../images/img-4.jpg')}
                    text='Play football atop the Himilayan Mountains'
                    label='Adventure'
                    path='/services'/>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards