import React from 'react';
import PropTypes from 'prop-types';

//const Location = (props) => {
const Location = ({ city }) => {
    //    const city = props.city;
    //    const { city } = props;
    //    console.log(props);
    //    debugger;
    return (
        <div className="locationCont">
            <h1>
                {city}
                {/* {props.city} */}
            </h1>
        </div>
    );
};

Location.propTypes = {
    city: PropTypes.string.isRequired,
};

export default Location;