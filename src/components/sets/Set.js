import React, {useEffect} from 'react';
import useSets from "../../hooks/sets";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import SetItem from "./SetItem";
import Container from "@material-ui/core/Container";
import Cards from "../cards/Cards";
import useCards from "../../hooks/cards";
import {useDispatch} from "react-redux";
import useAuth from "../../hooks/auth";
import {Link} from "react-router-dom";
import {EditRounded} from "@material-ui/icons";
import CircularProgress from "@material-ui/core/CircularProgress";


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
});


const Set = (props) => {


    const classes = useStyles();

    const {fetchSet, set, isLoadingSet} = useSets();
    const {fetchCards, cards, cardsSideChange} = useCards();
    const {token} = useAuth();


    useEffect(() => {
        fetchSet(
            {
                set_id: props.match.params.id,
                token: token
            });

        fetchCards(
            {
                set_id: props.match.params.id,
                token: token

            });

        cardsSideChange(true)

    }, [])


    //console.log(set)
    // console.log(cards)

    return (
        <>
            <Grid container>
                        <Grid item xs={12} md={8}>
                            <Cards cards={cards}/>
                        </Grid>
            </Grid>

            <Grid container>
                {(isLoadingSet === true) ? <CircularProgress color="secondary"/> :
                    <Grid item xs={12} md={8}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="/images/flash-card.png"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {set && set.name ? set.name : null}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {set && set.description ? set.description : null}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    {set && set.language1 ? set.language1 : null}
                                </Button>
                                <Button size="small" color="primary">
                                    {set && set.language2 ? set.language2 : null}
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                }
            </Grid>


                    <Grid container>
                        <Grid item xs={12} md={2}>
                            <Link to={`/sets/${props.match.params.id}/edit`}>
                                <EditRounded color="primary"/>
                            </Link>
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <Link to={`/sets/${props.match.params.id}/cards/create`}>
                                <EditRounded color="primary"/>
                            </Link>
                        </Grid>
                    </Grid>
                </>
                )
                };

                export default Set;




