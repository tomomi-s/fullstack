import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';

import LinearProgress from '@material-ui/core/LinearProgress';

import Animal from './Animal'
import Selector from './Selector'

import { setLoading, getAnimails } from '../../actions/animalActions';

const Animals = ({animal:{ animals, loading, error }, setLoading, getAnimails}) => {
	const [species, setSpecies] = useState('')

	useEffect(() => {
		setLoading()
		getAnimails()
		// eslint-disable-next-line
	}, [])
	return (
		<div>
			{
				loading ?  <LinearProgress />
				: (
					error ? 
					<h2 style={{textAlign:'center'}}>
						{error}
					</h2>
					: (
						animals && (
							<Grid container spacing={3}>
								{
									animals.length > 0 ? (
										<Grid container spacing={3}>
											<Grid item xs={12}>
												<Selector species={species} onSpeciesSelected={value=>setSpecies(value)}/>
											</Grid>
											{
												species ? (
													animals.filter(filteredAnimal=> filteredAnimal.animal === species).map((animal, index) => <Animal animal={animal} key={animal.name} index={index} />)
												) : (
													animals.map((animal, index) => <Animal animal={animal} key={animal.name} index={index} />)
												)
											}
										</Grid>
										
									) : (
										<Grid item xs={12}>
											<h2 style={{textAlign:'center'}}>
												No results.
											</h2>
										</Grid>
									)
								}
							</Grid>
						)						
					)
				)
			}
		</div>
	)
}

Animals.propTypes = {
	animal: PropTypes.object.isRequired,
	setLoading: PropTypes.func.isRequired,
	getAnimails: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
	animal: state.animal
})

export default connect(mapStateToProps, { setLoading, getAnimails })(Animals)