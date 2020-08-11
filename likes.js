var li;
var dl;
function like(pos){
    li=parseInt(document.getElementById(pos).innerHTML);
    li =li +1;
    document.getElementById(pos).innerHTML= li ;

}

function dislike(pos){
    dl=parseInt(document.getElementById(pos).innerHTML);
    dl=dl+1;;
    document.getElementById(pos).innerHTML= dl ;
}