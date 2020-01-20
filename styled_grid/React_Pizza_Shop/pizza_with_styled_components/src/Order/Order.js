import React from 'react'; 
import styled from 'styled-components'; 
import {DialogFooter, DialogContent, ConfirmButton} from "../FoodDialog/Fooddialog"
import {formatPrice} from "../Data/FooData";
import {getPrice} from "../FoodDialog/Fooddialog"; 

const OrderStyled = styled.div`
position: fixed;
right: 0px;
top: 48px;
width: 340px;
height: calc(100% - 48px); 
background-color: white; 
z-index: 10; 
box-shadow: 0 0 5px 5px grey;
flex - direction: column;
`

const OrderContent = styled(DialogContent)`
padding: 20px;
height: 100%; 
`
const OrderContainer = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid grey; 
  ${({editable})=> editable? `&:hover{
    cursor: pointer;
    background-color: #e7e7e7;}`
    :`pointer-events: none;`}`

const OrderItem = styled.div`
  padding: 10px 0px;
  display: grid;
  grid-template-columns: 20px 150px 20px 60px; 
  justify-content: space-between; 
`
const DetailItem = styled.div`
  color: grey;
  font-size: 10px; 
`
export function Order ({orders, setOrders, setOpenFood, openFood}){
  const subtotal = orders.reduce((total, order)=>{
    return total + getPrice(order); 
  }, 0); 
  const tax = subtotal * 0.07;
  const total= subtotal + tax;

  const deleteItem = index =>{
    const newOrders =[...orders]; 
    newOrders.splice(index, 1);
    setOrders(newOrders);
  }
  return <OrderStyled>
  
        {orders && orders.length === 0
        ? (<OrderContent>your order's loking empty.</OrderContent>)
        :(<OrderContent><OrderContainer> Your Order: </OrderContainer>
        {orders.map( (order, index) => (
          // second argument is always index
          <OrderContainer editable>
            <OrderItem onClick={()=>{ setOpenFood({...order, index})}}>
              {/* why index? with index, determin whether or not edit  */}
              <div>{order.quantity}</div>
              <div>{order.name}</div>
              <div style={{cursor: 'pointer'}} 
              onClick={(e)=>{
                e.stopPropagation();
                // otherwise, it will modify
                //
                // "const isEditing = openFood.index > -1;"
                //if you don't stop this, the above line info would be passed to parents. 
                
                deleteItem(index)}}>🗑️</div>
              <div>{formatPrice(getPrice(order))}</div>
            </OrderItem>
            <DetailItem>
              {order.toppings
              .filter(t=> t.checked)
              .map(topping => topping.name)
              .join(", ")
              }
            </DetailItem>
            {order.choice && <DetailItem>{order.choice}</DetailItem>}
          </OrderContainer>
        ))}
        <OrderContainer>
          <OrderItem>
            <div></div>
            <div>Sub Total :</div>
            <div>{formatPrice(subtotal)}</div>
          </OrderItem>

          <OrderItem>
            <div></div>
            <div>tax:</div>
            <div>{formatPrice(tax)}</div>
          </OrderItem>

        <OrderItem>
            <div></div>
            <div>Total :</div>
            <div>{formatPrice(total)}</div>
          </OrderItem>
          </OrderContainer>
        </OrderContent>) }
        
      <DialogFooter>
        <ConfirmButton>Checkout</ConfirmButton>
      </DialogFooter>
    </OrderStyled>
} 