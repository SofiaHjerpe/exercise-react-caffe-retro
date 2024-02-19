import "./Navbar.css";
const Navbar = () => {
  const links = [
    { id: 1, name: "Hot", path: "/hot" },
    { id: 2, name: "Juicy", path: "/juicy" },
    { id: 3, name: "Cosy", path: "/cosy" },
  ];
  return (
    <nav className="navbar">
      {links.map((link) => {
        return <a key={link.id} href={link.path}>
          {link.name}
        </a>;
      })}
    </nav>
  );
};
export default Navbar;
