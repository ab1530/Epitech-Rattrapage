import React from 'react'
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flexDirection: "column",
    },
    content: { flex: 1 },
}));

export default ({children, onDelete}) => {
    const classes = useStyles();
    return (
        <Card  variant="outlined" className="columnchid">
            <CardContent className={classes.content}>
                 {children}
            </CardContent>
            <CardActions>
                <Button onClick={onDelete} size="small" color="primary">
                    Remove
                </Button>
            </CardActions>
        </Card>
    );
}