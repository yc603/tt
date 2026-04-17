let current = 1;

/* 页面切换 */
function go(n){
document.querySelectorAll(".page")
.forEach(p => p.classList.remove("active"));

document.getElementById("p"+n).classList.add("active");
current = n;
}

/* 音乐点击播放（浏览器限制） */
document.addEventListener("click", () => {
document.getElementById("bgm").play();
}, { once:true });

/* 吹蜡烛 */
function blowCandle(){
alert("蜡烛吹灭✨愿望实现！");
go(4);
}

/* 打开信封 */
function openEnvelope(){
go(5);

document.getElementById("letterText").innerText =
"生日快乐🎂\n愿你每天都开心✨\n好运一直在你身边。";

setTimeout(()=>{
document.getElementById("nextBtn").style.display="block";
},2000);
}

/* 翻明信片 */
function flipCard(){
document.getElementById("card").classList.toggle("flipped");

document.getElementById("typeText").innerText =
"谢谢你来到这里💌";
}

/* 照片雨 */
const photos = [
"images/20240727_130322.jpg",
"images/20240818_132518.jpg"
];

function startPhotos(){
const box = document.getElementById("photos");

for(let i=0;i<20;i++){
let img = document.createElement("div");
img.className="photo";
img.style.left=Math.random()*100+"%";
img.style.animationDuration=(3+Math.random()*5)+"s";
img.style.backgroundImage=`url(${photos[i%photos.length]})`;
box.appendChild(img);
}
}

startPhotos();
