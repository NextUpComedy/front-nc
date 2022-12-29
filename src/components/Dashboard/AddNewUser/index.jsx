import { useAppDispatch } from 'hooks';
import {
  Input, Button, Form, Select,
} from 'components/AntDesign';
import { ROLES } from 'shared/constants';
import { ComponentLayout } from 'layouts';
import { createUser } from 'store/admin/thunk';
import { validationMessages } from 'utils';
import './style.css';

export default function AddNewUser() {
  const { Option } = Select;
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();

  const onFinish = async (values) => {
    const { name } = values;
    const email = values.email.toLowerCase();
    const roleId = form.getFieldValue('roleId') || ROLES.COMEDIAN;
    dispatch(createUser({ name, email, roleId }));

    form.resetFields();
  };

  return (
    <ComponentLayout title="Add New User Page" heading="Add New User">
      <Form
        form={form}
        name="basic"
        onFinish={onFinish}
        autoComplete="off"
        initialValues={{ roleId: ROLES.COMEDIAN }}
      >
        <div className="add-new-user-form-form-f">

          <Form.Item
            name="name"
            rules={validationMessages.name}
          >
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={validationMessages.email}
          >
            <Input placeholder="Email" type="email" />
          </Form.Item>
          <Form.Item
            name="roleId"
          >
            <Select>
              <Option value={ROLES.ADMIN}>Admin</Option>
              <Option value={ROLES.COMEDIAN}>Comedian</Option>
            </Select>
          </Form.Item>
          <Form.Item noStyle>
            <Button className="form-button" type="primary" htmlType="submit">
              Create New Account
            </Button>
          </Form.Item>
        </div>
      </Form>
    </ComponentLayout>
  );
}
