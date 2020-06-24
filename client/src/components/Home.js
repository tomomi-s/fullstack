import React from 'react'
import Container from '@material-ui/core/Container';
import Animals from './animal/Animals';
const Home = () => {
	return (
		<Container>
			<h1 style={{textAlign:'center'}}>Animals</h1>
			<Animals />
		</Container>
	)
}

export default Home