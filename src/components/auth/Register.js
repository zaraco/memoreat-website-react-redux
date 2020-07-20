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

    const {register, authRegisterForm, fetchAuthRegister, error} = useAuth();
    const {app_token} = useMain();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchIndex({}))
    }, []);


    const handleChangeEmail = (e) => {
        authRegisterForm({
            ...register,
            email: e.target.value
        })
    };


    const handleChangeUsername = (e) => {
        authRegisterForm({
            ...register,
            username: e.target.value
        })
    };


    const handleChangePassword = (e) => {
        authRegisterForm({
            ...register,
            password: e.target.value,
        })
    };

    const handleClickShowPassword = (e) => {
        e.preventDefault();
        authRegisterForm({
            ...register,
            showPassword: (register) ? !register.showPassword : true
        })
    };


    const handleClickShowPassword2 = (e) => {
        e.preventDefault();
        authRegisterForm({
            ...register,
            showPassword: (register) ? !register.showPassword : true
        })
    };
    const handleChangeConfirmPassword = (e) => {
        authRegisterForm({
            ...register,
            confirmPassword: e.target.value,
        })
    };


    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseDownPassword2 = (event) => {
        event.preventDefault();
    };

    const handleChangeAddress = (e) => {
        authRegisterForm({
            ...register,
            address: e.target.value
        })
    };

    const handleClickButton = (event) => {
        event.preventDefault();
        console.log({
            app_id: process.env.REACT_APP_APP_ID,
            app_token: app_token,
            email: register.username,
            username: register.username,
            password: register.password,
            confirmPassword: register.confirmPassword,
            address: register.address,
            gender: register.gender
        })

        fetchAuthRegister({
            app_id: process.env.REACT_APP_APP_ID,
            app_token: app_token,
            username: register.username,
            password: register.password,
            confirmPassword: register.confirmPassword,
            address: register.address,
            gender: register.gender
        })
    }


    return (
        <div className={classes.root}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item sm={12} md={4}>
                        <TextField className={clsx(classes.margin, classes.textField)}
                                   id="outlined-basic"
                                   label="Email Address"
                                   variant="outlined"
                                   onChange={handleChangeEmail}
                                   value={register ? register.email : ""}
                        />
                    </Grid>

                    <Grid item sm={12} md={4}>
                        <TextField className={clsx(classes.margin, classes.textField)}
                                   id="outlined-basic"
                                   label="Username"
                                   variant="outlined"
                                   onChange={handleChangeUsername}
                                   value={register ? register.username : ""}
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item sm={12} md={4}>
                        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={register && register.showPassword ? 'text' : 'password'}
                                value={register ? register.password : ""}
                                onChange={handleChangePassword}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {register && register.showPassword ? <Visibility/> : <VisibilityOff/>}
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
                                type={register && register.showPassword ? 'text' : 'password'}
                                value={register ? register.confirmPassword : ""}
                                onChange={handleChangeConfirmPassword}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword2}
                                            onMouseDown={handleMouseDownPassword2}
                                            edge="end"
                                        >
                                            {register && register.showPassword ? <Visibility/> : <VisibilityOff/>}
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
                                   onChange={handleChangeAddress}
                                   value={register ? register.address : ""}
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
