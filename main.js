/**
 * Created by zhangyun on 14-8-17.
 */
$(document).ready(function(){
    $('.noitems').append("<h1 class=text-center>您还没有购买任何商品！</h1>>");
});

function loadItems(){
    return[
        new Item('雪碧', '3.00', '罐'),
        new Item('荔枝', '15.00', '斤'),
        new Item('电池', '2.00', '个'),
        new Item('苹果', '5.50', '斤'),
        new Item('方便面', '4.50', '袋'),
        new Item('洗发露', '20.00', '瓶')
    ];

}
function addItems(){
    var allItems = loadItems();
    $
}