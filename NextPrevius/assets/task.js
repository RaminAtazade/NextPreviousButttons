// alert("cdldsvnukdlfvndfvdf;lvnhfd;lbndfl bbndl;b");


  
function changeImg(el){
    var img = el.parentElement.previousElementSibling;
    img.setAttribute('src', el.getAttribute("src"));
}

function nextImg(){
    var row = document.querySelector(".row");
    var mainImg = row.previousElementSibling;
    let activeImg;
    for (var item of row.children) {
        if (item.src == mainImg.src) {
            activeImg = item;
            break;
        }
    }
    changeImg(activeImg.nextElementSibling)
}

function previousImg(){
    var row = document.querySelector(".row");
    var mainImg = row.previousElementSibling;
    let activeImg;
    for (var item of row.children) {
        if (item.src == mainImg.src) {
            activeImg = item;
            break;
        }
    }
    changeImg(activeImg.previousElementSibling)
}