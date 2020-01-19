import React, {Component} from 'react';
import {makeGridGallery} from "../helpers";

const property = 'grid-template-columns';
const defaults = `grid-template-areas: 'header header' 'sidebar content' 'sidebar content' `;

const firstChildProp = 'grid-area';
const firstChildCases = ['header', 'sidebar', 'content', '1 / 2 / 3 / 5'];

export default makeGridGallery(null, property, defaults, null, firstChildProp, firstChildCases);
