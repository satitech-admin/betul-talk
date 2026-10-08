const seed=[["बैतूल–आमला मामले को लेकर प्रदर्शन","News","Published","25 Sep 2026"],["Admission Open 2026–27 • Madhyanchal Podar Learn School","Advertisement","Published","2026"],["कृषि उपज मंडी बैतूल — मंडी भाव","News","Published","23 Apr 2026"],["गणेश उत्सव कवरेज","Video/Reel","Published","Archive"],["Local Business Promotion","Advertisement","Active","Campaign"]];
let rows=JSON.parse(localStorage.getItem("bt_admin_rows")||"null")||seed;
function draw(){adminRows.innerHTML=rows.map((r,i)=>`<tr><td><b>${r[0]}</b></td><td>${r[1]}</td><td><span class="status">${r[2]}</span></td><td>${r[3]}</td><td><button class="btn secondary" onclick="removeRow(${i})">Delete</button></td></tr>`).join("")}
window.removeRow=i=>{rows.splice(i,1);localStorage.setItem("bt_admin_rows",JSON.stringify(rows));draw()}
newsForm.onsubmit=e=>{e.preventDefault();rows.unshift([headline.value,"News",status.value,new Date().toLocaleDateString("en-IN")]);localStorage.setItem("bt_admin_rows",JSON.stringify(rows));draw();newsForm.reset();alert("News saved in preview CMS.")};
newPost.onclick=()=>headline.focus();
syncBtn.onclick=()=>alert("Instagram auto-sync is ready for official Meta Graph API credentials. Public scraping is not used for production.");
draw();