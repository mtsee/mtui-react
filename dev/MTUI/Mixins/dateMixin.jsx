/**
* 一个简单的日历插件
* @author : Mantou
* @date : 2016-03-01
*/
const DateInput = {

	format(data){
		if(this.props.format != undefined){

			var yearLen = (this.props.format.indexOf('y') == -1 ?0:this.props.format.match(/[y]/ig).length)
			var monthLen = (this.props.format.indexOf('m') == -1 ?0:this.props.format.match(/[m]/ig).length)
			var dayLen = (this.props.format.indexOf('d') == -1 ?0:this.props.format.match(/[d]/ig).length)

			var val = this.props.format;
			if(yearLen > 4 || monthLen > 2 || dayLen > 2){
				console.error('format 格式错误，请参考 yyyy-mm-dd');
				return
			}
			var year = data.year.toString().substr(4-yearLen,yearLen);
			var y = function(){
				var str = '';
				for(var i=0; i < yearLen; i++){
					str+='y';
				}
				return str;
			};
			val = val.replace(y(),year);

			if(monthLen == 2){
				var month = data.month < 10 ? '0'+parseInt(data.month, 10) : data.month;
				val = val.replace('mm',month);
			}else{
				var month = data.month;
				val = val.replace('m',month);
			}
			if(dayLen == 2){
				var day = data.day < 10 ? '0'+parseInt(data.day, 10) : data.day
				val = val.replace('dd',day);
			}else{
				var day = data.day;
				val = val.replace('d',day);
			}
		}else{
			var yearLen = 4;
			var monthLen = 2;
			var dayLen = 2;
			var val = data.year+'/'+data.month+'/'+data.day;
		}
		return {
				val:val ,
				formatShow:{
					year: yearLen == 0 ? false : true,
					month: monthLen == 0 ? false : true,
					day: dayLen == 0 ? false : true
				}
			};
	}

};

//配置信息
export default DateInput;