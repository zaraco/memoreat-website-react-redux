import React from 'react';
import useSets from "../../hooks/sets";
import useMain from "../../hooks/main";
import useAuth from "../../hooks/auth";


const EditCard = () => {

    const {editForm, setsEdit, setsEditForm, fetchSet} = useSets();
    const {categories, languages} = useMain();
    const {token, isLoggedIn} = useAuth();

    return(
        <>


        </>
    )
};

export default EditCard;
