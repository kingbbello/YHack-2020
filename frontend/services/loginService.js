const currentDomain = "https://8981fec6adee.ngrok.io"

window.fbAsyncInit = function() {
  FB.init({
    appId      : '{APP-ID}',
    cookie     : true,
    xfbml      : true,
    version    : 'v8.0'
  });
  FB.AppEvents.logPageView();   
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/all.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    if(response.status === "connected") {
      window.location.replace(currentDomain + "/frontend/pages/mainScreen.html"); //Replace w/ link later
    };
  });
}