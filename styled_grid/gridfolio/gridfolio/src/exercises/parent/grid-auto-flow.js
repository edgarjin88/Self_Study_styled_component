import React, {Component} from 'react';
import styled from 'styled-components';
import {makeGridGallery} from "../helpers";

const property = `grid-auto-flow`;

const cases = ['column', 'row', 'dense'];

let alternatingChildren = ['grid-column: auto / span 3;', 'grid-column: auto / span 6;'];

export default makeGridGallery(cases, property, null, alternatingChildren);

