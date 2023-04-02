import React,{useState,useEffect} from 'react';
import { useSelector,useDispatch } from "react-redux";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import {addQty,decQty, delCart,clearCart} from '../redux/actions/index';


const Cart = () => {
        const dispatch = useDispatch();
        const myState = useSelector((state) => state.handleCart);
        // const [price,setPrice]=useState(0);
        var totalPrice=0;

        return (
            <div className="container py-5">

            {myState.length==0?<h1>Your Cart is Empty</h1>:
            
            myState.map((product)=>{
                totalPrice+=product.qty*product.price;
                console.log(totalPrice);

            return(
                <div className="row  mb-4">

                <div className="col-md-4">
                
                    <img src={product.image}  alt={product.title} 
                    height='200px' width='200px'/>
    
                </div>
    
                <div className="col-md-6 ">
    
                    <h3 >{product.title}</h3>

                    <h5 className='fw-bold mb-4'>
                        Price : ${product.price}
                    </h5>
                    <h5 className='fw-bold mb-4'>
                        Quantity : {product.qty}
                    </h5>
    
                    <p className='lead fw-bold'>
                      Total Price : ${product.price} * {product.qty} =   ${product.qty*product.price}
                       {/* TBA */}
                    </p>
                   
                    <button className="btn btn-outline-dark" 
                    onClick={()=>dispatch(addQty(product.id))}>
                    <i className='fa fa-plus'></i>
                    </button>

                    <input type="text" value={product.qty} 

                        style={{ width: '52px',
                        height: '40px',
                        margin: ' 0 20px',
                        padding: '0',
                        textAlign: 'center',
                        }}
                                            />

                    <button className="btn btn-outline-dark"
                     onClick={()=>{
                     
                    const obj=myState.filter(function(el) {
                    return el.id === product.id});
                            
                    console.log(obj[0]);
                    console.log(obj[0].qty);
                    console.log(obj[0].qty==1);

                    if(obj[0].qty==1)
                    dispatch(delCart(product.id));
                    else
                    dispatch(decQty(product.id));

                     }}>
                    <i className='fa fa-minus'></i>
                    </button>
                   
                </div>

                <div className="col-md-2" style={{cursor:'pointer',color:'red'}}
                 onClick={()=>dispatch(delCart(product.id))}>
                    <i className='fa fa-trash-o' style={{fontSize:"48px"}}></i>
                </div>

                </div>
                
            )})
            }
            {myState.length!=0?
            <div className="col-md-3 position-absolute end-0 mx-4 mb-4" >

            <table class="table table-bordered border-success " 
            >
            <thead>
                <tr>
                <th >Grand Total</th>
                <th  >$ {totalPrice}</th>
                </tr>
            </thead>

            </table>

            {/* <div  style={{border:'2px solid green'}}> */}
            <button className="btn btn-primary position-absolute end-0 " 
            onClick={()=>{dispatch(clearCart())}}
            >Clear Cart</button>
            {/* </div>   */}

            </div>:null}

            
           
            </div>
        )
}

export default Cart
