import { CORRECT_CHECKER } from 'shared/constants';
import { Image } from 'shared/components';
import './style.css';

function VerifyEmail() {
  return (
    <div className="verify-btn-div">
      <p>
        Your email has been verified.
      </p>
      <Image src={CORRECT_CHECKER} alt="background" className="verify-img" />
    </div>
  );
}

export default VerifyEmail;
