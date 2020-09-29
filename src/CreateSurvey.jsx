import React from "react";
import "./App.css";
import Header from "./Header";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MultiSelect from "./MultiSelect";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function CreateSurvey() {
  const classes = useStyles();
  const [mode, setMode] = React.useState("");

  const handleChange = (event) => {
    setMode(event.target.value);
    alert(`mode ${mode}`);
  };

  return (
    <div>
      <Header />

      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Select Question type</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={mode}
          onChange={handleChange}
        >
          <MenuItem value={1}>Multi-select</MenuItem>
          <MenuItem value={2}>Single select</MenuItem>
        </Select>
      </FormControl>

      <MultiSelect />
    </div>
  );
}

export default CreateSurvey;
