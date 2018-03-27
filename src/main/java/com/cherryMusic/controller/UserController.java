package com.cherryMusic.controller;

import com.cherryMusic.common.Message;
import com.cherryMusic.model.User;
import com.cherryMusic.service.IUserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
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

    @RequestMapping(value = "/login",method = RequestMethod.POST)
    @ResponseBody
    public Map<String,String> selectUser(HttpServletResponse response,HttpServletRequest request) throws IOException {
        Map<String,String> adminMap = new HashMap<String,String>();
        Message msg = new Message();
        request.setCharacterEncoding("UTF-8");
        response.setCharacterEncoding("UTF-8");
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        User us = new User();
        us.setUsername(username);
        us.setPassword(password);
        User flag = this.userService.selectUser(us);
        HttpSession session = request.getSession();

        if(flag == null){
            msg.setMsg("404");
        }else{
            session.setAttribute("loginUser",flag);
            msg.setMsg("200");
        }
        adminMap.put("msg",msg.getMsg());
        System.out.println("打印这句话说明,Ajax Asynchronous request 发送成功...");
        return adminMap;
    }


    /*@RequestMapping("/showUser.do")
    public void selectUser(HttpServletRequest request, HttpServletResponse response) throws IOException {
        request.setCharacterEncoding("UTF-8");
        response.setCharacterEncoding("UTF-8");
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        User us = new User();
        us.setUsername(username);
        us.setPassword(password);
        User user = this.userService.selectUser(us);
        ObjectMapper mapper = new ObjectMapper();
        response.getWriter().write(mapper.writeValueAsString(user));
        response.getWriter().close();
    }*/



}
