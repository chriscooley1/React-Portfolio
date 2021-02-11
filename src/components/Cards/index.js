import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          
            <CardItem
              // href="https://katers0259.github.io/Pick-your-pet/"
              img src="https://github.com/katers0259/Pick-your-pet"
              text='Find the perfect pet for you with Pick-your-pet'
              label='Pets'
              path="https://katers0259.github.io/Pick-your-pet/"
            />
            <CardItem
              // href="https://fathomless-journey-30707.herokuapp.com/"
              img src="https://github.com/chriscooley1/Workout-Tracker-HW17"
              text='Track your daily workouts using this Fitness Tracker'
              label='Fitness'
              path="https://fathomless-journey-30707.herokuapp.com/"
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              // href=" https://mysterious-temple-74523.herokuapp.com/"
              src='https://github.com/chriscooley1/Budget-Tracker-HW18'
              text='Track your spending habits with this Budget Tracker'
              label='Budget'
              path=" https://mysterious-temple-74523.herokuapp.com/"
            />
            <CardItem
              // href="https://polar-thicket-33954.herokuapp.com/"
              src='https://github.com/chriscooley1/Note-Taker-HW11'
              text='Write down your thoughts with Note Taker'
              label='Notes'
              path="https://polar-thicket-33954.herokuapp.com/"
            />
            <CardItem
              // href="https://pure-mesa-60058.herokuapp.com/"
              src='https://github.com/johndolacjr/SafelyRent'
              text='Rate your tenants with Safley Rent'
              label='Rent'
              path="https://pure-mesa-60058.herokuapp.com/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;