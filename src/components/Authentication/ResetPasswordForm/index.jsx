import { useAppDispatch, useAppSelector } from 'hooks';
import { useNavigate } from 'react-router-dom';
import { resetPassword } from 'store/user/thunk';
import { Form } from 'components/AntDesign';
import { FormModel, Loader } from 'shared/components';
import fieldsRenderProps from 'shared/objects/FormsFields';

function ResetPasswordForm() {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoading } = useAppSelector((state) => state.user);
  const { resetPasswordForm } = fieldsRenderProps;

  const onFinish = async ({ password }) => {
    await dispatch(resetPassword({ password }));
    navigate('/login');
  };

  resetPasswordForm.onFinish = onFinish;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="auth-container-reset">
      <FormModel form={form} fieldRenderProps={resetPasswordForm} />
    </div>
  );
}
export default ResetPasswordForm;
