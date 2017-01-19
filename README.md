# JAVA骨架项目
---
## base
基本JAVA项目，JDK使用1.8版本<br>
引入框架依赖：
1. 基本框架：junit4、spring、spring-aop
2. 日志框架：log4j2
3. 数据库框架：hibernate
4. 数据库驱动：MySQL
5. JSON框架：jackson、org.json
6. EXCEL解析框架：poi<p>

### 使用命令：
mvn archetype:generate -DarchetypeRepository=local -DarchetypeGroupId=person.liuxx.archetypes -DarchetypeArtifactId=base -DarchetypeVersion=1.0.0 -DgroupId=person.liuxx -DartifactId=project
---
## base-web
基本JAVA-WEB项目，JDK使用1.8版本<br>
引入框架依赖：
1. 基本框架：junit4、spring、spring-aop
2. 日志框架：log4j2
3. 数据库框架：hibernate
4. 数据库驱动：MySQL
5. JSON框架：jackson、org.json
6. EXCEL解析框架：poi
7. MVC框架：springMVC<p>

### 使用命令：
mvn archetype:generate -DarchetypeRepository=local -DarchetypeGroupId=person.liuxx.archetypes -DarchetypeArtifactId=base-web -DarchetypeVersion=1.0.0 -DgroupId=person.liuxx -DartifactId=project
