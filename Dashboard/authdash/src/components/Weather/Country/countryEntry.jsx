
import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

function LocationCountry({ onUpdate }) {
    const handleBlur = ev => onUpdate(ev.target.value);

    const handleKeyDown = ev => {
        if (ev.key === "Enter") {
            onUpdate(ev.target.value);
        }
    };

    return <TextField autoFocus label="Enter location" onBlur={handleBlur} onKeyDown={handleKeyDown} />;
}

LocationCountry.propTypes = {
    onUpdate: PropTypes.func.isRequired,
};

export default LocationCountry;