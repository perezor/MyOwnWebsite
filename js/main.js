const GITHUB_URL = "https://api.github.com/users/perezor";

  fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function (data) {
    const profileImage = document.getElementById("profile-image");
    const profileName = document.querySelector('.profile-name');
    profileImage.src = data.avatar_url;
    profileName.src = data.login;
  });





 
  