let body = document.querySelector("body");

let xHttp = new XMLHttpRequest();
xHttp.addEventListener("load", bodyParsed);
xHttp.open('GET', 'https://api.github.com/users/alexoviedo');
xHttp.send();

function bodyParsed() {

  let contents = JSON.parse(this.responseText);

  let pageContents =

    `<header>
      <h1>${contents.name}</h1>
    </header>

    <div class="cardBody">

      <div class="cardBodySections">
        <div class="basics">

          <h2>The Basics</h2>

          <ul>
            <li><label>Name:</label> ${contents.name}</li>
            <li><label>GitHub URL:</label> <a href=${contents.html_url}>${contents.login}</a></li>
            <li><label>Email:</label> ${contents.email}</li>
            <li><label>Company:</label> ${contents.company}</li>
            <li><label>Website:</label> <a href=${contents.blog}>${contents.blog}</a></li>
          </ul>

        </div>


        <div id="story">
          <h2>The Story</h2>
          <p>${contents.bio}</p>
        </div>


        <div id="photo">
          <img src=${contents.avatar_url} alt="A photo of ${contents.name}.">
        </div>
      </div>
    </div>`

  body.innerHTML = pageContents;
}
