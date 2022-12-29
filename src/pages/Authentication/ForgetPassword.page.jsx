import { ForgetPasswordForm } from 'components';
import { Image } from 'shared/components';
import authImage from 'assets/images/authImage.png';

function ForgetPasswordPage() {
  return (
    <div className="register">
      <Image src={authImage} alt="forget password" className="home-layout-image" />
      <ForgetPasswordForm />
    </div>
  );
}

export default ForgetPasswordPage;
