package com.cherryMusic.controller;

import com.cherryMusic.common.Message;

import com.cherryMusic.model.User;
import com.cherryMusic.service.IUserService;
import com.cherryMusic.util.MD5Util;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.Map;


/**
 * Created by hs on 2018.3.22.
 */

@Controller
@RequestMapping("/user")
public class UserController {
    @Resource
    private IUserService userService;

    @RequestMapping(value = "/",method = RequestMethod.GET)
    @ResponseBody
    public Map<String,String> index(HttpSession session){
        Map<String,String> adminMap = new HashMap<String,String>();
        Message msg = new Message();
        User user = (User)session.getAttribute("loginUser");
        if(user == null){
            msg.setMsg("404");
            adminMap.put("msg",msg.getMsg());
            return adminMap;
        }else{
            msg.setMsg("200");
            adminMap.put("msg",msg.getMsg());
            adminMap.put("loginName",user.getUsername());
            System.out.println(String.valueOf(user.getRole_id()));
            System.out.println(user.getCreate_time());

            adminMap.put("loginRole",String.valueOf(user.getRole_id()));// 用户的权限信息VIP
            return adminMap;
        }
    }


    /**
     *登录查询用户是否存在
     * @param username
     * @param password
     * @param session
     * @return
     */
    @RequestMapping(value = "/login",method =RequestMethod.POST)
    @ResponseBody
    public Map<String,String> selectUser(@RequestParam("username")String username,
                                         @RequestParam("password")String password, HttpSession session,
                                         HttpServletRequest request){
        Map<String,String> adminMap = new HashMap<String,String>();
        Message msg = new Message();
        MD5Util md5Util = new MD5Util();
        User us = new User();
        us.setUsername(username);
        us.setPassword(md5Util.encrypt(password));
        User flag = this.userService.selectUser(us);
        if(flag == null){
            msg.setMsg("404");
        }else{
            msg.setMsg("200");
            session.setAttribute("loginUser",flag);
            request.getSession().setMaxInactiveInterval(600);
            /*Cookie userCookie=new Cookie("loginUser",flag.getUsername());
            userCookie.setMaxAge(10*60);   //存活期为一个月 30*24*60*60
            userCookie.setPath("/");
            response.addCookie(userCookie);*/
        }
        adminMap.put("msg",msg.getMsg());
        return adminMap;
    }

    /**
     * checkUser查询用户名有没有被注册
     * @param username
     * @return
     */
    @RequestMapping(value = "/checkUser",method = RequestMethod.POST)
    @ResponseBody
    public Map<String,String> checkUser(@RequestParam("username")String username){
        Map<String,String> adminMap = new HashMap<String,String>();
        Message msg = new Message();
        User user = this.userService.checkUser(username);
        if(user == null){
            msg.setMsg("200");
        }else{
            msg.setMsg("404");
        }
        adminMap.put("msg",msg.getMsg());
        return adminMap;
    }

    /**
     * 用户注册
     * @param username
     * @param password
     * @return
     */
    @RequestMapping(value = "/register",method = RequestMethod.POST)
    @ResponseBody
    public Map<String,String> register(@RequestParam("username")String username,
                         @RequestParam("password")String password){
        Map<String,String> adminMap = new HashMap<String,String>();
        Message msg = new Message();
        MD5Util md5Util = new MD5Util();
        User user  = new User();
        user.setUsername(username);
        user.setPassword(md5Util.encrypt(password));
        user.setRole_id(1);
        Date date = new Date(System.currentTimeMillis());
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        user.setCreate_time(dateFormat.format(date));
        user.setUpdate_time(dateFormat.format(date));
        this.userService.register(user);
        msg.setMsg("200");
        adminMap.put("msg",msg.getMsg());
        return adminMap;
    }

    /**
     * 用户退出登录，清除session。
     * @param session
     * @param response
     * @return
     */
    @RequestMapping(value = "/layout",method = RequestMethod.POST)
    @ResponseBody
    public Map<String,String> layout(HttpSession session,HttpServletResponse response){

        Map<String,String> adminMap = new HashMap<String,String>();
        Message msg = new Message();
        session.removeAttribute("loginUser");
        /*Cookie userCookie=new Cookie("loginUser",null);
        userCookie.setMaxAge(0);
        userCookie.setPath("/");
        response.addCookie(userCookie);*/
        msg.setMsg("200");
        adminMap.put("msg",msg.getMsg());
        return adminMap;
    }



}
