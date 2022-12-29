import { useState } from 'react';
import { useAppDispatch } from 'hooks';
import { generateReport } from 'store/admin/thunk';
import {
  Button, Space, Modal, Input,
} from 'components/AntDesign';

function CreateReportModal() {
  const dispatch = useAppDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [revenue, setRevenue] = useState(0);
  const [watchTo, setWatchTo] = useState('');
  const showModal = () => setIsModalVisible(true);

  const handleCancel = () => setIsModalVisible(false);

  const handleGenerateReport = (totalRevenue, watchTimeTo) => {
    const payload = { totalRevenue, watchTimeTo };
    dispatch(generateReport(payload));
    setIsModalVisible(false);
  };

  return (
    <Space size="middle">
      <Button type="primary" className="ask-payment-btn" onClick={showModal}>
        Generate Report
      </Button>
      <Modal
        title="Generate New Report"
        visible={isModalVisible}
        onOk={() => handleGenerateReport(revenue, watchTo)}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            key="submit"
            onClick={() => handleGenerateReport(revenue, watchTo)}
          >
            Generate New Report
          </Button>,
        ]}
      >
        <p>Are you sure that you want to reject this payout?</p>
        <p>Choose the reason for rejection</p>
        <div className="input-container">
          <Input required placeholder="Total Revenue" type="number" onChange={(e) => setRevenue(e.target.value)} />
          <Input required placeholder="Watch Time To" type="date" onChange={(e) => setWatchTo(e.target.value)} />
        </div>
      </Modal>
    </Space>
  );
}

export default CreateReportModal;
