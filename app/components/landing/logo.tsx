import { Link } from "@remix-run/react";
import logo from "../../../assets/logo.png";

const Logo = ({ height = 32, width = 130 }) => (
  <Link to="/">
    <img height={height} width={width} src={logo} alt="WorkHub Logo" />
  </Link>
);

export default Logo;
