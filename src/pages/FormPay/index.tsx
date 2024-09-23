import React, { useState } from 'react';
import styles from './formPay.module.scss'
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import CartItem from '../../components/CartItem/index.tsx';

const FormPay:React.FC = () => {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const { items, totalPrice } = useSelector((state:RootState) => state.cart);

  const handleSubmit = (event:any) => {
    event.preventDefault();
    // Здесь надо было отправлять данные на сервер, но я вывел их в консоль
    console.log('Имя:', name);
    console.log('Номер карты:', cardNumber);
    console.log('Срок действия:', expiryDate);
    console.log('CVV:', cvv);
  };

  return (
    <div className={styles.root}>
      <div className={styles.products}>
        <h3>Ваш заказ:</h3>
        {items.map((obj) => {
              return <CartItem {...obj} key={obj.id} />;
        })}
        <p>Сумма к оплате: {totalPrice} Руб.</p>
      </div>
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.paymentForm}>
          <h2>Оплата</h2>
          <div className={styles.formGroup}>
            <label htmlFor="name">Имя:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="cardNumber">Номер карты:</label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="expiryDate">Срок действия:</label>
            <input
              type="text"
              id="expiryDate"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="cvv">CVV:</label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Оплатить
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormPay;