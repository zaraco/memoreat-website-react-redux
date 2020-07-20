import React, {useEffect} from 'react';
import Container from "@material-ui/core/Container";
import Alert from "@material-ui/lab/Alert";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import clsx from "clsx";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import useAuth from "../../hooks/auth";
import useMain from "../../hooks/main";
import {useDispatch} from "react-redux";
import {fetchIndex} from "../../redux/action/action";
import CheckboxRegister from "./CheckboxRegister";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        width: '100%',
    }

}));

export default function Register() {
    const classes = useStyles();


    const {login, authLoginForm, fetchAuthLogin, error} = useAuth();
    const {app_token} = useMain();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchIndex({}))
    }, []);

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
        console.log({
            app_id: process.env.REACT_APP_APP_ID,
            app_token: app_token,
            username: login.username,
            password: login.password
        })
        fetchAuthLogin({
            app_id: process.env.REACT_APP_APP_ID,
            app_token: app_token,
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
                                   label="Email"
                                   variant="outlined"
                                   onChange={handleChangeUsername}
                            //value={login ? login.username : ""}
                        />
                    </Grid>

                    <Grid item sm={12} md={4}>
                        <TextField className={clsx(classes.margin, classes.textField)}
                                   id="outlined-basic"
                                   label="Username"
                                   variant="outlined"
                                   onChange={handleChangeUsername}
                            //value={login ? login.username : ""}
                        />
                    </Grid>
                </Grid>

                    <Grid container spacing={2}>
                        <Grid item sm={12} md={4}>
                            <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    //type={login && login.showPassword ? 'text' : 'password'}
                                    // value={login ? login.password : ""}
                                    onChange={handleChangePassword}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                //  onClick={handleClickShowPassword}
                                                //  onMouseDown={handleMouseDownPassword}
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
                            <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password Confirmation</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    //type={login && login.showPassword ? 'text' : 'password'}
                                    // value={login ? login.password : ""}
                                    onChange={handleChangePassword}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                //  onClick={handleClickShowPassword}
                                                //  onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {login && login.showPassword ? <Visibility/> : <VisibilityOff/>}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    labelWidth={170}
                                />
                            </FormControl>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item sm={12} md={8}>
                            <TextField className={clsx(classes.margin, classes.textField)}
                                       id="outlined-basic"
                                       label="Address"
                                       variant="outlined"
                                       onChange={handleChangeUsername}
                                //value={login ? login.username : ""}
                            />
                        </Grid>
                    </Grid>

                    <CheckboxRegister/>

                    <Grid container spacing={2}>
                        <Grid item sm={12} md={4}>
                            <Button variant="contained" color="secondary" onClick={handleClickButton}>
                                Submit
                            </Button>
                        </Grid>
                    </Grid>

            </Container>
        </div>
    );
}
