var userFormEl=document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");
var repoContainerel= document.querySelector("#repos-container");
var repoSearchTerm= document.querySelector("#repo-search-term");


var formSubmitHandler =function(event) {
  event.preventDefault(); 
  var username = nameInputEl.value.trim();

if (username) {
  getUserRepos(username);
  nameInputEl.value = "";
} else {
  alert("Please enter a GitHub username");
}
  console.log(event);
}

var displayRepos = function(repos, searchTerm) {
  console.log(repos);
  console.log(searchTerm);
};


var getUserRepos = function(user) {
  // format the github api url
  var apiUrl = "https://api.github.com/users/" + user + "/repos";

  // make a get request to url
  fetch(apiUrl).then(function(response) {
    console.log(response);
    response.json().then(function(data) {
      displayRepos(data, user);   
    });
  });
};

userFormEl.addEventListener("submit", formSubmitHandler);