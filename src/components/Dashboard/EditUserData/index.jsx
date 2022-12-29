import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'hooks';
import { editUserProfile, getUserProfile } from 'store/admin/thunk';
import { ComponentLayout } from 'layouts';
import { validationMessages } from 'utils';
import { Input, Button, Form } from 'components/AntDesign';
import { Image, Loader } from 'shared/components';
import { DEFAULT_BANNER } from 'shared/constants';
import ImageUploader from '../EditProfile/uploadImage';

function EditUserData() {
  const dispatch = useAppDispatch();
  const [image, setImage] = useState('');
  const [form] = Form.useForm();
  const [oldImage, setOldImage] = useState('');
  const [isFormChanged, setIsFormChanged] = useState(false);
  const { isLoading } = useAppSelector((state) => state.checkAuth);

  const { userId } = useParams();
  useEffect(() => {
    if (image) {
      setIsFormChanged(true);
    }
    return () => setIsFormChanged(false);
  }, [form, image]);
  useEffect(() => {
    (async () => {
      const payload = await dispatch(getUserProfile(userId)).unwrap();
      form.setFieldsValue(payload.data);
      setOldImage(payload.data.image ?? DEFAULT_BANNER);
    })();
  }, []);

  const onFinish = async (values) => {
    const { name } = values;
    const userUpdatedInfo = {
      id: userId,
      ...(name && { name }),
      ...image && { image },
    };
    try {
      dispatch(editUserProfile(userUpdatedInfo));
    } finally {
      setIsFormChanged(false);
    }
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <ComponentLayout heading="Change user profile">
      <Form
        form={form}
        name="basic"
        onFinish={onFinish}
        autoComplete="off"
        onValuesChange={() => setIsFormChanged(true)}
      >
        <div className="edit-form-s">
          <Form.Item name="name" rules={validationMessages.name}>
            <Input placeholder="Name" className="edit-form-input" />
          </Form.Item>

        </div>
        <div className="edit-form-t">
          <div className="heading-nav">
            <div className="heading-icon" />
            <div className="title-heading">Change Your Profile Pic</div>
          </div>
          <div className="ImageUploader">
            <ImageUploader submitImageToForm={(url) => setImage(url)} />
            <Image src={oldImage} alt="logo" className="profileimg" />
          </div>
        </div>
        <Button className="form-button-dashboard" type="primary" htmlType="submit" disabled={!isFormChanged}>
          Edit Profile
        </Button>
      </Form>
    </ComponentLayout>
  );
}

export default EditUserData;
