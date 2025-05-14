import FetchMenu from "./CustomHooks/FetchMenu";


const Salad = () => {

    const [menu] = FetchMenu()
    const salad =  menu.filter(menu=>menu.category==="salad")
    return (
        <div className="sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
              salad.map(salad=>
              
              <div>
                <div className="card bg-base-100 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={salad.image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{salad.name}</h2>
    <p>{salad.recipe}</p>
    <p className="text-yellow-600 font-semibold text-xl">Price: ${salad.price}</p>
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

export default Salad;