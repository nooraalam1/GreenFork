import React, { useEffect, useState } from 'react';

const Menu = () => {

    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch("../../public/menu.json")
            .then(res => res.json())
            .then(data => setMenu(data))
    }, [])

    const salad = menu.filter(item => item.category === "salad")
    const pizza = menu.filter(item => item.category === "pizza")
    const soup = menu.filter(item => item.category === "soup")
    const dessert = menu.filter(item => item.category === "dessert")
    const drinks = menu.filter(item => item.category === "drinks")

    return (
        <div>

            {/* name of each tab group should be unique */}
            <div className="tabs tabs-box">
                <input type="radio" name="my_tabs_6" className="tab" aria-label="Salad" />
                <div className="tab-content bg-base-400 border-base-300 p-6">
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                   {
                        salad.map(salad =>
                            <div className="card bg-base-100 w-96 shadow-sm">
                                <figure className="px-10 pt-10">
                                    <img
                                        src={salad.image}
                                        alt="Shoes"
                                        className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                <div className="flex justify-center items-center gap-3">
                                    <h2 className="card-title">{salad.name}</h2>
                                    <h2 className="card-title text-yellow-600">${salad.price}</h2>
                                    </div>
                                    <p>{salad.recipe}</p>
                                    <div className="card-actions">
                                        <button className="btn btn-primary">Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                   </div>
                </div>

                <input type="radio" name="my_tabs_6" className="tab" aria-label="Pizza" defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                   {
                        pizza.map(pizza =>
                            <div className="card bg-base-100 w-96 shadow-sm">
                                <figure className="px-10 pt-10">
                                    <img
                                        src={pizza.image}
                                        alt="Shoes"
                                        className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                <div className="flex justify-center items-center gap-3">
                                    <h2 className="card-title">{pizza.name}</h2>
                                    <h2 className="card-title text-yellow-600">${pizza.price}</h2>
                                    </div>
                                    <p>{pizza.recipe}</p>
                                    <div className="card-actions">
                                        <button className="btn btn-primary">Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                   </div>
                </div>

                <input type="radio" name="my_tabs_6" className="tab" aria-label="Soup" />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                   {
                        soup.map(soup =>
                            <div className="card bg-base-100 w-96 shadow-sm">
                                <figure className="px-10 pt-10">
                                    <img
                                        src={soup.image}
                                        alt="Shoes"
                                        className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                <div className="flex justify-center items-center gap-3">
                                    <h2 className="card-title">{soup.name}</h2>
                                    <h2 className="card-title text-yellow-600">${soup.price}</h2>
                                    </div>
                                    <p>{soup.recipe}</p>
                                    <div className="card-actions">
                                        <button className="btn btn-primary">Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                   </div>
                </div>

                <input type="radio" name="my_tabs_6" className="tab" aria-label="Dessert" />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                   {
                        dessert.map(dessert =>
                            <div className="card bg-base-100 w-96 shadow-sm">
                                <figure className="px-10 pt-10">
                                    <img
                                        src={dessert.image}
                                        alt="Shoes"
                                        className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                <div className="flex justify-center items-center gap-3">
                                    <h2 className="card-title">{dessert.name}</h2>
                                    <h2 className="card-title text-yellow-600">${dessert.price}</h2>
                                    </div>
                                    <p>{dessert.recipe}</p>
                                    <div className="card-actions">
                                        <button className="btn btn-primary">Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                   </div>
                </div>

                <input type="radio" name="my_tabs_6" className="tab" aria-label="Drinks" />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                   {
                        drinks.map(drinks =>
                            <div className="card bg-base-100 w-96 shadow-sm">
                                <figure className="px-10 pt-10">
                                    <img
                                        src={drinks.image}
                                        alt="Shoes"
                                        className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <div className="flex justify-center items-center gap-3">
                                    <h2 className="card-title">{drinks.name}</h2>
                                    <h2 className="card-title text-yellow-600">${drinks.price}</h2>
                                    </div>
                                    <p>{drinks.recipe}</p>
                                    <div className="card-actions">
                                        <button className="btn btn-primary">Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;