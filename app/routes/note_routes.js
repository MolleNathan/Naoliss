// routes/note_routes.js
module.exports = function(app, db) {
    app.post('/notes', function(req, res){
        // You'll create your note here.
        console.log(req.body)
        res.send('Hello')
});
};