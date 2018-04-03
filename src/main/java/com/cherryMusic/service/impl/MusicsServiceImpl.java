package com.cherryMusic.service.impl;

import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.cherryMusic.service.IMusicsService;
import com.cherryMusic.dao.MusicsDao;
import com.cherryMusic.model.Musics;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author kingson123
 * @since 2018-04-10
 */
@Service("musicService")
public class MusicsServiceImpl extends ServiceImpl<MusicsDao, Musics> implements IMusicsService {

    @Resource
    private MusicsDao musicsDao;

    public List<Musics> selectList(String condition) {
        return this.musicsDao.selectList(condition);
    }

    public Musics selectById(int id) {
        return this.musicsDao.selectById(id);
    }

    ;



}
