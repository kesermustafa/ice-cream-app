import React from 'react';
import Button from './HeroCardButton';

const HeroCard = () => {
  return (
    <div className='w-[70%]'>
      <div className="flex w-full gap-6 ">
        <div className="bg-white w-full p-[30px_25px_40px_30px] rounded-2xl text-black">
          <div className="flex  gap-[20px]">
            <img src="/profile.png" alt="" />

            <div className='w-full'>
              <h3 className="text-[24px] font-semibold">Mustafa Keser</h3>
              <div className="flex gap-1">
                <img src="/Star4.png" alt="" />
                <img src="/Star4.png" alt="" />
                <img src="/Star4.png" alt="" />
                <img src="/Star4.png" alt="" />
                <img src="/Star5.svg" alt="" />
              </div>
            </div>
          </div>
          <p className="mt-4 w-full lg:max-w-[400px]">
            I tried the vanilla ice cream, and it was absolutely delicious! The
            flavor was rich and creamy, but I wish it had just a bit more
            toppings. Overall, I'd give it 4.5 stars.
          </p>
        </div>
        <img src="/dots.svg" alt="" />
      </div>

      <div className="mt-[40px] lg:mt-[83px]">
        <h3 className="mb-4 fs-5 font-medium">Choose a Type:</h3>
        <div className="flex  gap-10">
          <Button icon={"/cup1.svg"}/>
          <Button icon={"/cup2.svg"}/>
          <Button icon={"/cup3.svg"}/>
          <Button icon={"/add.svg"}/>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
