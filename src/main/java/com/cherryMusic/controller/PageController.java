package com.cherryMusic.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.IOException;

/**
 * Created by hs on 2018.3.30.
 */
@Controller
public class PageController {

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

    @RequestMapping(value = "/")
    public String index(){
        return "index.html";
    }

    @RequestMapping(value = "/singer_list")
    public String singer_list(){
        return "singer_list.html";
    }

    @RequestMapping(value = "/test")
    public String Test(){
        return "test.html";
    }


}
