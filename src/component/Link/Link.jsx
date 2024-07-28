import PropTypes from "prop-types";
const Link = ({ route }) => {
  const { path, name } = route;
  return (
    <li className=" hover:bg-white hover:text-green-900 p-2 ">
      <a href={path}>{name}</a>
    </li>
  );
};
Link.propTypes = {
  route: PropTypes.object.isRequired,
};
export default Link;
