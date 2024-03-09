import Button from '@/components/Button';
import { Input, Select } from 'antd';
import React from 'react';

const HomePageVS2 = () => {
  return (
    <div>
      <div className="text-[34px] w-full flex items-center justify-between px-[12px] font-[700]">
        <div>
          me<span className="text-[green]">Goz</span>
        </div>
        <div></div>
      </div>
      <div className=" mt-[] w-full h-[full] flex flex-col items-center justify-center text-5xl font-bold tracking-tight text-gray-900 sm:text-8xl">
        <div className="w-[50rem] text-center">I want to travel to</div>
        <div>
          <Input
            style={{ border: 'none' }}
            className="text-center  text-5xl text-[green] mt-[2rem] font-normal tracking-tight w-[30rem] rounded-[0px] px-[50px]"
            placeholder="Example: Vung Tau"
          />
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center my-[12px]">
        <div>
          <span>Your plan will be last for: </span>
          <Select
            defaultValue="2 days"
            style={{ width: 120, marginLeft: 12 }}
            // onChange={handleChange}
            options={[
              { value: '1 days', label: '1 days' },
              { value: '2 days', label: '2 days' },
              { value: '3 days', label: '3 days' },
              { value: '4 days', label: '4 days' },
            ]}
          />
        </div>
        <div className="my-[12px]">
          <Button>Start my trip</Button>
        </div>
      </div>
    </div>
  );
};

export default HomePageVS2;
