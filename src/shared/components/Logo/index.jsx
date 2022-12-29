import PropTypes from 'prop-types';

import logo from 'assets/images/NextUpLogo.png';
import { LOGO_URL } from 'shared/constants';
import './style.css';

export default function Logo({ className }) {
  return (
    <img
      src={logo ?? LOGO_URL}
      alt="NextUp Comedy-logo"
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};
