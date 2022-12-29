import { LoginForm } from 'components';
import { Image } from 'shared/components';
import authImage from 'assets/images/authImage.png';

function LoginPage() {
  return (
    <div className="register">
      <Image src={authImage} alt="List of posters" className="home-layout-image" />
      <LoginForm />
    </div>
  );
}

export default LoginPage;
