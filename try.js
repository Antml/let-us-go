/**
 * Created by zhangyun on 14-8-17.
 */
$(document).ready(function(){
    var num = 0;
    $("#items").on('click','button',function(){

        num++;
      $('#num').text(+num);
        return num;
    });
});
