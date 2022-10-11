import React from 'react';
import './ProductList.css'

const ProductList = () => {
  return (
    <div className={'form'}>
      <h3>Введите ваши данные</h3>
      <input className={'input'} type="text" placeholder={'Страна'}/>
      <input className={'input'} type="text" placeholder={'Улица'}/>
      <select className={'select'}>
        <option value="physical">Физ. лицо</option>
        <option value="legal">Юр. лицо</option>
      </select>
    </div>
  );
};

export default ProductList;
