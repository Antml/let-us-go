/**
 * Created by zhangyun on 14-8-17.
 */
$(document).ready(function(){

    $(".apple").on('click','button',function(){


        $('.getItems'+group).append('<div class="row text-center">'
            +'<div class="col-md-1"></div>'
            +'<div class="col-md-1"><label>编号</label></div>'
            +'<div class="col-md-2"><label>名称</label></div>'
            +'<div class="col-md-2"><label>单价</label></div>'
            +'<div class="col-md-2"><label>数量</label></div>'
            +'<div class="col-md-2"><label>小计</label></div>'
            +'<div class="col-md-1"><label>删除</label></div>'

            +'</div>');

    });
});
