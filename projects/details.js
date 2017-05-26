var urlParams = new URLSearchParams(window.location.search);
console.log(urlParams.get('action'));

var head= document.getElementsByTagName('head')[0];
 var script= document.createElement('script');
 script.type= 'text/javascript';
 script.src= './project-pages/test.js';
 head.appendChild(script);
