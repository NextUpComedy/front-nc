import { useEffect, useState } from 'react';

import { useAppDispatch } from 'hooks';
import { addStripeAccount, getApprovedList } from 'store/admin/thunk';
import { ComponentLayout } from 'layouts';
import {
  Button, Select, Form, Input,
} from 'components/AntDesign';
import { validationMessages } from 'utils';
import './style.css';

function AddStripeAccount() {
  const [users, setUsers] = useState({});
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const payload = await dispatch(getApprovedList()).unwrap();
      setUsers(payload);
    };
    fetchData();
  }, []);
  const [form] = Form.useForm();
  const { Option } = Select;

  const onFinish = async (values) => {
    dispatch(addStripeAccount(values));
  };
  return (
    <ComponentLayout title="Users Stripe" heading="Add Stripe Account">
      <Form
        form={form}
        name="basic"
        onFinish={onFinish}
        requiredMark={false}
        autoComplete="off"
        className="stripe-form"
      >
        <Form.Item name="userId" rules={validationMessages.stripeUserId}>
          <Select size="middle" placeholder="Select a person">
            {Object.values(users).map((option) => (
              <Option key={option.id} value={option.id}>
                {option.email}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="stripeAccount"
          rules={validationMessages.stripeAccount}
        >
          <Input placeholder="Stripe Account ID" />
        </Form.Item>
        <Form.Item noStyle>
          <Button className="form-button" type="primary" htmlType="submit">
            ADD STRIPE ACCOUNT
          </Button>
        </Form.Item>
      </Form>
    </ComponentLayout>
  );
}

export default AddStripeAccount;
