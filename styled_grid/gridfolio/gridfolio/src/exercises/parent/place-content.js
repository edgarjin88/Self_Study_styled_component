import React, {Component} from 'react';
import {makeGridGallery} from "../helpers";

const property = `place-content`;
const defaults = `grid-template-columns: repeat(3, 30px);`;

const cases = ['start', 'end', 'center', 'space-around', 'space-between', 'space-evenly', 'space-evenly start', 'space-evenly end' ];


export default makeGridGallery(cases, property, defaults);
