async function newFormHandler(event){
    event.preventDefault();

    const content = document.querySelector('#postText').value;
    const title = document.querySelector('#postTitle').value;

    const response = await fetch('/api/postRoutes', {
        method: 'POST',
        body: JSON.stringify({
            title,
            content
        }),
        headers: {
            'Content-Type': 'application/json'  
         },
    });

    if(response.ok){
        console.log(response)
        document.location.reload('/dashboard')
    }else{
        alert("failed")
    }
}

document.querySelector('#new-post-form').addEventListener("submit", newFormHandler);