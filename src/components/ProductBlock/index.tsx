import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../Redux/slices/cartSlice.ts';
import {CartStateT} from '../../Redux/slices/cartTypes';

type ProductBlockProps = {
  id:number; 
  img:string;
  title:string; 
  price:number; 
  rate:number;
  count:number;
}

const ProductBlock:React.FC<ProductBlockProps> = ({ id, img, title, price, rate, count}) => {
  const dispatch = useDispatch();
  const onClickAdd = () => {
    const item:CartStateT = {
      id,
      img,
      title,
      price,
      rate,
      count,
    };
    dispatch(addItem(item));
  };
  return (
    <li className="catalog__headphones-list_block product-block_item">
      <svg className='catalog__headphones-list_block product-block_item-popup' version="1.1" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512" enable-background="new 0 0 512 512" fillOpacity="0.3"><g><g><path d="m304.7,10.9c-108.5,0-196.4,87.9-196.4,196.4 0,46.9 16.4,89.9 43.8,123.7l-135,135c-8,8-8,20.9 0,28.9 8,8 20.9,8 28.9,0l135-135c33.8,27.4 76.8,43.8 123.7,43.8 108.5,0 196.4-87.9 196.4-196.4s-88-196.4-196.4-196.4zm0,352c-85.9,0-155.6-69.7-155.6-155.6 0-85.9 69.7-155.6 155.6-155.6 85.9,0 155.6,69.7 155.6,155.6 5.68434e-14,85.9-69.7,155.6-155.6,155.6z"/></g></g></svg>
      <div className="product-block_block-image">
        <img
          className="catalog__headphones-list_block-image product-block_image"
          src={require(`../../${img}`)}
          alt=""
        />
      </div>
      <div className="catalog__headphones-list_block-info product-block_item-info">
        <div className="catalog__headphones-list_block-title product-block_item-title">
          <p>{title}</p>
          <p>{price} ₽</p>
        </div>
        <div className="catalog__headphones-list_block-buy product-block_item-buy">
          <div className="catalog__headphones-list_block-buy_rating product-block_item-rating">
            <svg
              width="23.333344"
              height="21.925934"
              viewBox="0 0 23.3333 21.9259"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                id="Vector"
                d="M11.66 17.57L4.45 21.92L6.41 13.8L0 8.37L8.42 7.7L11.66 0L14.91 7.7L23.33 8.37L16.91 13.8L18.87 21.92L11.66 17.57Z"
                fill="#FFCE7F"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
            </svg>
            <p>{rate}</p>
          </div>
          <button onClick={onClickAdd}>Купить</button>
        </div>
      </div>
    </li>
  );
};

export default ProductBlock;
