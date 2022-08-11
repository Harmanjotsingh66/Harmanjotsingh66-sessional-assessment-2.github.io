const url = 'https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09';
function getapi(url){
    fetch('https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09')
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        let data1 = data.map((values)=>{
            return `<div class="card1">
            <h4 class="title">${values.title}</h4>
            <div id="body">${values.body}</div></div>`
        })
        document.getElementById('main').innerHTML = data1;
    })
}

getapi();