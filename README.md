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