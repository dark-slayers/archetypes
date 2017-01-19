package ${package};

public class App
{
	public static void main(String[] args)
	{
		String[] array =
		{ "ABC", "AAA", "ABCDE", "AF", "SS", "XDFG" };
		Stream<String> stream = Stream.of(array);
		List<String> list = stream.filter(s -> s.length() > 3).collect(Collectors.toList());
		System.out.println(list);
	}	
}