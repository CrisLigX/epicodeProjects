const express = require('express');
const cors = require('cors');
const { request } = require('express');

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Tutto ciò che compare sopra fa parte del modulo Express e del modulo Cors

let index = 1;

let lista = [
    {id: '1', todo: 'Fare una lista con TypeScript'},
];

app.get('/lista', (request, response) => {
    response.json(lista);
});

app.get('/lista/:id', (request, response) => {
    const id = request.params.id;
    let obj = lista.find(lista => lista.id == id);
    response.json(obj);
})

app.delete('/lista/:id', (request, response) => {
    const id = request.params.id;
    lista = lista.filter(lista => lista.id != id);
    response.json('Task eliminato con successo!!')
});

app.post('/lista', (request, response) => {
    const obj = request.body;
    obj.id = ++index;
    lista.push(obj);
    response.json('Task inserito con successo!!');
})

app.put('/lista/:id', (request, response) => {
    const id = request.params.id;
    const obj = request.body;

    let newList = lista.find(element => element.id == id);
    newList.todo = obj.todo;

    // Object.assign(user, obj)

    response.json('Task modificato con successo!!') 
})

app.listen(3000, () => console.log('Server attivo sulla porta 3000!'))