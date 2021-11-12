const express = require('express');
const cors = require('cors');
const { request } = require('express');

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

let index = 8;

let product = [
    {id: 1, name: 'Prodotto 01', qta: 10, prezzo: 10, descrizione: 'Descrizione del prodotto 01'},
    {id: 2, name: 'Prodotto 02', qta: 10, prezzo: 20, descrizione: 'Descrizione del prodotto 02'},
    {id: 3, name: 'Prodotto 03', qta: 10, prezzo: 30, descrizione: 'Descrizione del prodotto 03'},
    {id: 4, name: 'Prodotto 04', qta: 10, prezzo: 40, descrizione: 'Descrizione del prodotto 04'},
    {id: 5, name: 'Prodotto 05', qta: 10, prezzo: 50, descrizione: 'Descrizione del prodotto 05'},
    {id: 6, name: 'Prodotto 06', qta: 10, prezzo: 60, descrizione: 'Descrizione del prodotto 06'},
    {id: 7, name: 'Prodotto 07', qta: 10, prezzo: 70, descrizione: 'Descrizione del prodotto 07'},
    {id: 8, name: 'Prodotto 08', qta: 10, prezzo: 80, descrizione: 'Descrizione del prodotto 08'},   
];

app.get('/product', (request, response) => {
    response.json(product);
});

app.get('/product/:id', (request, response) => {
    const id = request.params.id;
    let obj = product.find(prd => prd.id == id);
    response.json(obj);
})

app.delete('/product/:id', (request, response) => {
    const id = request.params.id;
    product = product.filter(prd => prd.id != id);
    response.json('Prodotto eliminato con successo!!')
});

app.post('/product', (request, response) => {
    const obj = request.body;
    // obj.qta = +obj.qta;
    // obj.prezzo = +obj.prezzo;
    obj.id = ++index;
    product.push(obj);
    response.json('Prodotto inserito con successo!!');
})

app.put('/product/:id', (request, response) => {
    const id = request.params.id;
    const obj = request.body;

    let newProd = product.find(prd => prd.id == id);
    Object.assign(newProd, obj) 

    response.json('Prodotto modificato con successo!!') 
})
app.listen(3000, () => console.log('Server attivo sulla porta 3000!'))