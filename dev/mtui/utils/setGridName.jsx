/*
* @type 设置栅格className
* @author mantou
*/
function setGridName(obj,className){
	let cName = [];
	if(obj.width){
		const wid = obj.width.split('/');
		cName.push('mt-grid '+'mt-grid-'+wid[1]+'-'+wid[0]);
	}

	if(obj.offset){
		const ofs = obj.offset.split('/');
		cName.push('mt-grid-offset-'+ofs[1]+'-'+ofs[0]);
	}

	if(obj.smOffset){
		const ofs = obj.smOffset.split('/');
		cName.push('mt-grid-sm-offset-'+ofs[1]+'-'+ofs[0]);
	}

	if(obj.mdOffset){
		const ofs = obj.mdOffset.split('/');
		cName.push('mt-grid-md-offset-'+ofs[1]+'-'+ofs[0]);
	}

	if(obj.lgOffset){
		const ofs = obj.lgOffset.split('/');
		cName.push('mt-grid-lg-offset-'+ofs[1]+'-'+ofs[0]);
	}

	if(obj.sm){
		const sm = obj.sm.split('/');
		cName.push('mt-grid-sm-'+sm[1]+'-'+sm[0]);
	}

	if(obj.md){
		const md = obj.md.split('/');
		cName.push('mt-grid-md-'+md[1]+'-'+md[0]);
	}

	if(obj.lg){
		const lg = obj.lg.split('/');
		cName.push('mt-grid-lg-'+lg[1]+'-'+lg[0]);
	}

	if(className){
		cName.push(className);
	}

	if(cName.length != 0){
		cName = cName.join(' ');
	}else{
		cName = '';
	}

	return cName;
}
//
export default setGridName;