const $=s=>document.querySelector(s);
const data=(window.WORLD_DAYS_DATA||[]).filter(e=>e.category!=="除外候補");
const state={year:new Date().getFullYear(),month:new Date().getMonth(),selected:null,view:"calendar",query:"",category:""};
const jpMonths=["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];
const fmtDate=(m,d)=>`${m+1}月${d}日`;
const dateParts=e=>e.date.split("-").map(Number);
const filtered=()=>data.filter(e=>{
 const q=state.query.toLocaleLowerCase();
 const hay=[e.country,e.countryEn,e.name,e.nameEn,e.category,e.origin].join(" ").toLocaleLowerCase();
 return (!q||hay.includes(q))&&(!state.category||e.category===state.category);
});
function setView(v){state.view=v;document.querySelectorAll(".tab").forEach(b=>b.classList.toggle("active",b.dataset.view===v));["calendar","countries","all"].forEach(k=>$("#"+k+"View").classList.toggle("hidden",k!==v));render();}
function renderCalendar(){
 const first=new Date(state.year,state.month,1).getDay(),days=new Date(state.year,state.month+1,0).getDate();
 $("#monthTitle").textContent=`${state.year}年${state.month+1}月`;
 $("#monthSub").textContent=state.year===new Date().getFullYear()&&state.month===new Date().getMonth()?"今月の国家記念日":"国家記念日を日付から探す";
 const cal=$("#calendar");cal.innerHTML="";
 ["日","月","火","水","木","金","土"].forEach(w=>{let x=document.createElement("div");x.className="weekday";x.textContent=w;cal.append(x)});
 for(let i=0;i<first;i++){let x=document.createElement("div");x.className="day empty";cal.append(x)}
 const today=new Date();
 for(let d=1;d<=days;d++){
  const key=`${String(state.month+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`;
  const matches=filtered().filter(e=>e.date===key);
  const x=document.createElement("button");x.className="day"+(state.selected===key?" selected":"")+(today.getFullYear()===state.year&&today.getMonth()===state.month&&today.getDate()===d?" today":"");x.innerHTML=`<span class="num">${d}</span><div class="marks">${matches.slice(0,6).map(e=>`<i class="mini ${e.status==="historical"?"historical":""}"></i>`).join("")}</div>`;
  x.setAttribute("aria-label",`${state.month+1}月${d}日、${matches.length}件`);x.onclick=()=>{state.selected=key;renderCalendar();renderDayEvents()};cal.append(x)
 }
 if(!state.selected||!state.selected.startsWith(String(state.month+1).padStart(2,"0")+"-"))state.selected=`${String(state.month+1).padStart(2,"0")}-01`;
 renderDayEvents();
}
function eventCard(e,yearMonth=false){
 const [m,d]=dateParts(e);
 const b=document.createElement("button");b.className="event-card";
 b.innerHTML=`<span class="event-date"><strong>${d}</strong>${m}月</span><span><span class="event-name">${esc(e.name)}</span><span class="event-country">${esc(e.country)}${e.year?` · ${e.year}年`:''}</span></span><span class="event-tag ${e.status==="historical"?"historical":""}">${esc(e.category)}</span>`;
 b.onclick=()=>showDetail(e);return b;
}
function renderDayEvents(){
 const [m,d]=state.selected.split("-").map(Number);$("#selectedTitle").textContent=`${state.year}年${m}月${d}日の記念日`;
 const target=$("#dayEvents");target.innerHTML="";
 const list=filtered().filter(e=>e.date===state.selected);
 if(!list.length){target.innerHTML='<p class="muted">この日には、現在のデータに登録された記念日がありません。別の日付や国名で検索してみてね。</p>';return}
 list.forEach(e=>target.append(eventCard(e)));
}
function renderCountries(){
 const target=$("#countryList");target.innerHTML="";
 const countries=[...new Map(filtered().map(e=>[e.country,e])).entries()].sort((a,b)=>a[0].localeCompare(b[0],"ja"));
 if(!countries.length){target.innerHTML='<p class="muted">該当する国がありません。</p>';return}
 countries.forEach(([country,e])=>{const b=document.createElement("button");b.className="country-card";const n=filtered().filter(x=>x.country===country).length;b.innerHTML=`<strong>${esc(country)}</strong><span>${esc(e.countryEn)} · ${n}件の記念日</span>`;b.onclick=()=>{state.query=country;$("#search").value=country;setView("all")};target.append(b)});
}
function renderAll(){const target=$("#allEvents");target.innerHTML="";const list=filtered().slice().sort((a,b)=>a.date.localeCompare(b.date)||a.country.localeCompare(b.country,"ja"));if(!list.length){target.innerHTML='<p class="muted">一致する記念日がありません。</p>';return}list.forEach(e=>target.append(eventCard(e)))}
function render(){if(state.view==="calendar")renderCalendar();if(state.view==="countries")renderCountries();if(state.view==="all")renderAll()}
function showDetail(e){
 const [m,d]=dateParts(e);const status=e.status==="official"?"公式記念日":e.status==="historical"?"歴史上の重要日":"確認中";
 $("#detailContent").innerHTML=`<span class="detail-type ${e.status==="historical"?"historical":""}">${esc(e.category)} · ${status}</span><h2 class="detail-title">${esc(e.name)}</h2><p class="detail-country">${esc(e.country)} / ${esc(e.countryEn)} · ${m}月${d}日${e.year?` · ${e.year}年の出来事`:''}</p><div class="detail-block"><h3>記念日の由来</h3><p>${esc(e.origin||"由来は未確認です。")}</p></div><div class="detail-block"><h3>英語名</h3><p>${esc(e.nameEn||"未登録")}</p></div><div class="detail-block sources"><h3>出典・確認先</h3>${(e.sources||[]).map(s=>`<p>↗ <a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.label||s.url)}</a></p>`).join("")||"<p>出典未登録</p"}<span class="status">${e.status==="official"?"初期データ：公式記念日として登録（出典の個別再確認を推奨）":"要確認"}</span></div>`;
 $("#detailDialog").showModal();
}
function esc(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
document.querySelectorAll(".tab").forEach(b=>b.addEventListener("click",()=>setView(b.dataset.view)));
$("#prevMonth").onclick=()=>{state.month--;if(state.month<0){state.month=11;state.year--}state.selected=null;renderCalendar()};
$("#nextMonth").onclick=()=>{state.month++;if(state.month>11){state.month=0;state.year++}state.selected=null;renderCalendar()};
$("#todayBtn").onclick=()=>{const n=new Date();state.year=n.getFullYear();state.month=n.getMonth();state.selected=null;setView("calendar")};
$("#search").addEventListener("input",e=>{state.query=e.target.value;render()});
$("#categoryFilter").addEventListener("change",e=>{state.category=e.target.value;render()});
$("#closeDialog").onclick=()=>$("#detailDialog").close();
$("#detailDialog").addEventListener("click",e=>{if(e.target===$("#detailDialog"))$("#detailDialog").close()});
if("serviceWorker" in navigator && location.protocol.startsWith("http"))window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
render();