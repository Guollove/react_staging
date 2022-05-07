#启动项目
yarn start
或者
npm start

## 一 todoList案例相关的知识点
    1 拆分组件 实现静态组件 注意：className style的写法
    2 动态初始化列表 如何确定将数据放在哪个组件的state中？
        -某个组件使用：放在其自身的state中
        -某些组件使用：放在他们共同的父组件state中（官方称此操作为：状态提升）
    3 关于父子之间通信：
        1 【父组件】给【子组件】传递数据：通过props传递
        2 【父组件】给【子组件】传递数据：通过props传递 要求父组件提前给子组件提前一个函数
    4 注意defaultChecked 和 checked的区别。类似的还有：defaultValue 和 value
    5 状态在哪里 操作状态的方法就在哪里

## 二 Github搜索案例相关知识点
    1 设计状态时要考虑全面 例如带有网络请求的组件 要考虑请求失败怎么办
    2 ES6小知识点: 结构赋值+重命名
        let obj = {a:{b:1}}
        const {a} = obj; //传统结构赋值
        const {a:{b}} = obj;//连续结构赋值
        const {a:{b:value}} = obj; //连续结构赋值+重命名
    3 消息订阅与发布机制
        1 先订阅 在发布 （理解： 有一种隔空对话的感觉）
        2 适用于任意组件问通信
        3 要在组件的componentWillUnmount中取消订阅
    4 fetch发送请求（关注分离的设计思想）
        try {
            const response = await fetch (`https://api.github.com/search/users?q=${keyWord}`)
            const data = await response.json()
            console.log(data);
        }catch(error){
            console.log('请求出错',error)
        }

## 三 路由的基本使用
    1 明确好界面中的导航区 展示区
    2 导航器的a标签改为Link标签
        <Link to="/xxxx">Demo</Link>
    3 展示区写Route标签进行匹配
        <Route path='xxxx' component={Demo}/>
    4 <App>的最外侧包裹一个<BrowserRouter>或者<HashRouter>

## 四 路由组件于一般组件
    1 写法不同
        一般组件：<Demo/>
        路由组件：<Route path='/demo' component={Demo}/>
    2 存放位置不同
        一般组件：components
        路由组件：pages
    3 接收到的props不同
        一般组件：写组件标签时传递了什么，就能接收到什么
        路由组件：接收到三个固定的属性
            history:
                go: f go(n)
                goBack: f goBack()
                goForward: f goForward()
            location:
                pathname:"/about"
                search:""
                state: undefined
            match:
                params: {}
                path: "/abput"
                url: "/about"

## 五 NavLink与封装NacLink
    1 NavLink可以实现路由链接的高亮 通过activeVlassName指定样式名
    2 标签体内容是一种特殊的标签属性
    3 通过this.props.children可以获取标签体内容

## 六 Switch的使用
    1 通常情况下， path和comppnent是一一对应的关系
    2 Switch可以提高路由匹配效率（单一匹配）

## 七 解决多级路径刷新页面样式丢失的问题
    1 public/index.html 中 引入样式是不写 ./  写 /（常用）
    2 public/index.html 中 引入样式是不写 ./  写 %PUBLIC_URL%（常用）
    3 使用HashRouter

## 八 路由的严格匹配与模糊匹配
    1 默认使用的是模糊匹配（简单记：【输入路径】必须包含【匹配的路径】 且顺序要一致）
    2 开启严格匹配：<Route exact={true} path="/abput" component={About}/>
    3 严格匹配不要随便开启 需要再开 有些时候开启会导致无法继续匹配二级路由

## 九 Redirect的使用
    1 一般写在所有路由注册的最下方 当所有路由都无法匹配时 跳转到Redirect指定的路由
    2 具体编码：
        <Switch>
            <Route path='/about' component={About}/>
            <Route path='/home' component={Home}/>
            <Redirect to="/about"/>
        </Switch>

## 十 嵌套路由
    1 注册子路由时要写上副路由的path值
    2 路由的匹配是按照注册路由的顺序进行的