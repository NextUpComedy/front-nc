import { useState } from 'react';
import PropsTypes from 'prop-types';

import { useAppDispatch } from 'hooks';
import { acceptPayout, rejectPayout } from 'store/admin/thunk';
import {
  Button, Space, Popconfirm, Modal, Select,
} from 'components/AntDesign';
import { PAYOUT_REJECTION_REASONS } from 'shared/constants';

function PayoutModal({ payout }) {
  const { Option } = Select;
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const onChange = (e) => setValue(e);
  const showModal = () => setIsModalVisible(true);

  const handleCancel = () => setIsModalVisible(false);
  const handleApprovePayout = (payoutInfo) => {
    dispatch(acceptPayout(payoutInfo));
  };

  const handleRejectPayout = (payoutInfo, rejectionReason) => {
    const payload = { payoutInfo, rejectionReason };
    dispatch(rejectPayout(payload));
    setIsModalVisible(false);
  };

  return (
    <Space size="middle">
      <Popconfirm
        title="Are you sure that you want to Approve this payout?"
        okText="Yes"
        cancelText="No"
        onConfirm={() => handleApprovePayout(payout)}
      >
        <Button>Approve</Button>
      </Popconfirm>
      <Button type="danger" onClick={showModal}>
        Reject
      </Button>
      <Modal
        title="Reject User"
        visible={isModalVisible}
        onOk={() => handleRejectPayout(payout, value)}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="danger"
            onClick={() => handleRejectPayout(payout, value)}
          >
            Reject
          </Button>,
        ]}
      >
        <p>Are you sure that you want to reject this payout?</p>
        <p>Choose the reason for rejection</p>
        <Select
          size="middle"
          placeholder="Select a person"
          onChange={onChange}
          maxTagCount={1}
          style={{ width: '100%' }}
        >
          {Object.values(PAYOUT_REJECTION_REASONS).map((reason) => (
            <Option key={reason} value={reason}>
              {reason}
            </Option>
          ))}

        </Select>
      </Modal>
    </Space>
  );
}

export default PayoutModal;

PayoutModal.propTypes = {
  payout: PropsTypes.shape({
    id: PropsTypes.number,
    userId: PropsTypes.number,
    amount: PropsTypes.string,
    payoutId: PropsTypes.string,
  }).isRequired,
};
