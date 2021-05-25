const updateFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();
    //adding this 
    const id = document.querySelector('#post-id').value.trim();

    //console.log
    console.log(id);

    if (title && content) {
        const response = await fetch(`/api/update`, {
            method: 'PUT',
            body: JSON.stringify({
                id,
                title,
                content,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    //console.log working
    console.log(response);

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create post');
        }
    }
};

// DELETE POST
const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete posts');
        }
    }
};


document
    .querySelector('.post-list')
    .addEventListener('click', delButtonHandler);

document
    .querySelector('.delete-post')
    .addEventListener('click', updateFormHandler);
