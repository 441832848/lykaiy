(function($) {

$(function() {

$(document).ready(function () {

$('#nav li').hover(

function () {

//��ʾ�����˵��������е����ֱ�ʾ�����˵���ȫ��ʾ������Ҫ200���롣

$('ul'�� this).slideDown(200);

},

function () {

//���ض����˵�

$('ul', this).slideUp(150);

}

);

);

});

})(jQuery);