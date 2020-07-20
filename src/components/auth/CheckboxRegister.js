import React, {useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {makeStyles} from "@material-ui/core/styles";
import useAuth from "../../hooks/auth";
import {useDispatch} from "react-redux";
import {fetchIndex} from "../../redux/action/action";


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


    const {register, authRegisterForm} = useAuth();

    const handleChangeMale = (e) => {
        authRegisterForm({
            ...register,
            gender: false
        })
    };

    const handleChangeFemale = (e) => {
        authRegisterForm({
            ...register,
            gender: true

        })
    };

    return (
        <>
            <Grid container spacing={2}>
                <Grid item sm={12} md={12}>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked={!register.gender === true ? register.gender : ''} onChange={handleChangeMale} name="Male"/>}
                                label="Male"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={!register.gender === false ? register.gender : ''} onChange={handleChangeFemale} name="Female"/>}
                                label="Female"
                            />
                        </FormGroup>
                    </FormControl>
                </Grid>
            </Grid>
        </>
    )
};
