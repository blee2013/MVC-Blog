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
    // {
    //     title: 'Nunc purus.',
    //     content_text: 'You dont get to run. Youre a gladiator.Gladiators dont run. They fight. They slay dragons. They wipe off clood. They stich up their wounds, and they ilve to fight another day. you dont get to run.',        
    //     user_id: 4
    // },
    // {
    //     title: 'Pellentesque eget nunc.',
    //     content_text: 'You dont get to run. Youre a gladiator.Gladiators dont run. They fight. They slay dragons. They wipe off clood. They stich up their wounds, and they ilve to fight another day. you dont get to run.',        
    //     user_id: 7
    // },
    // {
    //     title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    //     content_text: 'You dont get to run. Youre a gladiator.Gladiators dont run. They fight. They slay dragons. They wipe off clood. They stich up their wounds, and they ilve to fight another day. you dont get to run.',        
    //     user_id: 4
    // },
    // {
    //     title: 'In hac habitasse platea dictumst.',
    //     content_text: 'You dont get to run. Youre a gladiator.Gladiators dont run. They fight. They slay dragons. They wipe off clood. They stich up their wounds, and they ilve to fight another day. you dont get to run.',
    //     user_id: 1
    // },
    // {
    //     title: 'Morbi non quam nec dui luctus rutrum.',
    //     content_text: 'You dont get to run. Youre a gladiator.Gladiators dont run. They fight. They slay dragons. They wipe off clood. They stich up their wounds, and they ilve to fight another day. you dont get to run.',        
    //     user_id: 1
    // },
    // {
    //     title: 'Duis ac nibh.',
    //     content_text: 'You dont get to run. Youre a gladiator.Gladiators dont run. They fight. They slay dragons. They wipe off clood. They stich up their wounds, and they ilve to fight another day. you dont get to run.',        
    //     user_id: 9
    // },
    // {
    //     title: 'Curabitur at ipsum ac tellus semper interdum.',
    //     content_text: 'You dont get to run. Youre a gladiator.Gladiators dont run. They fight. They slay dragons. They wipe off clood. They stich up their wounds, and they ilve to fight another day. you dont get to run.',        
    //     user_id: 5
    // },
    // {
    //     title: 'In hac habitasse platea dictumst.',
    //     content_text: 'You dont get to run. Youre a gladiator.Gladiators dont run. They fight. They slay dragons. They wipe off clood. They stich up their wounds, and they ilve to fight another day. you dont get to run.',        
    //     user_id: 3
    // },
    // {
    //     title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    //     content_text: 'You dont get to run. Youre a gladiator.Gladiators dont run. They fight. They slay dragons. They wipe off clood. They stich up their wounds, and they ilve to fight another day. you dont get to run.',        
    //     user_id: 10
    // },
    // {
    //     title: 'Donec dapibus.',
    //     content_text: 'You dont get to run. Youre a gladiator.Gladiators dont run. They fight. They slay dragons. They wipe off clood. They stich up their wounds, and they ilve to fight another day. you dont get to run.',        
    //     user_id: 8
    // },
    // {
    //     title: 'Nulla tellus.',
    //     content_text: 'You dont get to run. Youre a gladiator.Gladiators dont run. They fight. They slay dragons. They wipe off clood. They stich up their wounds, and they ilve to fight another day. you dont get to run.',        
    //     user_id: 3
    // },
    // {
    //     title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    //     content_text: 'You dont get to run. Youre a gladiator.Gladiators dont run. They fight. They slay dragons. They wipe off clood. They stich up their wounds, and they ilve to fight another day. you dont get to run.',        
    //     user_id: 3
    // },
    // {
    //     title:
    //         'Vestibulum ante ipsum primis in faucibus.',
    //     content_text: 'You dont get to run. Youre a gladiator.Gladiators dont run. They fight. They slay dragons. They wipe off clood. They stich up their wounds, and they ilve to fight another day. you dont get to run.',        
    //     user_id: 7
    // },
    // {
    //     title: 'In hac habitasse platea dictumst.',
    //     content_text: 'You dont get to run. Youre a gladiator.Gladiators dont run. They fight. They slay dragons. They wipe off clood. They stich up their wounds, and they ilve to fight another day. you dont get to run.',        
    //     user_id: 6
    // },
    // {
    //     title: 'Etiam justo.',
    //     content_text: 'You dont get to run. Youre a gladiator.Gladiators dont run. They fight. They slay dragons. They wipe off clood. They stich up their wounds, and they ilve to fight another day. you dont get to run.',        
    //     user_id: 4
    // },
    // {
    //     title: 'Nulla ut erat id mauris vulputate elementum.',
    //     content_text: 'You dont get to run. Youre a gladiator.Gladiators dont run. They fight. They slay dragons. They wipe off clood. They stich up their wounds, and they ilve to fight another day. you dont get to run.',        
    //     user_id: 6
    // },
    // {
    //     title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    //     content_text: 'You dont get to run. Youre a gladiator.Gladiators dont run. They fight. They slay dragons. They wipe off clood. They stich up their wounds, and they ilve to fight another day. you dont get to run.',        
    //     user_id: 7
    // }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
