package ${package}.controller;

import java.net.URLDecoder;

import javax.servlet.http.HttpSession;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import person.liuxx.util.log.LogUtil;

@Controller
public class AjaxController
{
	Logger log = LogManager.getLogger();
	private HttpSession session;

	@RequestMapping(value = "/ajax.mvc")
	@ResponseBody
	public String handleSendAjax(@RequestBody String requestBody, HttpSession httpSession)
	{
		log.traceEntry();
		session = httpSession;
		try
		{
			log.info("收到的请求包体为：{}", requestBody);
			JSONObject obj = null;
			if (requestBody.startsWith("{"))
			{
				log.info("请求包体为正常格式，转换为JSON对象...");
				obj = new JSONObject(requestBody);
			} else
			{
				log.info("请求包体不是正常的JSON字符串，尝试进行URL解码...");
				String decodeString = URLDecoder.decode(requestBody, "UTF-8");
				log.info("进行URL解码后的请求：{},转换为JSONObject对象...", decodeString);
				obj = new JSONObject(decodeString);
			}
			log.info("转换为JSON对象成功！转换后的JSON对象：{}", obj.toString());
			String method = obj.getString("method");
			String type = obj.getString("type");
			String body = obj.getString("body");
			String result = start(method, type, body);
			return log.traceExit(result);
		} catch (Exception e)
		{
			log.error(LogUtil.errorInfo(e));
			return log.traceExit("Controller Exception !");
		}
	}
	public String start(String method, String type, String body)
	{
		JSONObject test = (JSONObject) session.getAttribute("test");
		return test.toString();
	}

}