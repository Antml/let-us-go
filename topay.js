/**
 * Created by zhangyun on 14-8-19.
 */
$(document).ready(function () {
    $('.btn-lg').on('click',function(){
        pushCart();
    });

});

function pushCart() {
    var cartItems = Localstorage.getLocalstorage('cartItems');
    console.log(cartItems);
    $('#over').append(
            '<div class="row text-center">'
            + '<div class="col-md-1"></div>'
            + '<div class="col-md-2"><label>名称</label></div>'
            + '<div class="col-md-2"><label>单价</label></div>'
            + '<div class="col-md-2"><label>单位</label></div>'
            + '<div class="col-md-2"><label>数量</label></div>'
            + '<div class="col-md-2"><label>小计</label></div>'
            + '</div>'
            + '<div class="row text-center">'
            + '<div class="col-md-12">&nbsp;</div>'
            + '</div>'
    );

    for (var i = 0; i < cartItems.length; i++) {
        $('#over').append(
                '<div class="row text-center">'
                + '<div class="col-md-1"></div>'
                + '<div class="col-md-2">' + cartItems[i].item.name + '</div>'
                + '<div class="col-md-2"><span >' + cartItems[i].item.price + '元' + '</span></div>'
                + '<div class="col-md-2"><span >' + cartItems[i].item.unit + '</span></div>'
                + '<div class="col-md-2"><span >' + cartItems[i].quantity + '</span></div>'
                + '<div class="col-md-2"><span >' + ((cartItems[i].quantity) * (cartItems[i].item.price)) + '元</span></div>'
                + '</div>'
        );
    }

    $('#buttom').text( getTotal()+'元');
}
function getTotal(){
    var total = 0;
    var cartItems = Localstorage.getLocalstorage('cartItems');
    for (i=0;i<cartItems.length;i++)
    {
        total =total+ (cartItems[i].item.price)*(cartItems[i].quantity)
    }
    return total;
}
