const Author = require('../controllers/authors.controller');

module.exports = app =>{
    app.get('/api/author', Author.findAll);
    app.post('/api/author/new', Author.addAuthor);
    app.get('/api/author/:_id', Author.findOne);
    app.put('/api/author/:_id', Author.updateAuthor);
    app.delete('/api/author/:_id', Author.remove);
}