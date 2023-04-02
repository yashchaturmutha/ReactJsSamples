import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useSelector } from "react-redux";

import {useDispatch } from "react-redux";
import {addCart,delCart} from "../redux/actions";


const ProductInfo = () => {

    const dispatch = useDispatch();
    const myState = useSelector((state) => state.handleCart);

    const{id}=useParams();
    const [product,setProduct]=useState([]);
    const [loading,setLoading]=useState(false);

    useEffect(() => {
        const getProduct=async()=>{

            setLoading(true);

            const resp=await fetch(`https://fakestoreapi.com/products/${id}`);
          
                setProduct(await resp.json());
                setLoading(false);
        }

        getProduct();
    }, []);

    
    const Loading=()=>{
        return(
            <>
                <div className="col-md-6">
                <Skeleton height={400}/>
                </div>
               
                <div className="col-md-6"  style={{lineHeight:2}}>
                <Skeleton height={50} width={300}/>
                <Skeleton height={75} width={300}/>
                <Skeleton height={25} width={150}/>
                <Skeleton height={50}/>
                <Skeleton height={150} />
                <Skeleton height={50} width={100}/>
                <Skeleton height={50} width={100} style={{marginLeft:6}}/>
                </div>
               
            </>
        );
    };

    const ShowProduct=()=>{
        return(
            <>
            <div className="col-md-6 ">
            
                <img src={product.image}  alt={product.title} 
                height='400px' width='400px'/>

            </div>

            <div className="col-md-6 ">
            
                <h4 className="text-uppercase text-black 50">
                    {product.category}
                </h4>

                <h1 className='display-5'>
                    {product.title}
                </h1>

                <p className='lead fw-bolder'>
                    Rating {product.rating && product.rating.rate}
                    <i className='fa fa-star'></i>
                </p>

                <h3 className='display-6 fw-bold my-4'>
                    ${product.price}
                </h3>

                <p className="lead">
                    {product.description}
                </p>

                <button className="btn btn-outline-dark"
                onClick={() => {

                    if(!myState.some(function(el) {
                    return el.id === product.id}))
                    dispatch(addCart(product));
                    
                }}>
                    Add to Cart
                </button>

                <NavLink to='/cart' className="btn btn-dark mx-2">
                    Go to Cart
                </NavLink>
            </div>

            </>
        )
    }


    return (
        <div className="container py-5">

            <div className="row py-4">
                {loading?<Loading/>:<ShowProduct/>}
            </div>
        </div>
    )
}

export default ProductInfo
