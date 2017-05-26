var urlParams = new URLSearchParams(window.location.search);
console.log(urlParams.get('action'));

var fileref=document.createElement('script')
fileref.setAttribute("type","text/javascript")
fileref.setAttribute("src", './project-page/test.js')
