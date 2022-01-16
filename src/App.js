import React, { useState } from 'react';

import Values from 'values.js';
import { SingleColor } from './SingleColor';

export const App = () => {
  const [color, setColor] = useState('');
  const [error, SerError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hello');
  };

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        <h4>list goes here</h4>
      </section>
    </>
  );
};
