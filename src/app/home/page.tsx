'use client';
import ButtonVs2 from '@/components/home/empty-state-vs2/ButtonVs2';
import { usePushRouter } from '@/hooks/usePushRouter';
import useUserInput from '@/stores/user-input';
import { DatePicker, Form, Input, Modal } from 'antd';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { useState } from 'react';
const { RangePicker } = DatePicker;
const HomePage = () => {
  const router = usePushRouter();
  const [activeModal, setActiveModal] = useState<boolean>(false);
  const { setPlace, setDateRange, setUserActive } = useUserInput();

  const formatDate = (range: any[]) => {
    if (range.length == 0) {
      return;
    }
    const start = dayjs(range[0]).format('DD/MM/YYYY');
    const end = dayjs(range[1]).format('DD/MM/YYYY');
    console.log('date range: ', start + '-' + end);
    const rangeInput = {
      start: start,
      end: end,
    };
    setDateRange(rangeInput);
  };
  const onOk = () => {
    setUserActive(true);
    setActiveModal(false);
    router.push('/conversations');
  };
  return (
    <div>
      <Modal
        title="Please let us know where you want to go!"
        centered
        open={activeModal}
        okButtonProps={{
          className: 'bg-[#048547] hover:bg-[#048547b4]',
        }}
        onOk={onOk}
        onCancel={() => setActiveModal(false)}>
        <Form layout="vertical">
          <Form.Item
            name="place"
            rules={[
              { required: true, message: 'Please enter place you want to go' },
            ]}
            label={<div className="text-[16px] font-medium">Place</div>}>
            <Input
              size="large"
              onChange={(e) => {
                setPlace(e.target?.value);
              }}
            />
          </Form.Item>
          <Form.Item
            name="date"
            rules={[
              {
                required: true,
                message: 'Please enter how long you want to go',
              },
            ]}
            label={<div className="text-[16px] font-medium">How long?</div>}>
            <RangePicker
              onChange={(e: any) => {
                formatDate(e);
              }}
              className="w-full"
              size="large"
            />
          </Form.Item>
        </Form>
      </Modal>
      <div className="flex items-center justify-center h-[70vh] w-full z-[9999999]">
        <div className="w-[200px]">
          <ButtonVs2
            onClick={() => setActiveModal(true)}
            label={'Lets go'}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
