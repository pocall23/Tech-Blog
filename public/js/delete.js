async function newFormHandler(event){
    event.preventDefault();
    const postId = document.querySelector('#postId')

    fetch("/api/post/" + postId.ariaValueMax, {
        method: "delete"
    })
    .then(function() {
            document.location.replace('/dashboard');
    })
    .catch(err => console.log(err))
    }

    document.querySelector('#delete-btn').addEventListener("click", newFormHandler)