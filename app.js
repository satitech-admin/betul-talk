const IMG={
city:"https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=82",
road:"https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=82",
crowd:"https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=82",
market:"https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1200&q=82",
school:"https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=82",
temple:"https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?auto=format&fit=crop&w=1200&q=82",
news:"https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=82",
phone:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=82",
food:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=82",
event:"https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1200&q=82"
};

const sourceProfile="https://www.instagram.com/betultalks/";
const stories=[
{id:1,cat:"Betul",title:"बैतूल–आमला मामले को लेकर प्रदर्शन, SP कार्यालय पहुंचा छात्र संगठन",desc:"स्थानीय मुद्दे पर प्रदर्शन और ज्ञापन से जुड़ी खबर।",time:"25 Sep 2026",img:IMG.crowd,breaking:true,source:"https://public.app/video/sp_xn6xeh09zz0qr",body:"बैतूल–आमला से जुड़े मामले को लेकर स्थानीय स्तर पर विरोध प्रदर्शन हुआ। छात्र संगठन के कार्यकर्ता SP कार्यालय पहुंचे और ज्ञापन सौंपा। यह कार्ड सार्वजनिक रूप से उपलब्ध, इंडेक्स की गई रिपोर्ट के आधार पर ऐप प्रीव्यू में शामिल किया गया है।"},
{id:2,cat:"Education",title:"Admission Open 2026–27: Madhyanchal Podar Learn School, Betul",desc:"Sonaghati, Betul स्थित स्कूल का प्रवेश प्रचार।",time:"2026",img:IMG.school,ad:true,source:"https://www.instagram.com/betultalks/",body:"Betul Talks के सार्वजनिक रूप से इंडेक्स किए गए प्रमोशनल Reel में 2026–27 admissions के लिए Madhyanchal Podar Learn School का प्रचार दिखता है।"},
{id:3,cat:"Agriculture",title:"कृषि उपज मंडी बैतूल — मंडी भाव अपडेट",desc:"किसानों के लिए गेहूँ, मक्का, सोयाबीन व अन्य फसलों के भाव।",time:"23 Apr 2026",img:IMG.market,source:"https://www.instagram.com/betultalks/",body:"Betul Talks नियमित रूप से कृषि उपज मंडी बैतूल के भाव साझा करता रहा है। इस ऐप में इसके लिए dedicated Agriculture category और daily mandi update format बनाया गया है।"},
{id:4,cat:"Betul",title:"बैतूल टॉक्स: अपना शहर, अपनी बातें",desc:"स्थानीय खबर, कार्यक्रम, नागरिक मुद्दे और शहर की आवाज एक जगह।",time:"Featured",img:IMG.city,source:sourceProfile,body:"Betul Talks के लिए यह नया digital-first experience local news, video, breaking alerts और advertisements को एक unified platform में लाता है।"},
{id:5,cat:"Culture",title:"गणेश उत्सव: शहर की झांकियां और दर्शन",desc:"स्थानीय धार्मिक और सांस्कृतिक आयोजनों की कवरेज।",time:"Archive",img:IMG.temple,source:"https://www.instagram.com/betultalks/",body:"Betul Talks के archived social posts में गणेश उत्सव और स्थानीय धार्मिक आयोजनों की कवरेज प्रमुख रही है।"},
{id:6,cat:"Business",title:"स्थानीय व्यवसायों के लिए Featured Promotion",desc:"Betul businesses के लिए sponsored cards, offers और video ads.",time:"Sponsored",img:IMG.phone,ad:true,source:sourceProfile,body:"Betul Talks app advertisers को banner, sponsored story, video promotion, offer card और featured business placement देता है।"}
];

const reels=[
{id:101,title:"Admission Open 2026–27 • Betul",sub:"Promotional Reel",img:IMG.school,source:"https://www.instagram.com/betultalks/"},
{id:102,title:"बैतूल की ताज़ा स्थानीय अपडेट",sub:"Local News",img:IMG.city,source:sourceProfile},
{id:103,title:"कृषि उपज मंडी अपडेट",sub:"Agriculture",img:IMG.market,source:sourceProfile},
{id:104,title:"शहर के कार्यक्रम और आयोजन",sub:"Events",img:IMG.event,source:sourceProfile},
{id:105,title:"स्थानीय व्यापार और ऑफर्स",sub:"Sponsored",img:IMG.food,source:sourceProfile},
{id:106,title:"Breaking news updates from Betul",sub:"News",img:IMG.news,source:sourceProfile}
];

const businesses=[
{name:"Advertise with Betul Talks",cat:"Media Promotion",offer:"Featured",img:IMG.news,phone:"9425009727"},
{name:"Local Restaurant Promotion",cat:"Food & Dining",offer:"20% Offer",img:IMG.food,phone:"9425009727"},
{name:"Education Campaigns",cat:"Schools & Colleges",offer:"Admissions",img:IMG.school,phone:"9425009727"},
{name:"Mobile & Electronics",cat:"Retail",offer:"Sponsored",img:IMG.phone,phone:"9425009727"},
{name:"Events Promotion",cat:"Events",offer:"Featured",img:IMG.event,phone:"9425009727"},
{name:"Property Listings",cat:"Real Estate",offer:"Promote",img:IMG.road,phone:"9425009727"}
];

const categories=["For You","Betul","MP","Politics","Crime","Education","Business","Agriculture","Sports","Events"];
let activeView="home", activeCat="For You";

function storyCard(s){return `<article class="story-card" data-story="${s.id}"><img loading="lazy" src="${s.img}" alt=""><div class="content"><span class="badge">${s.ad?"Sponsored":s.cat}</span><h3>${s.title}</h3><div class="small-meta">${s.time} · Betul Talks</div></div></article>`}
function miniStory(s){return `<article class="mini-story" data-story="${s.id}"><img src="${s.img}" alt=""><div><span class="badge">${s.cat}</span><h3>${s.title}</h3><small class="muted">${s.time}</small></div></article>`}
function feedItem(s){return `<article class="feed-item" data-story="${s.id}"><img loading="lazy" src="${s.img}" alt=""><div><span class="badge">${s.cat}</span><h3>${s.title}</h3><p class="muted">${s.desc}</p><small class="muted">${s.time}</small></div></article>`}
function reelCard(r,large=false){return `<article class="reel-card ${large?"reel-large":""}" data-reel="${r.id}"><img loading="lazy" src="${r.img}" alt=""><span class="play">▶</span><div class="reel-copy"><span class="badge">Betul</span><h3>${r.title}</h3><small>@betultalks ✓ · ${r.sub}</small></div></article>`}

function renderCategories(){categoryBar.innerHTML=categories.map(c=>`<button class="cat-btn ${c===activeCat?"active":""}" data-cat="${c}">${c}</button>`).join("")}
function filtered(){if(activeCat==="For You")return stories;return stories.filter(s=>s.cat===activeCat||activeCat==="MP")}

function home(){
const list=filtered();
const hero=list[0]||stories[0];
return `<section class="hero"><article class="hero-card" data-story="${hero.id}"><img src="${hero.img}" alt=""><div class="hero-copy"><span class="eyebrow">${hero.breaking?"● LIVE UPDATE":hero.cat}</span><h1>${hero.title}</h1><div class="meta"><span>Betul Talks</span><span>•</span><span>${hero.time}</span></div></div></article><aside class="hero-side">${stories.slice(1,4).map(miniStory).join("")}</aside></section>
<section class="section"><div class="quick-grid">
<button class="quick-card" data-viewjump="home"><span class="quick-icon">▤</span><b>Latest News</b><small>ताज़ा खबरें</small></button>
<button class="quick-card" data-viewjump="videos"><span class="quick-icon">▶</span><b>Video News</b><small>Reels & updates</small></button>
<button class="quick-card" data-viewjump="ads"><span class="quick-icon">📣</span><b>Ads & Offers</b><small>Local deals</small></button>
<button class="quick-card" data-viewjump="explore"><span class="quick-icon">◫</span><b>Explore</b><small>Categories</small></button>
</div></section>
<section class="section"><div class="section-head"><h2>Top Stories</h2><button>See all</button></div><div class="story-grid">${(list.length?list:stories).slice(0,6).map(storyCard).join("")}</div></section>
<section class="section"><div class="section-head"><h2>Video News</h2><button data-viewjump="videos">Watch all</button></div><div class="reel-row">${reels.map(reelCard).join("")}</div></section>
<section class="section sponsored"><div><span class="ad-tag">ADVERTISEMENT</span><h3>Grow your business in Betul</h3><p class="muted">Banner ads, sponsored reels, business listings और local offers के साथ अपने customers तक पहुंचें।</p></div><button class="btn" data-viewjump="ads">Advertise Now</button></section>
<section class="section"><div class="section-head"><h2>Latest from Betul</h2></div><div class="feed">${stories.concat(stories.slice(0,2)).map(feedItem).join("")}</div></section>
<a class="admin-link" href="./admin.html">Admin Panel ↗</a>`}

function videos(){return `<section class="video-page"><div class="section-head"><h2>Video News</h2><span class="muted">@betultalks</span></div><div class="video-tabs"><button>Videos</button><button class="active">Reels</button><button>Live</button></div><div class="reels-wall">${reels.map(r=>reelCard(r,true)).join("")}</div></section>`}
function ads(){return `<section class="ads-hero"><div><span class="badge">BETUL TALKS ADS</span><h1>Grow your business in Betul</h1><p>Local audience तक banner, video, sponsored news और featured listings के जरिए पहुंचें।</p></div><a class="btn" href="https://wa.me/919425009727?text=Hello%20Betul%20Talks%2C%20I%20want%20to%20advertise" target="_blank">WhatsApp Now</a></section><section class="section"><div class="section-head"><h2>Featured Businesses</h2></div><div class="business-grid">${businesses.map(b=>`<article class="business-card"><img src="${b.img}" alt=""><div class="content"><span class="offer">${b.offer}</span><h3>${b.name}</h3><p class="muted">${b.cat}</p><div class="share-row"><a class="btn" href="tel:+91${b.phone}">Call</a><a class="btn secondary" target="_blank" href="https://wa.me/91${b.phone}">WhatsApp</a></div></div></article>`).join("")}</div></section><section class="section sponsored"><div><span class="ad-tag">FOR ADVERTISERS</span><h3>Post Business Ad / Offer / Event</h3><p class="muted">Campaign approval, placement, duration और reporting Betul Talks admin team manage करेगी।</p></div><a class="btn" href="./admin.html">Open Admin Preview</a></section>`}
function explore(){const cats=[["▤","Latest News"],["🏛","Political"],["⚠","Crime"],["🎓","Education"],["❤","Health"],["💼","Jobs"],["📅","Events"],["🛕","Religious"],["🏪","Business"],["⌂","Real Estate"],["🌱","Agriculture"],["⚽","Sports"],["🎬","Entertainment"],["…","More"]];return `<input class="explore-search" id="exploreSearch" placeholder="Search news, videos, businesses…"><div class="explore-grid">${cats.map(c=>`<button class="explore-card"><div class="emoji">${c[0]}</div><b>${c[1]}</b></button>`).join("")}</div><section class="section"><div class="section-head"><h2>Trending in Betul</h2></div><div class="feed">${stories.slice(0,5).map(feedItem).join("")}</div></section>`}
function profile(){return `<section class="profile-card"><div class="avatar">👤</div><h2>Betul Talks Reader</h2><p class="muted">📍 Betul, Madhya Pradesh</p><button class="btn">Sign in / Create account</button></section><div class="profile-actions">${["🔖 Saved News","❤ Liked News","💬 My Comments","🔔 Notification Preferences","📣 Advertise With Us","अ Language: Hindi + English","⚙ Settings","? Help & Support"].map(x=>`<button class="profile-row"><span>${x}</span><span>›</span></button>`).join("")}</div>`}

function render(){renderCategories();app.innerHTML=activeView==="home"?home():activeView==="videos"?videos():activeView==="ads"?ads():activeView==="explore"?explore():profile();bindDynamic()}
function bindDynamic(){
document.querySelectorAll("[data-story]").forEach(el=>el.onclick=()=>openStory(+el.dataset.story));
document.querySelectorAll("[data-reel]").forEach(el=>el.onclick=()=>{const r=reels.find(x=>x.id===+el.dataset.reel);window.open(r.source,"_blank")});
document.querySelectorAll("[data-viewjump]").forEach(el=>el.onclick=()=>switchView(el.dataset.viewjump));
}
function switchView(v){activeView=v;document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.view===v));window.scrollTo({top:0,behavior:"smooth"});render()}
function openStory(id){const s=stories.find(x=>x.id===id);if(!s)return;storyBody.innerHTML=`<img class="article-cover" src="${s.img}" alt=""><div class="article-content"><span class="badge">${s.cat}</span><h1>${s.title}</h1><div class="meta" style="color:#777"><span>Betul Talks</span><span>•</span><span>${s.time}</span></div><p>${s.body}</p><div class="share-row"><button class="btn" onclick="navigator.share?navigator.share({title:'${s.title.replaceAll("'","")} ',url:location.href}):null">Share</button><a class="btn secondary" target="_blank" href="${s.source}">Original source ↗</a></div><div class="source-box"><b>Source transparency</b><p class="muted">Preview में वही externally sourced items शामिल हैं जो public web पर index होकर verify किए जा सके। Betul Talks के सभी Instagram posts/reels की automatic sync के लिए official Instagram Graph API access connect करना होगा.</p></div></div>`;storyDialog.showModal()}
document.querySelectorAll(".nav-item").forEach(b=>b.onclick=()=>switchView(b.dataset.view));
categoryBar.addEventListener("click",e=>{if(!e.target.dataset.cat)return;activeCat=e.target.dataset.cat;activeView="home";render()});
tickerTrack.textContent="बैतूल की ताज़ा खबरें • Local News • Video Updates • Mandi Bhav • Events • Advertisements • Betul Talks 24×7";
searchBtn.onclick=()=>{searchDialog.showModal();setTimeout(()=>globalSearch.focus(),50)};
globalSearch?.addEventListener("input",e=>{const q=e.target.value.trim().toLowerCase();const hits=stories.filter(s=>(s.title+" "+s.desc+" "+s.cat).toLowerCase().includes(q));searchResults.innerHTML=q?hits.map(s=>`<div class="search-hit" data-id="${s.id}"><b>${s.title}</b><small class="muted" style="display:block">${s.cat} · ${s.time}</small></div>`).join(""):"";document.querySelectorAll(".search-hit").forEach(h=>h.onclick=()=>{searchDialog.close();openStory(+h.dataset.id)})});
render();
if("serviceWorker"in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));