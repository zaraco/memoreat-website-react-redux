import React, {useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import './Home.css';
import useSets from "../../hooks/sets";
import SetItem from "../sets/SetItem";
import Container from "@material-ui/core/Container";


const Home = () => {
    const {fetchSets, sets} = useSets();

    useEffect(() => {
        fetchSets();
    }, [])

    //console.log(sets)

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
            <Container>
                <Grid container>
                    {(sets) ? sets.map((item) => (
                        <Grid item xs={12} md={4}>
                            <SetItem key={item.id} set={item}/>
                        </Grid>
                    )) : null}
                </Grid>

            </Container>
        </>
    )
};

export default Home;
