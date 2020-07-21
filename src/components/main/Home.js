import React, {useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import './Home.css';
import useSets from "../../hooks/sets";
import SetItem from "../sets/SetItem";
import Container from "@material-ui/core/Container";


const Home = () => {


    return (
        <>
            <div className="header">
                <Grid container className="content">
                    <Grid item xs={12} className="home-image">
                        <h1>
                            Memoreat
                        </h1>
                    </Grid>
                </Grid>
            </div>
        </>
    )
};

export default Home;
