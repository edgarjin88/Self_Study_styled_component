
import React from 'react';
import Posts from '../Posts/index'
import UserGrid from '../profile/UserGrid'
import {Link} from 'react-router-dom';
import styled, {css} from 'styled-components'; 


const PhotoGrid = styled.div`
@media(max-width: 990px){
  grid-template-columns: repeat(3, 1fr);
  gap: 5px; 
  grid-auto-rows: calc(33vw - 5px);
};
  display:grid;
  grid-auto-columns: repeat(3, 305px);
  justify-content: center;
  gap:20px; 
  grid-auto-rows: 305px; 
  ${({casecade}) => {
    console.log('cas inside: ', casecade); 
   return casecade && css`
  border: 2px solid blue; 
  grid-auto-rows: 200px; 
  grid-gap: 5px; 
    `
   }
}

`



const LinkGrid = styled.div`
  display: grid; 
  grid-template-columns: auto auto; 
  justify-content: center; 
  gap: 30px; 
  margin-bottom: 20px; 

`
 const ImageLink = styled(Link)`

  background: no-repeat center/150% url(/img/${({index}) => index}.jpeg);
  width: 100%;
  ${({casecade}) => casecade && css`
  background-size: cover;
  &:nth-of-type(2n){
    grid-row-start: span 2; 
  }

    `
   }
}
  `
 

const TabLink = styled(Link)`
text-decoration: none;
color: #ccc;
text-transform: uppercase;
letter-spacing: 3px; 
${({selected})=> selected && 'color:red;'}
`

export function Gallery({match, location}) {
  const casecade = location.search === '?type=casecade'
  console.log('this is casecade: ', casecade); 
  return (
    <div>
        
      <UserGrid/>
      <LinkGrid>
        <TabLink selected={!casecade} to={`${match.url}`}>

          Square
        </TabLink>
        <TabLink selected={casecade} to={{pathname:`${match.url}`, search:"?type=casecade"}}>
          cascade
        </TabLink>
      </LinkGrid>

      <PhotoGrid casecade={casecade}>
        {/* pass if you don't pass, it would be true all the time  */}
        {Posts.map((i) => (
          <ImageLink casecade={casecade} index={i.id}  key={i.id} to ={{pathname:`img/${i.id}`, state:{modal:true}}}>
         
            {/* <p>{i.title}</p> */}
          </ImageLink>
        ))}
      </PhotoGrid>

    </div>
  );
}
 