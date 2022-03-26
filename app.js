const express = require('express');
const hbs = require('hbs');
const port = 3000;

// where partial templates are located
hbs.registerPartials(__dirname + '/views/partials');

const app = express();

// Tells express to use the handlebars template engine to render views
app.set('view engine', 'hbs');

// Tells express where to load views from
app.set('views', __dirname + '/views');

app.use(express.static('public'));

//Set property e.g. pageTitle to a default value
app.locals.pageTitle = 'NEH Website';

app.get('/', (req, res) => {
    res.render('home', { home: true });
});
app.get('/about', (req, res) => {

    res.render('about', {
        about: true,
        title: 'About the Author',
        name: '	Patrick Rothfuss',
        bornYear: 'June 6, 1973',
        city: 'Madison, Wisconsin',
        bio: 'An American writer of epic fantasy. He is best known for his projected trilogy The Kingkiller Chronicle, which has won him several awards, including the 2007 Quill Award for his debut novel, The Name of the Wind. Its sequel, The Wise Man\'s Fear, topped The New York Times Best Seller list.',
        books: [
            { name: 'The Wise Man\'s Fear', pages: 500, rating: 9, genres: ['fantasy', 'magical'], isBestSeller: false },
            { name: 'The Name of the Wind', pages: 350, rating: 10, genres: ['non-fiction', 'comedy'], isBestSeller: true }
        ]
    });
});

app.get('/gallery', (req, res) => {
    res.render('gallery', {
        gallery: true,
        photos: ['01.jpg', '02.jpg', '03.jpg', '04.jpg']
    });
});

app.use((req, res) => {
    res.status(404).render('404', { '404': true });
});

app.listen(process.env.PORT || port, () => console.log("running"));
