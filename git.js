
// // declaration

// const info = document.querySelector(".info-text");
// let show = document.querySelector(".display_content");
// const search = document.querySelector(".input-search");
// const searchBtn = document.querySelector(".btn");


// // function

// let searchValue = search.value;
// function fetchGit() {
//   info.innerHTML = `seraching for  ${searchValue}`;
//   if (show.innerHTML) {
//     show.innerHTML = "";
//   }
//   const api_url = `https://api.github.com/users/${searchValue}`;

//   fetch(api_url)
//     .then((git) => {
//       return git.json();
//     })
//     .then((identity) => {
//       info.innerHTML = "";
//      const { name, avatar_url, bio, following, followers, public_repos, login, created_at } = identity;
       
//       const display = `<div class ="content">
//       <div class="login"><span>Username:</span> ${login}</div>
//       <div class="image-holder">
//       <div class="img-container">
//      <img src="${avatar_url}" alt="${name}"/>
//    </div>
//       </div>
//    <div class="info">
//      <p class="username"><span>Name:</span> ${name}</p>
//      <p class="bio"><span>Bio:</span> ${bio}</p>
//      <p class="followers"> <span>Followers:</span> ${followers}</p>
//      <p class="following"><span>Following:</span> ${following}</p>
//      <p class="following"><span>Repository:</span> ${public_repos}</p>
//      <p class="following"><span>Joined:</span> :${created_at}</p>
//      </div>
//  </div>`;
//       show.innerHTML = display;  
//     });
// }
//  const closeBtn = document.querySelector(".close")
// closeBtn.addEventListener("click", ()=>{
//   search.value = "";
// })
// search.addEventListener("keyup", (event) => {
//   if (event.key == "Enter" && event.target.value) {
//     searchValue = event.target.value;
//     fetchGit();
//   }
// });
// searchBtn.addEventListener("click", fetchGit)
