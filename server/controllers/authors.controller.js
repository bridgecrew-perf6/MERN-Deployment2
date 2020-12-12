const Author = require("../models/authors.model");


module.exports.findAll = (req,res) =>{
    Author.find({})
    .then(Author => res.json(Authors) )
    .catch(err => res.json({message: 'somthing wrong', error: err}));
};

module.exports.addAuthor = (req,res) =>{
    console.log(req.body) ;
    // const {title, price, desc} = req.body ;
    // console.log(Product);
    Author.create(req.body)
    .then(Author => res.json({Author}))
    .catch(err => res.json({message: 'somthing wrong', error: err}));
};

module.exports.findOne = (req,res) =>{
    console.log(req.params._id);
    Author.findOne({_id:req.params._id})
    .then(Author => res.json({Author}))
    .catch(err => res.json({message: 'somthing wrong', error: err}));
};

module.exports.updateAuthor = (req,res) =>{
    console.log(req.params._id);
    Author.findByIdAndUpdate({_id: req.params._id}, req.body, {runValidators: true})
        .then(() => res.json({msg: "ok"}))
        .catch(err => res.json(err));
};

module.exports.remove= (req, res) => {
    console.log(req.params._id);
    Author.deleteOne({_id: req.params._id})
        .then(() => res.json({msg: "ok"}))
        .catch(err => res.json(err));
};

