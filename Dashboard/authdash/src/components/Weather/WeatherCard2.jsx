import React, {useState} from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import LocationEntry from "./locationEntry";
import LocationWeather from "./locationWeather";

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flexDirection: "column",
    },
    content: { flex: 1 },
}));

function WeatherCard2() {
    const [location, setLocation] = useState("")
    return (
        <React.Fragment>
            {!location && <LocationEntry onUpdate={setLocation} />}
            {location && <LocationWeather location={location} />}
        </React.Fragment>
    );
}

WeatherCard2.propTypes = {
    location: PropTypes.string.isRequired,
    canDelete: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
};

export default WeatherCard2;
