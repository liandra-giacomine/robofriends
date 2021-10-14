import React from 'react';

const onCardClick = (event) => {
    window.open('./RobotProfile.js')
  }

const Card = ( {name, email, id} ) => {
    return (
        <button onClick={onCardClick} className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <div>  
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </button>
    );
}

export default Card;
