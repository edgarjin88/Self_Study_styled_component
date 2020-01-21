import {useState} from 'react'; 

export function useChoice(defaultChoice){
  const [value, setValue] = useState(defaultChoice);
  
  function onChange(e){
    setValue(e.target.value); 
  }
  
  return {
    value,
    onChange
  }
}

// export function useChoice(defaultChoice){
//   const [value, setValue] = useState(defaultChoice);

//   function onChange(e){
//      setValue(e.target.value)
//   }
//   return {value: value, onChange: onChange}
// }