package com.cherryMusic.service.impl;

import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.cherryMusic.dao.UserDao;
import com.cherryMusic.model.User;
import com.cherryMusic.service.IUserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * Created by hs on 2018.3.22.
 */

@Service("userService")
public class UserServiceImpl extends ServiceImpl<UserDao, User> implements IUserService{

    @Resource
    private UserDao userDao;


    public User selectUser(User user) {
        return this.userDao.selectUser(user);
    }

    public void register(User user) {
        this.userDao.register(user);
    }

    public User checkUser(String username) {
        return this.userDao.checkUser(username);
    }
}
