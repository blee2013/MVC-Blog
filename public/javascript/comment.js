const commentFormHandler = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('textarea[name="comment-body"]').value.trim();


    const post_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1
    ];
    console.log("comment" + post_id);

        if (comment) {
            const response = await fetch(`/api/comments`, {
                method: 'POST',
                body: JSON.stringify({
                    id,
                    comment,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        //console.log working
        console.log("comment" + post_id);

        if (response.ok) {
            document.location.reload();
        } else {
        alert(response.statusText);
        }       
    }
}

    document
        .querySelector('.comment-form')
        .addEventListener('submit', commentFormHandler);
