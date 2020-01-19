import React, {Component} from 'react';
import {makeGridGallery} from "../helpers";

const property = 'grid-column-gap';
const defaults = `grid-template-columns: repeat(3, 1fr)`;


const cases = [
  '10px', '30px', '10%'
];

export default makeGridGallery(cases, property, defaults);
