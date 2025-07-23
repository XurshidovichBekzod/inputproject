import React from 'react';
import { useStore } from '../../zustand/useStore';


const Card = () => {
  const { cars, deleteCar } = useStore();
  return (
    <div className="card-container">
      <h2 className="card-title">All new car's</h2>
      <div className="card-grid">
        {cars?.map((car) => (
          <div key={car.id} className="card-item">
            <img src={car.image} alt={car.name} className="card-image" />
            <div className="card-body">
              <h2 className="card-name">
                {car.name.slice(0, 1).toUpperCase() + car.name.slice(1)}
              </h2>
              <p className="card-price">
                Price: <span>{car.price} USD</span>
              </p>
              <p className="card-id">ID: {car.id}</p>
              <button
                onClick={() => deleteCar(car.id)}
                className="card-delete-btn"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
