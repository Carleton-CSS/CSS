/*
 *  homepage.js
 *  Keaton Mertz, 2017
 *
 */

//document.getElementById("image").src = "pic_mountain.jpg";
function navBar() {
  var navBar = "<ul>";
  var bool = true;
  var currentLocation = window.location.href;  currentLocation = currentLocation.slice(currentLocation.search("CSS/")+4);
  if(currentLocation.length ==0){
    navBar += "<li><a title='Current Page'class='active'>Home</a></li>"
    bool = false;
  }else{
    navBar += "<li><a title='Home Page'href='https://carleton-css.github.io/CSS/'>Home</a></li>";
  }
  if(bool == true && currentLocation.search("projects")==0){
    bool = false;
    navBar +="<li class='dropdown active'><a class='dropbtn active' title='Current Page'><i class='down'></i> Projects</a><div class='dropdown-content'> <a classhref='#'>Link 1</a> <a href='#'>Link 2</a> <a href='#'>Link 3</a> </div></li>";
  }else{
    navBar +="<li class='dropdown'><a class='dropbtn' title='Projects Page'href='https://carleton-css.github.io/CSS/projects'><i class='down'></i> Projects</a><div class='dropdown-content' id='projectDrop'></div></li>";
  }
  if(bool == true && currentLocation.search("database")==0){
    bool = false;
    navBar += "<li><a class='active' title='Current Page'>ICs & Components</a></li>";
  }else{
    navBar +="<li><a title='ICs & Components Page'href='https://carleton-css.github.io/CSS/database'>ICs & Components</a></li>";
  }
  if(bool == true && currentLocation.search("contact")==0){
    bool = false;
    navBar += "<li><a class='active' title='Contact Information'>Contact</a></li>";
  }else{
    navBar +="<li><a title='Contact Information Page'href='https://carleton-css.github.io/CSS/contact'>Contact</a></li>";
  }
  if(bool == true && currentLocation.search("about")==0){
    bool = false;
    navBar += "<li><a class='active' title='Current Page'>About</a></li>";
  }else{
    navBar +="<li><a title='About Us Page'href='https://carleton-css.github.io/CSS/about'>About</a></li>";
  }
  navBar+="<li ><img class='icon' src='https://carleton-css.github.io/CSS/formatting/logo.ico' alt='Carleton College' ></li></ul>";

  document.getElementById('navBar').innerHTML = navBar;
  projectDrop();
}


function projectDrop() {
  var projects = ["Analog-Drone-Circuit","Analog Drone Curcuit","3D-POV-Display","3D POV"];
  /*projects.push();*/
  var projectDrop = "";
  while(projects.length>1){
    projectDrop += "<a href='https://carleton-css.github.io/CSS/projects/"+projects.shift()+"'>"+projects.shift()+"</a>";
  }
  document.getElementById("projectDrop").innerHTML = projectDrop;
  /*var file = new XMLHttpRequest();
  file.open("GET", "./projects/projectDrop.txt", true);
  console.log(file.readyState);
  file.onreadystatechange = function() {
    console.log(file.readyState);
    if (file.readyState === 4) {  // Makes sure the document is ready to parse
      if (file.status === 200) {  // Makes sure it's found the file
        text = file.responseText;
        console.log(text);
        document.getElementById("projectDrop").innerHTML = text;
      }
      }
    }*/
}
