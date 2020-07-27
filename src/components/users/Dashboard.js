import React, {useEffect} from 'react';
import useSets from "../../hooks/sets";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import SetItem from "../sets/SetItem";
import useAuth from "../../hooks/auth";
import Button from "@material-ui/core/Button";
import {Redirect} from "react-router";
import CircularProgress from "@material-ui/core/CircularProgress";


const Dashboard = () => {
    const {my, fetchMy, isLoadingMySet} = useSets();
    const {token, authLogout, isLoggedIn} = useAuth();


    useEffect(() => {
        fetchMy({
            token: token
        });
    }, [])

    console.log(my)

    const clickHandlerLogout = (e) => {
        e.preventDefault();
        authLogout();
    }

    return (
        <>
            {!isLoggedIn ? <Redirect to='/'/> : null}
            <Container>
                <Grid container>

                    {(isLoadingMySet === true) ? <CircularProgress color="secondary"/> :
                        <Grid item xs={12} md={4}>
                            {(my) ? my.map((item) => (
                                <SetItem key={item.id} set={item}/>
                            )) : null}
                        </Grid>
                    }
                </Grid>
                <Grid container>
                    <Grid item xs={12} md={4}>
                        <Button variant="contained" color="secondary" onClick={clickHandlerLogout}>
                            Log out
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Dashboard;
