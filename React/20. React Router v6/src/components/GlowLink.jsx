import { Link, useLocation } from "react-router";

function GlowLink({ children, to }) {
  const location = useLocation();
  const match = location.pathname === to;

  return (
    <span>
      {match ? "🟢" : ""}
      <Link to={to}>{children}</Link>
    </span>
  );
}

export default GlowLink;
