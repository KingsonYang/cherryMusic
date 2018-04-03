package com.cherryMusic.service;

import com.cherryMusic.model.User;

/**
 * Created by hs on 2018.3.22.
 */
public interface IUserService {

    User selectUser(User user);

    User checkUser(String username);

    void register(User user);



}
