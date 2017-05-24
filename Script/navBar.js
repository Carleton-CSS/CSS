/*
 *  homepage.js
 *  Keaton Mertz, 2017
 *
 */

//document.getElementById("image").src = "pic_mountain.jpg";
function myFunction() {
  var navBar = "<ul>";
  var bool = true;
  var currentLocation = window.location.href;  currentLocation = currentLocation.slice(currentLocation.search("CSS/")+4);
  if(currentLocation.length ==0){
    navBar += "<li><a title='Current Page'class='active'>Home</a></li>"
    bool = false;
  }else{
    navBar += "<li><a title='Home Page'href='http://carleton-css.github.io/CSS/'>Home</a></li>";
  }
  if(bool == true && currentLocation.search("projects")==0){
    bool = false;
    navBar +="<li><a class='active' title='Current Page'>Projects</a></li>";
  }else{
    navBar +="<li><a title='Projects Page'href='http://carleton-css.github.io/CSS/projects'>Projects</a></li>";
  }
  if(bool == true && currentLocation.search("database")==0){
    bool = false;
    navBar += "<li><a class='active' title='Current Page'>ICs & Components</a></li>";
  }else{
    navBar +="<li><a title='ICs & Components Page'href='http://carleton-css.github.io/CSS/database'>ICs & Components</a></li>";
  }
  if(bool == true && currentLocation.search("contact")==0){
    bool = false;
    navBar += "<li><a class='active' title='Contact Information'>Contact</a></li>";
  }else{
    navBar +="<li><a title='Contact Information Page'href='http://carleton-css.github.io/CSS/contact'>Contact</a></li>";
  }
  if(bool == true && currentLocation.search("about")==0){
    bool = false;
    navBar += "<li><a class='active' title='Current Page'>About</a></li>";
  }else{
    navBar +="<li><a title='About Us Page'href='http://carleton-css.github.io/CSS/about'>About</a></li>";
  }
  navBar+="<li ><img class='icon' src='./formatting/logo.ico' alt='Carleton College' ></li></ul>";

  document.getElementById('navBar').innerHTML = navBar


}
