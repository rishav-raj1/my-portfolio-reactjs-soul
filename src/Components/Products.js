import React from 'react';
import Productbox from './Productbox';
import pimage1 from '../images/theshoping.jpg';
import pimage2 from '../images/reactrouter.jpg';
import pimage3 from '../images/mini.jpg';

function Products()
{
    return(
        <div id ='products'>
            <h1>Recent Projects</h1>
            <p>In below, these are recent projects Shopping App, React Router and Mini Project  </p>
            <div className='a-container'>
                <Productbox image={pimage1} title="Shopping App" />
                <Productbox image={pimage2} title="React Router" />
                <Productbox image={pimage3} title="Mini Project" />
            </div>
        </div>
    )
}
export default Products;