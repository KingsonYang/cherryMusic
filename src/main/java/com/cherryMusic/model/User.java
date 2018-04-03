package com.cherryMusic.model;

import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;
import com.baomidou.mybatisplus.enums.IdType;

import javax.persistence.Table;
import java.io.Serializable;
import java.sql.Date;

/**
 * create table users (
 id int(8) not null AUTO_INCREMENT,
 username varchar(40) DEFAULT NULL,
 password varchar(40) DEFAULT NULL,
 role_id int(2),
 create_time datetime DEFAULT NULL,
 update_time datetime DEFAULT NULL,
 PRIMARY KEY (`id`),
 UNIQUE KEY `id` (`id`)
 ) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
 */
@TableName("users")
public class User implements Serializable {

    public User() {
    }

    @TableId(value = "id", type = IdType.AUTO)
    private int id;
    private String username;
    private String password;
    private int role_id;
    private String create_time;
    private String update_time;

    public int getRole_id() {
        return role_id;
    }

    public void setRole_id(int role_id) {
        this.role_id = role_id;
    }

    public String getCreate_time() {
        return create_time;
    }

    public void setCreate_time(String create_time) {
        this.create_time = create_time;
    }

    public String getUpdate_time() {
        return update_time;
    }

    public void setUpdate_time(String update_time) {
        this.update_time = update_time;
    }




    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }




}