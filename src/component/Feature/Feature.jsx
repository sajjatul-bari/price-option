import PropTypes from "prop-types";
import { FaCircleChevronRight } from "react-icons/fa6";

const Feature = ({feature}) => {

    return (
        <div>
            <p className="flex items-center mb-2"> 
                <FaCircleChevronRight className="mr-2"></FaCircleChevronRight>
                {feature}
            </p>
        </div>
    );
};
Feature.propTypes={
    feature:PropTypes.string.isRequired
}
export default Feature;