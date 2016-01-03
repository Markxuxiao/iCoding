+function(){
	var $todo = $("#todo");
	var $todoBt = $("#todoBt");
	var $todoList = $("#todoList");
	var text;
	//点击确定添加到todolist
	$todoBt.on("click",function () {
		if($todo.val()){
			text = $todo.val();
			addlist();
			$todo.val("")
		}
	});
	//添加组件到列表里
	function addlist() {
		var a = ClasslistLi();
		$todoList.append(a);
	}
	//单条记录组件
	function ClasslistLi() {
		var html ='<li>'
					+'<input type="checkbox" name="n1">'
					+'<span>'+text+'</span>'
					+'<button type="button" class="am-btn am-btn-warning am-round">修改</button>'
					+'<button type="button" class="am-btn am-btn-danger am-round">删除</button>'
					+'</li>';
		var ele = $(html);
		ele.find("input[type='checkbox']").click(function(){chack(this);});
		ele.find(".am-btn-danger").click(function(){dele(this);});
		ele.find(".am-btn-warning").click(function(){change(this);});
		return ele;
	}
	//选择框的事件
	function chack(ele){
		if($(ele).is(':checked')){
			$(ele).parent().find("span").css("text-decoration","line-through");
		}else{
			$(ele).parent().find("span").css("text-decoration","none");
		}
	}
	//删除按钮的事件
	function dele(ele){
		$(ele).parent().remove();
	}
	//修改按钮的事件
	function change(ele){
		text = $(ele).parent().find("span").text();
		var html ='<li>'
					+'<input type="text" value="'+text+'">'
					+'<button type="button" class="am-btn am-btn-warning am-round">确定</button>'
					+'</li>';
		var newele=$(html);
		newele.find(".am-btn-warning").click(function(){change2(this);});
		$(ele).parent().replaceWith(newele);
		
	}
	//点修改后确定按钮的事件
	function change2(ele){
		text = $(ele).parent().find("input").val();
		var NewEle = ClasslistLi();
		$(ele).parent().replaceWith(NewEle);
	}


}();

