define("js/v4/search.js", function (a) {
    var n = a("js/common/music.js"), s = null, l = n.$;
    window.MUSIC = n;
    var t = a("js/common/music/storage.js"), e = n.user, r = {
        doFollow: function (a, s) {
            function i() {
                "function" == typeof errCallback ? errCallback() : n.popup.show("请稍后重试!", 3e3, 1)
            }

            a.formsender = 1;
            var l = "//c.y.qq.com/rsc/fcgi-bin/add_attention_status.fcg", t = new n.FormSender(l, "post", a, "gb2312");
            t.onSuccess = function (a) {
                s && s(a)
            }, t.onError = i, t.send()
        }, showNum: function (a) {
            return "粉丝：" + (+a / 1e8 > 1 ? (+a / 1e8).toFixed(1) + "亿" : +a / 1e4 > 1 ? (+a / 1e4).toFixed(1) + "万" : a)
        }
    }, c = function () {
        function a(a) {
            var n = [];
            return n.push(o.keyword.cut(40, " ")), n.push(o._searchid), n.push("common "), n.push("0"), n.push(a.action || "click"), n.push(a.pos || "1"), n.push(a.docid || ""), n.push(a.text.cut(40, " ") || ""), n.push("users"), n.push(""), n.push(""), encodeURIComponent(n.join("|_|"))
        }

        function n(a) {
            var n = new Image;
            n.src = a, n.onload = n.onerror = function () {
                n = null
            }
        }

        var s = "//c.y.qq.com/soso/fcgi-bin/fcg_click_log.fcg?pu=%(pu)&remoteplace=%(remoteplace)&platform=2&test_id=0&bak1=0&bak2=0&bak3=&bak4=";
        return {
            send: function (i) {
                var l = s.jstpl_format({pu: a(i), remoteplace: o.remoteplace});
                n(l)
            }
        }
    }(), o = {
        keyword: "",
        defaultPager: {
            song: {cur_page: 1, per_page: 20, total_page: 1, total_num: 0, max_num: 420},
            album: {cur_page: 1, per_page: 30, total_page: 1, total_num: 0, max_num: 100},
            mv: {cur_page: 1, per_page: 28, total_page: 1, total_num: 0, max_num: 100},
            playlist: {cur_page: 1, per_page: 21, total_page: 1, total_num: 0, max_num: 100},
            user: {cur_page: 1, per_page: 30, total_page: 1, total_num: 0, max_num: 100},
            lyric: {cur_page: 1, per_page: 10, total_page: 1, total_num: 0, max_num: 100}
        },
        Pager: {
            song: {cur_page: 1, per_page: 20, total_page: 1, total_num: 0, max_num: 420},
            album: {cur_page: 1, per_page: 30, total_page: 1, total_num: 0, max_num: 100},
            mv: {cur_page: 1, per_page: 28, total_page: 1, total_num: 0, max_num: 100},
            playlist: {cur_page: 1, cur_page_playlist: 0, per_page: 21, total_page: 1, total_num: 0, max_num: 100},
            user: {cur_page: 1, per_page: 30, total_page: 1, total_num: 0, max_num: 100},
            lyric: {cur_page: 1, per_page: 10, total_page: 1, total_num: 0, max_num: 100}
        },
        _searchid: "",
        searchid: "1",
        remoteplace: "yqq.yqq.yqq",
        curTab: "song",
        type_map: {song: 1, album: 2, mv: 3, playlist: 4, user: 5, lyric: 6},
        URL: {
            song: "//c.y.qq.com/soso/fcgi-bin/client_search_cp?ct=24&qqmusic_ver=1298&new_json=1&remoteplace=%(remoteplace)&searchid=%(searchid)&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=%(cur_page)&n=%(per_page)&w=",
            album: "//c.y.qq.com/soso/fcgi-bin/client_search_cp?ct=24&qqmusic_ver=1298&remoteplace=%(remoteplace)&searchid=%(searchid)&aggr=0&catZhida=1&lossless=0&sem=10&t=8&p=%(cur_page)&n=%(per_page)&w=",
            mv: "//c.y.qq.com/soso/fcgi-bin/client_search_cp?ct=24&qqmusic_ver=1298&remoteplace=%(remoteplace)&searchid=%(searchid)&aggr=0&catZhida=1&lossless=0&sem=1&t=12&p=%(cur_page)&n=%(per_page)&w=",
            playlist: "//c.y.qq.com/soso/fcgi-bin/client_music_search_songlist?remoteplace=%(remoteplace)&searchid=%(searchid)&flag_qc=0&page_no=%(cur_page_playlist)&num_per_page=%(per_page)&query=",
            user: "//c.y.qq.com/soso/fcgi-bin/client_search_user?ct=24&qqmusic_ver=1298&p=%(cur_page)&n=%(per_page)&searchid=%(searchid)&remoteplace=%(remoteplace)&w=",
            lyric: "//c.y.qq.com/soso/fcgi-bin/client_search_cp?ct=24&qqmusic_ver=1298&remoteplace=%(remoteplace)&searchid=%(searchid)&aggr=0&catZhida=1&lossless=0&sem=1&t=7&p=%(cur_page)&n=%(per_page)&w="
        },
        template: {
            song: function (a) {
                {
                    var s, l = "";
                    Array.prototype.join
                }
                l += '\r\n<div class="mod_songlist_toolbar">\r\n	<a href="javascript:;" class="mod_btn js_all_play"><i class="mod_btn__icon_play"></i>播放全部</a>\r\n	<a href="javascript:;" class="mod_btn js_all_fav"><i class="mod_btn__icon_add"></i>添加到</a>\r\n	<a href="javascript:;" class="mod_btn js_all_down"><i class="mod_btn__icon_down"></i>下载</a>\r\n	<a href="javascript:;" class="mod_btn js_batch"><i class="mod_btn__icon_batch"></i>批量操作</a>\r\n</div>\r\n<div class="mod_songlist">\r\n	<ul class="songlist__header">\r\n	    <li class="songlist__edit songlist__edit--check sprite">\r\n		<input type="checkbox" class="songlist__checkbox js_check_all"/>\r\n	    </li>\r\n		<li class="songlist__header_name">歌曲</li>\r\n		<li class="songlist__header_author">歌手</li>\r\n		<li class="songlist__header_album">专辑</li>\r\n		<li class="songlist__header_time">时长</li>\r\n	</ul>\r\n	<ul class="songlist__list">\r\n';
                var t = a.list;
                for (i = 0; i < t.length; i++) {
                    l += '\r\n	<li class="', t[i].grp && t[i].grp.length > 0 && (l += "js_songlist__child"), l += '" mid="' + (null == (s = t[i].songid || t[i].docid) ? "" : s) + '" ix="' + (null == (s = t[i].ix) ? "" : s) + '">\r\n		<!-- \r\n		hover : songlist__item--hover\r\n		偶数行：songlist__item--even \r\n		-->\r\n		<div class="songlist__item', t[i].disabled && (l += " songlist__item--disable "), l += "", i % 2 && (l += " songlist__item--even "), l += '" onmouseover="this.className=(this.className+\' songlist__item--hover\')" onmouseout="this.className=this.className.replace(/ songlist__item--hover/, \'\')">\r\n		    <div class="songlist__edit songlist__edit--check sprite">\r\n			<input type="checkbox" class="songlist__checkbox"/>\r\n		    </div>\r\n		    <div class="songlist__songname">\r\n		    ', 1 == t[i].isonly && (l += '\r\n			<i class="songlist__icon songlist__icon_exclusive sprite" title="独家"></i>\r\n		    '), l += "\r\n		    ", t[i].vid && (l += ' \r\n			<a href="' + (null == (s = n.util.getMvUrl(t[i].vid)) ? "" : s) + '" class="songlist__icon songlist__icon_mv sprite" rel="noopener" target="_blank" title="MV"><span class="icon_txt">MV</span></a>\r\n		    '), l += ' \r\n			<span class="songlist__songname_txt"><a href="' + (null == (s = n.util.getSongUrl(t[i])) ? "" : s) + '" class="js_song" title="' + (null == (s = t[i].title) ? "" : _.escape(s)) + " " + (null == (s = t[i].songsubtitle || t[i].albumdesc) ? "" : _.escape(s)) + '">' + (null == (s = t[i].title_hilight.replace(/<em>/gi, '<span class="c_tx_highlight">').replace(/<\/em>/gi, "</span>")) ? "" : s), (t[i].songsubtitle || t[i].albumdesc) && (l += '<span class="songlist__song_txt">' + (null == (s = t[i].songsubtitle || t[i].albumdesc) ? "" : _.escape(s)) + "</span>"), l += "</a></span>\r\n			", t[i].grp && t[i].grp.length > 0 && (l += '<span class="songlist__child_num">(' + (null == (s = t[i].grp.length) ? "" : s) + ")</span>"), l += '\r\n			<div class="mod_list_menu">\r\n			    <a href="javascript:;" class="list_menu__item list_menu__play js_play" title="播放">\r\n				<i class="list_menu__icon_play"></i>\r\n				<span class="icon_txt">播放</span>\r\n			    </a>\r\n			    <a href="javascript:;" class="list_menu__item list_menu__add js_fav" title="添加到歌单" aria-haspopup="true">\r\n				<i class="list_menu__icon_add"></i>\r\n				<span class="icon_txt">添加到歌单</span>\r\n			    </a>\r\n			    <a href="javascript:;" class="list_menu__item list_menu__down js_down" title="下载" aria-haspopup="true">\r\n				<i class="list_menu__icon_down"></i>\r\n				<span class="icon_txt">下载</span>\r\n			    </a>\r\n			    <a href="javascript:;" class="list_menu__item list_menu__share js_share" title="分享" aria-haspopup="true">\r\n				<i class="list_menu__icon_share"></i>\r\n				<span class="icon_txt">分享</span>\r\n			    </a>\r\n			</div>\r\n		    </div>\r\n		    <div class="songlist__artist">\r\n			';
                    for (var e = 0, r = t[i].singer.length; r > e; e++) {
                        var c = t[i].singer[e];
                        l += "\r\n			", e > 0 && (l += "/"), l += '\r\n			<a href="' + (null == (s = n.util.getSingerUrl(c)) ? "" : s) + '" data-singermid="' + (null == (s = c.mid) ? "" : s) + '" data-singerid="' + (null == (s = c.id) ? "" : s) + '" title="' + (null == (s = c.title) ? "" : _.escape(s)) + '" class="singer_name">' + (null == (s = c.title_hilight.replace(/<em>/gi, '<span class="c_tx_highlight">').replace(/<\/em>/gi, "</span>")) ? "" : s) + "</a>\r\n			"
                    }
                    if (l += '\r\n		    </div>\r\n		    <div class="songlist__album">\r\n			<a data-albummid="' + (null == (s = t[i].albummid) ? "" : s) + '" data-albumid="' + (null == (s = t[i].albumid) ? "" : s) + '" href="' + (null == (s = n.util.getAlbumUrl(t[i])) ? "" : s) + '" title="' + (null == (s = t[i].album.title) ? "" : _.escape(s)) + '" class="album_name">' + (null == (s = t[i].album.title_hilight.replace(/<em>/gi, '<span class="c_tx_highlight">').replace(/<\/em>/gi, "</span>")) ? "" : s) + '</a>\r\n		    </div>\r\n		    <div class="songlist__time">' + (null == (s = t[i].playTime) ? "" : s) + '</div>\r\n		    <div class="songlist__other">\r\n			', 1 == t[i].action.soso && (l += '\r\n			<a href="javascript:;" class="icon_sosomusic sprite">无版权</a>\r\n			'), l += "\r\n			", t[i].grp && t[i].grp.length > 0 && (l += '\r\n			<button class="icon_song_group icon_song_group--up sprite" onclick="song_group(this, event);"><span class="icon_txt" title="(' + (null == (s = t[i].grp.length) ? "" : s) + ')">展开</span></button>\r\n			'), l += "\r\n		    </div>\r\n		</div>\r\n		", t[i].grp && t[i].grp.length > 0) {
                        l += '\r\n		<ul class="songlist__list" style="display:none;">\r\n		';
                        for (var o = 0, u = t[i].grp.length; u > o; o++) {
                            var m = t[i].grp[o];
                            l += '		    <li class="" mid="' + (null == (s = m.songid) ? "" : s) + '" ix="' + (null == (s = m.ix) ? "" : s) + '">\r\n			<div class="js_child songlist__item', m.disabled && (l += " songlist__item--disable "), l += "", i % 2 && (l += " songlist__item--even "), l += '" onmouseover="this.className=(this.className+\' songlist__item--hover\')" onmouseout="this.className=this.className.replace(/ songlist__item--hover/, \'\')">\r\n			    <div class="songlist__edit sprite">\r\n				<input type="checkbox" class="songlist__checkbox"/>\r\n			    </div>\r\n\r\n			    <div class="songlist__songname">\r\n			    ', 1 == m.isonly && (l += '\r\n				<i class="songlist__icon songlist__icon_exclusive sprite" title="独家"></i>\r\n			    '), l += "\r\n			    ", m.vid && (l += ' \r\n				<a href="' + (null == (s = n.util.getMvUrl(m.vid)) ? "" : s) + '" class="songlist__icon songlist__icon_mv sprite" rel="noopener" target="_blank" title="MV"><span class="icon_txt">MV</span></a>\r\n			    '), l += ' \r\n				<span class="songlist__songname_txt"><a href="' + (null == (s = n.util.getSongUrl(m)) ? "" : s) + '" class="js_song"  title="' + (null == (s = m.title) ? "" : _.escape(s)) + " " + (null == (s = m.songsubtitle || m.albumdesc) ? "" : _.escape(s)) + '">' + (null == (s = m.title_hilight.replace(/<em>/gi, '<span class="c_tx_highlight">').replace(/<\/em>/gi, "</span>")) ? "" : s), (m.songsubtitle || m.albumdesc) && (l += '<span class="songlist__song_txt">' + (null == (s = m.songsubtitle || m.albumdesc) ? "" : _.escape(s)) + "</span>"), l += '</a></span>\r\n				<div class="mod_list_menu">\r\n				    <a href="javascript:;" class="list_menu__item list_menu__play js_play" title="播放">\r\n					<i class="list_menu__icon_play"></i>\r\n					<span class="icon_txt">播放</span>\r\n				    </a>\r\n				    <a href="javascript:;" class="list_menu__item list_menu__add js_fav" title="添加到歌单" aria-haspopup="true">\r\n					<i class="list_menu__icon_add"></i>\r\n					<span class="icon_txt">添加到歌单</span>\r\n				    </a>\r\n				    <a href="javascript:;" class="list_menu__item list_menu__down js_down" title="下载" aria-haspopup="true">\r\n					<i class="list_menu__icon_down"></i>\r\n					<span class="icon_txt">下载</span>\r\n				    </a>\r\n				    <a href="javascript:;" class="list_menu__item list_menu__share js_share" title="分享" aria-haspopup="true">\r\n					<i class="list_menu__icon_share"></i>\r\n					<span class="icon_txt">分享</span>\r\n				    </a>\r\n				</div>\r\n			    </div>\r\n			    <div class="songlist__artist">\r\n				';
                            for (var e = 0, r = m.singer.length; r > e; e++) {
                                var c = m.singer[e];
                                l += "\r\n				", e > 0 && (l += "/"), l += '\r\n				<a href="' + (null == (s = n.util.getSingerUrl(c)) ? "" : s) + '" data-singermid="' + (null == (s = c.mid) ? "" : s) + '" data-singerid="' + (null == (s = c.id) ? "" : s) + '" title="' + (null == (s = c.title) ? "" : _.escape(s)) + '" class="singer_name">' + (null == (s = c.title_hilight.replace(/<em>/gi, '<span class="c_tx_highlight">').replace(/<\/em>/gi, "</span>")) ? "" : s) + "</a>\r\n				"
                            }
                            l += '\r\n			    </div>\r\n			    <div class="songlist__album">\r\n			<a data-albummid="' + (null == (s = m.albummid) ? "" : s) + '" data-albumid="' + (null == (s = m.albumid) ? "" : s) + '" href="' + (null == (s = n.util.getAlbumUrl(m)) ? "" : s) + '" title="' + (null == (s = m.album.title) ? "" : _.escape(s)) + '" class="album_name">' + (null == (s = m.album.title_hilight.replace(/<em>/gi, '<span class="c_tx_highlight">').replace(/<\/em>/gi, "</span>")) ? "" : s) + '</a>\r\n			    </div>\r\n			    <div class="songlist__time">' + (null == (s = t[i].playTime) ? "" : s) + '</div>\r\n			    <div class="songlist__other">\r\n				', 1 == m.action.soso && (l += '\r\n				<a href="javascript:;" class="icon_sosomusic sprite">无版权</a>\r\n				'), l += "\r\n			    </div>\r\n			</div>\r\n		    </li>\r\n		    "
                        }
                        l += "\r\n		</ul>\r\n		"
                    }
                    l += "\r\n		</li>\r\n	"
                }
                return l += "\r\n	</ul>\r\n</div>"
            }, album: function (a) {
                {
                    var s, l = "";
                    Array.prototype.join
                }
                l += '\r\n                    <div class="mod_playlist_text">\r\n                        <ul class="playlist__header">\r\n                            <li class="playlist__header_name">专辑</li>\r\n                            <li class="playlist__header_author">歌手</li>\r\n                            <li class="playlist__header_other">发行时间</li>\r\n                        </ul>\r\n                        <ul class="playlist__list">\r\n			';
                var t = a.list;
                for (i = 0; i < t.length; i++) {
                    var e = t[i];
                    l += '\r\n                            <li class="playlist__item', i % 2 && (l += " playlist__item--even "), l += '" data-albummid="' + (null == (s = e.albumMID) ? "" : s) + '" onmouseover="this.className=(this.className+\' playlist__item--hover\')" onmouseout="this.className=this.className.replace(/ playlist__item--hover/, \'\')">\r\n                                <div class="playlist__cover"><a href="' + (null == (s = n.util.getAlbumUrl({albummid: e.albumMID})) ? "" : s) + '" class="js_album" data-albummid="' + (null == (s = e.albumMID) ? "" : s) + '"><img data-original="' + (null == (s = n.util.getAlbumPic({
                            mid: e.albumMID,
                            type: 90
                        })) ? "" : s) + '" src="//y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000" onerror="this.src=\'//y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000\';this.onerror=null;" alt="' + (null == (s = e.albumName) ? "" : _.escape(s)) + '" class="playlist__pic"/></a></div>\r\n                                <h4 class="playlist__title"><span class="playlist__title_txt"><a href="' + (null == (s = n.util.getAlbumUrl({albummid: e.albumMID})) ? "" : s) + '" class="js_album" data-albummid="' + (null == (s = e.albumMID) ? "" : s) + '" title="' + (null == (s = e.albumName) ? "" : _.escape(s)) + '">' + (null == (s = e.albumName_hilight.replace(/<em>/gi, '<span class="c_tx_highlight">').replace(/<\/em>/gi, "</span>")) ? "" : s) + '</a></span></h4>\r\n                                <div class="mod_list_menu">\r\n                                    <a href="javascript:;" class="list_menu__item list_menu__play js_play" title="播放">\r\n                                        <i class="list_menu__icon_play"></i>\r\n                                        <span class="icon_txt">播放</span>\r\n                                    </a>\r\n                                    <a href="javascript:;" class="list_menu__item list_menu__add js_fav" title="添加到歌单">\r\n                                        <i class="list_menu__icon_add"></i>\r\n                                        <span class="icon_txt">添加到歌单</span>\r\n                                    </a>\r\n                                    <a href="javascript:;" class="list_menu__item list_menu__down js_down" title="下载">\r\n                                        <i class="list_menu__icon_down"></i>\r\n                                        <span class="icon_txt">下载</span>\r\n                                    </a>\r\n                                    <a href="javascript:;" class="list_menu__item list_menu__share js_share" title="分享">\r\n                                        <i class="list_menu__icon_share"></i>\r\n                                        <span class="icon_txt">分享</span>\r\n                                    </a>\r\n                                </div>\r\n                                <div class="playlist__author">\r\n                                    <a href="' + (null == (s = n.util.getSingerUrl({singermid: e.singerMID})) ? "" : s) + '" class="js_singer" data-singermid="' + (null == (s = e.singerMID) ? "" : s) + '" title="' + (null == (s = e.singerName) ? "" : _.escape(s)) + '">' + (null == (s = e.singerName_hilight.replace(/<em>/gi, '<span class="c_tx_highlight">').replace(/<\/em>/gi, "</span>")) ? "" : s) + '</a>\r\n                                </div>\r\n                                <div class="playlist__other">\r\n                                    ' + (null == (s = e.publicTime) ? "" : s) + "\r\n                                </div>\r\n                            </li>\r\n			"
                }
                return l += "\r\n                        </ul>\r\n                    </div>"
            }, mv: function (a) {
                function s(a) {
                    var n = parseInt(a / 60, 10), s = a % 60;
                    return (10 > n ? "0" + n : n) + ":" + (10 > s ? "0" + s : s)
                }

                {
                    var l, t = "";
                    Array.prototype.join
                }
                t += '\r\n                    <div class="mod_mv_list">\r\n                        <ul class="mv_list__list">\r\n			';
                var e = a.list;
                for (i = 0; i < e.length; i++) {
                    var r = e[i];
                    t += '\r\n                            <li class="mv_list__item" data-vid="' + (null == (l = r.v_id) ? "" : l) + '" data-id="' + (null == (l = r.mv_id) ? "" : l) + '">\r\n                                <div class="mv_list__item_box">\r\n                                    <a href="' + (null == (l = n.util.getMvUrl(r.v_id)) ? "" : l) + '" class="mv_list__cover mod_cover js_mv" data-vid="' + (null == (l = r.v_id) ? "" : l) + '" data-id="' + (null == (l = r.mv_id) ? "" : l) + '" hidefocus="true">\r\n                                        <img class="mv_list__pic" data-original="', t += r.mv_pic_url ? "" + (null == (l = r.mv_pic_url) ? "" : l) : "//shp.qpic.cn/qqvideo_ori/0/" + (null == (l = r.v_id) ? "" : l) + "_360_204/0", t += '" src="//y.gtimg.cn/mediastyle/global/img/mv_300.png?max_age=31536000" onerror="this.src=\'//y.gtimg.cn/mediastyle/global/img/mv_300.png?max_age=31536000\';this.onerror=null;" alt="' + (null == (l = r.mv_name) ? "" : _.escape(l)) + '">\r\n                                        <i class="mod_cover__icon_play"></i>\r\n					<!--div class="mv_list__time">' + (null == (l = 0 == r.duration ? "" : s(r.duration)) ? "" : l) + '</div-->\r\n                                    </a>\r\n                                    <h3 class="mv_list__title"><a href="' + (null == (l = n.util.getMvUrl(r.v_id)) ? "" : l) + '" class="js_mv" data-vid="' + (null == (l = r.v_id) ? "" : l) + '" data-id="' + (null == (l = r.mv_id) ? "" : l) + '" title="' + (null == (l = r.mv_name) ? "" : _.escape(l)) + '">' + (null == (l = r.mvName_hilight.replace(/<em>/gi, '<span class="c_tx_highlight">').replace(/<\/em>/gi, "</span>")) ? "" : l) + '</a></h3>\r\n                                    <p class="mv_list__singer"><a href="' + (null == (l = n.util.getSingerUrl({mid: r.singerMID})) ? "" : l) + '" class="js_singer" data-singermid="' + (null == (l = r.singerMID) ? "" : l) + '" data-singerid="' + (null == (l = r.singerid) ? "" : l) + '" title="' + (null == (l = r.singer_name) ? "" : _.escape(l)) + '">' + (null == (l = r.singerName_hilight.replace(/<em>/gi, '<span class="c_tx_highlight">').replace(/<\/em>/gi, "</span>")) ? "" : l) + "</a></p>\r\n                                </div>\r\n                            </li>\r\n			"
                }
                return t += "\r\n                        </ul>\r\n                    </div>"
            }, playlist: function (a) {
                {
                    var s, l = "";
                    Array.prototype.join
                }
                l += '\r\n                    <div class="mod_playlist_text">\r\n                        <ul class="playlist__header">\r\n                            <li class="playlist__header_name">歌单</li>\r\n                            <li class="playlist__header_author">创建人</li>\r\n                            <li class="playlist__header_other">收听</li>\r\n                        </ul>\r\n                        <ul class="playlist__list">\r\n			';
                var t = a.list;
                for (i = 0; i < t.length; i++) {
                    var e = t[i];
                    l += '\r\n                            <li class="playlist__item', i % 2 && (l += " playlist__item--even "), l += '" data-disstid="' + (null == (s = e.dissid) ? "" : s) + '" onmouseover="this.className=(this.className+\' playlist__item--hover\')" onmouseout="this.className=this.className.replace(/ playlist__item--hover/, \'\')">\r\n                                <div class="playlist__cover"><a href="' + (null == (s = n.util.getPlaylistUrl(e.dissid)) ? "" : s) + '" class="js_playlist" data-disstid="' + (null == (s = e.dissid) ? "" : s) + '"><img data-original="' + (null == (s = e.imgurl) ? "" : _.escape(s)) + '" onerror="this.src=\'//y.gtimg.cn/mediastyle/global/img/playlist_300.png?max_age=31536000\';this.onerror=null;" src="//y.gtimg.cn/mediastyle/global/img/playlist_300.png?max_age=31536000" alt="' + (null == (s = e.dissname) ? "" : _.escape(s)) + '" class="playlist__pic"/></a></div>\r\n                                <h4 class="playlist__title"><span class="playlist__title_txt"><a href="' + (null == (s = n.util.getPlaylistUrl(e.dissid)) ? "" : s) + '" class="js_playlist" data-disstid="' + (null == (s = e.dissid) ? "" : s) + '" title="' + (null == (s = e.dissname) ? "" : _.escape(s)) + '">' + (null == (s = e.dissname) ? "" : _.escape(s)) + '</a></span></h4>\r\n                                <div class="mod_list_menu">\r\n                                    <a href="javascript:;" class="list_menu__item list_menu__play js_play" title="播放">\r\n                                        <i class="list_menu__icon_play"></i>\r\n                                        <span class="icon_txt">播放</span>\r\n                                    </a>\r\n                                    <a href="javascript:;" class="list_menu__item list_menu__add js_fav" title="添加到歌单">\r\n                                        <i class="list_menu__icon_add"></i>\r\n                                        <span class="icon_txt">添加到歌单</span>\r\n                                    </a>\r\n                                    <a href="javascript:;" class="list_menu__item list_menu__down js_down" title="下载">\r\n                                        <i class="list_menu__icon_down"></i>\r\n                                        <span class="icon_txt">下载</span>\r\n                                    </a>\r\n                                    <a href="javascript:;" class="list_menu__item list_menu__share js_share" title="分享">\r\n                                        <i class="list_menu__icon_share"></i>\r\n                                        <span class="icon_txt">分享</span>\r\n                                    </a>\r\n                                </div>\r\n                                <div class="playlist__author">\r\n				', l += "" != e.creator.singermid && "undefined" != typeof e.creator.singermid ? '\r\n                                    <a href="' + (null == (s = n.util.getSingerUrl(e.creator)) ? "" : s) + '" class="js_singer" data-singermid="' + (null == (s = e.creator.singermid) ? "" : s) + '" title="' + (null == (s = e.creator.name) ? "" : _.escape(s)) + '">' + (null == (s = e.creator.name) ? "" : _.escape(s)) + "</a>\r\n				" : '\r\n                                    <a href="//y.qq.com/portal/profile.html?uin=' + (null == (s = e.creator.encrypt_uin || e.creator.qq) ? "" : s) + '" class="js_user" data-uin="' + (null == (s = e.creator.encrypt_uin || e.creator.qq) ? "" : s) + '" title="' + (null == (s = e.creator.name) ? "" : _.escape(s)) + '">' + (null == (s = e.creator.name) ? "" : _.escape(s)) + "</a>\r\n				", l += '\r\n                                </div>\r\n                                <div class="playlist__other">\r\n				    ' + (null == (s = parseInt(e.listennum, 10) >= 1e4 ? ((e.listennum / 1e4).toFixed(1) + "万").replace(".0万", "万") : e.listennum) ? "" : s) + "\r\n                                </div>\r\n                            </li>\r\n			"
                }
                return l += "\r\n                        </ul>\r\n                    </div>"
            }, lyric: function (a) {
                {
                    var s, l = "";
                    Array.prototype.join
                }
                l += '		<div class="mod_lyric_list">\r\n                        <ul class="lyric_list__list">\r\n			';
                var t = a.list;
                for (i = 0; i < t.length; i++) {
                    var e = t[i].content.replace(/<br\/>/g, "</p><p>").replace(/&lt;br\/&gt;/g, "</p><p>").replace(/&lt;strong class=&quot;keyword&quot;&gt;/g, '<span class="c_tx_highlight">').replace(/&lt;\/strong&gt;/g, "</span>"),
                        r = t[i].content.replace(/<br\/>/g, "\n").replace(/&lt;br\/&gt;/g, "\n").replace(/&lt;strong class=&quot;keyword&quot;&gt;/g, "").replace(/&lt;\/strong&gt;/g, "");
                    l += '\r\n                            <li class="lyric_list__item" mid="' + (null == (s = t[i].songid) ? "" : s) + '" ix="' + (null == (s = t[i].ix) ? "" : s) + '">\r\n                                <h3 class="lyric_list__tit"><a href="' + (null == (s = n.util.getSongUrl(t[i])) ? "" : s) + '" title="' + (null == (s = t[i].songname) ? "" : _.escape(s)) + '">' + (null == (s = t[i].songname_hilight.replace(/<em>/gi, '<span class="c_tx_highlight">').replace(/<\/em>/gi, "</span>")) ? "" : s) + "</a>－\r\n					";
                    for (var c = 0, o = t[i].singer.length; o > c; c++) {
                        var u = t[i].singer[c];
                        l += "\r\n					", c > 0 && (l += "/"), l += '\r\n					<a href="' + (null == (s = n.util.getSingerUrl(u)) ? "" : s) + '" data-singermid="' + (null == (s = u.mid) ? "" : s) + '" data-singerid="' + (null == (s = u.id) ? "" : s) + '" title="' + (null == (s = u.name) ? "" : _.escape(s)) + '" class="singer_name">' + (null == (s = u.name_hilight.replace(/<em>/gi, '<span class="c_tx_highlight">').replace(/<\/em>/gi, "</span>")) ? "" : s) + "</a>\r\n					"
                    }
                    l += '\r\n				</h3>\r\n                                <h4 class="lyric_list__album"><a data-albummid="' + (null == (s = t[i].albummid) ? "" : s) + '" data-albumid="' + (null == (s = t[i].albumid) ? "" : s) + '" href="' + (null == (s = n.util.getAlbumUrl(t[i])) ? "" : s) + '" title="' + (null == (s = t[i].albumname) ? "" : _.escape(s)) + '" class="album_name">' + (null == (s = t[i].albumname_hilight.replace(/<em>/gi, '<span class="c_tx_highlight">').replace(/<\/em>/gi, "</span>")) ? "" : s) + '</a></h4>\r\n                                <div class="mod_list_menu">\r\n                                    <a href="javascript:;" class="list_menu__item list_menu__play js_play" title="播放">\r\n                                        <i class="list_menu__icon_play"></i>\r\n                                        <span class="icon_txt">播放</span>\r\n                                    </a>\r\n                                    <a href="javascript:;" class="list_menu__item list_menu__add js_fav" title="添加到歌单">\r\n                                        <i class="list_menu__icon_add"></i>\r\n                                        <span class="icon_txt">添加到歌单</span>\r\n                                    </a>\r\n                                    <a href="javascript:;" class="list_menu__item list_menu__down js_down" title="下载">\r\n                                        <i class="list_menu__icon_down"></i>\r\n                                        <span class="icon_txt">下载</span>\r\n                                    </a>\r\n                                    <a href="javascript:;" class="list_menu__item list_menu__share js_share" title="分享">\r\n                                        <i class="list_menu__icon_share"></i>\r\n                                        <span class="icon_txt">分享</span>\r\n                                    </a>\r\n                                </div>\r\n                                <!-- 展开 lyric_list__cont--max -->\r\n                                <div class="lyric_list__cont">\r\n                                    <p>' + (null == (s = e.replace(/<em>/gi, '<span class="c_tx_highlight">').replace(/<\/em>/gi, "</span>").replace(/\\n/gi, "<br/>")) ? "" : s) + '</p>\r\n                                </div>\r\n                                <div class="lyric_list__toolbar">\r\n                                    <button class="mod_btn js_clip"><i class="mod_btn__icon_more"></i>展开</button>\r\n                                    <button class="mod_btn js_lyric_copy" data-clipboard-text="' + (null == (s = r) ? "" : s) + '"><i class="mod_btn__icon_copy"></i>复制歌词</button>\r\n                                    <button class="mod_btn js_lyric_download" data-songname="' + (null == (s = t[i].songname) ? "" : _.escape(s)) + '" data-singername="' + (null == (s = t[i].singer[0].name) ? "" : _.escape(s)) + '"><i class="mod_btn__icon_down"></i>下载歌词</button>\r\n                                </div>\r\n                            </li>\r\n                        '
                }
                return l += "\r\n			</ul>\r\n                    </div>"
            }, user: function (a) {
                {
                    var n, s = "";
                    Array.prototype.join
                }
                s += '\r\n                    <div class="mod_singer_list_text">\r\n                        <ul class="singer_list__list">\r\n			';
                var l = a.list;
                for (i = 0; i < l.length; i++) {
                    var t = l[i];
                    s += '\r\n                            <li class="singer_list__item', i % 2 && (s += " even "), s += '" data-docid="' + (null == (n = t.docid) ? "" : n) + '" data-pos="' + (null == (n = a.per_page * (a.curpage - 1) + i + 1) ? "" : n) + '">\r\n\r\n                                <h4 class="singer_list__title">\r\n                                    <div class="singer_list__cover"><a href="javascript:;" class="js_user" data-uin="' + (null == (n = t.encrypt_uin) ? "" : n) + '">\r\n                                        <img data-original="', s += t.pic ? "" + (null == (n = t.pic) ? "" : n) : "//y.gtimg.cn/mediastyle/global/img/person_300.png?max_age=31536000", s += '" src="//y.gtimg.cn/mediastyle/global/img/person_300.png?max_age=31536000" onerror="this.src=\'//y.gtimg.cn/mediastyle/global/img/person_300.png?max_age=31536000\';this.onerror=null;" alt="' + (null == (n = t.title) ? "" : _.escape(n)) + '" class="singer_list__pic"/>\r\n					', t.iconurl && (s += '\r\n                                        <img src="' + (null == (n = t.iconurl) ? "" : n) + '" class="singer_list__cover_icon">\r\n					'), s += '\r\n                                    </a></div>\r\n                                    <span class="singer_list__title_txt"><a href="javascript:;" class="js_user" data-uin="' + (null == (n = t.encrypt_uin) ? "" : n) + '" title="' + (null == (n = t.title) ? "" : _.escape(n)), t.identify_title && (s += "（" + (null == (n = t.identify_title) ? "" : _.escape(n)) + "）"), s += '">' + (null == (n = t.title) ? "" : _.escape(n)) + '\r\n				    <span class="singer_list__user_txt">\r\n				    ', t.identify_title && (s += "\r\n				    （" + (null == (n = t.identify_title) ? "" : _.escape(n)) + "）\r\n				    "), s += "\r\n				    </span></a></span>\r\n					", t.friend_status && (s += '\r\n				    <i class="singer_list__icon singer_list__icon_fan sprite" title="好友"></i>\r\n					'), s += '\r\n                                </h4>\r\n                                <div class="singer_list__playlist">\r\n                                    ' + (null == (n = t.gedan_title) ? "" : _.escape(n)) + '\r\n                                </div>\r\n                                <div class="singer_list__count js_num_follow" data-num="' + (null == (n = t.fans_num) ? "" : n) + '">\r\n                                    ' + (null == (n = t.fans_title) ? "" : _.escape(n)) + '\r\n                                </div>\r\n                                <div class="singer_list__other">\r\n				', 0 == t.is_myself && (s += "\r\n				", s += 0 == t.concern_status ? '\r\n                                    <a href="javascript:;" class="mod_btn singer_list__btn_focus js_focus_user" data-status="' + (null == (n = t.concern_status) ? "" : n) + '" data-uin="' + (null == (n = t.encrypt_uin) ? "" : n) + '">\r\n                                        <i class="mod_btn__icon_new"></i>关注\r\n                                    </a>\r\n				' : '\r\n                                    <a href="javascript:;" class="mod_btn singer_list__btn_focus js_focus_user" data-status="' + (null == (n = t.concern_status) ? "" : n) + '" data-uin="' + (null == (n = t.encrypt_uin) ? "" : n) + '">\r\n                                        <i class="mod_btn__icon_yes"></i>已关注\r\n                                    </a>\r\n				', s += "\r\n				"), s += "\r\n                                </div>\r\n                            </li>\r\n			"
                }
                return s += "\r\n                        </ul>\r\n                    </div>"
            }, zhida_singer: function (a) {
                {
                    var s, i = "";
                    Array.prototype.join
                }
                return i += '		<a href="' + (null == (s = n.util.getSingerUrl({
                        singermid: a.singerMID,
                        singerid: a.singerID
                    })) ? "" : s) + '" class="mod_intro__cover js_singer" data-singermid="' + (null == (s = a.singerMID) ? "" : s) + '">\r\n                        <img src="' + (null == (s = n.util.getSingerPic({
                        mid: a.singerMID,
                        type: 150
                    })) ? "" : s) + '" onerror="this.src=\'//y.gtimg.cn/mediastyle/global/img/singer_300.png?max_age=31536000\';this.onerror=null;" alt="' + (null == (s = a.singerName) ? "" : _.escape(s)) + '" class="mod_intro__pic mod_intro_singer__pic" />\r\n                    </a>\r\n                    <div class="mod_intro__info">\r\n                        <div class="mod_intro__base">\r\n                            <h2 class="mod_intro__title"><a href="' + (null == (s = n.util.getSingerUrl({
                        singermid: a.singerMID,
                        singerid: a.singerID
                    })) ? "" : s) + '" class="mod_intro_singer__singer js_singer" title="' + (null == (s = a.singername) ? "" : _.escape(s)) + '" data-singermid="' + (null == (s = a.singerMID) ? "" : s) + '">' + (null == (s = a.singername_hilight.replace(/<em>/gi, '<span class="c_tx_highlight">').replace(/<\/em>/gi, "</span>")) ? "" : s) + '</a></h2>\r\n                            <a class="mod_intro_singer__link js_singer" data-tab="song" href="' + (null == (s = n.util.getSingerUrl({
                        singermid: a.singerMID,
                        singerid: a.singerID
                    })) ? "" : s) + '?tab=song" data-singermid="' + (null == (s = a.singerMID) ? "" : s) + '">单曲<strong>' + (null == (s = a.songNum) ? "" : s) + '</strong></a>\r\n                            <a class="mod_intro_singer__link js_singer" data-tab="album" href="' + (null == (s = n.util.getSingerUrl({
                        singermid: a.singerMID,
                        singerid: a.singerID
                    })) ? "" : s) + '?tab=album" data-singermid="' + (null == (s = a.singerMID) ? "" : s) + '">专辑<strong>' + (null == (s = a.albumNum) ? "" : s) + '</strong></a>\r\n                            <a class="mod_intro_singer__link js_singer" data-tab="mv" href="' + (null == (s = n.util.getSingerUrl({
                        singermid: a.singerMID,
                        singerid: a.singerID
                    })) ? "" : s) + '?tab=mv" data-singermid="' + (null == (s = a.singerMID) ? "" : s) + '">MV<strong>' + (null == (s = a.mvNum) ? "" : s) + '</strong></a>\r\n                        </div>\r\n                        <div class="mod_intro__toolbar"><button class="mod_btn_green js_singer_radio" data-singermid="' + (null == (s = a.singerMID) ? "" : s) + '"  data-singerid="' + (null == (s = a.singerID) ? "" : s) + '"><i class="mod_btn_green__icon_play"></i>播放歌手热门歌曲</button></div>\r\n                    </div>'
            }, zhida_album: function (a) {
                {
                    var s, i = "";
                    Array.prototype.join
                }
                return i += '\r\n                    <a href="' + (null == (s = n.util.getAlbumUrl({albummid: a.albumMID})) ? "" : s) + '" class="mod_intro__cover js_album" data-albummid="' + (null == (s = a.albumMID) ? "" : s) + '" data-albumid="' + (null == (s = a.albumID) ? "" : s) + '">\r\n                        <img src="' + (null == (s = n.util.getAlbumPic({
                        mid: a.albumMID,
                        type: 150
                    })) ? "" : s) + '" onerror="this.src=\'//y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000\';this.onerror=null;" alt="' + (null == (s = a.albumName) ? "" : _.escape(s)) + '" class="mod_intro__pic" />\r\n                    </a>\r\n                    <div class="mod_intro__info">\r\n                        <div class="mod_intro__base">\r\n                            <h2 class="mod_intro__title">\r\n				<a href="' + (null == (s = n.util.getAlbumUrl({albummid: a.albumMID})) ? "" : s) + '" class="mod_intro_album__album js_album" data-albummid="' + (null == (s = a.albumMID) ? "" : s) + '" data-albumid="' + (null == (s = a.albumID) ? "" : s) + '" title="' + (null == (s = a.albumName) ? "" : _.escape(s)) + '">' + (null == (s = a.albumname_hilight.replace(/<em>/gi, '<span class="c_tx_highlight">').replace(/<\/em>/gi, "</span>")) ? "" : s) + '</a>\r\n				<a href="' + (null == (s = n.util.getSingerUrl({
                        singermid: a.singerMID,
                        singerid: a.singerID
                    })) ? "" : s) + '" class="mod_intro_album__singer js_singer" data-singermid="' + (null == (s = a.singerMID) ? "" : s) + '" data-singerid="' + (null == (s = a.singerID) ? "" : s) + '" title="' + (null == (s = a.singerName) ? "" : _.escape(s)) + '">' + (null == (s = a.singername_hilight.replace(/<em>/gi, '<span class="c_tx_highlight">').replace(/<\/em>/gi, "</span>")) ? "" : s) + '</a>\r\n				<span class="mod_intro_album__time">发行时间：' + (null == (s = a.publicTime) ? "" : s) + '</span>\r\n			    </h2>\r\n                        </div>\r\n                        <div class="mod_intro__toolbar"><button class="mod_btn_green js_play_album" data-albummid="' + (null == (s = a.albumMID) ? "" : s) + '" data-albumid="' + (null == (s = a.albumID) ? "" : s) + '"><i class="mod_btn_green__icon_play"></i>播放专辑</button></div>\r\n                    </div>'
            }
        },
        loading: !1,
        getDate: function (s, i, t) {
            l("#before_page").show(), o.loading || (o.curTab = i, this.loading = !0, "playlist" == o.curTab && (this.Pager[o.curTab].cur_page_playlist = this.Pager[o.curTab].cur_page - 1), a.async("js/common/smartbox.js", function (a) {
                var e = o.Pager[o.curTab];
                e.remoteplace = o.remoteplace, e.searchid = !o.searchid && o._searchid ? o._searchid : a.sessionIdGenerator.get(o.searchid), o._searchid = e.searchid, n.jQueryAjax.jsonp({
                    url: o.URL[o.curTab].jstpl_format(e) + encodeURIComponent(s),
                    charset: "utf-8",
                    success: function (a) {
                        "song" == i && 0 == a.data[i].totalnum && a.data.semantic && a.data.semantic.totalnum && a.data.semantic.totalnum > 0 && (a.data[i] = a.data.semantic), "playlist" != i && a.data[i].totalnum > 0 || "playlist" == i && a.data && a.data.sum && a.data.sum > 0 ? t && t(a) : (l(".main").show(), l("#loading").remove(), l(".js_search_tab_cont").hide(), l("#none_box").show(), l("#none_box .js_none_keyword").html(decodeURIComponent(s.HtmlEncode()))), a.data && a.data.zhida && (a.data.zhida.zhida_singer || a.data.zhida.zhida_album) && a.data.zhida.type > 0 ? o.zhida(a.data.zhida) : (l("#zhida_album").hide(), l("#zhida_singer").hide()), o.loading = !1, l("#before_page").hide()
                    },
                    error: function () {
                        l(".main").show(), l("#loading").remove(), l(".js_search_tab_cont").hide(), l("#none_box").show(), l("#none_box .js_none_keyword").html(decodeURIComponent(s.HtmlEncode())), o.loading = !1, l("#before_page").hide()
                    }
                })
            }))
        },
        switchTab: function (a) {
            this.curTab = a, l(".js_search_tab_cont").hide(), l("#none_box").hide(), "" == l("#" + a + "_box").html().trim() && (n.util.updateHash({
                w: encodeURIComponent(o.keyword),
                page: o.Pager[o.curTab].cur_page,
                t: this.curTab
            }), this[this.curTab](o.keyword)), "song" != a || "" == l.trim(l("#zhida_singer").html()) && "" == l.trim(l("#zhida_album").html()) ? (l("#zhida_album").hide(), l("#zhida_singer").hide()) : (l("#zhida_album").show(), l("#zhida_singer").show()), l("#" + a + "_box").show()
        },
        zhida: function (a) {
            a.zhida_singer ? l("#zhida_singer").html(o.template.zhida_singer(a.zhida_singer)).show() : l("#zhida_singer").html("").hide(), a.zhida_album ? l("#zhida_album").html(o.template.zhida_album(a.zhida_album)).show() : l("#zhida_album").html("").hide(), l("#zhida_singer, #zhida_album").off("click", ".js_album").on("click", ".js_album", function () {
                var a = l(this).data("albummid");
                n.util.gotoAlbum({albummid: a})
            }).off("click", ".js_singer").on("click", ".js_singer", function () {
                var a = l(this).data("singermid"), s = l(this).data("tab");
                n.util.gotoSinger({singermid: a, tab: s})
            })
        },
        render: function (i, t) {
            function e() {
                l(".main").show(), l("#loading").remove(), l("#" + t + "_box").show(), setTimeout(function () {
                    r.total_num > r.per_page && a.async("js/common/music/pager.js", function () {
                        l(".js_pager").pager({
                            container: "#" + t + "_box",
                            total: r.total_num,
                            per: r.per_page,
                            cur: r.cur_page,
                            index: 3,
                            ns: t,
                            callback: function (a) {
                                r.cur_page = parseInt(a) || 1, o.remoteplace = "sizer.yqq." + o.curTab + "_next", o.searchid = 0, o.go(), document.documentElement.scrollTop = document.body.scrollTop = 450
                            }
                        })
                    })
                }, 0)
            }

            var r = o.Pager[t], _ = o.template[t];
            "song" == t ? (1 == i.data.priority && (i.data[t] = i.data.semantic), r.total_num = i.data.song.totalnum, l.each(i.data.song.list, function (a, n) {
                n.songmid || (n.songtype = 46)
            }), a.async("js/common/html/songlist.js", function (a) {
                a.init({
                    container: l("#song_box"),
                    specilData: i.data.song.list,
                    specialTpl: _,
                    reportType: n.reportMap.search,
                    callback: function () {
                        e()
                    }
                })
            })) : "album" == t ? (r.total_num = i.data.album.totalnum, a.async("js/common/html/albumlist.js", function (a) {
                a.init({
                    container: l("#album_box"),
                    specilData: i.data.album.list,
                    specialTpl: _,
                    reportType: n.reportMap.search,
                    callback: function () {
                        e(), l("img", l("#album_box")).each(function () {
                            "//y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000" == l(this).attr("src") && l(this).lazyload({effect: "fadeIn"})
                        }), document.documentElement.scrollTop = document.body.scrollTop = 1
                    }
                })
            })) : "mv" == t ? (r.total_num = i.data.mv.totalnum, a.async("js/common/html/mvlist.js", function (a) {
                a.init({
                    container: l("#mv_box"),
                    specilData: i.data.mv.list,
                    specialTpl: _,
                    reportType: n.reportMap.search,
                    callback: function () {
                        e(), l("img", l("#mv_box")).each(function () {
                            "//y.gtimg.cn/mediastyle/global/img/mv_300.png?max_age=31536000" == l(this).attr("src") && l(this).lazyload({effect: "fadeIn"})
                        })
                    }
                })
            })) : "playlist" == t ? (r.total_num = i.data.display_num, a.async("js/common/html/taogelist.js", function (a) {
                a.init({
                    container: l("#playlist_box"),
                    specilData: i.data.list,
                    specialTpl: _,
                    reportType: n.reportMap.search,
                    callback: function () {
                        e(), l("img", l("#playlist_box")).each(function () {
                            "//y.gtimg.cn/mediastyle/global/img/playlist_300.png?max_age=31536000" == l(this).attr("src") && l(this).lazyload({effect: "fadeIn"})
                        })
                    }
                })
            })) : "user" == t ? (r.total_num = i.data.user.totalnum, i.data.user.per_page = r.per_page, l("#user_box").html(_(i.data.user)), e(), l("img", l("#user_box")).each(function () {
                "//y.gtimg.cn/mediastyle/global/img/person_300.png?max_age=31536000" == l(this).attr("src") && l(this).lazyload({effect: "fadeIn"})
            })) : "lyric" == t && (r.total_num = i.data.lyric.totalnum, l.each(i.data.lyric.list, function (a, n) {
                    n.songmid || (n.songtype = 46)
                }), a.async("js/common/html/songlist.js", function (t) {
                    t.init({
                        container: l("#lyric_box"),
                        specilData: i.data.lyric.list,
                        specialTpl: _,
                        reportType: n.reportMap.search,
                        callback: function () {
                            e(), window.clipboardData ? l(document).off("click", ".js_lyric_copy").on("click", ".js_lyric_copy", function () {
                                var a = l(this).attr("data-clipboard-text");
                                window.clipboardData.setData("text", a), n.popup.show("复制成功！", 2e3)
                            }) : n.userAgent.macs || !n.util.checkFlash() ? a.load(location.protocol + "//y.gtimg.cn/music/h5/lib/js/module/clipboard.js?max_age=604800", function () {
                                var a = new Clipboard(".js_lyric_copy");
                                a.on("success", function () {
                                    n.popup.show("复制成功")
                                }), a.on("error", function () {
                                    n.popup.show("暂不支持一键复制", 3e3, 1)
                                })
                            }) : a.async("js/common/music/ZeroClipboard.js", function (a) {
                                s = a, o.initLyricCopy(l(".js_lyric_copy", "#lyric_box"))
                            })
                        }
                    })
                }))
        },
        go: function (a) {
            l("#none_box").hide(), a && a != o.keyword && (l.extend(o.Pager, o.defaultPager), l(".js_tab").removeClass("mod_tab__current"), l('.js_tab[data-tab="song"]').addClass("mod_tab__current"), this.curTab = "song", o.Pager.song.cur_page = 1, o.Pager.album.cur_page = 1, o.Pager.mv.cur_page = 1, o.Pager.playlist.cur_page = 1, o.Pager.user.cur_page = 1, o.Pager.lyric.cur_page = 1, l(".js_search_tab_cont").html("")), a = a || o.keyword, o.keyword = a, n.util.updateHash({
                w: encodeURIComponent(a),
                page: o.Pager[o.curTab].cur_page,
                t: this.curTab
            }), this[this.curTab](a)
        },
        song: function (a) {
            o.keyword = a, this.getDate(a, "song", function (a) {
                o.render(a, "song")
            })
        },
        album: function (a) {
            o.keyword = a, this.getDate(a, "album", function (a) {
                o.render(a, "album")
            })
        },
        mv: function (a) {
            o.keyword = a, this.getDate(a, "mv", function (a) {
                o.render(a, "mv")
            })
        },
        playlist: function (a) {
            o.keyword = a, this.getDate(a, "playlist", function (a) {
                o.render(a, "playlist")
            })
        },
        user: function (a) {
            o.keyword = a, this.getDate(a, "user", function (a) {
                o.render(a, "user")
            })
        },
        lyric: function (a) {
            o.keyword = a, this.getDate(a, "lyric", function (a) {
                o.render(a, "lyric")
            })
        },
        initLyricCopy: function (a) {
            s.destroy();
            var i = new s(a);
            i.on("ready", function () {
                this.on("aftercopy", function () {
                    n.popup.show("已成功复制歌词！")
                })
            }), i.on("error", function () {
                s.destroy()
            })
        },
        downloadLyric: function (a) {
            var n = "//c.y.qq.com/soso/fcgi-bin/fcg_download_lrc.q?song=" + encodeURIComponent(a.songname || "") + "&singer=" + encodeURIComponent(a.singername || "") + "&down=1&ie=",
                s = window.open(n, "_blank");
            s && (s.opener = null)
        },
        getSingerSongs: function (a, s) {
            var i = {};
            i.singermid = a, i.order = "listen", i.begin = 0, i.num = 50, i.songstatus = 1, n.jQueryAjax.jsonp({
                url: "//c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",
                data: i,
                jsonpCallback: "MusicJsonCallbacksigner_track",
                charset: "utf-8",
                success: function (a) {
                    s && s(a)
                },
                error: function () {
                    s && s(null)
                }
            })
        },
        bindEvents: function () {
            var s = this;
            a.async("js/common/smartbox.js", function () {
                l(".js_smartbox").smartbox({
                    container: "div.mod_search",
                    ns: "mod_search",
                    num: 5,
                    callback: function (a) {
                        o.remoteplace = "txt.yqq.center", o.searchid = 2, o.go(a)
                    }
                })
            }), a.async("js/common/smartbox.js", function () {
                l(".js_smartbox").smartbox({
                    container: "div.mod_top_search",
                    ns: "mod_top_search",
                    num: 10,
                    callback: function (a) {
                        o.remoteplace = "txt.yqq.top", o.searchid = 1, o.go(a)
                    }
                })
            }), l(document).off("click", "a.js_tab").on("click", "a.js_tab", function () {
                if (o.loading)return !1;
                if (l(this).hasClass("mod_tab__current"))return !1;
                var a = l(this).data("tab");
                l(".js_tab").removeClass("mod_tab__current"), l(this).addClass("mod_tab__current"), o.remoteplace = "txt.yqq." + a, o.searchid = {
                    song: 3,
                    album: 4,
                    playlist: 6,
                    user: 13,
                    lyric: 5,
                    mv: 7
                }[a], o.switchTab(a)
            }).off("click", ".js_clip").on("click", ".js_clip", function () {
                var a = l("div.lyric_list__cont", l(this).parents("li"));
                a.toggleClass("lyric_list__cont--max"), a.hasClass("lyric_list__cont--max") ? l(this).html('<i class="mod_btn__icon_more"></i>收起') : l(this).html('<i class="mod_btn__icon_more"></i>展开')
            }).off("click", ".js_lyric_download").on("click", ".js_lyric_download", function () {
                o.downloadLyric({songname: l(this).data("songname"), singername: l(this).data("singername")})
            }).off("click", ".js_play_album").on("click", ".js_play_album", function () {
                var s = l(this).data("albummid");
                a.async("js/common/html/albumdata.js", function (a) {
                    a.init({mid: s, reportID: n.reportMap.search, play: 1}, function () {
                    })
                })
            }).off("click", ".js_singer_radio").on("click", ".js_singer_radio", function () {
                n.player.checkPlayerWindow(), s.getSingerSongs(l(this).data("singermid"), function (s) {
                    l(s.data.list).each(function (a, n) {
                        l.extend(n, n.musicData), delete n.musicData
                    });
                    var i = n.player.formatMusics(s.data.list);
                    a.async("js/common/fav.js", function (a) {
                        a.combineData(i, function (a) {
                            a.length > 0 ? n.player.play(a, 1) : n.popup.show("无可播放单曲！", 3e3, 1)
                        })
                    })
                })
            }).on("click", ".js_lyric_copy", function () {
                if (window.clipboardData) {
                    var a = "";
                    l(this).data("data-clipboard-text") && (a = l(this).data("data-clipboard-text")), window.clipboardData.setData("text", a), n.popup.show("复制成功！", 2e3)
                }
            }).on("click", ".js_user", function () {
                var a = l(this).parents("li");
                c.send({action: "click", pos: a.data("pos"), docid: a.data("docid"), text: a.find("img").attr("alt")});
                var s = l(this).data("uin");
                n.util.gotoUser({uin: s, target: "_self"})
            }).on("click", ".js_focus_user", function () {
                var a = this, s = l(this).parents("li");
                c.send({
                    action: "guanzhu",
                    pos: s.data("pos"),
                    docid: s.data("docid"),
                    text: s.find("img").attr("alt")
                });
                var i = this.getAttribute("data-uin"), t = parseInt(this.getAttribute("data-status")), _ = e.getUin();
                return 1e4 > _ && n.widget.user.openLogin(), i && r.doFollow({
                    my_uin: _,
                    friend_uin: i,
                    status: 0 == t ? 1 : 0
                }, function (i) {
                    if (i && 0 == i.code) {
                        var e = l(".js_num_follow", s).data("num");
                        0 == t ? (l(".js_num_follow", s).html(r.showNum(e + 1)), l(".js_num_follow", s).data("num", e + 1), n.popup.show("关注成功！", 3e3), l(a).attr("data-status", 1), l(a).html('<i class="mod_btn__icon_yes"></i>已关注')) : (e - 1 > 0 ? (l(".js_num_follow", s).html(r.showNum(e - 1)), l(".js_num_follow", s).data("num", e - 1)) : (l(".js_num_follow", s).html(r.showNum(0)), l(".js_num_follow", s).data("num", 0)), n.popup.show("成功取消关注！", 3e3), l(a).attr("data-status", 0), l(a).html('<i class="mod_btn__icon_new"></i>关注'))
                    } else!i || 1e3 != i.code && 1004 != i.code ? n.popup.show("操作失败！", 3e3, 1) : n.widget.user.openLogin()
                }), !1
            })
        },
        init: function () {
            function a(a) {
                var n = [], s = {};
                try {
                    t.get("portal_keyword", function (i) {
                        i ? (n = (i + "").split("||"), n.length > 0 && l.each(n, function (a, n) {
                            s[n] = a
                        }), a in s ? (n.splice(s[a], 1), n.push(a), n.length > 5 && n.shift(), t.set("portal_keyword", n.join("||"))) : (n.push(a), n.length > 5 && n.shift(), t.set("portal_keyword", n.join("||")))) : t.set("portal_keyword", a)
                    })
                } catch (i) {
                }
            }

            function s() {
                var a = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset;
                a > 200 ? l(".mod_search").addClass("mod_search--top") : l(".mod_search").removeClass("mod_search--top")
            }

            this.bindEvents();
            var i = n.util.getUrlParams();
            i.searchid && (o.searchid = i.searchid), i.remoteplace && (o.remoteplace = i.remoteplace), i.w ? (i.w = decodeURIComponent(i.w), document.title = i.w + "_搜索 QQ音乐-千万正版音乐海量无损曲库新歌热歌天天畅听的高品质音乐平台！", i.t in o.type_map ? o.Pager[i.t || "song"].cur_page = i.page || 1 : o.Pager.song.cur_page = i.page || 1, i.t in o.type_map ? (o.keyword = i.w, l('a[data-tab="' + i.t + '"]').click()) : o.song(i.w), a(i.w)) : (window.location.href = location.protocol + "//y.qq.com", l("#loading").remove()), n.util.hashChangeInit(function (n) {
                var s = decodeURIComponent(n.w);
                document.title = s + "_搜索 QQ音乐-千万正版音乐海量无损曲库新歌热歌天天畅听的高品质音乐平台！", l("input.search_input__input").val(s), o.curTab = n.t || "song", l(".js_tab").removeClass("mod_tab__current"), l('.js_tab[data-tab="' + o.curTab + '"]').addClass("mod_tab__current"), o.Pager[n.t].cur_page = n.page || 1, l(".js_search_tab_cont").hide(), o[o.curTab](s), a(s)
            }), document.addEventListener ? document.addEventListener("scroll", function () {
                s()
            }) : document.attachEvent("onmousewheel", function () {
                s()
            }), s(), l(document).on("focus keyup input propertychange", ".mod_search input.search_input__input", function () {
                l(".mod_search").hasClass("mod_search--top") && (document.documentElement.scrollTop = document.body.scrollTop = 270)
            }), SPD.mark(34)
        }
    };
    return o
});