var urlParams = new URLSearchParams(window.location.search);
var project = urlParams.get('proj');

var head= document.getElementsByTagName('head')[0];
 var script= document.createElement('script');
 script.type= 'text/javascript';
 script.src= './project-pages/'+project+'.js';
 head.appendChild(script);
