import React, {useState} from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import WindEntry from "./windEntry";
import LocationWind from "./locationWind";

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flexDirection: "column",
    },
    content: { flex: 1 },
}));

function WindCard2() {
    const [location, setLocation] = useState("")
    return (
        <React.Fragment>
            {!location && <WindEntry onUpdate={setLocation} />}
            {location && <LocationWind location={location} />}
        </React.Fragment>
    );
}

WindCard2.propTypes = {
    location: PropTypes.string.isRequired,
    canDelete: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
};

export default WindCard2;
