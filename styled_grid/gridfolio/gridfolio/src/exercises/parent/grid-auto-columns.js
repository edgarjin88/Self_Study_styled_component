import React, {Component} from 'react';
import styled from 'styled-components';
import {makeGridGallery} from "../helpers";

const property = `grid-auto-columns`;
const defaults = `grid-auto-flow: column;  grid-template-rows: 1fr 1fr; grid-template-columns: repeat(3, 1fr);`;


const cases = ['1fr', '80px 1fr', 'min-content'];

export default makeGridGallery(cases, property, defaults);

