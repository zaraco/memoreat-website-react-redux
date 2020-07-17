import React, {useEffect} from 'react';
import './App.css';
import {Switch, Route} from "react-router";
import {BrowserRouter as Router} from "react-router-dom";
import Home from "./components/main/Home";
import Contacts from "./components/main/Contacts";
import Help from "./components/main/Help";
import Terms from "./components/main/Terms";
import Resend from "./components/auth/Resend";
import Forgot from "./components/auth/Forgot";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Sets from "./components/sets/Sets";
import Set from "./components/sets/Set";
import Exam from "./components/sets/Exam";
import Study from "./components/sets/Study";
import CreateSet from "./components/sets/CreateSet";
import EditSet from "./components/sets/EditSet";
import Analysis from "./components/analysis/Analysis";
import Dashboard from "./components/users/Dashboard";
import Cards from "./components/cards/Cards";
import CreateCard from "./components/cards/CreateCard";
import EditCard from "./components/cards/EditCard";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import TopBar from "./components/base/TopBar";
import Sidebar from "./components/base/Sidebar";
import { ConnectedRouter } from 'connected-react-router';
import { history } from './redux/store';
import {fetchIndex} from "./redux/action/action";



const App = (props) => {
    const drawerWidth = 200;

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
        },
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        appBar: {
            [theme.breakpoints.up('sm')]: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: drawerWidth,
            },
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        drawerPaper: {
            width: drawerWidth,
        },
        content: {
            flexGrow: 1
        },
    }));

    const {window} = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    useEffect(() => {
        fetchIndex();
    }, []);


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <ConnectedRouter history={history}>
        <Router>
            <div className={classes.root}>
                <CssBaseline/>
                <TopBar classes={classes} handleDrawerToggle={handleDrawerToggle}/>
                <Sidebar classes={classes} container={container} theme={theme} mobileOpen={mobileOpen}
                         handleDrawerToggle={handleDrawerToggle}/>
                <main className={classes.content}>
                    <div className={classes.toolbar}/>
                    <Switch>
                        <Route path='/' exact component={Home}/>
                        <Route path='/contacts' component={Contacts}/>
                        <Route path='/help' component={Help}/>
                        <Route path='/terms' component={Terms}/>

                        <Route path='/auth/resend' component={Resend}/>
                        <Route path='/auth/forgot' component={Forgot}/>
                        <Route path='/auth/login' component={Login}/>
                        <Route path='/auth/register' component={Register}/>

                        <Route path='/sets' exact component={Sets}/>
                        <Route path='/sets/:id' exact component={Set}/>
                        <Route path='/sets/:id/exam' component={Exam}/>
                        <Route path='/sets/:id/study' component={Study}/>
                        <Route path='/sets/create' component={CreateSet}/>
                        <Route path='/sets/:id/edit' component={EditSet}/>

                        <Route path='/analysis' component={Analysis}/>

                        <Route path='/dashboard' component={Dashboard}/>

                        <Route path='/sets/:id/cards' exact component={Cards}/>
                        <Route path='/sets/:id/cards/create' component={CreateCard}/>
                        <Route path='/cards/:id/edit' component={EditCard}/>
                    </Switch>
                </main>
            </div>
        </Router>
        </ConnectedRouter>
    );
};

export default App;
