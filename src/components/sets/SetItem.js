import React from "react";
import {makeStyles} from '@material-ui/core/styles';
//import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';
import Badge from "@material-ui/core/Badge";
import MailIcon from '@material-ui/icons/Mail';
import {Link} from "react-router-dom";


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

const defaultProps = {
    color: 'secondary',
    children: <MailIcon/>,
};

const SetItem = (props) => {
    const set = props.set;
    const classes = useStyles();


    return (
        (set) ?
            <Link to={`/sets/${set.id}`} className="set-link" >
                <Card className={classes.root}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                ZT
                            </Avatar>
                        }

                        title={set.name}
                        subheader={set.user ? set.user.fullName : null}
                    />
                    <CardMedia
                        className={classes.media}
                        image='/images/flash-card.png'
                        title="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {set.description}
                            {set.language1}
                        </Typography>

                    </CardContent>

                    <CardActions disableSpacing>
                        <Badge badgeContent={4} color="secondary" badgeContent={3000}
                               max={set.downloads} {...defaultProps}>
                            <MailIcon/>
                        </Badge>
                        <IconButton aria-label="share">
                            <ShareIcon/>
                        </IconButton>
                    </CardActions>

                </Card>
            </Link> : null
    );
};

export default SetItem;
