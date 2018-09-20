
const express = require ('express');

const bodyParser = require ('body-parser')

const app = express()

const birds = require ('./bird-app/db/birds.js')

const port = 3000

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())


app.get('/', (req, res) => {
	res.send('Hello World')
})

app.get('/birds/:id.json', (req, res) => {
	res.json(birds.find(bird => bird.id == req.params.id)
	)
});

app.get('/birds', (req, res) => {
	res.json(birds)
});



// bonus
app.get('/birds/location/:place', (req, res) => {
	res.json(birds.filter(bird => bird.city == req.params.place)
	)
});





app.listen(port, () => console.log(`Bird app listening on port ${port}!`));