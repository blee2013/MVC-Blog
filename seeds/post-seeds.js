const { Post } = require('../models');

const postdata = [
    {
        title: 'Donec posuere metus vitae ipsum.',
        content: 'You dont get to run. Youre a gladiator.Gladiators dont run. They fight. They slay dragons. They wipe off clood. They stich up their wounds, and they ilve to fight another day. you dont get to run.',
        user_id: 10
    },
    {
        title: 'Morbi non quam nec dui luctus rutrum.',
        content: 'You dont get to run. Youre a gladiator.Gladiators dont run. They fight. They slay dragons. They wipe off clood. They stich up their wounds, and they ilve to fight another day. you dont get to run.',        
        user_id: 8
    },
    {
        title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
        content: 'You dont get to run. Youre a gladiator.Gladiators dont run. They fight. They slay dragons. They wipe off clood. They stich up their wounds, and they ilve to fight another day. you dont get to run.',        
        user_id: 1
    },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
