import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from "react-router-dom";
import ListItemText from '@material-ui/core/ListItemText';

export default function Sidenav({value,handleChange}) {
  
  
  return (
    
      <div style={{margin:30}}>
    <FormControl component="fieldset">
      <FormLabel component="legend">Filter</FormLabel>
      <RadioGroup aria-label="filter" name="filter1" value={value} onChange={handleChange}>
        <FormControlLabel value="highest to lowest" control={<Radio />} label="Highest-Lowest" />
        <FormControlLabel value="lowest to highest" control={<Radio />} label="Lowest-Highest" />
        
      </RadioGroup>
    </FormControl>

    </div>


  );
}
