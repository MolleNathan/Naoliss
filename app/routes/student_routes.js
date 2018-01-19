// routes/note_routes.js
var mongoose = require('mongoose');
var studentSchema = mongoose.Schema({
    nom: String,
    adresse: String,
    tel: String,
    description: String
});

module.exports = function(app, db) {

    var Student = mongoose.model('Student', studentSchema);

    // GET METHOD
  //  app.get('/notes/:id', function(req, res){
  //      const id = req.params.id;
        // You'll create your note here.
   //     console.log(req.body)
  //      res.send('Hello')
  //  });


    // POST METHOD
    app.post('/notes', function(req, res){
        // You'll create your note here.
        var student = new Student();
        student.save(function (err) {
            if (err) {
                res.send(err);
            }
            else {
                console.log("Post student saved");
            }
        });        res.send('Hello')
});


};