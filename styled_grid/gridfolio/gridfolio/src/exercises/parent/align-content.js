import React, {Component} from 'react';
import {makeGridGallery} from "../helpers";

const property = `align-content`;
const defaults = `grid-template-columns: repeat(3, 1fr);`;

const cases = ['start', 'end', 'center', 'space-around', 'space-between', 'space-evenly'];


export default makeGridGallery(cases, property, defaults);
