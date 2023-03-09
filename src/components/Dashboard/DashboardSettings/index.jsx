import { useEffect, useState } from 'react';

import { useAppDispatch } from 'hooks';
import {
  updateDashboardSettings,
  geteDashboardSettings,
} from 'store/admin/thunk';
import { Input, Button, Form } from 'components/AntDesign';
import { validationMessages } from 'utils';
import './style.css';

function DashboardSettings() {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const [isFormChanged, setIsFormChanged] = useState(false);

  useEffect(() => {
    dispatch(geteDashboardSettings()).then((res) => {
      const { data } = res.payload;
      form.setFieldsValue({
        ...data,
        systemActivationDate: data.systemActivationDate.slice(0, 10),
      });
    });
    setIsFormChanged(false);
  }, [form]);
  const onFinish = (values) => {
    const { ...rest } = values;
    dispatch(
      updateDashboardSettings({
        ...rest,
      }),
    );
  };

  return (
    <div className="dash-settings-hero">
      <Form
        onFinish={onFinish}
        form={form}
        name="basic"
        layout="vertical"
        onValuesChange={() => setIsFormChanged(true)}
        requiredMark={false}
        autoComplete="off"
        className="dash-settings-form"
      >
        <div className="dash-settings-sub">
          <div className="dash-settings-right">
            <Form.Item
              className="dash-settings-input"
              label="Stripe API Key"
              name="stripeKey"
              rules={validationMessages.stripeApiKey}
            >
              <Input.Password placeholder="Stripe API Key" type="password" />
            </Form.Item>
            <Form.Item
              className="dash-settings-input"
              label="Uscreen Endpoint"
              name="uScreenEndpoint"
              rules={validationMessages.uScreenEndpoint}
            >
              <Input placeholder="Uscreen Endpoint" type="url" />
            </Form.Item>
            <Form.Item
              className="dash-settings-input"
              label="Uscreen Watches Fetch Limit"
              name="uScreenWatchesFetchLimit"
              rules={validationMessages.uScreenWatchesFetchLimit}
            >
              <Input placeholder="Uscreen Watches Fetch Limit" type="number" />
            </Form.Item>
            <Form.Item
              className="dash-settings-input"
              label="System Activation Date"
              name="systemActivationDate"
              rules={validationMessages.systemActivationDate}
            >
              <Input placeholder="System Activating Date" type="date" />
            </Form.Item>
            <Form.Item
              className="dash-settings-input"
              label="Calculator Endpoint"
              name="calculatorEndpoint"
              rules={validationMessages.calculatorEndpoint}
            >
              <Input placeholder="Calculator Endpoint" type="url" />
            </Form.Item>
          </div>
          <div className="dash-settings-left">
            <Form.Item
              className="dash-settings-input"
              label="Uscreen API Key"
              name="uscreenApiKey"
              rules={validationMessages.uscreenApiKey}
            >
              <Input.Password placeholder="Uscreen API Key" type="password" />
            </Form.Item>
            <Form.Item
              className="dash-settings-input"
              label="Split Percentage"
              name="nextupToOwedSplitPercentage"
              rules={validationMessages.nextupToOwedSplitPercentage}
            >
              <Input placeholder="Split Ratio" type="number" step={0.01} />
            </Form.Item>
            <Form.Item
              className="dash-settings-input"
              label="Max Fetch Trails"
              name="fetchMaxCount"
              rules={validationMessages.fetchMaxCount}
            >
              <Input placeholder="Fetch Max Count" type="number" />
            </Form.Item>
            <Form.Item
              className="dash-settings-input"
              label="Expired After In Years"
              name="expiredAfterInYears"
              rules={validationMessages.expiredAfterInYears}
            >
              <Input placeholder="Expired After In Years" type="number" />
            </Form.Item>

          </div>
        </div>

        <Form.Item noStyle>
          <Button
            className="form-button-dashboard"
            type="primary"
            disabled={!isFormChanged}
            htmlType="submit"
          >
            Update Dashboard Settings
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default DashboardSettings;
