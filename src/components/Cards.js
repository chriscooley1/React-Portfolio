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
              img src="https://user-images.githubusercontent.com/69743567/97772219-83cff900-1b0a-11eb-9973-820d6ff72f48.PNG"
              text='Find the perfect pet for you with Pick-your-pet'
              label='Pets'
              path="https://katers0259.github.io/Pick-your-pet/"
            />
            <CardItem
              // href="https://fathomless-journey-30707.herokuapp.com/"
              img src='https://raw.githubusercontent.com/chriscooley1/Workout-Tracker-HW17/main/images/fitness-tracker.png'
              text='Track your daily workouts using this Fitness Tracker'
              label='Fitness'
              path="https://fathomless-journey-30707.herokuapp.com/"
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              // href=" https://mysterious-temple-74523.herokuapp.com/"
              img src='https://raw.githubusercontent.com/chriscooley1/Budget-Tracker-HW18/main/images/budget-tracker.png'
              text='Track your spending habits with this Budget Tracker'
              label='Budget'
              path=" https://mysterious-temple-74523.herokuapp.com/"
            />
            <CardItem
              // href="https://polar-thicket-33954.herokuapp.com/"
              img src='https://raw.githubusercontent.com/chriscooley1/Note-Taker-HW11/main/images/note-taker.png'
              text='Write down your thoughts with Note Taker'
              label='Notes'
              path="https://polar-thicket-33954.herokuapp.com/"
            />
            <CardItem
              // href="https://chriscooley1.github.io/Weather-Dashboard-HW6/"
              img src='https://raw.githubusercontent.com/chriscooley1/Weather-Dashboard-HW6/main/images/Weather-Dashboard.png'
              text='Get your local weather forecast with Weather Dashboard'
              label='Weather'
              path="https://chriscooley1.github.io/Weather-Dashboard-HW6/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;