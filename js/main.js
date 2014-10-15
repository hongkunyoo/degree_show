$(function(){
	$.main = {};
	var mClient = new MobileClient(GlobalVariables.TEST_URL, GlobalVariables.TEST_KEY);
	$.main.squareHelper = new SquareHelper(mClient.getClient());
	$.main.messageHelper = new MessageHelper(mClient.getClient());
	
	$.main.messageHelper.fetchMessage({
		success: function(result) {
			
			$("#message_list").append("<div class='list_item'>"+prettify(result.result)+"</div>");
			console.log($("#message_list").scrollBy);
			// window.scrollBy(x,y);			
		}, error: function(err) {
			
		}
	});
	
	var filter = ["type", "sender", "content", "time"];	
	function prettify(item) {
		var d = new Date();
		var time = fillZeor(d.getHours()) + ":" + fillZeor(d.getMinutes());
		item.time = time;
		var ret = "{ \n";
		for (var i in item) {
			if (filter.indexOf(i) != -1)
				ret += ("<div><span class='mykey'>"+i+"</span><span class='value'>"+item[i] +"</span></div>");
		}	
		// var d = new Date();
		// var time = fillZeor(d.getHours()) + ":" + fillZeor(d.getMinutes());
		// ret += ("<div><span class='mykey'>time</span><span class='value'>"+time +"</span></div> \n}");
		ret += "\n}";
		return ret;
	}
	
	function fillZeor(number) {
		var str = "" + number;
		if (str.length == 1) {
			return "0"+number;
		}	
		return number;
	}
});