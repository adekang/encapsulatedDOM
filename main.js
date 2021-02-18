// 创建
console.log('hi');
const div = dom.create('<div>我是兄弟</div>');

//插入
console.log(div);
dom.after(test, div)

// 
const div3 = dom.create("<div id='parent'>我是爸爸</div>");
dom.wrap(test, div3);

// 移除节点

const nodes = dom.empty(window.empty);
console.log(nodes);

// 改div的title
dom.attr(test, 'title', 'lala');
// 获取 title 
const title = dom.attr(test, 'title');
console.log(title);

// 改文本 
dom.text(text01, '这是新的内容哦')

// 修改style样式
dom.style(style01, {
    border: '1px solid red',
    color: 'red'
})
// 读style样式
console.log(dom.style(style01, 'border'));
dom.style(style01, 'border', '1px solid #000')

// 添加类
dom.class.add(class01, 'red');
dom.class.remove(class01, 'red');
dom.class.add(class01, 'blue');
console.log(dom.class.has(class01, 'blue')); // 返回 true

// click事件
const fn = function () {
    console.log('点击了');
}
// 添加监听事件
dom.on(click01, 'click', fn)
// 移除监听事件
dom.off(click01, 'click', fn)

// 获取元素
const testDiv = dom.find('#test')[0];
console.log(testDiv);
// 在指定的盒子找
console.log(dom.find('.red', testDiv));

// 找父亲
console.log(dom.parent(test));

// 找兄弟
const s2 = dom.find('#s2')[0];
console.log(dom.siblings(s2));
// 找弟弟
console.log(dom.next(s2));
console.log(dom.previous(s2));

// 遍历
const t = dom.find('#travel')[0];
dom.each(dom.children(t),(n)=>dom.style(n,'color','red'))

// 找下标
console.log(dom.index(s2));