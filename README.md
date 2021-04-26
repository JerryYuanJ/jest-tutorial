# studys
A collection of my explores.


- 安装 `@types/jest` 会有代码提示


- 异步的函数，test 必须要 return 出去，否则测试结果有问题。

- 注意 describe ，before/after* 的执行顺序
- beforeAll, beforeEach ... 会作用到它下面对应的子 scope，即 describe 块外面如果有这些 before/after 那么里面的 test 的执行也会经历这些钩子。

- test.only 会忽略当前 suite（当前测试文件）中的其他所有的 **test**，但是 describe、before/after** 还是会走的