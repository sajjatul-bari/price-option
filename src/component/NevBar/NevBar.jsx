import { useState } from "react";
import Link from "../Link/Link";
import { CiMenuFries } from "react-icons/ci";
import { RxCrossCircled } from "react-icons/rx";

const NevBar = () => {
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/contact", name: "Contact" },
    { id: 4, path: "/products", name: "Products" },
    { id: 5, path: "/product/:id", name: "ProductDetail" },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-green-950 text-white p-8">
      <div className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
        {open === true ? (
          <RxCrossCircled></RxCrossCircled>
        ) : (
          <CiMenuFries></CiMenuFries>
        )}
      </div>
      <ul className={`md:flex ${open ? "p-5" : "hidden"} absolute md:static bg-green-950  z-10 md:space-x-5`}>
        {routes.map((route) => (
          <Link route={route} key={route.id}></Link>
        ))}
      </ul>
    </div>
  );
};

export default NevBar;
