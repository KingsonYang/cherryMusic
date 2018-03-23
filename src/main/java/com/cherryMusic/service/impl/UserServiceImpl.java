package com.cherryMusic.service.impl;

import com.cherryMusic.dao.UserDao;
import com.cherryMusic.model.User;
import com.cherryMusic.service.IUserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * Created by hs on 2018.3.22.
 */

@Service("userService")
public class UserServiceImpl implements IUserService{

    @Resource
    private UserDao userDao;


    public User selectUser(long userId) {
        return this.userDao.selectUser(userId);
    }
}
