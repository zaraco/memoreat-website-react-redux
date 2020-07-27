import React, {useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";
import useCards from "../../hooks/cards";
import useAuth from "../../hooks/auth";
import Button from "@material-ui/core/Button";
import {Redirect} from "react-router";
import {fetchIndex} from "../../redux/action/action";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(4),
        minWidth: 700,
        maxWidth: 900,
    },
    labelWidth: 170,

    button: {
        margin: theme.spacing(4),
        minWidth: 200,
        maxWidth: 400,
    },

}));


const CreateCard = (props) => {
    const classes = useStyles();
    const {createForm, cardsCreatForm, cardsCreate, isLoadingCreateCard} = useCards();
    const {token, isLoggedIn} = useAuth();


    const changeHandlerSide1 = (event) => {
        cardsCreatForm({
            ...createForm,
            side1: event.target.value
        });
    };

    const changeHandlerSide2 = (event) => {
        cardsCreatForm({
            ...createForm,
            side2: event.target.value
        });
    };

    const clickHandlerButton = (event) => {
        event.preventDefault();
        console.log(createForm)
        if (createForm) {
            cardsCreate({
                cards: [[createForm.side1, createForm.side2]],
                set_id: props.match.params.id,
                token: token

            });
        }
    };

    return (
        <>
            {!isLoggedIn ? <Redirect to='/auth/login'/> : null}

            {(isLoadingCreateCard === true) ? <CircularProgress color="secondary"/> :
                <div>
                    <Grid container>
                        <Grid item xs={12} md={8}>
                            <TextField className={classes.formControl}
                                       id="outlined-multiline-static"
                                       label="Front of Card"
                                       multiline
                                       rows={4}
                                       variant="outlined"
                                       value={createForm ? createForm.side1 : ''}
                                       onChange={changeHandlerSide1}

                            />
                        </Grid>
                        }
                    </Grid>

                    <Grid container>
                        <Grid item xs={12} md={8}>
                            <TextField className={classes.formControl}
                                       id="outlined-multiline-static"
                                       label="Back of Card"
                                       multiline
                                       rows={4}
                                       variant="outlined"
                                       value={createForm ? createForm.side2 : ''}
                                       onChange={changeHandlerSide2}

                            />
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid item xs={12} md={8}>
                            <Button className={classes.button} variant="contained" color="secondary"
                                    onClick={clickHandlerButton}>
                                Submit
                            </Button>

                        </Grid>
                    </Grid>
                </div>
            }
        </>
    )
};

export default CreateCard;
