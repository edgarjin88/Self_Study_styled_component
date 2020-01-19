import React, {Component} from 'react';
import {makeGridGallery} from "../helpers";

const property = 'grid-template-columns';
const defaults = 'grid-template-columns: [line-1] 1fr [line-2] 1fr [line-3] 1fr [line-4]';

const firstChildProp = 'place-self';
const firstChildCases = ['start', 'end', 'center', 'start end', 'end start', 'center end', 'stretch start'];


export default makeGridGallery(null, property, defaults, null, firstChildProp, firstChildCases);
