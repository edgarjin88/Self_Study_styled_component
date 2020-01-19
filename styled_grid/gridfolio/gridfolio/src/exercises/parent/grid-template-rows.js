import React, {Component} from 'react';
import {makeGridGallery} from "../helpers";

const property = 'grid-template-rows';
const defaults = `grid-auto-flow: column`;

const cases = [
  '25px 80px 30px',
  '1fr 2fr 1fr .5fr',
  '50% 25% 25%',
  '25px auto 50px',
  '[line-1] 1fr [line-2] 1fr [line-3]',
  'repeat(3, 50px)',
  'repeat(3, 1fr)',
  '1fr repeat(5, 20px) 1fr',
  'repeat( 5, minmax(25px, 40px) )',
  'repeat(auto-fill, 40px)',
  'repeat(auto-fit, minmax(20px, 1fr))',
  'repeat(auto-fill, minmax(20px, 1fr))'
];

export default makeGridGallery(cases, property, defaults);
