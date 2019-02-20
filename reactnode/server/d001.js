function d1(name1,name2){
	console.log(name1 , name2);
}
var arr = ['zhong','xd'];
d1.apply(null,arr);


let  obj = {name:'zhogxd',age:18,sex:'男'};
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));