const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();
    //adding this 
    const username = document.querySelector('#post-username').value.trim();
    
    //console.log
    console.log(title,desc,username)

    if (title  && content && username) {
        const response = await fetch(`/api/posts`, {
            method: 'POST',
            body: JSON.stringify({  
                title, 
                content, 
                username
             }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create post');
        }
    }
};

//DELETE POST
// const delButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//         const id = event.target.getAttribute('data-id');

//         const response = await fetch(`/api/posts/${id}`, {
//             method: 'DELETE',
//         });

//         if (response.ok) {
//             document.location.replace('/dashboard');
//         } else {
//             alert('Failed to delete posts');
//         }
//     }
// };

document
    .querySelector('.new-post-form')
    .addEventListener('submit', newFormHandler);

// document
//     .querySelector('.post-list')
//     .addEventListener('click', delButtonHandler);
