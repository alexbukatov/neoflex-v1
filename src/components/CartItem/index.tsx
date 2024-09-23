import React from 'react';
import styles from './cartItem.module.scss';
import { useDispatch } from 'react-redux';
import { addItem, minusItem, removeItem } from '../../Redux/slices/cartSlice.ts';
import { CartStateT } from '../../Redux/slices/cartTypes.ts';

type CartItemProps = {
  id:number; 
  img:string;
  title:string; 
  price:number; 
  rate:number; 
  count:number;
}

const CartItem:React.FC<CartItemProps>  = ({ id, img, title, price, rate, count }) => {
  const dispatch = useDispatch();
  const onClickPlus = () => {
    dispatch(addItem({ id } as CartStateT));
  };
  const onClickMinus = () => {
    dispatch(minusItem(id));
  };
  const onClickRemove = () => {
    dispatch(removeItem(id));
  };

  return (
    <div className={styles.cartBlock}>
      <div className={styles.blockTop}>
        <img src={require(`../../${img}`)} alt="" />
        <div className={styles.blockTitle}>
          <h4>{title}</h4>
          <p>{price} ₽</p>
        </div>
        <button onClick={onClickRemove} className={styles.buttonClear}>
          <svg
            width="19.927734"
            height="17.000000"
            viewBox="0 0 19.9277 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              id="Vector"
              d="M14.94 3.39L19.92 3.39L19.92 5.1L17.93 5.1L17.93 16.15C17.93 16.37 17.83 16.59 17.64 16.75C17.45 16.91 17.2 17 16.93 17L2.98 17C2.72 17 2.47 16.91 2.28 16.75C2.09 16.59 1.99 16.37 1.99 16.15L1.99 5.1L0 5.1L0 3.39L4.98 3.39L4.98 0.85C4.98 0.62 5.08 0.4 5.27 0.24C5.46 0.08 5.71 0 5.97 0L13.94 0C14.21 0 14.46 0.08 14.65 0.24C14.84 0.4 14.94 0.62 14.94 0.85L14.94 3.39ZM15.94 5.1L3.98 5.1L3.98 15.3L15.94 15.3L15.94 5.1ZM11.37 10.2L13.13 11.7L11.72 12.9L9.96 11.4L8.2 12.9L6.79 11.7L8.55 10.2L6.79 8.69L8.2 7.49L9.96 8.99L11.72 7.49L13.13 8.69L11.37 10.2ZM6.97 1.7L6.97 3.39L12.95 3.39L12.95 1.7L6.97 1.7Z"
              fill="#DF6464"
              fillOpacity="1.000000"
              fillRule="nonzero"
            />
          </svg>
        </button>
      </div>
      <div className={styles.blockBottom}>
        <div className={styles.blockBottomButton}>
          <button onClick={onClickMinus}>
            <svg
              width="30.000000"
              height="30.000000"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <circle
                id="Ellipse 4"
                cx="15.000000"
                cy="15.000000"
                r="15.000000"
                fill="#FFCE7F"
                fillOpacity="1.000000"
              />
              <path
                id="Vector"
                d="M8 14L22 14L22 16L8 16L8 14Z"
                fill="#FFFFFF"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
            </svg>
          </button>
          <p>{count}</p>
          <button onClick={onClickPlus}>
            <svg
              width="30.000000"
              height="30.000000"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <circle
                id="Ellipse 5"
                cx="15.000000"
                cy="15.000000"
                r="15.000000"
                fill="#FFCE7F"
                fillOpacity="1.000000"
              />
              <path
                id="Vector"
                d="M14 14L14 8L16 8L16 14L22 14L22 16L16 16L16 22L14 22L14 16L8 16L8 14L14 14Z"
                fill="#FFFFFF"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
            </svg>
          </button>
        </div>
        <p>{price * count} ₽</p>
      </div>
    </div>
  );
};

export default CartItem;
