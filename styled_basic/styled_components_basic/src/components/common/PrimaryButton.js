import {Button} from 'reactstrap'; 
import React from 'react'; 
import styled from  'styled-components'; 

// Recieve each react component, and overwrite it from here. 
const PrimaryButton = styled(Button).attrs({
  color:'primary'
})`
  &:hover{
    color:black !important; 
  }
`;

export default PrimaryButton; 