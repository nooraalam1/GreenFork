import React from 'react';
import FetchMenu from './CustomHooks/FetchMenu';

const Offered = () => {
    const [menu] = FetchMenu()
        const offered = menu.filter(menu=>menu.category==="offered")

    return (
<div className="sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
              offered.map(offered=>
              
              <div>
                <div className="card bg-base-100 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={offered.image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{offered.name}</h2>
    <p>{offered.recipe}</p>
    <p className="text-yellow-600 font-semibold text-xl">Price: ${offered.price}</p>
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

export default Offered;