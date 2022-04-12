import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'

 class Home extends Component{
    
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.img} alt={item.title}/>
                            <span className="card-title">{item.title}</span>
                            <span to="/" className="btn-floating halfway-fab waves-effect waves-light indigo" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></span>
                        </div>

                        <div className="card-content">
                            
                            <p><b>Price: {item.price} Rs</b></p>
                        </div>

                        
                 </div>

            )
        })

        return(
            <div className="container">
                
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
//trake the state every time
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
  //fire action on reducer when any update held 
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)