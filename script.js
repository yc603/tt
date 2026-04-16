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
}

/* 加载题目 */
function loadQ(){
let q = questions[qIndex];

document.getElementById("qtitle").innerText =
"第 " + (qIndex+1) + " 题：" + q.q;

let html = "";

q.options.forEach(opt=>{
html += `
<label onclick="selectAnswer(this,'${opt}')">
<input type="radio" name="opt" style="display:none">
${opt}
</label>
`;
});

document.getElementById("options").innerHTML = html;
}

/* ⭐ 点击即判定 */
function selectAnswer(el,value){

let correct = questions[qIndex].answer;

/* 防止重复点击 */
if(document.querySelector(".locked")) return;
document.getElementById("options").classList.add("locked");

if(value === correct){

el.classList.add("correct");

setTimeout(()=>{
nextQ();
},600);

}else{

el.classList.add("wrong");

/* 标出正确答案 */
setTimeout(()=>{
document.querySelectorAll("label").forEach(l=>{
if(l.innerText.trim() === correct){
l.classList.add("correct");
}
});
},300);

setTimeout(()=>{
nextQ();
},1200);
}
}

/* 下一题 */
function nextQ(){

qIndex++;

document.getElementById("options").classList.remove("locked");

if(qIndex >= questions.length){
go(3);
}else{
loadQ();
}
}

/* 信封 */
function openEnv(){
document.getElementById("env").classList.add("open");
let l=document.getElementById("letter");
l.style.display="block";
type(l,"生日快乐 💌 愿你每天开心幸福");
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
