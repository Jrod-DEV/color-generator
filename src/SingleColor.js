import React, { useState, useEffect } from 'react';
import { rgbToHex } from './utils';

export const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');
  console.log(bcg);
  return (
    <article className={`color`} style={{ backgroundColor: `rgb(${bcg})` }}>
      { 'color' }
    </article>
  );
};
