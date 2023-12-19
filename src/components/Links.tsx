import { Nav } from "react-bootstrap";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

type NavLinkType = {
  active: boolean;
  href: string;
  title: string;
  callback: (value: string) => void;
};

export const Links: React.FC<NavLinkType> = ({ active, href, title, callback }) => {
  const onUpdateActiveLink = () => {
    return callback(href);
  };

  return (
    <Nav.Link href={`#${href}`} onClick={onUpdateActiveLink} className={active ? "active navbar-link" : "navbar-link"}>
      {title}
    </Nav.Link>
  );
};
