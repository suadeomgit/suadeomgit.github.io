// Function used to shrink nav bar removing paddings and adding black background

$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.nav_hide').addClass('affix1');
        console.log("OK");
    } else {
        $('.nav_hide').removeClass('affix1');
    }
});





function showVal(newVal){
    document.getElementById("sbrightness").innerHTML=newVal;
    console.log(newVal);
    let y = document.getElementById("main-screen");
    y.setAttribute("style", "opacity:"+(0.01*newVal)+" !important");
};

function sendText(){
    let x = document.getElementById("sbrightness").textContent;
    console.log(x)
};


function checkFav(favEle) {
    cover = favEle.getAttribute('cover');
    title = favEle.getAttribute('title');
    artist = favEle.getAttribute('artist');
    duration = favEle.getAttribute('duration');
    id = favEle.getAttribute('id');
    bb = favEle.getAttribute('style');
    console.log(bb);
    if(bb=='background-image: url("./image/Seong/heart2.png");'){
        favEle.setAttribute("style", 'background-image: url("./image/Seong/heart1.png");');
        $('#fav>.music-list-card').remove("."+id+""); 
    }else if(bb=='background-image: url("./image/Seong/heart1.png");'){
        favEle.setAttribute("style", 'background-image: url("./image/Seong/heart2.png");');
        $("#fav").append('<div class="music-list-card '+id+'" @click="playMusic({cover: '+cover+',title: '+title+',artist: '+artist+',duration: '+duration+', id: '+id+'})">\
                            <div class="left-part">\
                                <div class="cover-img round">\
                                    <img src="'+cover+'" alt="'+artist+'" class="round">\
                                </div>\
                            </div>\
                            <div class="right-part">\
                                <div class="music-data">\
                                    <div class="title text-bold">'+title+'</div>\
                                    <div class="artist">'+artist+'</div>\
                                    <div class="duration text-bold">'+duration+'</div>\
                                </div>\
                                <div class="playing-indicator">\
                                </div>\
                                <div class="playing-indicator">\
                                    <div class="fav-blank" onclick="checkFav(this)" \
                                        :cover="'+cover+'" :title="'+title+'" :artist="'+artist+'" :duration="'+duration+'" :id="'+id+'" \
                                        style="background-image: url("./image/Seong/heart2.png")">\
                                    </div>\
                                </div>\
                            </div>\
                        </div>');
    };
};
