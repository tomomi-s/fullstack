const express = require('express');
const app = require('express')();

const dataContainer = require('./data.json');

app.get('/', (req, res) => 
	res.json({msg:'Hello World'})
)

app.get('/animals', async(req, res)=>{
	try{
		if(dataContainer){
			const arr = await dataContainer.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
			res.json(dataContainer)
		}else{
			res.status(404).send('No data found')
		}
		
	}catch(err){
		console.log(err);
		res.status(500).send('Server Error')
	}
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

module.exports = app;