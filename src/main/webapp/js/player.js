var html = "";

$(document).ready(function () {
    var musicData = sessionStorage.getItem("musicData");
    alert(musicData);
    $.each(JSON.parse(musicData), function (k,v) {
        html += '<li mid="'+v.id+'" ix="10" data-page="player" data-stat="y_new.player.songlist.dbclick">';
        html += '<div class="songlist__item">';
        html += '<div class="songlist__edit sprite">';
        html += '<input type="checkbox" class="songlist__checkbox">';
        html += '</div>';
        html += '<div class="songlist__number">'+(k+1)+'</div>';
        html += '<div class="songlist__songname">';
        html += '<span class="songlist__songname_txt" title="'+v.title+'">'+v.title+'</span>';
        html += '<div class="mod_list_menu">';
        html += '<a href="javascript:;" class="list_menu__item list_menu__play js_play" data-stat="y_new.player.songlist.playone" data-page="player" title="播放"><i class="list_menu__icon_play"></i><span class="icon_txt">播放</span></a>';
        html += '<a href="javascript:;" class="list_menu__item list_menu__add js_fav" data-stat="y_new.player.songlist.addone" title="添加到歌单" aria-haspopup="true">';
        html += '<i class="list_menu__icon_add"></i>';
        html += '<span class="icon_txt">添加到歌单</span>';
        html += '</a>';
        html += '<a href="javascript:;" class="list_menu__item list_menu__down js_down" style="display:none;" data-stat="y_new.player.songlist.downloadone" title="下载" aria-haspopup="true">';
        html += '<i class="list_menu__icon_down"></i>';
        html += '<span class="icon_txt">下载</span>';
        html += '</a>';
        html += '<a href="javascript:;" class="list_menu__item list_menu__share js_share" data-stat="y_new.player.songlist.shareone" title="分享" aria-haspopup="true">';
        html += '<i class="list_menu__icon_share"></i>';
        html += '<span class="icon_txt">分享</span>';
        html += '</a></div></div>';
        html += '<div class="songlist__artist">';
        html += '<a href="#歌手详情" data-singermid="004LV0lb4fOw89" data-singerid="1121441" title="'+v.singer+'" data-stat="y_new.player.songlist.singername" class="singer_name" data-page="player">'+v.singer+'</a>';
        html += '</div>';
        html += '<div class="songlist__time">'+v.time+'</div>';
        html += '<div class="songlist__other">';
        html += '</div>';
        html += '<a href="javascript:;" class="songlist__delete js_delete" data-page="player" data-stat="y_new.player.songlist.delete" title="删除"><span class="icon_txt">删除</span></a>';
        html += '<i class="player_songlist__line"></i>';
        html += '</div>';
        html += '</li>';
    });
    $('#song_box').append(html);
})



