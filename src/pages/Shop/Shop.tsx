interface Product {
  id: string;
  image: string;
  title: string;
  price: number;
}

interface CartItem extends Product {
  qty: number; 
}
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList: React.FC = () => {
  const [product, setProduct] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  // API-dan məlumatın çəkilməsi
  useEffect(() => {
    async function getData() {
      let { data } = await axios.get<Product[]>("https://6990a3406279728b0152e947.mockapi.io/section");
      setProduct(data);
    }
    getData();
  }, []);

  const addToCart = (item: Product) => {
    setCart((prevCart) => {
      const isExist = prevCart.find((x) => x.id === item.id);
      if (isExist) {
        return prevCart.map((x) =>
          x.id === item.id ? { ...isExist, qty: isExist.qty + 1 } : x
        );
      }
      return [...prevCart, { ...item, qty: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => {
      const item = prevCart.find((x) => x.id === id);
      if (item?.qty === 1) {
        return prevCart.filter((x) => x.id !== id);
      }
      return prevCart.map((x) =>
        x.id === id ? { ...item!, qty: item!.qty - 1 } : x
      );
    });
  };

  return (
    <div className='divdata'>
      {/* Məhsullar siyahısı */}
      {product.map((item) => (
        <div key={item.id} className='Secondsectionmain'>
          <div className="Secondsection">
            <div>
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>
              <p>{item.price} AZN</p>
              <button onClick={() => addToCart(item)}>Buy</button>
            </div>
          </div>
        </div>
      ))}

      <br />
      <br />
        <div className="cart-section">
        <h2>Shop / Basket</h2>
        {cart.map((item) => (
          <div key={item.id} className="cart-card" style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
            <h4>{item.title}</h4>
            <p>Qiymət: {item.price} AZN</p>
            
            <div className="qty-buttons">
              <button onClick={() => removeFromCart(item.id)}>-</button>
              <span style={{ margin: '0 10px' }}>{item.qty}</span>
              <button onClick={() => addToCart(item)}>+</button>
            </div>

            <p>Cəmi: <strong>{item.price * item.qty} AZN</strong></p>
          </div>
        ))}
        
        {cart.length > 0 && (
          <h3>Ümumi Hesab: {cart.reduce((total, item) => total + (item.price * item.qty), 0)} AZN</h3>
        )}
      </div>
    </div>
  );
};

export default ProductList;