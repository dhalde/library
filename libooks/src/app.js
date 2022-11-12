const express = require('express');
const app = express();
require('./db/conn');
const bookSch = require('./models/schema');
// const bodyParser = require("body-parser");
const port = 2000;

app.use(express.json());

app.post('/books', async (req, res) => {

    try {
        const createBook = new bookSch(req.body);
        await createBook.save();
        res.status(200).send(createBook);

    } catch (error) {
        res.status(404).send(`error occured ${error}`);
    }
});

app.get('/books', async (req, res) => {

    try {
        const bookDetail = await bookSch.find();
        res.status(200).send(bookDetail);

    } catch (error) {
        res.status(404).send(`error occured ${error}`);
    }

});
app.get('/books/:id', async (req, res) => {

    try {
        const id = req.params.id;
        const detailId = await bookSch.findById(id);
        res.status(200).send(detailId);

    } catch (error) {
        res.status(404).send(`error occured ${error}`);
    }

});

app.patch('/books/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updateId = await bookSch.findByIdAndUpdate(id, req.body, {
            new: true
        });
        res.status(200).send(updateId);

    } catch (error) {
        res.status(404).send(`error occured ${error}`);
    }
});

app.delete('/books/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deleteId = await bookSch.findByIdAndDelete(id);
        res.status(200).send(deleteId);

    } catch (error) {
        res.status(404).send(`error occured ${error}`);
    }
});





app.listen(port, () => {
    console.log(`listenong to port no. ${port}`);
});