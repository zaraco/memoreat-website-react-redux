import React from "react";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {makeStyles} from "@material-ui/core/styles";




const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing(3),
    },
}));


export default function CheckboxRegister() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
    });
    const {gilad, jason} = state;

    const handleChange = (event) => {
        setState({...state, [event.target.name]: event.target.checked});
    };

    return (
        <>
            <Grid container spacing={2}>
                <Grid item sm={12} md={12}>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked={gilad} onChange={handleChange} name="gilad"/>}
                                label="Male"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={jason} onChange={handleChange} name="jason"/>}
                                label="Female"
                            />
                        </FormGroup>
                    </FormControl>
                </Grid>
            </Grid>
        </>
    )
};
