const { urlencoded } = require('express');

const router = require('express').Router();
// const { Post, User, Comment } = require('../models');
// const sequelize = require('../config/connection');


//posts for users
router.get('/', (req, res) => {
    res.render('homepage', {
        id:1,
        post_url: "www.google.com",
        title: "this is worrking",
        created_at: new Date()
    });
});
//     Post.findAll({
//         attributes: [
//             'id',
//             'title',
//             'content',
//             'created_at'
//         ],
//         include: [
//             {
//                 model: Comment,
//                 attributes: ['id', 'comment', 'user_id', 'post_id', 'created_at'],
//                 include: {
//                     model: User,
//                     attributes: ['username']
//                 }
//             },
//             {
//                 model: User,
//                 attributes: ['username']
//             }
//         ]
//     }).then(dbPostData => {
//         const posts = dbPostData.map(post => post.get({ plain: true }));
//         res.render('homepage', {
//             posts,
//             loggedIn: req.session.loggedIn
//         });
//     }).catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

// router.get('/login', (req, res) => {
//     if (req.session.loggedIn) {
//         res.redirecct('/');
//         return;
//     }
//     res.render('login');
// });


// //posts for one user
// router.get('/dashboard', (req, res) => {
//     console.log(req.session);

//     Post.findAll({
//         where: {
//             user_id: req.session.user_id
//         },
//         attributes: [
//             'id',
//             'title',
//             'content',
//             'created_at'
//         ],
//         include: [
//             {
//                 model: Comment,
//                 attributes: ['id', 'comment', 'post_id', 'user_id', 'created_at'],
//                 include: {
//                     model: User,
//                     attributes: ['username']
//                 }
//             },
//             {
//                 model: User,
//                 attributes: ['username']
//             }
//         ]
//     }).then(dbPostData => {

//         const posts = dbPostData.map(post => post.get({ plain: true }));
//         res.render('homepage', { posts, loggedIn: req.session.loggedIn });
//     })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

// //login screen
// router.get('/login', (req, res) => {
//     if (req.session.loggedIn) {
//         res.redirect('/');
//         return;
//     }

//     res.render('login');
// });


// //  see post 
// router.get('/post/:id', (req, res) => {
//     Post.findOne({
//         where: {
//             id: req.params.id
//         },
//         attributes: [
//             'id',
//             'title',
//             'content',
//             'time_posted'
//         ],
//         include: [
//             {
//                 model: Comment,
//                 //double check this
//                 attributes: ['id', 'comment', 'post_id', 'user_id', 'created_at'],
//                 include: {
//                     model: User,
//                     attributes: ['username']
//                 }
//             },
//             {
//                 model: User,
//                 attributes: ['username']
//             }
//         ]
//     })
//         .then(dbPostData => {
//             if (!dbPostData) {
//                 res.status(404).json({ message: 'No post found with this id' });
//                 return;
//             }

//             const post = dbPostData.get({ plain: true });

//             res.render('single-post', {
//                 post,
//                 loggedIn: req.session.loggedIn
//             });
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

module.exports = router;