import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: 20,
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Selector = ({onSpeciesSelected, species}) => {
	const classes = useStyles();
	const handleChange = (selectedOption) => {
		onSpeciesSelected(selectedOption)
		console.log(`Option selected:`, selectedOption);
	}
	return (
		<FormControl className={classes.formControl}>
	        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
	          species
	        </InputLabel>
	        <Select
	          labelId="demo-simple-select-placeholder-label-label"
	          id="demo-simple-select-placeholder-label"
	          value={species}
	          onChange={e=>handleChange(e.target.value)}
	          displayEmpty
	          className={classes.selectEmpty}
	        >
	          <MenuItem value="">
	            <em>All</em>
	          </MenuItem>
	          <MenuItem value="dog">Dog</MenuItem>
	          <MenuItem value="cat">Cat</MenuItem>
	          <MenuItem value="bear">Bear</MenuItem>
	        </Select>
	    </FormControl>
	)
}

Selector.propTypes = {
	onSpeciesSelected: PropTypes.func.isRequired,
	species: PropTypes.string.isRequired,
}

export default Selector