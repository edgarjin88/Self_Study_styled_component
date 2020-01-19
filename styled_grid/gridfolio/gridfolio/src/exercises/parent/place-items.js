import React, {Component} from 'react';
import {makeGridGallery} from "../helpers";

const property = `place-items`;
const defaults = `grid-template-columns: repeat(3, 1fr);`;

const cases = ['start', 'end', 'center', 'start end', 'end start', 'center end', 'stretch start']


export default makeGridGallery(cases, property, defaults);
