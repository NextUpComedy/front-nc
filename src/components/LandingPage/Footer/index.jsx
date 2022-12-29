import { rightLinks, leftLinks } from 'shared/objects/FAQ';

function Footer() {
  return (
    <footer className="flex">
      <div className="all-items flex">
        <ul>
          {rightLinks.map((link) => (
            <li key={link.title}>
              <a href={link.link} key={link.title}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <ul>
          {leftLinks.map((link) => (
            <li key={link.title}>
              <a href={link.link} key={link.title}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="nextupcomedy flex">
        <p id="nextupcomedy">© NextUp Comedy Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
