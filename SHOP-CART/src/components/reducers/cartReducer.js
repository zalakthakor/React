
// import Item2 from '../../images/item2.jpg'
import Apple from '../../images/Apple.jpg'
import Mango1 from '../../images/Mango1.jpg'
import Grapes from '../../images/Grapes.jpg'
// import Item3 from '../../images/item3.jpg'
// import Item4 from '../../images/item4.jpg'


import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/action-types/cart-actions'


const initState = {
    items: [
        
        {id:2,title:'Apple',  price:100,img: Apple},
        {id:3,title:'Mango', price:200,img: Mango1},
        {id:4,title:'Grapes',  price:120,img:Grapes}, 
    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    switch(action.type){
    case ADD_TO_CART :{
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    case REMOVE_ITEM:{
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    case ADD_QUANTITY:{
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    case SUB_QUANTITY:{  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    case ADD_SHIPPING:{
          return{
              ...state,
              total: state.total + 6
          }
    }

    case 'SUB_SHIPPING':{
        return{
            ...state,
            total: state.total - 6
        }
  }
    
  default:
    return state;
    }
}


export default cartReducer
