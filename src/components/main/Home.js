import React, {useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import './Home.css';
import useSets from "../../hooks/sets";
import SetItem from "../sets/SetItem";




const Home = () => {
    const { fetchSets, sets } = useSets();

    useEffect(() => {
        fetchSets();
    }, [])

    console.log(sets)

    return (
        <div className="header">
            <Grid container className="content">
                <Grid item xs={12} className="home-image">
                    <h1>
                        Memoreat
                    </h1>
                    {(sets) ? sets.map((item) => (
                        <SetItem key={item.id} set={item}/>
                    )) : null}

                </Grid>
            </Grid>
        </div>
    )
};

export default Home;
