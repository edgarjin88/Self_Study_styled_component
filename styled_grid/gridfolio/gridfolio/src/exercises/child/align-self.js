import React, {Component} from 'react';
import {makeGridGallery} from "../helpers";

const property = 'grid-template-columns';
const defaults = 'grid-template-columns: [line-1] 1fr [line-2] 1fr [line-3] 1fr [line-4]';

const firstChildProp = 'align-self';
const firstChildCases = ['start', 'end', 'center', 'stretch'];

export default makeGridGallery(null, property, defaults, null, firstChildProp, firstChildCases);
