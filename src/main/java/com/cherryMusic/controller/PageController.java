package com.cherryMusic.controller;

import com.cherryMusic.model.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by hs on 2018.3.30.
 */
@Controller
public class PageController {

    @RequestMapping(value = "/index")
    public String index(HttpServletRequest request, HttpServletResponse response) throws IOException {
        User user = (User)request.getSession().getAttribute("loginUser");
        if(user != null){
            Cookie userCookie=new Cookie("loginUser",user.getUsername());
            userCookie.setMaxAge(10*60);   //存活期为一个月 30*24*60*60
            userCookie.setPath("/");
            response.addCookie(userCookie);
        }else{
            Cookie userCookie=new Cookie("loginUser",null);
            userCookie.setMaxAge(0);
            userCookie.setPath("/");
            response.addCookie(userCookie);
        }
        return "index.html";
    }

    @RequestMapping(value = "/login")
    public String login(){
        return "login.html";
    }

    @RequestMapping(value = "/register")
    public String register(){
        return "register.html";
    }

    @RequestMapping(value = "/404")
    public String error(){
        return "404.html";
    }

}
