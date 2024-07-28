import PropTypes from "prop-types";
const PriceOption = ({option}) => {
    const {id} =option;
    return (
        <div>
            <h1>{id}</h1>
        </div>
    );
};
PriceOption.propTypes={
    option:PropTypes.object.isRequired
}

export default PriceOption;