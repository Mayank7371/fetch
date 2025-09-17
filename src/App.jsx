import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:4600/api/products");
      const products = await res.json();
      setProducts(products);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="bg-slate-900 h-20">
        <div className="text-3xl text-amber-300 grid place-content-center ">
          <div>
            <h1></h1>
            <ul>
              {products.map((p) => {
                <li key={p.id}>
                  <strong>{p.name}</strong> -${p.price}
                </li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
