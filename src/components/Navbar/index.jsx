import 'font-awesome/css/font-awesome.min.css';
import PropTypes from 'prop-types';

import { useAppSelector } from 'hooks';
import { Button, Space } from 'components/AntDesign';
import { Loader, Image } from 'shared/components';
import DEFAULT_AVATAR from 'assets/images/user.png';
import './style.css';

function Navbar({ toggleSidebar }) {
  const { user, isLoading } = useAppSelector((state) => state.checkAuth);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <nav className="navbar">
      <div className="leftside">
        <div className="bti">
          <Button onClick={toggleSidebar}>
            <i className="fa fa-bars" />
          </Button>
        </div>
      </div>
      <div className="rightside">
        <i className="fa fa-bell icon" />
        <Space>
          <Image src={user.image ?? DEFAULT_AVATAR} alt="logo" className="userimg" />
        </Space>
      </div>
    </nav>
  );
}

export default Navbar;
Navbar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};
