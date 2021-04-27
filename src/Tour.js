import React, { useState } from 'react';

const Tour = ({ tour, removeTour }) => {
  const { id, name, info, image, price } = tour;
  const [readmore, setReadmore] = useState(true);

  return (<article className='single-tour'>
    <img src={image} alt={name} />
    <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">${price}</h4>
      </div>
      <p>{readmore ? `${info.substring(0, 200)}...` : info}
        <button onClick={() => setReadmore(!readmore)}>{readmore ? `Read more` : 'Show less'}</button>
      </p>
      <button onClick={() => { removeTour(id) }} className='delete-btn'>not interested</button>
    </footer>
  </article>);
};

export default Tour;
