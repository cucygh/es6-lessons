# es6-lessons

最简单的ES6学习环境，请使用 *最新* Chrome 浏览器，最差也要使用 360安全浏览器9.1以上版本（它的webkit内核是55）

欢迎学习 ES6 零基础实战课程，手机扫描二维码：

<img src="./static/es6-lesson-imooc.png" alt="ES6实战课程" width="84" height="84">

### 如何使用

1. **下载**

	```shell
	git clone git@github.com:cucygh/es6-lessons.git
	```
如果还不了解git的同学，不要犯懒，请移步 [Git基本操作](http://www.runoob.com/git/git-basic-operations.html)。Git操作是前端开发从业人员的必备技能，相信你可以的。

2. **安装**

	- Windows

	  如果安装了Git，会有个Gitbash命令行，打开它尽情使用吧

	  ```shell
	  cd es6-lessons
	  npm install
	  npm install webpack webpack-dev-server -g
	  ```

	- Mac

	  Mac的同学使用Item或者Item2，好用的很

	  ```shell
	  cd es6-lessons
	  npm install
	  npm install webpack webpack-dev-server -g
	  ```

3. **使用**

	a. 在命令行执行

	  ```shell
	  npm start
	  ```

	b. 在浏览器输入 [http://localhost:9000](http://localhost:9000)

	c. 去 index.js 去编写代码吧，浏览器会自动刷新，不要忘了打开Chrome浏览器调试面板看输出。（按F12即可）

	  ```javascript
	  let log=(item)=>{console.log(item)};
	  log('我要学习ES6')
	  ```
	d. 如果在Chrome浏览器的调试面板console中看到 我要学习ES6，恭喜你已经运行成功了。

### 帮助

  想测试任何ES6的语法，直接在index.js写，在Chrome面板调试看结果就好。

### 更多教程

除了给大家搭建最简单的构建环境，还编写了很多好玩的教程，有实例有代码，不容错过。移步 <a href="./lesson.md" target="_blank">ES6教程目录</a>
