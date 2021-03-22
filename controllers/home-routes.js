const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const sequelize = require('../config/connection');


//posts for users
router.get('/', async (req, res) => {
   
Post.findAll({
    attributes: [
        'id',
        'title',
        'content_text',
        'created-at'
    ],
    include: [
        {
            model: Comment,
            attributes: ['id','comment_text', 'user_id', 'post_id', 'created-at'],
            include: {
                model: User,
                attributes: ['username']
            }
        },
        {
            model: User,
            attributes: ['username']
        }
    ]
}).then(dbPostData=> {
    const posts = dbPostData.map(post => post.get({ plain: true}));
    res.render('homepage', {
        posts, 
        loggedIn: req.session.loggedIn
    });
}).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirecct('/');
        return;
    }
    res.render('login');
});


//posts for one user
router.get('/dashboard', (req, res) => {
    console.log(req.session);

    Post.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'title',
            'content_text',
            'created_at'
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    }).then(dbPostData => {
       
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('homepage', { posts, loggedIn: req.session.loggedIn });
    })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//login screen
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});


//  see post 
router.get('/post/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'content_text',
            'time_posted'
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }

            const post = dbPostData.get({ plain: true });

            res.render('single-post', {
                post,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;