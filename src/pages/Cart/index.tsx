import React from 'react';
import styles from './cart.module.scss';
import CartItem from '../../components/CartItem/index.tsx';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';


const Cart:React.FC = () => {
  const { items, totalPrice } = useSelector((state:RootState) => state.cart);
  return (
    <div className={styles.root}>
      <h3>Корзина</h3>
      <main className={styles.cart}>
        <div className={styles.cartItemsList}>
          {items.length > 0
            ? items.map((obj:any) => {
                return <CartItem {...obj} key={obj.id} />;
              })
            : <h3>Корзина пустая</h3>}
        </div>
        <div className={styles.productBuy}>
          <div className={styles.totalAmout}>
            <p>ИТОГО</p>
            <p>₽ {totalPrice}</p>
          </div>
          <button className={styles.productButton}>
            {items.length > 0 ? <Link to='/form' >Перейти к оформлению</Link> : <Link to='#' >Перейти к оформлению</Link>}
          </button>
        </div>
      </main>
    </div>
  );
};

export default Cart;
