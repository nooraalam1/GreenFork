import React from 'react';
import FetchMenu from './CustomHooks/FetchMenu';

const Dessert = () => {
    const [menu] = FetchMenu()
    const dessert = menu.filter(menu=>menu.category==="dessert")

    return (
<div className="sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
              dessert.map(dessert=>
              
              <div>
                <div className="card bg-base-100 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={dessert.image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{dessert.name}</h2>
    <p>{dessert.recipe}</p>
    <p className="text-yellow-600 font-semibold text-xl">Price: ${dessert.price}</p>
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

export default Dessert;