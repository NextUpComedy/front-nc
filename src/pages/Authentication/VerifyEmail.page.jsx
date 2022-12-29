import { VerifyEmail } from 'components';
import { Image } from 'shared/components';
import authImage from 'assets/images/authImage.png';

function VerifyEmailPage() {
  return (
    <div className="verify">
      <Image src={authImage} alt="verify your email" className="home-layout-image" />
      <VerifyEmail />
    </div>
  );
}

export default VerifyEmailPage;
