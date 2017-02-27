package ${package}.service;

@Service("mrpService")
@Scope("prototype")
public class Service
{
	@Autowired
	private Dao dao;	
}
