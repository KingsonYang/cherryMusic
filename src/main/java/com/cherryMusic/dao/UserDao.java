package com.cherryMusic.dao;

import com.cherryMusic.model.User;
import org.springframework.stereotype.Repository;

/**
 * Created by hs on 2018.3.22.
 */
public interface UserDao {
    User selectUser(User user);

    User checkUser(String username);

    void register(User user);
}
