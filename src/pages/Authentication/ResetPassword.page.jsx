import authImage from 'assets/images/authImage.png';
import { ResetPasswordForm } from 'components';
import { Image } from 'shared/components';

function ResetPasswordPage() {
  return (
    <div className="register">
      <Image src={authImage} alt="reset password" className="home-layout-image" />
      <ResetPasswordForm />
    </div>
  );
}

export default ResetPasswordPage;
