import React from 'react';
import FetchMenu from './CustomHooks/FetchMenu';

const Popular = () => {

    const [menu] = FetchMenu()
    const popular = menu.filter(popular=>popular.category==="popular")
    return (
<div className="sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
              popular.map(popular=>
              
              <div>
                <div className="card bg-base-100 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={popular.image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{popular.name}</h2>
    <p>{popular.recipe}</p>
    <p className="text-yellow-600 font-semibold text-xl">Price: ${popular.price}</p>
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

export default Popular;