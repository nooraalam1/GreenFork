
import Dessert from "./Dessert";
import Drinks from "./Drinks";
import Offered from "./Offered";
import Pizza from "./Pizza";
import Popular from "./Popular";
import Salad from "./Salad";
import Soup from "./Soup";

const Menu = () => {

  return (
    <div className="mt-5">
    
      
    {/* name of each tab group should be unique */}
<div className="tabs tabs-border justify-center items-center gap-4">

  <input type="radio" name="my_tabs_2" className="tab rounded-3xl bg-green-500 hover:font-semibold text-white" aria-label="Salad" defaultChecked/>
  <div className="tab-content border-base-300 bg-base-100 p-10"><Salad></Salad></div>

  <input type="radio" name="my_tabs_2" className="tab rounded-3xl bg-green-500 hover:font-semibold text-white" aria-label="Drinks"  />
  <div className="tab-content border-base-300 bg-base-100 p-10"><Drinks></Drinks></div>

  <input type="radio" name="my_tabs_2" className="tab rounded-3xl bg-green-500 hover:font-semibold text-white" aria-label="Popular" />
  <div className="tab-content border-base-300 bg-base-100 p-10"><Popular></Popular></div>

  <input type="radio" name="my_tabs_2" className="tab rounded-3xl bg-green-500 hover:font-semibold text-white" aria-label="Dessert" />
  <div className="tab-content border-base-300 bg-base-100 p-10"><Dessert></Dessert></div>

  <input type="radio" name="my_tabs_2" className="tab rounded-3xl bg-green-500 hover:font-semibold text-white" aria-label="Pizza" />
  <div className="tab-content border-base-300 bg-base-100 p-10"><Pizza></Pizza></div>

  <input type="radio" name="my_tabs_2" className="tab rounded-3xl bg-green-500 hover:font-semibold text-white" aria-label="Soup" />
  <div className="tab-content border-base-300 bg-base-100 p-10"><Soup></Soup></div>
  
  <input type="radio" name="my_tabs_2" className="tab rounded-3xl bg-green-500 hover:font-semibold text-white" aria-label="Offered" />
  <div className="tab-content border-base-300 bg-base-100 p-10"><Offered></Offered></div>
</div>
      
    </div>
  );
};

export default Menu;
