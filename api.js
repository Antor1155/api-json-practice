function getPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(req => req.json())
        .then(data => displayPost(data));
}

function displayPost(data){
    const mainDiv = document.getElementById("mainDiv");
    console.log(data);
    for (let post of data){
        let div = document.createElement('div');
        div.classList.add('div');
        div.innerHTML = `<h1> title: ${post.title} </h1>
                        <p> body: ${post.body} </p>
        `;
        mainDiv.appendChild(div);

    }

}
getPosts();