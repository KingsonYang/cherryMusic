package com.cherryMusic.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.cherryMusic.model.Musics;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author kingson123
 * @since 2018-04-10
 */
public interface IMusicsService extends IService<Musics> {

    List<Musics> selectList(String condition);

    Musics selectById(int id);
}
