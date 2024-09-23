import React from 'react';
import wiredHeadphones from '../assets/arrProduct/arrProductBlockWired.json';
import wirelessHeaphones from '../assets/arrProduct/arrProductBlockWireless.json';
import ProductBloCk from '../components/ProductBlock/index.tsx';

const Home:React.FC = () => {
  return (
    <main className="catalog">
      <section className="catalog__headphones">
        <h3 className="header-categories">Наушники</h3>
        <ul className="catalog__headphones-list product-block">
          {wiredHeadphones.map((obj) => {
            return <ProductBloCk {...obj} key={obj.id} />;
          })}
        </ul>
      </section>
      <section className="catalog__headphones-wireless">
        <h3 className="header-categories">Беспроводные наушники</h3>
        <ul className="catalog__headphones-wireless-list product-block">
          {wirelessHeaphones.map((obj) => {
            return <ProductBloCk {...obj} key={obj.id} />;
          })}
        </ul>
      </section>
    </main>
  );
};

export default Home;
