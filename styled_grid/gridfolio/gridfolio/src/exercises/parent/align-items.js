import React, {Component} from 'react';
import {makeGridGallery} from "../helpers";

const property = `align-items`;
const defaults = `grid-template-columns: repeat(3, 1fr);`;

const cases = ['start', 'end', 'center', 'stretch']


export default makeGridGallery(cases, property, defaults);
