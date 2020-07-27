import React, {useEffect} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Carousel from 'react-material-ui-carousel'
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import useCards from "../../hooks/cards";
import {useDispatch} from "react-redux";
import {fetchIndex} from "../../redux/action/action";
import {Link} from "react-router-dom";
import {EditRounded} from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
    root: {
        height: '400px',
        weight: '100%'
    },
}));


const Cards = (props) => {
    const cards = props.cards;
    const {isFront, cardsSideChange} = useCards();
    const classes = useStyles();

    const clickHandlerCard = () => {
        console.log(isFront)
        cardsSideChange(!isFront)
    }

    const nextHandler = () => {
        cardsSideChange(true)

    }

    const prevHandler = () => {
        cardsSideChange(true)

    }


    return (
        <>
            <Carousel autoPlay={false} animation={'slide'} navButtonsAlwaysVisible={true} indicators={false}
                      next={nextHandler}
                      prev={prevHandler}
            >
                {(cards) ? cards.map((item) => (
                    <>
                        <Card className={classes.root} onClick={clickHandlerCard}>
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {isFront ? item.side1 : item.side2}
                                </Typography>
                            </CardContent>
                        </Card>
                        <Link to={`/cards/${item.id}/edit`}>
                           Edit: <EditRounded color="primary"/>
                        </Link>
                    </>
                )) : null}
            </Carousel>

        </>
    );

};

export default Cards;
