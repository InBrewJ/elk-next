import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/admin">
      <a style={linkStyle}>Admin</a>
    </Link>
  </div>
);

export default Header;