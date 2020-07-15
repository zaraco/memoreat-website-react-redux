import React from 'react';
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
import Dashboard from "./components/user/Dashboard";
import Cards from "./components/cards/Cards";
import CreateCard from "./components/cards/CreateCard";
import EditCard from "./components/cards/EditCard";


const App = () => {

    return (
        <Router>
            <Switch>
                // main
                <Route path='/' exact component={Home}/>
                <Route path='/contacts' component={Contacts}/>
                <Route path='/help' component={Help}/>
                <Route path='/terms' component={Terms}/>

                //auth
                <Route path='/auth/resend' component={Resend}/>
                <Route path='/auth/forgot' component={Forgot}/>
                <Route path='/auth/login' component={Login}/>
                <Route path='/auth/register' component={Register}/>

                //sets
                <Route path='/sets' exact component={Sets}/>
                <Route path='/sets/:id' exact component={Set}/>
                <Route path='/sets/:id/exam' component={Exam}/>
                <Route path='/sets/:id/study' component={Study}/>
                <Route path='/sets/create' component={CreateSet}/>
                <Route path='/sets/:id/edit' component={EditSet}/>

                //analysis
                <Route path='/analysis' component={Analysis}/>

                //user
                <Route path='/dashboard' component={Dashboard}/>

                //cards
                <Route path='/sets/:id/cards' exact component={Cards}/>
                <Route path='/sets/:id/cards/create' component={CreateCard}/>
                <Route path='/cards/:id/edit' component={EditCard}/>
            </Switch>
        </Router>
    )
}

export default App;
