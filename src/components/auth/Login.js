import React, {useEffect} from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import useAuth from "../../hooks/auth";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        width: '100%',
    },
}));

export default function Login() {
    const classes = useStyles();
    const {login, authLoginForm, fetchAuthLogin} = useAuth();


    const handleChangeUsername = (e) => {
        authLoginForm({
            ...login,
            username: e.target.value
        })
    };

    const handleChangePassword = (e) => {
        authLoginForm({
            ...login,
            password: e.target.value,
        })
    };

    const handleClickShowPassword = (e) => {
        e.preventDefault();
        authLoginForm({
            ...login,
            showPassword: (login) ? !login.showPassword : true
        })
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleClickButton = (event) => {
        event.preventDefault();
        fetchAuthLogin({
            app_id: process.env.REACT_APP_APP_ID,
            app_token:"",
            username: login.username,
            password: login.password
        })
    }

    return (
        <div className={classes.root}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item sm={12} md={4}>
                        <TextField className={clsx(classes.margin, classes.textField)}
                                   id="outlined-basic"
                                   label="Outlined"
                                   variant="outlined"
                                   onChange={handleChangeUsername}
                                   value={login ? login.username : ""}
                        />
                    </Grid>
                    <Grid item sm={12} md={4}>
                        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={login && login.showPassword ? 'text' : 'password'}
                                value={login ? login.password : ""}
                                onChange={handleChangePassword}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {login && login.showPassword ? <Visibility/> : <VisibilityOff/>}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                labelWidth={70}
                            />
                        </FormControl>

                    </Grid>
                    <Grid item sm={12} md={4}>
                    <Button variant="contained" color="secondary" onClick={handleClickButton}>
                        Secondary
                    </Button>
                </Grid>
                </Grid>
            </Container>
        </div>
    );
}
