let qIndex = 0;

const questions = [
{q:"1+1=?", options:["1","2","3","4"], answer:"2"},
{q:"太阳从哪边升起？", options:["西","北","东","南"], answer:"东"},
{q:"水的化学式？", options:["CO2","O2","H2O","NaCl"], answer:"H2O"},
{q:"一年有多少个月？", options:["10","11","12","13"], answer:"12"},
{q:"5+3=?", options:["5","8","9","6"], answer:"8"},
{q:"地球是？", options:["方","圆","三角","不规则"], answer:"圆"},
{q:"猫英文？", options:["dog","cat","cow","pig"], answer:"cat"},
{q:"10-7=?", options:["2","3","4","5"], answer:"3"},
{q:"红色英文？", options:["blue","green","red","yellow"], answer:"red"},
{q:"生日快乐英文？", options:["Happy Day","Happy Birth","Happy Birthday","Birth Happy"], answer:"Happy Birthday"}
];

/* 页面切换 */
function go(n){
document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
document.getElementById('p'+n).classList.add('active');

if(n===2) loadQ();
if(n===5) rain();
}

/* 加载题目 */
function loadQ(){
let q = questions[qIndex];

document.getElementById("qtitle").innerText =
"第 " + (qIndex+1) + " 题：" + q.q;

let html="";
q.options.forEach(opt=>{
html += `
<label>
<input type="radio" name="opt" value="${opt}">
${opt}
</label>
`;
});

document.getElementById("options").innerHTML = html;
}

/* 检查答案 */
function check(){
let selected = document.querySelector('input[name="opt"]:checked');
let btn = document.getElementById("submitBtn");

if(!selected){
alert("请选择答案");
return;
}

if(selected.value === questions[qIndex].answer){
btn.style.background="green";
btn.innerText="正确";

setTimeout(()=>{
qIndex++;
if(qIndex>=questions.length){
go(3);
}else{
btn.style.background="";
btn.innerText="确认答案";
loadQ();
}
},500);

}else{
btn.style.background="red";
btn.innerText="错误";

setTimeout(()=>{
btn.style.background="";
btn.innerText="确认答案";
},500);
}
}

/* 信封动画 */
function openEnv(){
document.getElementById("env").classList.add("open");
let l=document.getElementById("letter");
l.style.display="block";
type(l,"生日快乐 💌 愿你每天开心");
}

/* 打字 */
function type(el,text){
el.innerHTML="";
let i=0;
let t=setInterval(()=>{
el.innerHTML+=text[i];
i++;
if(i>=text.length) clearInterval(t);
},60);
}

/* 瀑布 */
function rain(){
for(let i=0;i<20;i++){
let d=document.createElement("div");
d.innerHTML="📷";
d.style.position="absolute";
d.style.left=Math.random()*100+"vw";
d.style.animation="fall 4s linear infinite";
document.body.appendChild(d);
}
}
