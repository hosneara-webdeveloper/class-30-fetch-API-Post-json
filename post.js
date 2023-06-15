function loadPost() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => displayPost(data))
}

function displayPost(data) {
    //console.log(data);
    const postBox = document.getElementById('post');
    for( const post of data){
        // console.log(post);

        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `<h3>ID:${post.id}</h3>
        <h3>Title: ${post.title}</h3>
        <p>Details: ${post.body}</p>
        `
        //console.log(div);
        postBox.appendChild(div);
    }

}

loadPost()