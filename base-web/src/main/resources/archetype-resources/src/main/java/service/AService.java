package ${package}.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;
import ${package}.dao.Dao;
import ${package}.vo.Item;

@Service("aService")
@Scope("prototype")
public class AService
{
	@Autowired
	private Dao dao;

	public void s()
	{
		dao.search(Item.class, 1);
	}
}
