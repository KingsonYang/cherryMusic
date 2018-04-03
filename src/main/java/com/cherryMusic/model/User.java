package com.cherryMusic.model;

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
public class User {
    public User(int id, String username, String password,int roleId, Date createtime, Date updatetime) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.roleId = roleId;
        this.createtime = createtime;
        this.updatetime = updatetime;
    }

    public User() {
    }

    private int id;
    private String username;
    private String password;
    private int roleId;
    private Date createtime;
    private Date updatetime;

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

    public int getRoleId() {
        return roleId;
    }

    public void setRoleId(int roleId) {
        this.roleId = roleId;
    }

    public Date getCreatetime() {
        return createtime;
    }

    public void setCreatetime(Date createtime) {
        this.createtime = createtime;
    }

    public Date getUpdatetime() {
        return updatetime;
    }

    public void setUpdatetime(Date updatetime) {
        this.updatetime = updatetime;
    }
}