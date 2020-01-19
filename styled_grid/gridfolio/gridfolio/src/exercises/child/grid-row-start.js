import React, {Component} from 'react';
import {makeGridGallery} from "../helpers";

const property = 'grid-template-columns';
const defaults = 'grid-template-rows: [line-1] 1fr [line-2] 1fr [line-3] 1fr [line-4]; grid-auto-flow: column;';

const firstChildProp = 'grid-row-start';
const firstChildCases = ['1', '2', '3', '4','line-1', 'line-2', 'line-3', 'line-4', '-1', '-2', '-3', '-4'];

export default makeGridGallery(null, property, defaults, null, firstChildProp, firstChildCases);
