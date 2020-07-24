import React, {useEffect} from 'react';
import useSets from "../../hooks/sets";
import useMain from "../../hooks/main";
import useAuth from "../../hooks/auth";
import {Redirect} from "react-router";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";


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


const EditCard = (props) => {

    const classes = useStyles();
    const {editForm, cardsEdit, cardsEditForm, fetchCard} = useSets();
    const {token, isLoggedIn} = useAuth();

    //console.log(editForm)

    /*   useEffect(() => {
        fetchCard(
            {
                card_id: props.match.params.id,
                token: token
            });
    }, []);

*/


    const changeHandlerSide1 = (event) => {
        cardsEditForm({
            ...editForm,
            side1: event.target.value
        });
    };

    const changeHandlerSide2 = (event) => {
        cardsEditForm({
            ...editForm,
            side2: event.target.value
        });
    };

    const clickHandlerButton = (event) => {
        event.preventDefault();
        //console.log(editForm)
        if(editForm){
            cardsEdit({
                cards: [[editForm.side1, editForm.side2]],
               // card_id: props.match.params.id,
                token: token

            });
        }
    };


    return(
        <>
            {!isLoggedIn ? <Redirect to='/auth/login'/> : null}

            <Grid container>
                <Grid item xs={12} md={8}>
                    <TextField className={classes.formControl}
                               id="outlined-multiline-static"
                               label="Front of Card"
                               multiline
                               rows={4}
                               variant="outlined"
                               value={editForm ? editForm.side1 : ''}
                               onChange={changeHandlerSide1}

                    />
                </Grid>
            </Grid>

            <Grid container>
                <Grid item xs={12} md={8}>
                    <TextField className={classes.formControl}
                               id="outlined-multiline-static"
                               label="Back of Card"
                               multiline
                               rows={4}
                               variant="outlined"
                               value={editForm ? editForm.side2 : ''}
                               onChange={changeHandlerSide2}

                    />
                </Grid>
            </Grid>

            <Grid container>
                <Grid item xs={12} md={8}>
                    <Button className={classes.button} variant="contained" color="secondary" onClick={clickHandlerButton}>
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};

export default EditCard;
