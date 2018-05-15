
### 所用技术
JavaScript
React.js

### 实现无限加载的思路

通过用eventlistener 监听 scroll，并利用元素内容高度和scrollbar的位置关系来实现的无限加载的

```sh
   componentDidMount() {
     this.refs.iniscroll.addEventListener("scroll", () => {
       if (this.refs.iniscroll.scrollTop + this.refs.iniscroll.clientHeight >=this.refs.iniscroll.scrollHeight){
         this.loadMoreItems();
       }
     });
   }
```
在react中`componentDidMount`会自动把当前组件渲染到DOM上，
在这里当`scrollTOP`和`clientHeight`加起来的值大于等于`scrollHeight`也就是scrollbar的高度时
我们就执行`loadMoreItems()`Function

```sh
constructor(props) {
    super(props);
    this.state = {
       news: 40,
       loadingState: false
     };
   }
```
这段代码定义了这个组件最初的两个state. `news：40`是最开始加载的新闻数量，
`loadingState`是用来显示加载状态的 

```sh
<div ref="iniscroll" style={{ height: "500px", overflow: "auto" }}>
    <ul>
        {this.displayItems()}
    </ul>
    {this.state.loadingState ? <p className="loading"> loading More News..</p> : ""}
  </div>
```
可以看到上述代码中我用了`ul`标签，这个标签在`div`下，我加入了事件监听用来监听`div`
是否发生了`scroll`事件。
在react中通过用`ref=“iniscroll”`
我就可以用`this.refs.iniscroll`操作这个`div`

`displayItems()` 和 `loadMoreItems()`分别用来显示当前的新闻和加载更多的新闻

### 遇到的问题
1.最开始想利用真实数据的新闻API做这个项目，但是当中遇到了些挑战正在解决，例如CROS跨域问题等。
2.期间遇到scrollbar消失的问题，后来发现`div`的高度设置过高了。






