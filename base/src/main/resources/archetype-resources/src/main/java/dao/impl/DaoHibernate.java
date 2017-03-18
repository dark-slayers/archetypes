package ${package}.dao.impl;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import ${package}.dao.Dao;
import ${package}.vo.Item;
import person.liuxx.util.hibernate.BaseDaoHibernate5;

@Repository("dao")
public class DaoHibernate extends BaseDaoHibernate5<Item> implements Dao
{
	@Autowired
	private DaoHibernate(SessionFactory sessionFactory)
	{
		setSessionFactory(sessionFactory);
	}
}
