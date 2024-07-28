import Link from "../Link/Link";

const NevBar = () => {
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/contact", name: "Contact" },
    { id: 4, path: "/products", name: "Products" },
    { id: 5, path: "/product/:id", name: "ProductDetail" },
  ];
  return (
    <div>
      <ul className="md:flex">
        {routes.map((route) => (
          <Link route={route} key={route.id}></Link>
        ))}
      </ul>
    </div>
  );
};

export default NevBar;
