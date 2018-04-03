package com.cherryMusic.controller;

import com.cherryMusic.common.Message;
import com.cherryMusic.model.User;
import com.cherryMusic.service.IUserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.sql.Date;
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
                           @RequestParam("password")String password,HttpSession session){
        Map<String,String> adminMap = new HashMap<String,String>();
        Message msg = new Message();
        User us = new User();
        us.setUsername(username);
        us.setPassword(password);
        User flag = this.userService.selectUser(us);
        if(flag == null){
            msg.setMsg("404");
        }else{
            msg.setMsg("200");
            session.setAttribute("loginUser",flag);
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
        User user  = new User();
        user.setUsername(username);
        user.setPassword(password);
        user.setRoleId(1);
        user.setCreatetime(new Date(System.currentTimeMillis()));
        user.setUpdatetime(new Date(System.currentTimeMillis()));
        this.userService.register(user);
        msg.setMsg("200");
        adminMap.put("msg",msg.getMsg());
        return adminMap;
    }

    @RequestMapping(value = "/signup",method = RequestMethod.POST)
    public String signup(HttpSession session,HttpServletResponse response){

        session.removeAttribute("loginUser");
        Cookie userCookie=new Cookie("loginUser",null);
        userCookie.setMaxAge(0);
        userCookie.setPath("/");
        response.addCookie(userCookie);
        return "index.html";
    }



}
