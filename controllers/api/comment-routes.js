const router =  require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router("/", withAuth, (req, res) => {
    Comment.create({
        ...req.body, userId: req.session.userId 
    })
    .then(newCoimment => {
        res.json(newComment);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;