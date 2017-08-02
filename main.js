let body = document.querySelector("body");

let xHttp = new XMLHttpRequest();
xHttp.addEventListener("load", bodyParsed);
xHttp.open('GET', 'https://api.github.com/users/alexoviedo');
xHttp.send();

function bodyParsed() {

  let contents = JSON.parse(this.responseText);

  let pageContents =

    `
    <header>
      <h1>${contents.name}</h1>
    </header>

    <div class="container2 zigzag">



        <div class="cardBody">

          <div class="cardBodySections">
            <div class="basics">

              <h2>The Basics</h2>

              <ul>
                <li class="personInfo">Name: <div class="personInfoText">${contents.name}</div></li>
                <li class="personInfo">GitHub URL:<div class="personInfoText"> <a href=${contents.html_url}>${contents.login}</a></div></li>
                <li class="personInfo">Email:<div class="personInfoText"> ${contents.email}</div></li>
                <li class="personInfo">Company:<div class="personInfoText"> ${contents.company}</div></li>
                <li class="personInfo">Website:<div class="personInfoText"> <a href=${contents.blog}>${contents.blog}</a></div></li>
              </ul>

            </div>


            <div class="story">
              <h2>The Story</h2>
              <p>${contents.bio}</p>
            </div>


            <div class="photo">
              <img src=${contents.avatar_url} alt="A photo of ${contents.name}.">
            </div>
          </div>
        </div>



    </div>

    `

  body.innerHTML = pageContents;
}
