import React, { useState } from 'react';

import Values from 'values.js';
import { SingleColor } from './SingleColor';

import './App.css';

export const App = () => {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="container flex justify-self-start m-4">
        <h3 className="font-semibold first-letter:italic mt-2 mr-4">
          Color Generator
        </h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${error ? 'error' : null}`} // class tha show red border on input text when invalid value
          />
          <button
            className="bg-sky-600 hover:bg-sky-700 text-cyan-50 rounded-lg p-2 ml-2"
            type="submit"
          >
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          
          return <SingleColor key={index} {...color} index={index} hexColor={color.hex}/>;
        })}
      </section>
    </>
  );
};
