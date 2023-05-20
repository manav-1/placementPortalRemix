import { Link } from '@remix-run/react';
import logo from '../../../assets/logo.png';

function Logo({
  height = 32,
  width = 130,
}: {
  height?: number;
  width?: number;
}) {
  return (
    <Link to="/">
      <img height={height} width={width} src={logo} alt="WorkHub Logo" />
    </Link>
  );
}

export default Logo;
