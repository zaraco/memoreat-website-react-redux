import React, {useEffect} from 'react';
import useSets from "../../hooks/sets";
import Grid from "@material-ui/core/Grid";


const Set = (props) => {

    const {fetchSet, set} = useSets();

    useEffect(() => {
        fetchSet(
            {
                set_id:
                props.match.params.id
            });
    }, [])

    console.log(set)

    return (

        <>
            <Grid container className="set">
                <Grid item xs={12} md={4}>
                    <div className="figure-container">
                        <div className="figure">
                        </div>
                    </div>
                </Grid>

                <Grid md={8}>
                    <h4>{set && set.description ? set.description : null}

                    </h4>

                    <p>
                        {set && set.language1 ? set.language1 : null}
                    </p>

                </Grid>
            </Grid>

        </>
    )
};

export default Set;
