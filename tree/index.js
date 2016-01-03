(function(){
	//"use strict";
	
	var data = [
				{ "Name": "一级栏目", "Id":1, "FatherId": 0},
				{ "Name": "一级栏目", "Id":2, "FatherId": 0},
				{ "Name": "一级栏目", "Id":3, "FatherId": 0},
				{ "Name": "二级栏目", "Id":4, "FatherId": 2},
				{ "Name": "二级栏目", "Id":5, "FatherId": 2},
				{ "Name": "二级栏目", "Id":6, "FatherId": 1},
				{ "Name": "二级栏目", "Id":7, "FatherId": 3},
				{ "Name": "三级栏目", "Id":8, "FatherId": 4},
				{ "Name": "三级栏目", "Id":9, "FatherId": 4},
				{ "Name": "三级栏目", "Id":10, "FatherId": 5},
				{ "Name": "三级栏目", "Id":11, "FatherId": 6},
				{ "Name": "四级栏目", "Id":12, "FatherId": 10}
		];

    var treelist = [];
    var len = data.length;
    //辅助函数，实现分类前面空格重复
	function repeat(target, n) {
	  var s = target, c = s.length * n;
	  do {
	    s += s;
	  } while (n = n >> 1);
	  s = s.substring(0, c);
	  return s;
	}
	// 利用递归实现无序数组变有序排列的分类树
	// opi是父节点id
	// spac是用来层级显示树的层级
	//逻辑是遍历源数组，找符合父节点id的子节点的零时数组t，找到后递归查找t元素中的子节点
	function tree (opi,spac){
		spac += 1;//树的层级
		var t = [];
		for (var i = 0; i <len; i++) {
			if (data[i].FatherId == opi) {
				t.push(data[i])
			};
		};
		if(t.length){
			for (var j = 0; j < t.length; j++) {
				t[j].Name = repeat("&nbsp;",spac) + t[j].Name;//树的层级名称
				treelist.push(t[j]);
				tree(t[j].Id,spac);
				//console.log(t[j]);
			};	
		}
	    return treelist;
	}



	var a =tree(0,0);
	for (var i = 0; i < a.length; i++) {
		document.write(a[i].Name+"&nbsp;id："+a[i].Id+"&nbsp;父id："+a[i].FatherId+'</br>');
	};
	

})();
