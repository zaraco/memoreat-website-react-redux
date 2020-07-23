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


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(4),
        minWidth: 700,
        maxWidth: 900,
    },

    labelWidth: 170,

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
    const {setsCreateForm, createForm} = useSets();
    const {categories,languages} = useMain();


    const changeHandlerName = (e) => {
        setsCreateForm({
            ...createForm,
            name: e.target.value
        });
    }

    const changeHandlerCategory = (event) => {
        const { options } = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        setsCreateForm({
            ...createForm,
            category: value
        });
    };



    return (
        <div>
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
                <Grid xs={12} md={8}>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-mutiple-checkbox-label">Categories</InputLabel>
                        <Select
                            labelId="demo-mutiple-checkbox-label"
                            id="demo-mutiple-checkbox"
                            multiple
                            value={createForm ? createForm.category : null}
                            onChange={changeHandlerCategory}
                            input={<Input/>}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                        >
                            {categories ? categories.map((item) => (
                                <MenuItem key={item.id} value={item.id}>
                                    <Checkbox checked={false}/>
                                    <ListItemText primary={item.category}/>
                                </MenuItem>
                            )) : null}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container>
                <Grid xs={12} md={8}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel htmlFor="outlined-age-native-simple">Front Language</InputLabel>
                        <Select
                            native
                            // value={state.age}
                            // onChange={handleChange}
                            label="Age"
                            inputProps={{
                                name: 'age',
                                id: 'outlined-age-native-simple',
                            }}
                        >
                            <option aria-label="None" value=""/>
                            {
                                languages ? languages.map((item) =>
                                    <option aria-label={item.language} value={item.id}/>
                                ): null
                            }

                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container>
                <Grid xs={12} md={8}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel htmlFor="outlined-back-language-simple" className={classes.labelWidth}>Back language</InputLabel>
                        <Select
                            native
                            // value={state.age}
                            //onChange={handleChange}
                            label="Age"
                            inputProps={{
                                name: 'age',
                                id: 'outlined-age-native-simple',
                            }}
                        >
                            <option aria-label="None" value=""/>
                            {
                                languages ? languages.map((item) =>
                                    <option aria-label={item.language} value={item.id}/>
                                ): null
                            }

                        </Select>

                    </FormControl>
                </Grid>
            </Grid>

            <Grid container >
                <Grid xs={12} md={8} >
                    <TextField className={classes.formControl}
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={4}
                        defaultValue="Default Value"
                        variant="outlined"
                    />
                </Grid>
            </Grid>
        </div>

    );
};
