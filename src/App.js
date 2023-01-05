import React from "react";
import { Card } from "./Components/Card";
import { Drawer } from "./Components/Drawer";
import { Header } from "./Components/Header";


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

 
  React.useEffect(() => {
    fetch('https://63b727344d97e82aa3b5ba5a.mockapi.io/items')
  .then((res) => {
    return res.json();
  })
  .then((json) => {
    setItems(json);
  });
  }, []);

  const onAddToCart = () => {
    alert(123);
  }
  return (
    <div className="wrapper clear">

      {cartOpened && <Drawer onClose={() => setCartOpened(false)} items={cartItems} />}
        <Header onClickCart={() => setCartOpened(true)} />

      <div className="p-40">
        <div className="d-flex mb-40 justify-between align-center">
          <h1 className="clear">Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/Vector.svg" alt="Search" />
            <input placeholder="Поиск" />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map(product => <Card title={product.title} price={product.price} onPlus={obj => setCartItems([...cartItems, obj])}/>)}
        </div>
      </div>
    </div>
  );
}

export default App;
