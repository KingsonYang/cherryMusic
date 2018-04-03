package com.cherryMusic.controller;

import com.cherryMusic.model.Musics;
import com.cherryMusic.service.IMusicsService;
import com.cherryMusic.util.ToolUtil;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by hs on 2018.4.4.
 */

@Controller
@RequestMapping(value = "/portal")
public class MusicController {


    @Resource
    private IMusicsService musicsService ;

    @RequestMapping(value = "/search_page")
    public String searchPage(){
        return "portal/search.html";
    }

    @RequestMapping(value = "/player")
    public String playerPage(){
        return "portal/player.html";
    }


    /**
     * 获取音乐管理列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Map<Object, Object> list(String condition,
                                    HttpSession session) {
        Map<Object, Object> map = new HashMap<>();
        List<Musics> musics = new ArrayList<Musics>();
        //判断condition是否有值
        if(ToolUtil.isEmpty(condition)){
            //如果没有返回所有查询结果
            musics = musicsService.selectList("周%");
            map.put("music",musics);
        }else{
            //如果有返回对应字段的模糊查询
            musics = musicsService.selectList("%"+condition+"%");
            map.put("music",musics);
        }
        session.setAttribute("musics",musics);
        return map;
    }

    @RequestMapping(value = "/search",method = RequestMethod.GET)
    @ResponseBody
    public Map<Object, Object> search(){
        Map<Object, Object> map = new HashMap<>();

        return map;
    }



}
