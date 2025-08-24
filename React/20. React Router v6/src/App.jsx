import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Route, Routes, Link } from "react-router";
import Product from "./pages/Product";
import UserDetail from "./pages/Users/UserDetail";
import Users from "./pages/Users/Users";
import NavigateHome from "./pages/NavigateHome";
import SearchParams from "./pages/searchParams ";
import GlowLink from "./components/GlowLink";

function App() {
  return (
    <>
      <nav style={{ display: "flex", gap: "4px" }}>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |
        <Link to="/product">Product</Link> | <Link to="/users">Users</Link> |
        <Link to="gohome">GO HOME</Link> |
        <Link to="/searchparams">Search Params</Link>
      </nav>

      <nav style={{ display: "flex", gap: "4px" }}>
        <GlowLink to="/">Home</GlowLink>
        <GlowLink to="/about">About</GlowLink> |
        <GlowLink to="/product">Product</GlowLink> |{" "}
        <GlowLink to="/users">Users</GlowLink> |
        <GlowLink to="gohome">GO HOME</GlowLink> |
        <GlowLink to="/searchparams">Search Params</GlowLink>
      </nav>

      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />

        <Route path="product/:id" element={<Product />}></Route>

        <Route path="users" element={<Users />}>
          <Route path=":id" element={<UserDetail />} />
        </Route>
        <Route path="gohome" element={<NavigateHome />} />

        <Route path="searchparams" element={<SearchParams />} />
      </Routes>
    </>
  );
}

export default App;
