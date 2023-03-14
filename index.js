import express from 'express'

// const var, hij veranderd niet
const stekjesUrl = 'https://api.buurtcampus-oost.fdnd.nl/api/v1/stekjes'

// Maak een nieuwe express app
// Van express een variabel app gemaakt
const app = express()

// Stel in hoe we express gebruiken
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'))

// Maak een route voor de index
// Informatie krijgen
// / routing voor de index

// app.get('/', (request, response) => {

// app.get('/sprint', (request, response) => {
//     let slug = request.query.sprintSlug || 'your-tribe'
//     let sprintUrl = url + '/sprint/' + slug
//     fetchJson(sprintUrl).then((data) => {
//         // console.log(data)
//         response.render('sprint', data)
//     })
// })

app.get('/', (request, response) => {
    response.render('index')
})

app.get('/reservation', (request, response) => {
    // fetchen van data uit API, var veranderen naar data, de response met render functie voor de index de data erbij
    fetchJson(stekjesUrl).then((data) => {
        response.render('reservation', data)
    })
})

app.get('/workshops', (request, response) => {
    response.render('workshops')
})

app.get('/contact', (request, response) => {
    response.render('contact')
})

app.get('/hoe', (request, response) => {
    response.render('hoe')
})

// Stel het poortnummer in en start express
app.set('port', process.env.PORT || 8000)
app.listen(app.get('port'), function () {
    console.log(`Application started on http://localhost:${app.get('port')}`)
})

/**
 * Wraps the fetch api and returns the response body parsed through json
 * @param {*} url the api endpoint to address
 * @returns the json response from the api endpoint
 */

async function fetchJson(url) {
    return await fetch(url)
        .then((response) => response.json())
        .catch((error) => error)
}


