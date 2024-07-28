import PropTypes from "prop-types";
import Feature from "../Feature/Feature";
const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="px-6 py-6 flex flex-col bg-green-900 text-white rounded-xl">
      <h1>
        <span className="text-3xl font-bold">{price}</span>
        <span>/$</span>
      </h1>
      <h2 className="text-2xl font-medium">{name}</h2>
      <div className="mt-4 flex-grow">
        {features.map((feature, id) => (
          <Feature key={id} feature={feature}></Feature>
        ))}
      </div>
      <button className="px-10 py-2 border rounded-full bg-white text-black font-bold hover:bg-green-800 hover:text-white">Book Now</button>
    </div>
  );
};
PriceOption.propTypes = {
  option: PropTypes.object.isRequired,
};

export default PriceOption;
