/**
 * Created by hs on 2018.4.17.
 */


$(document).ready(function(){
    $(".js_play").click(function () {
        window.open("player");
        //window.location.href = "player";
    })
})
var html = '';

var params = [];

$.each(musicData, function(k,v) {
    params.push({"id":v.id,"title":v.title,"singer":v.singer,"url":v.url,"time":v.time});
    html += '<li class="" mid="'+v.id+'" ix="33">';
    if(k%2 != 0){
        html += '<div class="songlist__item songlist__item--even " onmouseover="this.className=(this.className+\' songlist__item--hover\')" onmouseout="this.className=this.className.replace(/ songlist__item--hover/, \'\')">';
    }else{
        html += '<div class="songlist__item" onmouseover="this.className=(this.className+\' songlist__item--hover\')" onmouseout="this.className=this.className.replace(/ songlist__item--hover/, \'\')">';
    }
    html += '<div class="songlist__edit songlist__edit--check sprite">';
    html += '<input type="checkbox" class="songlist__checkbox">';
    html += '</div>';
    html += '<div class="songlist__songname">';
    html += '<i class="songlist__icon songlist__icon_exclusive sprite" title="独家"></i>';
    html += '<a href="#MV" class="songlist__icon songlist__icon_mv sprite" rel="noopener" title="MV"><span class="icon_txt">MV</span></a>';
    html += '<span class="songlist__songname_txt"><a href="#歌曲详情" class="js_song" title="'+v.title+' ">'+v.title+'</a></span>';
    html += '<div class="mod_list_menu">';
    html += '<a href="javascript:;" class="list_menu__item list_menu__play js_play" title="播放">';
    html += '<i class="list_menu__icon_play"></i>';
    html += '<span class="icon_txt">播放</span>';
    html += '</a>';
    html += '<a href="javascript:;" class="list_menu__item list_menu__add js_fav" title="添加到歌单" aria-haspopup="true">';
    html += '<i class="list_menu__icon_add"></i>';
    html += '<span class="icon_txt">添加到歌单</span>';
    html += '</a>';
    html += '<a href="javascript:;" class="list_menu__item list_menu__down js_down" title="下载" aria-haspopup="true">';
    html += '<i class="list_menu__icon_down"></i>';
    html += '<span class="icon_txt">下载</span>';
    html += '</a>';
    html += '<a href="javascript:;" class="list_menu__item list_menu__share js_share" title="分享" aria-haspopup="true">';
    html += '<i class="list_menu__icon_share"></i>';
    html += '<span class="icon_txt">分享</span>';
    html += '</a></div></div>';
    html += '<div class="songlist__artist">';
    html += '<a href="#歌手详情页面" data-singermid="'+v.id+'" data-singerid="4558" title="'+v.singer+'" class="singer_name">'+v.singer+'</a>';
    html += '</div>';
    html += '<div class="songlist__album">';
    html += '<a data-albummid="" data-albumid="" href="#专辑页面" title="'+v.special+'" class="album_name">'+v.special+'</a>';
    html += '</div>';
    html += '<div class="songlist__time">'+v.time+'</div>';
    html += '<div class="songlist__other">';
    html += '</div>';
    html += '</div>';
    html += '</li>';
});

var json = JSON.stringify(params);
sessionStorage.setItem("musicData",json);


$('.songlist__list').html(html);