$(document).ready(function () {

    $(".NUM").text(localStorage.count);


    $('.buy').on('click', function () {
        getCount($(this));
    });

    pushCart()
});

function getCount(element) {

    var count = Localstorage.getLocalstorage('count');
    if (count) {
        count++;
    }
    else {
        count = 1;
    }

    Localstorage.setLocalstorage("count", count);

    $(".NUM").text(count);
    getCartItems(element);


}

function getCartItems(element) {
    var cartItems = Localstorage.getLocalstorage('cartItems');
    if (cartItems === null) {
        cartItems = [];
    }
    var cartItem = getUser(cartItems, element[0].id);
    if (cartItem) {
        cartItem.quantity++;
    }
    else {
        cartItems.push(new CartItem(getItemByName(element[0].id), 1));
    }

    Localstorage.setLocalstorage('cartItems', cartItems);
    pushCart();
//    console.log(cartItems);

}


//function pushCart(cartItems) {
function pushCart() {
    var cartItems = Localstorage.getLocalstorage('cartItems');

    $('#getItems').append(
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
        $('#getItems').append(
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

$('#total').text( getTotal()+'元');
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

function getUser(cartItems, code) {

    for (var i = 0; i < cartItems.length; i++) {
        if (code === cartItems[i].item.name) {
            //cartitem = cartItems[i];
            return cartItems[i];
        }
    }
    return false;
}

function Localstorage() {

}
Localstorage.getLocalstorage = function (key) {

    var result = localStorage.getItem(key);
    if (result) {
        return JSON.parse(result);
    } else {
        return null;
    }
//    console.log();
//    return JSON.parse(localStorage.getItem(key));
//    //return value;
};

Localstorage.setLocalstorage = function (key, value) {

    localStorage.setItem(key, JSON.stringify(value));
};

function getItemByName(name) {
    var Item;
    var allItems = loadItems();

    for (var i = 0; i < allItems.length; i++) {
        if (name == allItems[i].name) {
            Item = allItems[i];
            break;
        }
    }

    return Item;
}
function loadItems() {
    return [
        new Item('饮料类', '雪碧', 3.00, '罐'),
        new Item('水果类', '荔枝', 15.00, '斤'),
        new Item('其他类', '电池', 2.00, '个'),
        new Item('水果类', '苹果', 5.50, '斤'),
        new Item('零食类', '方便面', 4.50, '袋'),
        new Item('其他类', '洗发露', 20.00, '瓶')
    ];
}
