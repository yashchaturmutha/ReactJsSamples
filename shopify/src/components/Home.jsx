import React from 'react'
import Products from './Products';

const Home = () => {
    return (
        <div>
           <div className="card bg-dark text-white border-0">

                <img src="./assets/commerce.jpg" className="card-img" alt="..."
                    style={{height:'80vh'}}
                />

                <div className="card-img-overlay d-flex justify-content-center flex-column">
                    <div classNameName="container">

                    <h5 className="card-title display-3 fw-bold">New Arrivals</h5>

                    <p className="card-text lead fs-2">
                    Check Out All The Trends</p>         

                    </div>
                </div>

               
            </div> 

            <Products/>
        </div>
    )
}

export default Home
