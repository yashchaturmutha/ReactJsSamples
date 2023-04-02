import React,{useEffect,useState} from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import {NavLink} from 'react-router-dom';

const Products = () => {

    const [data,setData]=useState([]);
    const [filter,setFilter]=useState(data);
    const [loading,setLoading]=useState(false);

    useEffect(() => {
        const getProducts=async()=>{

            setLoading(true);

            const resp=await fetch('https://fakestoreapi.com/products');

            // if(componentMounted)
            // {
                setData(await resp.clone().json());
                setFilter(await resp.json());
                setLoading(false);
                console.log(filter);
            // }

            // return()=>{
                    // componentMounted=false;
            // }
        }

        getProducts();
    }, []);

    const Loading=()=>{
        return(
            <>
                <div className="col-md-3">
                <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                <Skeleton height={350}/>
                </div>
                
            </>
        );
    };

    const updateData=(category)=>{
        setFilter(data.filter((x)=>x.category===category));
    }

    const ShowProducts=()=>{
        return(
            <>
                <div className="container justify-content-center d-flex mb-5">
                    <button className='btn btn-outline-dark me-2' onClick={()=>{setFilter(data)}}>All</button>
                    <button className='btn btn-outline-dark me-2' onClick={()=>{updateData("men's clothing")}}>Men's Clothing</button>
                    <button className='btn btn-outline-dark me-2' onClick={()=>{updateData("women's clothing")}}>Women's Clothing</button>
                    <button className='btn btn-outline-dark me-2' onClick={()=>{updateData("jewelery")}}>Jewelery</button>
                    <button className='btn btn-outline-dark me-2' onClick={()=>{updateData("electronics")}}>Electronic</button>
                </div>

                {filter.map((friend)=>{
                    return(
                        <>

                    <div className="col-md-3 mb-4">

                    <div className="card h-100 text-center p-4"  key={friend.id}>

                    <img src={friend.image} className="card-img-top" alt={friend.title} height='250px'/>

                    <div className="card-body">
                        <h5 className="card-title">{friend.title.substring(0,12)}...</h5>
                        <p className="card-text lead fw-bold">${friend.price}</p>
                        
                        <NavLink to={`/products/${friend.id}`} className="btn btn-outline-dark">
                        Buy Now
                        </NavLink>
                    </div>

                    </div>
                    </div>
                </>
                )})}
            </>
        )
    }

    return (
                  
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-12 mb-5">
                <h1 className='text-center fw-bold display-6'>Latest Products</h1>
                <hr />
                </div>
            </div>

            <div className="row justify-content-center">
                {loading?<Loading/>:<ShowProducts/>}
            </div>
        </div>
    )
}

export default Products
