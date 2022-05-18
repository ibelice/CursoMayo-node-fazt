const express = require ('express');
const router = express.Router();



router.get('/', (req, res) => {
    res.render('index.html', {title: 'First Website'});

    // esto es para que se vea el index.html
    // res.sendFile(path.join (__dirname, 'views/index.html'))
    
});


router.get('/contact', (req, res) => {
    res.render('contact.html', {title: 'Contact Page'});
});

module.exports = router;