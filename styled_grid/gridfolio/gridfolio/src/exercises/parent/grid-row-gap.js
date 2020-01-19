import React, {Component} from 'react';
import {makeGridGallery} from "../helpers";

const property = 'grid-row-gap';
const defaults = `grid-template-columns: repeat(3, 1fr)`;

const cases = [
  '10px', '30px', '30%'
];

export default makeGridGallery(cases, property, defaults);
