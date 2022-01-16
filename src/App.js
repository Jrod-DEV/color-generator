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
          
      </section>
      <section className="colors">
          <h4>list goes here</h4>
      </section>
    </>
  );
};
