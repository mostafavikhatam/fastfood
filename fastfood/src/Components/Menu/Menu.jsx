
import Cards from "./Cards";

function Menu({ data }) {
  return (
    <div className="menu__container">
      <h1 className="menutitle">Our Menu</h1>
      <Cards data={data.cards} />
    </div>
  );
}

export default Menu;
