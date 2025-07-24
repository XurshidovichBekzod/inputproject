import React from 'react';
import { useStore } from '../../zustand/useStore';
import "./Card.css"

const Card = () => {
  const { cars, removeCar } = useStore();
  return (
    <div className="container">
      <div className="card-grid">
        {cars?.map((car) => (
          <div key={car.id} className="card-item">
            <img src={car.image} alt={car.name} className="card-image" />
            <div className="card-body">
              <h2 className="card-name">
                {car.name}
              </h2>
              <p className="card-price">
                Price: <span>{car.price} USD</span>
              </p>
              <p className="card-id">ID: {car.id}</p>
              <button onClick={() => removeCar(car.id)} className="card-delete-btn">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
