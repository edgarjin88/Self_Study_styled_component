import React, {Component} from 'react';
import styled from 'styled-components';
import {makeGridGallery} from "../helpers";

const property = `grid`;


const cases = ['1fr 2fr / 3fr 1fr', 'auto-flow / 200px 1fr', '1fr 2fr / auto-flow dense 30px'];

export default makeGridGallery(cases, property);

