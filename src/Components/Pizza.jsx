import React from 'react';
import FetchMenu from './CustomHooks/FetchMenu';

const Pizza = () => {
    const [menu] = FetchMenu()
    const pizza = menu.filter(menu=>menu.category==="pizza")
    return (
<div className="sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
              pizza.map(pizza=>
              
              <div>
                <div className="card bg-base-100 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={pizza.image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{pizza.name}</h2>
    <p>{pizza.recipe}</p>
    <p className="text-yellow-600 font-semibold text-xl">Price: ${pizza.price}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Add to Cart</button>
    </div>
  </div>
</div>
              </div>
              
              )
            }
        </div>
    );
};

export default Pizza;