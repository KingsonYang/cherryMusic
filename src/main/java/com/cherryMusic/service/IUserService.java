package com.cherryMusic.service;

import com.baomidou.mybatisplus.service.IService;
import com.cherryMusic.model.User;

/**
 * Created by hs on 2018.3.22.
 */
public interface IUserService  extends IService<User> {

    User selectUser(User user);

    User checkUser(String username);

    void register(User user);



}
