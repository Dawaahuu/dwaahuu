// function --> dhij ashiglah blmjtoi codni tsugluulga
function restart(){
	console.log("game restarted");
	console.log("hello");
}
restart();
restart();
restart();

function hello(name,age){
	console.log("snu mni nerig" + name);
	console.log("minii nas" + age);
}
hello("dwahu",15);
function sum(a,b){
	console.log(a+b);
}
sum(15,20);
sum(56,160);
function too(i,d){
	if(i>d){
		console.log(i);
	}else{
		console.log(d)
	}
}
sum(12,45);
sum(13,760);
var body = document.getElementsByTagName('body')[0];
console.log(body);
var colors = ['red','aqua','purple','yellow','blue','brown'];
var btn = document.getElementsByTagName('button')[0]
console.log(btn);
var i=-1;
function color(){
	random = Math.floor(Math.random()*(colors.length-1));
	i++;
	body.style.backgroundColor=colors[random]
	btn.innerText = colors[random];
	if(i>=colors.length-1){
		i=-1;
	}
}
var btn = document.getElementsByTagName('button')[0]
console.log(btn);