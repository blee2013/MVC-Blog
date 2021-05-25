const { Post } = require('../models');

const postdata = [
    {
        comment: 'We know who we are, who wie will always be and we have a choice. We can hide in the shadows, or we can stand in the light',
        user_id: 10,
        post_id: 1
    },
    {
        comment: 'We know who we are, who wie will always be and we have a choice. We can hide in the shadows, or we can stand in the light',
        user_id: 3,
        post_id: 18
    },
    {
        comment: 'We know who we are, who wie will always be and we have a choice. We can hide in the shadows, or we can stand in the light',
        user_id: 18,
        post_id: 11
    },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
