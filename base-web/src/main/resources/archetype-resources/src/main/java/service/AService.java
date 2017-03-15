package ${package}.service;

@Service("aService")
@Scope("prototype")
public class AService
{
	@Autowired
	private Dao dao;
}
