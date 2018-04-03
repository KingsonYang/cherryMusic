package com.cherryMusic.dao;

import com.baomidou.mybatisplus.mapper.BaseMapper;
import com.cherryMusic.model.Musics;

import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author kingson123
 * @since 2018-04-10
 */
public interface MusicsDao extends BaseMapper<Musics> {

    List<Musics> selectList(String condition);
}
