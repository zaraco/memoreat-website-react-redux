import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Badge from "@material-ui/core/Badge";
import MailIcon from "@material-ui/icons/Mail";
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from "@material-ui/icons/Share";
import {makeStyles} from "@material-ui/core/styles";
import {red} from "@material-ui/core/colors";
import {AutoRotatingCarousel, Slide} from 'material-auto-rotating-carousel';




const useStyles = makeStyles((theme) => ({
    root: {
        margin: '20px 20px',
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    badge: {
        marginLeft: '300px'
    }
}));




const Cards = (props) => {
    const cards = props.cards;
    const classes = useStyles();


    return (
        <>



            {/*
            {(cards) ? cards.map((item) => (
                <Grid item xs={12} md={4}>
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {item.side1}
                                {item.side2}
                            </Typography>

                        </CardContent>
                    </Card>
                </Grid>
            )) : null}
*/}
        </>
    );

};

export default Cards;
