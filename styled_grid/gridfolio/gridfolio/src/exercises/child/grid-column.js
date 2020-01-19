import React, {Component} from 'react';
import {makeGridGallery} from "../helpers";

const property = 'grid-template-columns';
const defaults = 'grid-template-columns: [line-1] 1fr [line-2] 1fr [line-3] 1fr [line-4]';

const firstChildProp = 'grid-column';
const firstChildCases = ['1 / 2', '2 / 5', '2 / span 3', 'line-2 / span 3','-3 / 5', 'line-2 / line-4'];

export default makeGridGallery(null, property, defaults, null, firstChildProp, firstChildCases);
