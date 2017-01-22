# JAVA骨架项目
### 使用方法：
1. 创建项目
2. 将项目转为eclipse项目  mvn eclipse:eclipse
3. 将项目文件复制到GIT文件夹，导入eclipse,然后转为maven项目
4. 修改配置文件名称

---
## base
基本JAVA项目，JDK使用1.8版本<br>
引入框架依赖：

1. 基本框架：junit4、spring、spring-aop
2. 日志框架：log4j2
3. 数据库框架：hibernate
4. 数据库驱动：MySQL
5. JSON框架：jackson、org.json
6. EXCEL解析框架：poi


### 创建项目命令：
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

### 创建项目命令：
mvn archetype:generate -DarchetypeRepository=local -DarchetypeGroupId=person.liuxx.archetypes -DarchetypeArtifactId=base-web -DarchetypeVersion=1.0.0 -DgroupId=person.liuxx -DartifactId=project -Dversion=1.0.0-SNAPSHOT -Dpackage=person.liuxx.project
