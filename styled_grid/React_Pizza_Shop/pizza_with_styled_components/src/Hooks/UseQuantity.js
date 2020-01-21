import {useState} from 'react';  


export function useQuantity(defaultQuantity){

  const [value, setValue] = useState(defaultQuantity || 1); 
  function onChange(e){
    if((+e.target.value >=1)){
// this will cover string, -numbers as well. 
// +e will turn it into number
      setValue(1); 
      return; 
    }
    setValue(e.target.value); 
  }

  return {
    value, setValue, onChange
  }; 

}



