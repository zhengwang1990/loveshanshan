var index = 0;
var questions = ["\u5728\u5f00\u8f66\u7684\u65f6\u5019\uff0c\u5982\u679c\u653e\u5728\u53d8\u901f\u6746\u9644\u8fd1\u7684\u7269\u4f53\u6389\u5230\u4e86\u9a7e\u9a76\u5458\u7684\u8eab\u4e0a\uff0c\u90a3\u4e48\u8fd9\u4e2a\u4e1c\u897f\u4e00\u822c\u662f\u6389\u8fdb\u4e86\uff1f",
		 "\u6cd5\u8f6e\u529f\u53ef\u4ee5\u6cbb\u597d\u4e0b\u5217\u54ea\u79cd\u75be\u75c5\uff1f",
		 "\u9648\u7eee\u8d1e\u5973\u58eb\u66fe\u63d0\u51fa\u4e00\u4e2a\u53d1\u4eba\u7701\u9192\u7684\u5047\u8bf4\uff1a\u201c\u8bf4\u4e00\u53f7\u516c\u8def\u4e0a\uff0c\u90a3\u5ea7\u6865\u65ad\u4e86\u201d\u3002\u8bf7\u95ee\u4e00\u53f7\u516c\u8def\u4e0a\u7684\u6865\u4fee\u597d\u4e86\u6ca1\u6709\uff1f",
		 "\u4e0b\u56fe\u7684\u5c0f\u72d7\u662f\u54ea\u4e00\u4e2a\u54c1\u79cd\uff1f",
		 "\u65e7\u91d1\u5c71\u4e2d\u56fd\u57ce\u7684\u4e66\u5e97\uff0c\u4e70\u4e0d\u5230\u4e0b\u5217\u54ea\u79cd\u6742\u5fd7\uff1f",
		 "\u8457\u540d\u8857\u5934\u6447\u6eda\u97f3\u4e50\u201c\u8c01\u662f\u0048\u0061\u0070\u0070\u0079\u0020\u0042\u006f\u0079\u201d\u7684\u4e0b\u4e00\u53e5\u662f\u4ec0\u4e48\uff1f",
		 "\u4e0b\u5217\u54ea\u4e2a\u8bcd\u53ef\u4ee5\u8868\u8fbe\u201c\u5927\u6069\u4e0d\u8a00\u8c22\u201d\u7684\u542b\u4e49\uff1f",
		 "\u4e0b\u9762\u8fd9\u5f20\u4f53\u73b0\u51fa\u9ad8\u8d85\u6444\u5f71\u6280\u5de7\u7684\u7167\u7247\u4e2d\uff0c\u7167\u7247\u4e2d\u7684\u4eba\u7269\u51fa\u73b0\u5728\u54ea\u91cc\uff1f",
		 "\u4e0b\u56fe\u4e2d\u7684\u8fd9\u9053\u83dc\uff0c\u53ef\u4ee5\u5728\u4e0b\u9762\u54ea\u4e2a\u9910\u9986\u4e2d\u5403\u5230\uff1f",
		 "\u4e0b\u9762\u54ea\u4e2a\u5355\u8bcd\u7684\u0026\u0071\u0075\u006f\u0074\u003b\u006f\u006f\u0026\u0071\u0075\u006f\u0074\u003b\u53d1\u97f3\u6700\u4e3a\u77ed\u4fc3\uff1f"];
var pictures = ["", "", "", "img/xiaohuang.jpg", "", "", "", "img/shanshan.jpg", "img/dish.jpg", ""];
var answers = [["\u88e4\u817f\u91cc", "\u88e4\u88c6\u91cc", "\u88e4\u89d2\u91cc"], 
	       ["\u5931\u660e", "\u9f3b\u708e", "\u7cd6\u5c3f\u75c5"],
	       ["\u4fee\u597d\u4e86", "\u6ca1\u4fee\u597d"],
	       ["\u91d1\u6bdb", "\u54c8\u58eb\u5947", "\u535a\u7f8e", "\u67ef\u57fa"],
	       ["Vivi", "\u9f99\u864e\u8c79", "\u4e1c\u5317\u90a3\u4e9b\u4e8b"], 
	       ["\u6211\u662f Happy Boy", "\u4f60\u662f Happy Boy", "\u4ed6\u662f Happy Boy"],
	       ["\u8a00\u8a00", "\u5bf8\u5bf8", "\u8eab\u8eab", "\u5c04\u5c04"],
	       ["Lake Tahoe", "Twin Peaks", "Los Angeles"],
	       ["\u6e05\u771f\u4e00\u6761\u9f99", "\u4e0a\u6d77\u5bb6\u5e38\u83dc", "\u897f\u5b89\u98df\u5e9c", "\u5c71\u57ce\u79c1\u623f\u83dc"],
	       ["zoox", "zoo", "food", "mood"]];
var correct = [1, 0, 0, 2, 2, 0, 3, 1, 1, 0];

// A $( document ).ready() block.
$( document ).ready(function(){
	init();
});

$("ul").on("click", ".yes", function(){
	index += 1;
	if (index >= questions.length){
	    window.location.href="love";
	} else {
	    load();
	}
});

$("ul").on("click", ".no", function(){
	window.location.href="wrong";
});

function load(){
    $("h1").html(questions[index]);
    if (pictures[index]){
	$("#pic").html("<img src=" + pictures[index] + " width=360>");
    }else{
	$("#pic").html("");
    }
    $("ul").html("");
    $("#index").html(index);
    for(var j=0; j<answers[index].length; j++){
	var content = "";
	if (j == correct[index]){
	    content += "<li class='yes'>";
	} else {
	    content += "<li class='no'>";
	}
	content += answers[index][j] + "</li>";
	$("ul").append(content);
    }
}

function shuffle(a, b, c, d){
    for (var i = a.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var x = a[i]; a[i] = a[j]; a[j] = x;
	var y = b[i]; b[i] = b[j]; b[j] = y;
	var z = c[i]; c[i] = c[j]; c[j] = z;
	var w = d[i]; d[i] = d[j]; d[j] = w;
    }
}

function init(){
    index = 0;
    $("#total").html(questions.length);
    shuffle(questions, answers, correct, pictures);
    load();
}
