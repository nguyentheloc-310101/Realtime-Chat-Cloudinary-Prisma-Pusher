'use client';
import {
  Button,
  Card,
  Divider,
  Form,
  Input,
  InputRef,
  Select,
  Space,
  Upload,
  message,
} from 'antd';

import { PlusOutlined } from '@ant-design/icons';
import { useEffect, useRef, useState } from 'react';
const { TextArea } = Input;

export const FormInputPlace = () => {
  const [items, setItems] = useState(['Beach', 'River']);
  const [name, setName] = useState('');
  const inputRef = useRef<InputRef>(null);

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value == '') {
      message.warning('Please input category name!');
      return;
    }
    setName(event.target.value);
  };

  const addItem = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    e.preventDefault();
    if (name == '') {
      message.warning('Please input category name!');
      return;
    }
    setItems([...items, name]);

    setName('');
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };
  const onFinishForm = async (value: any) => {
    const paramPost = {
      title: value?.place,
      description: value?.description,
      address: value?.address,
      categories: value?.category,
    };
    // console.log('place add', value?.category);
  };

  return (
    <Card
      className="w-[600px] shadow-box"
      title="Fill in Information of place travel">
      <Form
        layout="vertical"
        onFinish={onFinishForm}>
        <Form.Item
          label="Place"
          name="place"
          rules={[{ required: true, message: 'Please input your place!' }]}>
          <Input
            placeholder="Ex: Vung tau"
            size="large"
          />
        </Form.Item>
        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: 'Please input your address!' }]}>
          <Input
            placeholder="Ex: 12 HOUCIEN rd"
            size="large"
          />
        </Form.Item>
        <Form.Item
          label="Category"
          name="category"
          rules={[{ required: true, message: 'Please input your category!' }]}>
          {/* <Input
            placeholder="Ex: beach"
            size="large"
          /> */}
          <Select
            style={{ width: '100%' }}
            mode="multiple"
            size="large"
            placeholder="Select or create category"
            dropdownRender={(menu) => (
              <>
                {menu}
                <Divider style={{ margin: '8px 0' }} />
                <div className="p-[8px] flex gap-[1rem]">
                  <Input
                    placeholder="Please enter new category"
                    className="w-[22rem]"
                    ref={inputRef}
                    value={name}
                    onChange={onNameChange}
                    onKeyDown={(e) => e.stopPropagation()}
                  />
                  <Button
                    type="text"
                    icon={<PlusOutlined />}
                    onClick={addItem}>
                    Add new category
                  </Button>
                </div>
              </>
            )}
            options={items.map((item) => ({ label: item, value: item }))}
          />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[
            { required: true, message: 'Please input your description!' },
          ]}>
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item
          label="Upload images"
          name="images">
          <Upload />
        </Form.Item>
        <Form.Item>
          <button
            className="bg-[#048547] text-[white] hover:text-[white] hover:bg-[#41c585] px-[1rem] py-[8px] rounded-[8px]  text-center"
            type="submit">
            Submit
          </button>
        </Form.Item>
      </Form>
    </Card>
  );
};
