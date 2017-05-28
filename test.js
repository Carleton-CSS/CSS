function readTextFile(file)
{ 
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                console.log("hello")
                var allText = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
    document.getElementById("demo").innerHTML = allText
}
