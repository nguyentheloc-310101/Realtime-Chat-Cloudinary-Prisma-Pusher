'use client';
import ButtonVs2 from '@/components/home/empty-state-vs2/ButtonVs2';
import { usePushRouter } from '@/hooks/usePushRouter';
import useUserInput from '@/stores/user-input';
import { DatePicker, Form, Input, Modal, Select } from 'antd';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import getCurrentUser from '../actions/getCurrentUser';
import Button from '@/components/Button';
const { RangePicker } = DatePicker;
const HomePage = () => {
  const router = usePushRouter();
  const [activeModal, setActiveModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const getUser = async () => {
  //     const currUser = await getCurrentUser();
  //     if (currUser?.role == 'ADMIN') {
  //       router.push('/conversations');
  //     }
  //   };
  //   getUser();
  // }, []);

  const onOk = async () => {
    const currUser = await getCurrentUser();
    if (!currUser) {
      router.push('/');
    }
    if (currUser?.role == 'ADMIN') {
      router.push('/conversations');
    }
  };
  return (
    <div>
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
      <Form className="w-full flex flex-col items-center justify-center my-[12px]">
        <div>
          <Form.Item
            name="day"
            label="Your plan will be last for">
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
          </Form.Item>
        </div>
        <div className="my-[12px]">
          <Button
            onClick={() => {
              router.push('/conversations');
            }}>
            Start my trip
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default HomePage;
