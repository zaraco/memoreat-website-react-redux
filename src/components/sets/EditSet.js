import React, {useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import useSets from "../../hooks/sets";
import useMain from "../../hooks/main";
import useAuth from "../../hooks/auth";
import {fetchSetsOne} from "../../redux/action/action";


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(4),
        minWidth: 700,
        maxWidth: 900,
    },
    labelWidth: 170,

    button: {
        margin: theme.spacing(4),
        minWidth: 200,
        maxWidth: 400,
    },

}));


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};


const EditSet = (props) => {

    const classes = useStyles();
    const {editForm, setsEdit, setsEditForm, fetchSet} = useSets();
    const {categories, languages} = useMain();
    const {token} = useAuth();

    console.log(editForm)
    useEffect(() => {
        fetchSet(
            {
                set_id: props.match.params.id,
                token: token
            });
    }, []);


    const changeHandlerNameEdit = (e) => {
        setsEditForm({
            ...editForm,
            name: e.target.value
        });
    };

    const changeHandlerEditCategory = (event) => {
        console.log(event.target.value)

        setsEditForm({
            ...editForm,
            category: event.target.value
        });
    };

    const clickHandlerButton = (event) => {
        event.preventDefault();
        //console.log()
        if (editForm) {
            setsEdit({
                token: token,
                set_id: props.match.params.id,
                name: editForm.name,
                language1: editForm.language1,
                language2: editForm.language2,
                category: editForm.category,
                description: editForm.description,
            });
        }
    };

    const changeHandlerEditLanguage1 = (event) => {
        event.preventDefault();
        setsEditForm({
            ...editForm,
            language1: event.target.value
        });
    };


    const changeHandlerEditLanguage2 = (event) => {
        setsEditForm({
            ...editForm,
            language2: event.target.value
        });
    };

    const changeHandlerEditDescription = (event) => {
        setsEditForm({
            ...editForm,
            description: event.target.value
        });
    };


    return (
        <>
            <Grid container spacing={2}>
                <Grid item sm={12} md={8}>
                    <TextField className={classes.formControl}
                               id="outlined-basic"
                               label="Title"
                               variant="outlined"
                               onChange={changeHandlerNameEdit}
                               value={editForm ? editForm.name : null}
                    />
                </Grid>
            </Grid>

            <Grid container>
                <Grid item xs={12} md={8}>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-multiple-categories-checkbox-label">Categories</InputLabel>
                        <Select
                            labelId="demo-multiple-categories-checkbox-label"
                            id="demo-multiple-categories-checkbox"
                            multiple
                            value={editForm ? editForm.category : null}
                            onChange={changeHandlerEditCategory}
                            input={<Input/>}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                        >
                            {categories ? categories.map((item) => (
                                <MenuItem key={item.id} value={item.id}>
                                    <Checkbox checked={editForm ? editForm.category.includes(item.id) : false}/>
                                    <ListItemText primary={item.category}/>
                                </MenuItem>
                            )) : null}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>

            <Grid container>
                <Grid item xs={12} md={8}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel htmlFor="outlined-front-language-simple">Front Language</InputLabel>
                        <Select
                            native
                            value={editForm ? editForm.language1 : null}
                            onChange={changeHandlerEditLanguage1}
                            label="Front Language"
                            inputProps={{
                                name: 'Front Language',
                                id: 'outlined-front-language-simple',
                            }}
                        >
                            <option aria-label="None" value=""/>
                            {
                                languages ? languages.map((item) =>
                                    <option value={item.id}>{item.language}</option>
                                ) : null
                            }

                        </Select>
                    </FormControl>
                </Grid>
            </Grid>

            <Grid container>
                <Grid item xs={12} md={8}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel htmlFor="outlined-back-language-simple" className={classes.labelWidth}>Back
                            language</InputLabel>
                        <Select
                            native
                            value={editForm ? editForm.language2 : null}
                            onChange={changeHandlerEditLanguage2}
                            label="Back language"
                            inputProps={{
                                name: 'Back language',
                                id: 'outlined-back-language-simple',
                            }}
                        >
                            <option aria-label="None" value=""/>
                            {
                                languages ? languages.map((item) =>
                                    <option value={item.id}>{item.language}</option>
                                ) : null
                            }

                        </Select>

                    </FormControl>
                </Grid>
            </Grid>

            <Grid container>
                <Grid item xs={12} md={8}>
                    <TextField className={classes.formControl}
                               id="outlined-multiline-static"
                               label="Description"
                               multiline
                               rows={4}
                               defaultValue=""
                               variant="outlined"
                               value={editForm ? editForm.description : null}
                               onChange={changeHandlerEditDescription}

                    />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} md={8}>
                    <Button className={classes.button} variant="contained" color="primary" onClick={clickHandlerButton}>
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </>
    )
};

export default EditSet;
