const express = require('express');

const app = express();

app.listen(4000, () => {
    console.log('Listening on port:4000');
});

app.set('view-engine', 'hbs')
app.use(express.static(__dirname+"/public"))

// Routes

app.get('/', (req, res) => {
    res.render("index.hbs", { title: 'Home' });
});
app.get('/about', (req, res) => {
    res.render("about.hbs", { title: 'About' });
});
app.get('/projects', (req, res) => {
    res.render("projects.hbs", { title: 'Projects' });
});
app.get('/contact', (req, res) => {
    res.render("contact.hbs", { title: 'Contact' });
});


app.use((req, res) => {
    res.status(404).render('error.hbs',{message:"Page Not Found",title:"Page Not Found"});
})