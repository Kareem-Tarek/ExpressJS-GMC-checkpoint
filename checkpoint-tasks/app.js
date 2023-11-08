const express = require("express");
const {engine} = require('express-handlebars');
const app = express();
port = 3000;

app.engine('.hbs', engine({
    extname: '.hbs',
    defaultLayout: false,
    layoutDir: 'views'
}));
app.set('view engine', 'hbs');
app.use(express.static('assets'));

app.listen(port, 
    () => console.log(`App is listening to port "${port}", Server is running...`));

app.get('/', (req, res) => {
    const blogs = [
        {title: "Blog 1", snippet: "Content of Blog 1"},
        {title: "Blog 2", snippet: "Content of Blog 2"},
        {title: "Blog 3", snippet: "Content of Blog 3"}
    ];
    const availableBlogs = blogs.length > 0;
    res.render('index', {title: "Home", blogs, availableBlogs});
});

app.get('/contact', (req, res) => {
    res.render('contact', {title: "Contact Us"});
});

app.get('/services', (req, res) => {
    res.render('services', {title: "Our Services"});
});

app.get('/services/create', (req, res) => {
    res.render('create-service', {title: "Our Services"});
});

app.get('/services/devs', (req, res) => {
    const devs = [
        {title: "Laravel", alt: "Laravel.png", src: "/images/laravel.png"},
        {title: "MongoDB", alt: "MongoDB.jpg", src: "/images/mongodb.png"},
        {title: "Express JS", alt: "Express_JS.png", src: "/images/expressjs.png"},
        {title: "React", alt: "React.png", src: "/images/react.png"},
        {title: "Node JS", alt: "Node_JS.png", src: "/images/nodejs.png"}
    ];
    const availableDevs = devs.length > 0;
    res.render('services/devs', {title: "Development", devs: devs, availableDevs});
});

app.use((req, res) => {
    res.status(404).render('404', {title: "404"});
});


