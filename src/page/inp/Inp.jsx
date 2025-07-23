import React, { useState } from 'react';
import { useStore } from '../../zustand/useStore';
import { useNavigate } from 'react-router-dom';

const Inp = () => {
  const { addCar, cars } = useStore();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [img, setImg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCar = {
      id: Date.now(),
      name,
      price,
      image: img,
    };

    addCar(newCar);
    setName('');
    setPrice('');
    setImg('');
    navigate('/');
  };

  return (
    <div className="addcar-wrapper">
      <div className="addcar-form">
        <h2 className="addcar-title">Add a new car</h2>
        <form onSubmit={handleSubmit} className="form-body">
          <div>
            <label className="form-label">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input"
              placeholder="Enter car's name..."
              required
            />
          </div>
          <div>
            <label className="form-label">Price:</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="form-input"
              placeholder="Enter car's price..."
              required
            />
          </div>
          <div className="form-field">
            <label className="form-label">Image (URL):</label>
            <input
              type="text"
              value={img}
              onChange={(e) => setImg(e.target.value)}
              className="form-input"
              placeholder="Place your car's image URL..."
              required
            />
          </div>
          <div className="form-buttons">
            <button type="submit" className="btn btn-blue">Add</button>
            <button type="button" className="btn btn-red" onClick={() => navigate('/')}>Go back</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Inp;
