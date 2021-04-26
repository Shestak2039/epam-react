const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());

const ObjectId = require('mongodb').ObjectId;
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.bhdd7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    {useUnifiedTopology: true}
).then(client => {
    console.log('Connected to Database');
    const db = client.db('movie-app');
    const moviesCollection = db.collection('movies');

    app.use(bodyParser.json());

    app.post('/movie', (req, res) => {
        moviesCollection.insertOne(req.body)
            .then(result => {
                res.status(200).send();
            })
            .catch(error => {
                console.error(error);
                res.status(500).send();
            });
    });

    app.get('/movie', (req, res) => {
        moviesCollection.find().toArray()
            .then(result => {
                res.send(result.map(film => ({
                    ...film,
                    id: film._id,
                    _id: undefined
                })));
            })
            .catch(error => {
                console.error(error);
                res.status(500).send();
            });
    });

    app.get('/movie/:id', (req, res) => {
        const movieQuery = {_id: new ObjectId(req.params.id)};
        moviesCollection.findOne(movieQuery)
            .then(result => {
                res.send({
                    ...result,
                    id: result._id,
                    _id: undefined
                });
            })
            .catch(error => {
                console.error(error);
                res.status(500).send();
            });
    });

    app.delete('/movie/:id', (req, res) => {
        const movieQuery = {_id: new ObjectId(req.params.id)};
        moviesCollection.findOneAndDelete(movieQuery)
            .then(result => {
                res.status(200).send();
            })
            .catch(error => {
                console.error(error);
                res.status(500).send();
            });
    });

    app.put('/movie/:id', (req, res) => {
        const movieQuery = {_id: new ObjectId(req.params.id)};
        moviesCollection.findOneAndReplace(movieQuery, req.body)
            .then(result => {
                res.status(200).send();
            })
            .catch(error => {
                console.error(error);
                res.status(500).send();
            });
    });
});

app.listen(8080, () => {
    console.log('listening on 3000')
});
