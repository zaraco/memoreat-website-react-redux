import React from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import useSets from "../../hooks/sets";
import useMain from "../../hooks/main";
import Button from "@material-ui/core/Button";
import useAuth from "../../hooks/auth";


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


export default function CreateSet() {
    const classes = useStyles();
    const {setsCreateForm, createForm, setsCreate} = useSets();
    const {categories, languages} = useMain();
    const {token} = useAuth();


    const changeHandlerName = (e) => {
        setsCreateForm({
            ...createForm,
            name: e.target.value
        });
    }

    const changeHandlerCategory = (event) => {
        console.log(event.target.value)

        setsCreateForm({
            ...createForm,
            category: event.target.value
        });
    };

    const clickHandlerButton = (event) => {
        event.preventDefault();
        //console.log()
        if(createForm){
        setsCreate({
            token: token,
            name: createForm.name,
            language1: createForm.language1,
            language2: createForm.language2,
            category: createForm.category,
            description: createForm.description,
        });
        }
    };

    const changeHandlerLanguage1 = (event) => {
        event.preventDefault();
        setsCreateForm({
            ...createForm,
            language1: event.target.value
        });
    };


    const changeHandlerLanguage2 = (event) => {
        setsCreateForm({
            ...createForm,
            language2: event.target.value
        });
    };

 const changeHandlerDescription = (event) => {
        setsCreateForm({
            ...createForm,
            description: event.target.value
        });
    };


    //console.log(languages)


    return (
        <>
            <Grid container spacing={2}>
                <Grid item sm={12} md={8}>
                    <TextField className={classes.formControl}
                               id="outlined-basic"
                               label="Title"
                               variant="outlined"
                               onChange={changeHandlerName}
                               value={createForm ? createForm.name : null}
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
                            value={createForm ? createForm.category : null}
                            onChange={changeHandlerCategory}
                            input={<Input/>}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                        >
                            {categories ? categories.map((item) => (
                                <MenuItem key={item.id} value={item.id}>
                                    <Checkbox checked={createForm ? createForm.category.includes(item.id) : false}/>
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
                            value={createForm ? createForm.language1 : null}
                            onChange={changeHandlerLanguage1}
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
                            value={createForm ? createForm.language2 : null}
                            onChange={changeHandlerLanguage2}
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
                               value={createForm ? createForm.description : null}
                               onChange={changeHandlerDescription}

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

    );
};
