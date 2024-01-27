import { Card, Form, Input } from 'antd';
const { TextArea } = Input;

export const FormInputPlace = () => {
  return (
    <Card
      className="w-[600px] shadow-box"
      title="Fill in Information of place travel">
      <Form layout="vertical">
        <Form.Item
          label="Place"
          name="place"
          rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[
            { required: true, message: 'Please input your description!' },
          ]}>
          <TextArea rows={4} />
        </Form.Item>
      </Form>
    </Card>
  );
};
