package com.cherryMusic;

import com.cherryMusic.dao.UserDao;
import com.cherryMusic.model.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.annotation.Resource;

// 加载spring配置文件
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({"classpath:spring-mybatis.xml"})
public class UserDaoTest {

    @Resource
    private UserDao dao;

    @Test
    public void testSelectUser() throws Exception {
        User user = new User();
        user.setUsername("admin");
        user.setPassword("123456");
        User use = dao.selectUser(user);
        System.out.println(use.getUsername());
    }

}