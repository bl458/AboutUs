var nrImg = 5;  //the number of img
var IntSeconds = 15;     //the seconds between the imgs

$(document).ready (
function Load()
{
    nrShown = 0;
    Vect = new Array(nrImg + 10);
    Vect[0] = document.getElementById("Img1");
    Vect[0].style.visibility = "visible";


    for (var i = 1; i < nrImg; i++)
    {
        Vect[i] = document.getElementById("Img" + (i + 1));

    }

    document.getElementById("STitle" + nrShown).style.visibility = "visible";
    document.getElementById("SCaption" + nrShown).style.visibility = "visible";

    mytime = setInterval(Timer, IntSeconds * 1000);
});

function Timer()
{
    nrShown++;
    if (nrShown == nrImg)
        nrShown = 0;
    Effect();
}
//next img
function next()
{
    nrShown++;
    if (nrShown == nrImg)
        nrShown = 0;
    Effect();

    clearInterval(mytime);
    mytime = setInterval(Timer, IntSeconds * 1000);
}
function prev()
{
    nrShown--;
    if (nrShown == -1)
        nrShown = nrImg -1;
    Effect();

    clearInterval(mytime);
    mytime = setInterval(Timer, IntSeconds * 1000);
}
//here changes the img + effect
function Effect()
{
    for (var i = 0; i < nrImg; i++)
    {
        Vect[i].style.opacity = "0";   //to add the fade effect
        Vect[i].style.visibility = "hidden";


        document.getElementById("STitle" + i).style.visibility = "hidden";
        document.getElementById("SCaption" + i).style.visibility = "hidden";
    }
    Vect[nrShown].style.opacity = "1";
    Vect[nrShown].style.visibility = "visible";

    document.getElementById("STitle" + nrShown).style.visibility = "visible";
    document.getElementById("SCaption" + nrShown).style.visibility = "visible";
}
