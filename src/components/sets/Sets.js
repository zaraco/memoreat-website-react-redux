import React, {useEffect} from 'react';
import useSets from "../../hooks/sets";
import Grid from "@material-ui/core/Grid";
import SetItem from "./SetItem";
import Container from "@material-ui/core/Container";


const Sets = () => {
    const {fetchSets, sets} = useSets();

    useEffect(() => {
        fetchSets();
    }, [])

    //console.log(sets)

    return(
        <>
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

export default Sets;
