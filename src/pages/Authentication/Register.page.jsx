import { RegisterForm } from 'components';
import { Image } from 'shared/components';
import authImage from 'assets/images/authImage.png';

function RegisterPage() {
  return (
    <div className="register">
      <Image src={authImage} alt="Register page" className="home-layout-image" />
      <RegisterForm />
    </div>
  );
}

export default RegisterPage;
