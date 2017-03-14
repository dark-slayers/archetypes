package ${package}.dao.impl;
@Repository("dao")
public class DaoHibernate extends BaseDaoHibernate5<Item> implements Dao
{
	@Autowired
	private DaoHibernate(SessionFactory sessionFactory)
	{
		setSessionFactory(sessionFactory);
	}
}
