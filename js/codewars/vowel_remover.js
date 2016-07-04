function shortcut(str){
	return str.replace(/[aeoui]/g, '');
}

console.log(shortcut('how are you today?'));