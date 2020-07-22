import React, {useEffect} from 'react';
import useSets from "../../hooks/sets";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import SetItem from "../sets/SetItem";
import useAuth from "../../hooks/auth";


const Dashboard = () => {
    const {my, fetchMy} = useSets();
    const {token} = useAuth();

    useEffect(() => {
        fetchMy({
            token: token
        });
    }, [])

    console.log(my)

    return (
        <>
            <Container>
                <Grid container>
                    <Grid item xs={12} md={4}>
                        {(my) ? my.map((item) => (
                            <SetItem key={item.id} set={item}/>
                        )) : null}
                    </Grid>
                </Grid>
            </Container>

        </>
    )
};

export default Dashboard;
