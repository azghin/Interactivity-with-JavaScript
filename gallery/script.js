function upDate(pictur){
    prev = document.getElementById("image").innerHTML;
    document.getElementById("image").innerHTML=pictur.alt;
    document.getElementById("image").style.background="";
    document.getElementById("image").style.backgroundImage="url("+pictur.src+")";
}
function unDo(){
    document.getElementById("image").innerHTML=prev;
    document.getElementById("image").style.background="#8e68ff";

}