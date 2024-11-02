import React from 'react';
import AmountPicker from '../card/AmountPicker';

const CartItem = ({ item }) => {
  return (
    <div className="flex justify-between items-center border-b py-5 gap-5">
      <div className="flex items-center gap-1">
        <img src={item.image} className="w-[80px] md:w-[100px]" alt="" />

        <div>
          <h1 className="font-semibold text-lg md:text-xl ">{item.name}</h1>
          <p className="text-gray-500 md:text-lg">{item.selectedType}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <AmountPicker item={item} />
        <p className="text-lg md:text-xl min-w-[70px] text-end font-semibold text-gray-600">
          {item.price * item.quantity}₺
        </p>
      </div>
    </div>
  );
};

export default CartItem;
