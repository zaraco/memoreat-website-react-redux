import React from 'react';
import './App.css';
import {Switch, Route} from "react-router";
import {BrowserRouter as Router} from "react-router-dom";


const App = () => {

    return (
        <Router>
            <Switch>
                <Route path='/' exact component={}/>
                <Route path='/sets' exact component={}/>
                <Route path='/sets/:id' exact component={}/>
                <Route path='/auth/resend' component={}/>
                <Route path='/auth/forgot' component={}/>
                <Route path='/auth/login'  component={}/>
                <Route path='/auth/register' component={}/>
                <Route path='/contacts' component={}/>
                <Route path='/help' component={}/>
                <Route path='/terms' component={}/>
                <Route path='/sets/:id/cards' exact component={}/>
                <Route path='/sets/:id/exam'  component={}/>
                <Route path='/sets/:id/study' component={}/>
                <Route path='/analysis' component={}/>
                <Route path='/dashboard' component={}/>
                <Route path='/sets/create' component={}/>
                <Route path='/sets/:id/cards/create' component={}/>
                <Route path='/sets/:id/edit' component={}/>
                <Route path='/cards/:id/edit' component={}/>
            </Switch>
        </Router>
    )
}

export default App;
