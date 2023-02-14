import React, { useEffect, useState } from "react";

export default function Products() {
  //   const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked((prev) => !prev);

  useEffect(() => {
    fetch(`data/${checked ? 'sale_':''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("datat" + data);
        setProducts(data);
      });

    return () => {
      console.log("unmount");
    };
  }, [checked]); // checked가 변경될때마다 useEffect를 다시 실행

  return (
    <>
      <input id='checkbox' type="checkbox" value={checked} onChange={handleChange}></input>
      <label htmlFor="checkbox">Show only Hot sale</label>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
      {/* <button onClick={ () => setCount((prev) => prev+1)}>{count}</button> */}
    </>
  );
}
