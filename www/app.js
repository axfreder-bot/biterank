// ═══════════════════════════════════════════════
//  CITIES
// ═══════════════════════════════════════════════
const CITIES = {
  seattle:  {name:'Seattle, WA',      lat:47.6062, lng:-122.3321, emoji:'🌲'},
  portland: {name:'Portland, OR',     lat:45.5051, lng:-122.6750, emoji:'🌹'},
  sf:       {name:'San Francisco, CA',lat:37.7749, lng:-122.4194, emoji:'🌉'},
  nyc:      {name:'New York, NY',     lat:40.7128, lng:-74.0060,  emoji:'🗽'},
  chicago:  {name:'Chicago, IL',      lat:41.8781, lng:-87.6298,  emoji:'🌬️'},
  la:       {name:'Los Angeles, CA',  lat:34.0522, lng:-118.2437, emoji:'🌴'},
  austin:   {name:'Austin, TX',       lat:30.2672, lng:-97.7431,  emoji:'🤠'},
  miami:    {name:'Miami, FL',        lat:25.7617, lng:-80.1918,  emoji:'🌊'},
};

// ── NEIGHBORHOOD DATA ──
// Each entry: { label, lat, lng } — used to re-center search
const CITY_NEIGHBORHOODS = {
  seattle: [
    {label:'Ballard',       lat:47.6685, lng:-122.3830},
    {label:'Fremont',       lat:47.6510, lng:-122.3500},
    {label:'Capitol Hill',  lat:47.6253, lng:-122.3222},
    {label:'West Seattle',  lat:47.5630, lng:-122.3869},
    {label:'Queen Anne',    lat:47.6372, lng:-122.3572},
    {label:'SLU',           lat:47.6218, lng:-122.3366},
    {label:'Pioneer Square',lat:47.6016, lng:-122.3322},
    {label:'International District',lat:47.5986,lng:-122.3236},
    {label:'U District',    lat:47.6588, lng:-122.3133},
    {label:'Bellevue',      lat:47.6101, lng:-122.2015},
    {label:'Kirkland',      lat:47.6769, lng:-122.2060},
    {label:'Redmond',       lat:47.6740, lng:-122.1215},
  ],
  portland: [
    {label:'Pearl District', lat:45.5272, lng:-122.6837},
    {label:'Alberta Arts',   lat:45.5582, lng:-122.6447},
    {label:'Division St',    lat:45.5002, lng:-122.6329},
    {label:'Mississippi Ave',lat:45.5469, lng:-122.6779},
    {label:'Hawthorne',      lat:45.5122, lng:-122.6296},
    {label:'NW 23rd',        lat:45.5271, lng:-122.6989},
    {label:'Sellwood',       lat:45.4712, lng:-122.6622},
    {label:'Lake Oswego',    lat:45.4207, lng:-122.7006},
  ],
  sf: [
    {label:'Mission',        lat:37.7599, lng:-122.4148},
    {label:'Castro',         lat:37.7609, lng:-122.4350},
    {label:'Hayes Valley',   lat:37.7762, lng:-122.4243},
    {label:'North Beach',    lat:37.8061, lng:-122.4103},
    {label:'Chinatown',      lat:37.7941, lng:-122.4079},
    {label:'Richmond',       lat:37.7796, lng:-122.4643},
    {label:'Sunset',         lat:37.7530, lng:-122.4861},
    {label:'SOMA',           lat:37.7785, lng:-122.3948},
    {label:'Noe Valley',     lat:37.7502, lng:-122.4337},
    {label:'Inner Sunset',   lat:37.7604, lng:-122.4685},
  ],
  nyc: [
    {label:'Williamsburg',   lat:40.7081, lng:-73.9571},
    {label:'Astoria',        lat:40.7721, lng:-73.9303},
    {label:'LES',            lat:40.7150, lng:-73.9840},
    {label:'East Village',   lat:40.7265, lng:-73.9815},
    {label:'West Village',   lat:40.7336, lng:-74.0027},
    {label:'Flushing',       lat:40.7675, lng:-73.8330},
    {label:'Bushwick',       lat:40.6944, lng:-73.9213},
    {label:'Harlem',         lat:40.8116, lng:-73.9465},
    {label:'Midtown',        lat:40.7549, lng:-73.9840},
    {label:'Brooklyn Heights',lat:40.6963,lng:-73.9942},
    {label:'Park Slope',     lat:40.6681, lng:-73.9800},
    {label:'Crown Heights',  lat:40.6694, lng:-73.9420},
  ],
  chicago: [
    {label:'Wicker Park',    lat:41.9087, lng:-87.6800},
    {label:'Logan Square',   lat:41.9217, lng:-87.7036},
    {label:'Pilsen',         lat:41.8559, lng:-87.6588},
    {label:'Andersonville',  lat:41.9810, lng:-87.6674},
    {label:'Chinatown',      lat:41.8514, lng:-87.6323},
    {label:'River North',    lat:41.8931, lng:-87.6339},
    {label:'Lincoln Park',   lat:41.9214, lng:-87.6513},
    {label:'Hyde Park',      lat:41.7943, lng:-87.5907},
    {label:'Bucktown',       lat:41.9167, lng:-87.6768},
    {label:'Bridgeport',     lat:41.8395, lng:-87.6408},
  ],
  la: [
    {label:'Koreatown',      lat:34.0587, lng:-118.3006},
    {label:'Silver Lake',    lat:34.0867, lng:-118.2700},
    {label:'Los Feliz',      lat:34.1072, lng:-118.2893},
    {label:'Mid-City',       lat:34.0523, lng:-118.3411},
    {label:'Culver City',    lat:34.0211, lng:-118.3965},
    {label:'Santa Monica',   lat:34.0195, lng:-118.4912},
    {label:'Venice',         lat:33.9850, lng:-118.4695},
    {label:'Echo Park',      lat:34.0782, lng:-118.2607},
    {label:'Chinatown',      lat:34.0635, lng:-118.2375},
    {label:'Little Tokyo',   lat:34.0490, lng:-118.2396},
    {label:'Highland Park',  lat:34.1096, lng:-118.2034},
  ],
  austin: [
    {label:'South Congress', lat:30.2491, lng:-97.7502},
    {label:'East Austin',    lat:30.2625, lng:-97.7215},
    {label:'6th Street',     lat:30.2688, lng:-97.7404},
    {label:'Domain',         lat:30.4025, lng:-97.7267},
    {label:'Mueller',        lat:30.2993, lng:-97.7082},
    {label:'Rainey Street',  lat:30.2579, lng:-97.7393},
    {label:'North Loop',     lat:30.3214, lng:-97.7283},
  ],
  miami: [
    {label:'Wynwood',        lat:25.8007, lng:-80.1993},
    {label:'Little Havana',  lat:25.7710, lng:-80.2275},
    {label:'Brickell',       lat:25.7617, lng:-80.1918},
    {label:'South Beach',    lat:25.7825, lng:-80.1340},
    {label:'Design District',lat:25.8142, lng:-80.1918},
    {label:'Coconut Grove',  lat:25.7307, lng:-80.2394},
    {label:'Coral Gables',   lat:25.7215, lng:-80.2684},
    {label:'Little Haiti',   lat:25.8258, lng:-80.1940},
  ],
};

// ── NEIGHBORHOOD FILTER STATE ──
let activeNeighborhood = null; // {label, lat, lng} or null = use userLoc

// cuisine tag → Overpass amenity/cuisine query values
const CUISINE_MAP = {
  japanese:['japanese','ramen','sushi','tempura','udon'],
  mexican: ['mexican','tex-mex','tacos'],
  american:['american','burger','barbecue','diner'],
  italian: ['italian','pizza','pasta'],
  french:  ['french','crepes','baguette'],
  thai:    ['thai'],
  chinese: ['chinese','dim_sum','cantonese'],
  korean:  ['korean'],
};

// dish keyword → likely OSM cuisine tags to broaden search
const DISH_TO_CUISINE = {
  ramen:['japanese','ramen'],sushi:['japanese','sushi'],udon:['japanese'],
  tacos:['mexican'],burrito:['mexican'],
  burger:['american','burger'],
  pizza:['italian','pizza'],pasta:['italian'],
  'pad thai':['thai'],thai:['thai'],
  pho:['vietnamese'],banh:['vietnamese'],
  coffee:['cafe'],latte:['cafe'],espresso:['cafe'],
  croissant:['french','bakery'],baguette:['french'],
  dumplings:['chinese','dim_sum'],
  bbq:['barbecue','american'],
};

// ═══════════════════════════════════════════════
//  STATE
// ═══════════════════════════════════════════════
let userLoc   = null;   // {lat,lng,label,cityKey}
let activeRadius = 3;   // miles (null = any)
let currentSort  = 'nearest';
let currentDish  = null;
let selectedStars = 0;
let uploadedPhoto = null;
let currentUser  = null;

// ── USER PREFERENCES ── synced to Firestore
const PREFS_KEY = 'biterank_prefs';
const DEFAULT_PREFS = {
  homeCity: null,         // e.g. 'seattle'
  dietary: [],             // ['vegetarian', 'gluten-free', etc.]
  cuisinePrefs: [],        // preferred cuisines
  discoveryMode: 'swipe', // 'swipe' | 'search'
  notifications: true,
  darkMode: null,          // null = system, true = dark, false = light
};

function loadPrefs() {
  try {
    const raw = localStorage.getItem(PREFS_KEY);
    return raw ? { ...DEFAULT_PREFS, ...JSON.parse(raw) } : { ...DEFAULT_PREFS };
  } catch(e) { return { ...DEFAULT_PREFS }; }
}
function savePrefs() {
  try {
    localStorage.setItem(PREFS_KEY, JSON.stringify(userPrefs));
  } catch(e) {}
  if (currentUser?.uid) {
    window._fsSaveUserPrefs(currentUser.uid, userPrefs).catch(() => {});
  }
}
let userPrefs = loadPrefs();

function loadPrefsFromFirestore(uid) {
  window._fsLoadUserPrefs(uid).then(serverPrefs => {
    if (serverPrefs && Object.keys(serverPrefs).length > 0) {
      userPrefs = { ...DEFAULT_PREFS, ...serverPrefs };
      savePrefs();
      applyPrefs();
    }
  }).catch(() => {});
}

function applyPrefs() {
  // Apply dietary filter to searches
  if (userPrefs.dietary && userPrefs.dietary.length > 0) {
    // Will be picked up in search queries
  }
}

// ── WISHLIST ── persistent food list from swipes
const WISHLIST_KEY = 'biterank_wishlist';
function loadWishlist() {
  try {
    const raw = localStorage.getItem(WISHLIST_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch(e) { return []; }
}
function saveWishlist() {
  try {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  } catch(e) {}
  updateWishlistCount();
}
let wishlist = loadWishlist();

function updateWishlistCount() {
  const el = document.getElementById('wishlistCount');
  if (el) el.textContent = wishlist.length > 0 ? `(${wishlist.length})` : '';
}

// restaurant cache: key = "lat,lng,radiusMi,cuisineTags", value = {data, ts}
const restaurantCache = new Map();
const CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes
const MAX_CACHE_SIZE = 50;

// local review store keyed by OSM id
let localReviews = {};
// Seeded reviews loaded asynchronously from data/seeded-reviews.json
fetch('data/seeded-reviews.json')
  .then(r => r.json())
  .then(data => { Object.assign(localReviews, data); })
  .catch(() => {});
const localPhotos  = {};   // { osmId: [dataUrl] }

let currentResults = [];
// Saved restaurants — persisted in localStorage per user
let savedList = new Set();
// Weekly trending data
let trendingData = {}; // { restaurantId: {count, lastReview} }
let lastDishQuery  = '';
let lastCuisineCat = '';

let mapInstance = null, mapMarkers = [], radiusCircle = null;
let mapCenter = null;    // {lat,lng,label} — separate from userLoc, set when user searches a location on map
let mapRadius = 3;       // map-specific radius (separate from global activeRadius)

// ═══════════════════════════════════════════════
//  UTILITIES
// ═══════════════════════════════════════════════
const R = 3958.8;
function haversine(la1,ln1,la2,ln2){
  const dLa=(la2-la1)*Math.PI/180, dLn=(ln2-ln1)*Math.PI/180;
  const a=Math.sin(dLa/2)**2+Math.cos(la1*Math.PI/180)*Math.cos(la2*Math.PI/180)*Math.sin(dLn/2)**2;
  return R*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
}
function distLabel(mi){return mi<0.1?'< 0.1 mi':mi.toFixed(1)+' mi';}
function getDist(r){return userLoc?haversine(userLoc.lat,userLoc.lng,r.lat,r.lng):null;}
function starsHTML(r,sz=''){return Array.from({length:5},(_,i)=>`<span class="star${i>=Math.round(r)?' e':''}"${sz?` style="font-size:${sz}"`:''}>★</span>`).join('');}

function showToast(msg,dur=2600){
  const t=document.getElementById('toast');
  t.textContent=msg;t.classList.add('show');
  clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove('show'),dur);
}
function closeOverlay(id,e){
  if(e.target===document.getElementById(id)) document.getElementById(id).classList.remove('open');
}

// ═══════════════════════════════════════════════
//  FOURSQUARE PLACES API — fetch real restaurants
// ═══════════════════════════════════════════════

// Google Places via Cloudflare Worker proxy (key stored securely in Worker)
const PLACES_PROXY = 'https://biterank-proxy.axfreder.workers.dev';

function miToM(mi){ return Math.round(mi * 1609.34); }

function cuisineEmoji(c) {
  if(!c) return '🍽️';
  const s = c.toLowerCase();
  if(s.includes('ramen')||s.includes('japanese')||s.includes('sushi')||s.includes('izakaya')) return '🍜';
  if(s.includes('mexican')||s.includes('taco')||s.includes('burrito')) return '🌮';
  if(s.includes('burger')||s.includes('american')||s.includes('diner')) return '🍔';
  if(s.includes('pizza')||s.includes('italian')||s.includes('pasta')) return '🍕';
  if(s.includes('thai')) return '🍛';
  if(s.includes('chinese')||s.includes('dim sum')||s.includes('cantonese')) return '🥟';
  if(s.includes('korean')||s.includes('bbq')) return '🍲';
  if(s.includes('french')||s.includes('crepe')||s.includes('bistro')) return '🥐';
  if(s.includes('indian')||s.includes('curry')) return '🍛';
  if(s.includes('vietnamese')||s.includes('pho')) return '🍲';
  if(s.includes('café')||s.includes('cafe')||s.includes('coffee')) return '☕';
  if(s.includes('seafood')||s.includes('fish')) return '🦞';
  if(s.includes('sandwich')||s.includes('deli')||s.includes('sub')) return '🥪';
  if(s.includes('mediterranean')||s.includes('greek')) return '🫒';
  if(s.includes('spanish')||s.includes('tapas')) return '🥘';
  if(s.includes('breakfast')||s.includes('brunch')) return '🍳';
  if(s.includes('bakery')||s.includes('pastry')) return '🥐';
  if(s.includes('bar')||s.includes('pub')) return '🍺';
  return '🍽️';
}

// Check open status
function isLikelyOpen(r) {
  if (r.closed) return false;
  if (r.openNow !== undefined) return r.openNow;
  return null;
}

// Convert Google Places result to our restaurant object
function googleToRestaurant(place) {
  const loc = place.location || {};
  const lat = loc.latitude;
  const lng = loc.longitude;
  if (!lat || !lng) return null;

  const name = place.displayName?.text || 'Unnamed Restaurant';
  const cuisine = place.primaryTypeDisplayName?.text ||
    (place.types || []).find(t => t.includes('restaurant') || t.includes('food') || t.includes('cafe')) || '';
  const addr = place.formattedAddress || 'See map for address';
  const phone = place.internationalPhoneNumber || '';
  const website = place.websiteUri || '';

  // Parse today's opening hours
  let hoursText = 'Hours not listed';
  let openNow = undefined;
  if (place.regularOpeningHours) {
    openNow = place.regularOpeningHours.openNow;
    const periods = place.regularOpeningHours.weekdayDescriptions || [];
    const today = new Date().getDay();
    const dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const todayDesc = periods.find(p => p.startsWith(dayNames[today]));
    if (todayDesc) hoursText = todayDesc;
  }

  const closed = place.businessStatus === 'CLOSED_PERMANENTLY' ||
                 place.businessStatus === 'CLOSED_TEMPORARILY';

  return {
    id: `gpl_${place.id}`,
    googleId: place.id,
    name,
    cuisine,
    phone,
    website,
    hours: hoursText,
    openNow,
    address: addr,
    lat,
    lng,
    closed,
    emoji: cuisineEmoji(cuisine),
    get reviewList(){ return localReviews[this.id] || []; },
    get photos(){ return localPhotos[this.id] || []; },
    get reviews(){ return (localReviews[this.id] || []).length; },
    get rating(){
      const revs = localReviews[this.id] || [];
      if(!revs.length) return null;
      return Math.round(revs.reduce((s,rv)=>s+rv.rating,0)/revs.length*10)/10;
    },
  };
}

async function fetchRestaurants(lat, lng, radiusMi, cuisineTags) {
  const cacheKey = `gpl_${lat.toFixed(3)},${lng.toFixed(3)},${radiusMi},${(cuisineTags||[]).join(',')}`;
  const cached = restaurantCache.get(cacheKey);
  if (cached && (Date.now() - cached.ts < CACHE_TTL_MS)) return cached.data;

  const radiusM = radiusMi ? Math.min(miToM(radiusMi), 50000) : 5000;
  const q = cuisineTags && cuisineTags.length ? cuisineTags[0] + ' restaurant' : 'restaurant';

  const params = new URLSearchParams({
    ll: `${lat},${lng}`,
    radius: radiusM,
    query: q,
  });

  const resp = await fetch(`${PLACES_PROXY}?${params}`, {
    headers: { 'Accept': 'application/json' },
  });

  if (!resp.ok) {
    const errText = await resp.text();
    throw new Error(`Google Places API error ${resp.status}: ${errText}`);
  }

  const data = await resp.json();
  const results = (data.places || [])
    .map(googleToRestaurant)
    .filter(Boolean);

  // Evict oldest entry if at capacity
  if (restaurantCache.size >= MAX_CACHE_SIZE) {
    const oldest = [...restaurantCache.entries()].sort((a,b) => a[1].ts - b[1].ts)[0];
    restaurantCache.delete(oldest[0]);
  }
  restaurantCache.set(cacheKey, { data: results, ts: Date.now() });
  return results;
}

// ═══════════════════════════════════════════════
//  SEARCH PARSING  ("ramen in Seattle")
// ═══════════════════════════════════════════════
function parseQuery(raw) {
  const q = raw.trim().toLowerCase();
  let dish = q, detectedCity = null;
  const patterns = [/(.+?)\s+in\s+(.+)/, /(.+?)\s+near\s+(.+)/, /(.+?)\s+around\s+(.+)/];
  for(const p of patterns) {
    const m = q.match(p);
    if(m) {
      dish = m[1].trim();
      const cs = m[2].trim();
      const found = Object.entries(CITIES).find(([k,v]) =>
        cs.includes(k)||v.name.toLowerCase().includes(cs)||cs.includes(v.name.toLowerCase().split(',')[0].toLowerCase())
      );
      if(found) detectedCity = found[0];
      break;
    }
  }
  if(!detectedCity) {
    const found = Object.entries(CITIES).find(([k,v]) =>
      q.includes(k)||q.includes(v.name.toLowerCase().split(',')[0].toLowerCase())
    );
    if(found) {
      detectedCity = found[0];
      dish = q.replace(new RegExp(found[0],'g'),'')
              .replace(found[1].name.toLowerCase().split(',')[0].toLowerCase(),'').trim();
    }
  }
  // figure out cuisine tags from dish
  const cuisTags = [];
  for(const [kw, tags] of Object.entries(DISH_TO_CUISINE)) {
    if(dish.includes(kw)) tags.forEach(t => cuisTags.includes(t)||cuisTags.push(t));
  }
  return {dish, detectedCity, cuisTags};
}

// ═══════════════════════════════════════════════
//  LOCATION
// ═══════════════════════════════════════════════
function openLocPicker() {
  const s = document.getElementById('locSheet');
  const activeKey = userLoc?.cityKey || '';
  s.innerHTML = `<div class="drag-handle"></div>
    <h3 style="font-family:'Playfair Display',serif;font-size:1.1rem;margin-bottom:4px">📍 Set your location</h3>
    <p style="color:var(--muted);font-size:.82rem;margin-bottom:4px">Results are sorted by distance from here.</p>
    <div class="loc-section-label">Use my GPS</div>
    <button class="gps-btn" onclick="useGPS()">
      <span style="font-size:1.3rem">🎯</span>
      <div><div style="font-weight:600">Detect my location</div><span class="gps-sub">Uses your device GPS for precise results</span></div>
      <span style="margin-left:auto;color:var(--accent)">→</span>
    </button>
    <div class="loc-section-label">Search by city or address</div>
    <div class="manual-row">
      <input class="form-input" id="manualLocInput" placeholder="e.g. Portland OR or Brooklyn NY…"
        onkeydown="if(event.key==='Enter')applyManualCity()"/>
      <button class="icon-btn" onclick="applyManualCity()">→</button>
    </div>
    <div class="loc-section-label">Popular cities</div>
    <div class="city-grid">
      ${Object.entries(CITIES).map(([k,v])=>`
        <button class="city-btn ${activeKey===k?'active':''}" onclick="selectCity('${k}')">
          <span>${v.emoji}</span>${v.name.split(',')[0]}
        </button>`).join('')}
    </div>`;
  document.getElementById('locOverlay').classList.add('open');
  setTimeout(()=>document.getElementById('manualLocInput')?.focus(),320);
}

function selectCity(key) {
  const c = CITIES[key];
  applyLocation({lat:c.lat, lng:c.lng, label:c.name, cityKey:key});
  document.getElementById('locOverlay').classList.remove('open');
  showToast(`📍 ${c.name}`);
}

function useGPS() {
  document.getElementById('locOverlay').classList.remove('open');
  showToast('🎯 Getting your location…');
  if(!navigator.geolocation){showToast('GPS not available');return;}
  navigator.geolocation.getCurrentPosition(
    pos=>{
      const {latitude:lat,longitude:lng}=pos.coords;
      let bestKey=null, bestDist=Infinity;
      Object.entries(CITIES).forEach(([k,v])=>{
        const d=haversine(lat,lng,v.lat,v.lng);
        if(d<bestDist){bestDist=d;bestKey=k;}
      });
      const label = bestDist<40 ? `Near ${CITIES[bestKey].name.split(',')[0]}` : `${lat.toFixed(2)}°, ${lng.toFixed(2)}°`;
      applyLocation({lat,lng,label,cityKey:bestDist<40?bestKey:null});
      showToast(`📍 ${label}`);
    },
    ()=>showToast('Could not get GPS. Try selecting a city.')
  );
}

async function applyManualCity() {
  const val=(document.getElementById('manualLocInput')?.value||'').trim().toLowerCase();
  if(!val) return;
  const match = Object.entries(CITIES).find(([k,v])=>
    k.includes(val)||v.name.toLowerCase().includes(val)||val.includes(k)
  );
  if(match){selectCity(match[0]);return;}
  // Geocode via Nominatim (free OSM geocoding)
  showToast('🔍 Looking up location…');
  try {
    const r = await fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(val)}`,
      {headers:{'Accept-Language':'en'}});
    const data = await r.json();
    if(!data.length){showToast('Location not found, try another name');return;}
    const {lat,lon,display_name}=data[0];
    const label = display_name.split(',').slice(0,2).join(',').trim();
    const mloc = {lat:parseFloat(lat),lng:parseFloat(lon),label,cityKey:null};
    document.getElementById('locOverlay').classList.remove('open');
    applyLocation(mloc);
    showToast(`📍 ${label}`);
  } catch(e){ showToast('Geocoding error — try a city name'); }
}

function applyLocation(loc) {
  activeNeighborhood = null; // reset neighborhood when location changes
  userLoc = loc;
  // Persist as default for signed-in users
  if (currentUser?.uid) storeLoc(currentUser.uid, loc);
  document.getElementById('locPillText').textContent = loc.label;
  const bar = document.getElementById('homeRadiusBar');
  if(bar) bar.style.display='';
  const ctx = document.getElementById('homeCtxBar');
  if(ctx){ctx.style.display='';document.getElementById('homeCtxLabel').textContent=`Near ${loc.label}`;}
  const rctx = document.getElementById('resCtxBar');
  if(rctx){rctx.style.display='';document.getElementById('resCtxLabel').textContent=`Near ${loc.label}`;}
  // refresh whatever is on screen
  if(document.getElementById('resultsView').classList.contains('active')) {
    performSearch(lastDishQuery, lastCuisineCat, false);
  } else {
    loadNearbyHome();
  }
  if(mapInstance) { mapInstance.setView([loc.lat,loc.lng],13); drawRadiusCircle(); refreshMap(); }
}

// ═══════════════════════════════════════════════
//  RADIUS
// ═══════════════════════════════════════════════
function setRadius(r, btn) {
  activeRadius = r;
  // sync all radius bars
  document.querySelectorAll('.rbtn').forEach(b=>{
    const txt=b.textContent.trim();
    b.classList.toggle('active',(r===null&&txt==='Any')||(r!==null&&txt===r+' mi'));
  });
  if(btn) btn.classList.add('active');
  // clear cache so next fetch re-queries with new radius
  restaurantCache.clear();
}

// ═══════════════════════════════════════════════
//  HOME — nearby restaurants
// ═══════════════════════════════════════════════
async function loadNearbyHome(cuisineCat='') {
  if(!userLoc) return;
  // Show the nearby restaurants section and update tile highlight
  const ns = document.getElementById('nearbySection');
  if (ns) ns.style.display = '';
  renderCityTiles(); // refresh to highlight active city tile
  const el = document.getElementById('nearbyList');
  el.innerHTML = skeletons(4);
  const title = document.getElementById('nearbyRestTitle');
  if(title) title.textContent = `🔍 Restaurants near ${userLoc.label.split(',')[0]}`;

  try {
    const cuisTags = cuisineCat ? (CUISINE_MAP[cuisineCat]||[cuisineCat]) : [];
    const restaurants = await fetchRestaurants(userLoc.lat, userLoc.lng, activeRadius, cuisTags);
    const inRadius = filterByRadius(restaurants);
    if(!inRadius.length) {
      el.innerHTML=`<div class="empty"><div class="ei">🍽️</div><p>No restaurants found within ${activeRadius||50} mi.<br>Try expanding the radius.</p></div>`;
      return;
    }
    // sort by distance, then show top 12
    const sorted = sortList(inRadius, 'nearest').slice(0,12);
    el.innerHTML = sorted.map(renderCard).join('');
  } catch(err) {
    el.innerHTML=`<div class="empty"><div class="ei">⚠️</div><p>Could not load restaurants.<br>${err.message}</p></div>`;
  }
}

// ═══════════════════════════════════════════════
//  SEARCH
// ═══════════════════════════════════════════════
function doSearch() {
  const raw = document.getElementById('searchInput').value.trim();
  if(!raw){showToast('Enter a dish to search!');return;}
  const {dish, detectedCity, cuisTags} = parseQuery(raw);
  if(detectedCity && (!userLoc||userLoc.cityKey!==detectedCity)) {
    const c=CITIES[detectedCity];
    applyLocation({lat:c.lat,lng:c.lng,label:c.name,cityKey:detectedCity});
    showToast(`📍 Switched to ${c.name}`);
  }
  performSearch(dish, '', true, cuisTags);
}

function quickSearch(q) {
  document.getElementById('searchInput').value=q;
  const {dish,cuisTags}=parseQuery(q);
  performSearch(dish,'',true,cuisTags);
}

// A restaurant is "rated for this dish" if it has at least one review whose
// dishName matches the query, or (when no query) has any review at all.
function hasRatedDish(restaurant, dishQuery) {
  const revs = localReviews[restaurant.id] || [];
  if (!revs.length) return false;
  if (!dishQuery) return true;
  const dq = dishQuery.toLowerCase();
  return revs.some(rv => rv.dishName && rv.dishName.toLowerCase().includes(dq));
}

async function performSearch(dishQuery, cuisineCat='', navigate=true, cuisTags=[]) {
  lastDishQuery=dishQuery; lastCuisineCat=cuisineCat;

  // Update shareable URL hash
  if(navigate && dishQuery) {
    pushHashState('search', dishQuery, userLoc?.cityKey || '');
  }

  if(navigate) {
    document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
    document.getElementById('resultsView').classList.add('active');
  }

  document.getElementById('queryLabel').innerHTML=`<span>"${dishQuery||'all restaurants'}"</span>`;
  // Init taxonomy for this dish
  const taxRoot = getTaxonomyRoot(dishQuery);
  if (!taxRoot || activeTaxonomyPath[0] !== taxRoot) activeTaxonomyPath = taxRoot ? [taxRoot] : [];
  renderTaxonomy(dishQuery);
  document.getElementById('resultsList').innerHTML=`<div class="loading-wrap"><div class="spinner"></div><div class="loading-text">Finding restaurants…</div></div>`;
  document.getElementById('resMeta').textContent='';

  const showCtx = !!userLoc;
  document.getElementById('resCtxBar').style.display = showCtx?'':'none';
  if(showCtx) document.getElementById('resCtxLabel').textContent=
    activeNeighborhood ? `${activeNeighborhood.label}` : `Near ${userLoc.label}`;

  if(!userLoc) {
    document.getElementById('resultsList').innerHTML=`<div class="empty"><div class="ei">📍</div><p>Set your location first to see real restaurants near you.</p><button class="expand-btn" onclick="openLocPicker()">Set Location</button></div>`;
    return;
  }

  // Show neighborhood filter bar for known cities
  renderNeighborhoodBar(userLoc.cityKey);

  // Use neighborhood center if one is active, otherwise use userLoc
  const searchLat = activeNeighborhood ? activeNeighborhood.lat : userLoc.lat;
  const searchLng = activeNeighborhood ? activeNeighborhood.lng : userLoc.lng;
  // When filtering by neighborhood, use a tighter radius (2mi) unless user set smaller
  const searchRadius = activeNeighborhood ? Math.min(activeRadius||3, 3) : activeRadius;

  // Pass dish query directly so Google Places keyword search works well
  const searchTerms = dishQuery
    ? [dishQuery, ...new Set([...cuisTags,...(cuisineCat?CUISINE_MAP[cuisineCat]||[]:[])]) ]
    : [...new Set([...cuisTags,...(cuisineCat?CUISINE_MAP[cuisineCat]||[]:[])]) ];

  try {
    const all = await fetchRestaurants(searchLat, searchLng, searchRadius, searchTerms);

    // ── Step 1: cuisine-match pool (restaurants that serve this dish type) ──
    let pool = all;
    if(dishQuery) {
      const dq = dishQuery.toLowerCase();
      pool = all.filter(r=>
        r.name.toLowerCase().includes(dq) ||
        r.cuisine.toLowerCase().includes(dq) ||
        (DISH_TO_CUISINE[dq]||[]).some(t=>r.cuisine.toLowerCase().includes(t))
      );
      // if nothing matched by name/cuisine, fall back to all allTags results
      if(!pool.length && cuisTags.length) pool = all;
    }
    if(cuisineCat) {
      const tags = CUISINE_MAP[cuisineCat]||[cuisineCat];
      pool = pool.filter(r=>tags.some(t=>r.cuisine.includes(t)));
    }

    // ── Step 2: split into rated vs unrated ──
    const rated   = pool.filter(r => hasRatedDish(r, dishQuery));
    const unrated = pool.filter(r => !hasRatedDish(r, dishQuery));

    // store both groups so renderResults can use them
    currentResults = { rated, unrated, all: pool };

    const totalOpen = pool.filter(r=>!r.closed).length;
    const totalClosed = pool.filter(r=>r.closed).length;
    const radiusTxt = activeRadius?` within ${activeRadius} mi`:'';
    const nearLabel = activeNeighborhood
      ? activeNeighborhood.label + ', ' + (userLoc.label.split(',')[1]||'').trim()
      : userLoc.label;
    document.getElementById('resMeta').innerHTML =
      `<span style="color:var(--text)">${pool.length} restaurant${pool.length!==1?'s':''}</span> near <strong>${nearLabel}</strong>${radiusTxt}`+
      (rated.length ? ` · <span style="color:var(--accent2)">⭐ ${rated.length} rated</span>` : '')+
      ` · <span style="color:var(--green)">${totalOpen} open</span>`+
      (totalClosed?` · <span style="color:var(--red)">${totalClosed} closed</span>`:'');

    renderResults();
  } catch(err) {
    const errMsg = err.message.includes('Could not reach')
      ? err.message
      : `Network error: ${err.message}. Try opening this HTML file directly in your browser.`;
    document.getElementById('resultsList').innerHTML=`<div class="empty"><div class="ei">⚠️</div><p style="font-size:.82rem;line-height:1.6">${errMsg}</p></div>`;
  }
}

function filterByRadius(list) {
  if(!userLoc||!activeRadius) return list;
  return list.filter(r=>haversine(userLoc.lat,userLoc.lng,r.lat,r.lng)<=activeRadius);
}

function sortList(list, mode) {
  const s=[...list];
  if(mode==='nearest'&&userLoc) s.sort((a,b)=>haversine(userLoc.lat,userLoc.lng,a.lat,a.lng)-haversine(userLoc.lat,userLoc.lng,b.lat,b.lng));
  else if(mode==='rating') s.sort((a,b)=>(b.rating||0)-(a.rating||0));
  else if(mode==='reviews') s.sort((a,b)=>b.reviews-a.reviews);
  else if(mode==='open') s.sort((a,b)=>{
    const oa=isLikelyOpen(a)===true?0:isLikelyOpen(a)===null?1:2;
    const ob=isLikelyOpen(b)===true?0:isLikelyOpen(b)===null?1:2;
    return oa-ob || ((getDist(a)||999)-(getDist(b)||999));
  });
  return s;
}

function renderResults() {
  const el = document.getElementById('resultsList');

  // currentResults may be legacy flat array (from explore) or the new {rated,unrated,all} shape
  const isStructured = currentResults && !Array.isArray(currentResults) && ('rated' in currentResults);
  let rated   = isStructured ? currentResults.rated   : currentResults.filter(r => hasRatedDish(r, lastDishQuery));
  let unrated = isStructured ? currentResults.unrated : currentResults.filter(r => !hasRatedDish(r, lastDishQuery));
  let pool    = isStructured ? currentResults.all     : currentResults;

  // Apply taxonomy filter if user has drilled down beyond root
  if (activeTaxonomyPath && activeTaxonomyPath.length > 1) {
    pool    = filterByTaxonomy(pool);
    rated   = filterByTaxonomy(rated);
    unrated = filterByTaxonomy(unrated);
    // Update meta label to show active filter
    const taxNode = getTaxonomyNode(activeTaxonomyPath);
    if (taxNode) {
      const metaEl = document.getElementById('resMeta');
      if (metaEl) {
        const existing = metaEl.innerHTML;
        if (!existing.includes('taxonomy-active')) {
          metaEl.innerHTML = existing + ` · <span class="taxonomy-active" style="color:var(--accent);font-size:.78rem">🔍 ${taxNode.emoji} ${taxNode.label}</span>`;
        }
      }
    }
  }

  if (!pool.length) {
    el.innerHTML=`<div class="empty"><div class="ei">🍽️</div><p>No restaurants found${activeRadius?` within ${activeRadius} mi`:''}.
    </p><button class="expand-btn" onclick="setRadius(null,null);performSearch(lastDishQuery,lastCuisineCat,false)">Show any distance</button></div>`;
    return;
  }

  let html = '';

  // ── Rated section ──
  if (rated.length) {
    const sortedRated = sortList(rated, currentSort);
    html += `<div class="results-section-label"><span>⭐ Rated for "${lastDishQuery || 'this cuisine'}"</span></div>`;
    html += sortedRated.map(renderCard).join('');
  }

  // ── Unrated section ──
  if (unrated.length) {
    const sortedUnrated = sortList(unrated, currentSort === 'rating' ? 'nearest' : currentSort);
    if (rated.length) {
      // there were rated results — show unrated as a secondary section
      html += `<div class="results-section-label"><span>🍽️ Also serves this — not yet rated</span></div>`;
      html += `<div class="unrated-note">No dish reviews here yet. Be the first to skip the fluff and rate the actual food.</div>`;
    } else {
      // no rated results — unrated IS the primary result set
      html += `<div class="results-section-label"><span>🍽️ Restaurants that serve this — not yet rated</span></div>`;
      html += `<div class="unrated-note">No one has rated "${lastDishQuery}" here yet. Here are all nearby restaurants that serve it — tap one to leave the first review!</div>`;
    }
    html += sortedUnrated.map(renderCard).join('');
  }

  el.innerHTML = html || `<div class="empty"><div class="ei">🍽️</div><p>No results found.</p></div>`;
}

function setSort(s,btn) {
  currentSort=s;
  document.querySelectorAll('.sbtn').forEach(b=>b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  renderResults();
}

function filterCat(cat,el) {
  lastCuisineCat=cat;
  document.querySelectorAll('.cat-pill').forEach(p=>p.classList.remove('active'));
  el.classList.add('active');
  loadNearbyHome(cat);
}

// ═══════════════════════════════════════════════
//  RENDER CARDS
// ═══════════════════════════════════════════════
function renderCard(r) {
  registerRestaurant(r);
  const dist = getDist(r);
  const distBadge = dist!==null ? `<span class="dish-dist">${distLabel(dist)}</span>` : '';
  const rating = r.rating;
  const ratingHTML = rating
    ? `<div class="stars">${starsHTML(rating)}</div><span class="rnum">${rating}</span><span class="rcnt">(${r.reviews})</span>`
    : `<span style="color:var(--muted);font-size:.76rem">No reviews yet</span>`;
  const openStatus = isLikelyOpen(r);
  const openDot = r.closed
    ? `<span class="dbadge b-closed">Closed</span>`
    : openStatus===true ? `<span style="color:var(--green);font-size:.72rem;font-weight:600">● Open</span>`
    : openStatus===false ? `<span style="color:var(--red);font-size:.72rem;font-weight:600">● Closed</span>`
    : '';
  const photo = (localPhotos[r.id]||[])[0];
  const thumb = photo
    ? `<div class="dish-thumb"><img src="${photo}" alt=""/></div>`
    : `<div class="dish-thumb">${r.emoji}</div>`;

  const isSaved = savedList.has(r.id);
  return `<div class="dish-card${r.closed?' closed-card':''}" onclick="openDish('${r.id}')">
    ${thumb}
    <div class="dish-info">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:4px">
        <div class="dish-name">${r.name}</div>
        <button class="save-btn${isSaved?' saved':''}" onclick="event.stopPropagation();toggleSave('${r.id}')" title="${isSaved?'Saved':'Save'}">${isSaved?'🔖':'🔖'}</button>
      </div>
      <div class="dish-rest">${r.cuisine ? r.cuisine.split(';')[0] : 'Restaurant'}</div>
      <div class="dish-meta">${ratingHTML}${openDot}</div>
    </div>
    <div class="dish-right">${distBadge}</div>
  </div>`;
}

function skeletons(n) {
  return Array.from({length:n},()=>`<div class="skel-card"><div class="skel-thumb"></div><div class="skel-lines"><div class="skel-line l"></div><div class="skel-line m"></div><div class="skel-line s"></div></div></div>`).join('');
}

// ═══════════════════════════════════════════════
//  MENU SYSTEM — hybrid AI + user
// ═══════════════════════════════════════════════

// Storage: { restaurantId -> { dishes:[{id,name,desc,price,emoji,source,reviews:[]}], fetchedAt, status } }
const menuStore = {};

// Gemini API key for menu extraction (stored in sessionStorage)
let geminiMenuKey = sessionStorage.getItem('biterank_gemini_key') || '';

function saveGeminiKey(key) {
  geminiMenuKey = key.trim();
  sessionStorage.setItem('biterank_gemini_key', geminiMenuKey);
  showToast('✅ Gemini key saved!');
}

// ── dish emoji heuristic ──
function dishEmoji(name) {
  const n = name.toLowerCase();
  if(/ramen|noodle|pho|udon|soba/.test(n)) return '🍜';
  if(/sushi|nigiri|maki|roll|sashimi/.test(n)) return '🍣';
  if(/taco|burrito|enchilada|quesadilla/.test(n)) return '🌮';
  if(/burger|smash/.test(n)) return '🍔';
  if(/pizza|margherita|pepperoni/.test(n)) return '🍕';
  if(/salad/.test(n)) return '🥗';
  if(/steak|beef|ribeye|sirloin/.test(n)) return '🥩';
  if(/chicken|poultry/.test(n)) return '🍗';
  if(/fish|salmon|tuna|halibut|cod/.test(n)) return '🐟';
  if(/shrimp|prawn|lobster|crab|seafood/.test(n)) return '🦐';
  if(/soup|broth|bisque|chowder/.test(n)) return '🍲';
  if(/sandwich|sub|hoagie|panini/.test(n)) return '🥪';
  if(/dumpling|gyoza|dim sum|bao/.test(n)) return '🥟';
  if(/rice|fried rice|risotto/.test(n)) return '🍚';
  if(/curry/.test(n)) return '🍛';
  if(/pasta|spaghetti|linguine|fettuccine/.test(n)) return '🍝';
  if(/bread|toast|croissant|baguette/.test(n)) return '🥐';
  if(/cake|dessert|brownie|sundae|ice cream/.test(n)) return '🍰';
  if(/coffee|latte|espresso|cappuccino/.test(n)) return '☕';
  if(/cocktail|drink|beer|wine/.test(n)) return '🍹';
  if(/breakfast|egg|omelette|benedict/.test(n)) return '🍳';
  if(/waffle|pancake/.test(n)) return '🧇';
  return '🍽️';
}

// ── fetch menu via Gemini API ──
async function fetchMenuWithAI(restaurant) {
  if (!geminiMenuKey) return null;

  const restaurantInfo = [
    'Name: ' + restaurant.name,
    restaurant.cuisine ? 'Cuisine: ' + restaurant.cuisine : '',
    restaurant.address ? 'Address: ' + restaurant.address : '',
    restaurant.website ? 'Website: ' + restaurant.website : '',
  ].filter(Boolean).join('\n');

  const prompt = 'You are a menu data extraction assistant. Based on the restaurant information below, generate a realistic menu of 6-12 dishes. If you recognize the restaurant by name, use its actual known menu items. Otherwise generate typical dishes for this cuisine.\n\nRestaurant info:\n' + restaurantInfo + '\n\nReturn ONLY a valid JSON array with no markdown:\n[{"name":"Dish Name","desc":"Brief 1-sentence description","price":"$12","category":"Appetizer|Main|Dessert|Drink|Side"}]\n\nRules: realistic prices, descriptions under 15 words, mix of categories.';

  try {
    const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=' + geminiMenuKey;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.3, maxOutputTokens: 1000, responseMimeType: 'application/json' },
      }),
    });
    if (!response.ok) throw new Error('Gemini API error ' + response.status);
    const data = await response.json();
    const parts = (data?.candidates?.[0]?.content?.parts) || [];
    const raw = parts.map(p => p.text || '').join('').replace(/```json|```/gi, '').trim();
    const parsed = JSON.parse(raw);
    const arr = Array.isArray(parsed) ? parsed : (parsed.dishes || parsed.menu || []);
    return arr.map((d, i) => ({
      id: 'ai_' + i + '_' + Date.now(),
      name: d.name || 'Unknown Dish',
      desc: d.desc || '',
      price: d.price || '',
      category: d.category || 'Main',
      emoji: dishEmoji(d.name || ''),
      source: 'ai',
      reviews: [],
    }));
  } catch (e) {
    console.warn('Menu AI fetch failed:', e.message);
    return null;
  }
}

// ── get or fetch menu for a restaurant ──
async function getMenu(restaurant) {
  const id = restaurant.id;
  if (menuStore[id] && menuStore[id].status === 'ready') {
    return menuStore[id].dishes;
  }
  // mark as loading
  menuStore[id] = { dishes: [], status: 'loading', fetchedAt: Date.now() };

  // Try AI extraction if key is present
  if (geminiMenuKey) {
    const aiDishes = await fetchMenuWithAI(restaurant);
    if (aiDishes && aiDishes.length) {
      menuStore[id] = { dishes: aiDishes, status: 'ready', source: 'ai', fetchedAt: Date.now() };
      return menuStore[id].dishes;
    }
  }

  // Fallback: empty menu, ready for user contributions
  menuStore[id] = { dishes: [], status: 'ready', source: 'empty', fetchedAt: Date.now() };
  return [];
}

// ── merge user-contributed dishes into menu ──
function getUserDishes(restaurantId) {
  return (localReviews[restaurantId] || [])
    .filter(r => r.dishName)
    .reduce((acc, r) => {
      const existing = acc.find(d => d.name.toLowerCase() === r.dishName.toLowerCase());
      if (existing) {
        existing.reviews.push(r);
      } else {
        acc.push({
          id: `user_${r.dishName.replace(/\s+/g,'_').toLowerCase()}`,
          name: r.dishName,
          desc: '',
          price: '',
          category: 'User Submitted',
          emoji: dishEmoji(r.dishName),
          source: 'user',
          reviews: [r],
        });
      }
      return acc;
    }, []);
}

function getAllDishes(restaurantId) {
  const aiDishes = (menuStore[restaurantId]?.dishes) || [];
  const userDishes = getUserDishes(restaurantId);
  // merge: user dishes override AI entries with same name
  const combined = [...aiDishes];
  userDishes.forEach(ud => {
    const idx = combined.findIndex(d => d.name.toLowerCase() === ud.name.toLowerCase());
    if (idx >= 0) {
      // augment AI entry with user reviews
      combined[idx] = { ...combined[idx], reviews: [...combined[idx].reviews, ...ud.reviews] };
    } else {
      combined.push(ud);
    }
  });
  return combined;
}

function dishRating(dish) {
  if (!dish.reviews.length) return null;
  return Math.round(dish.reviews.reduce((s, r) => s + r.rating, 0) / dish.reviews.length * 10) / 10;
}

// ── render menu inside restaurant detail ──
async function renderMenuSection(restaurant, container) {
  const id = restaurant.id;
  container.innerHTML = `
    <div class="menu-status">
      <div class="ms-dot loading"></div>
      <span id="menuStatusText">Loading menu…</span>
    </div>
    <div id="menuBody">${skeletons(3)}</div>`;

  const dishes = await getMenu(restaurant);
  const allDishes = getAllDishes(id);
  const source = menuStore[id]?.source;

  const statusDot = container.querySelector('.ms-dot');
  const statusText = container.querySelector('#menuStatusText');

  if (allDishes.length === 0) {
    statusDot.className = 'ms-dot user';
    statusText.textContent = 'No menu data — be first to add dishes';
    container.querySelector('#menuBody').innerHTML = '';
  } else if (source === 'ai') {
    statusDot.className = 'ms-dot ai';
    statusText.textContent = `${allDishes.length} dishes · AI-sourced${allDishes.some(d=>d.source==='user')?' + community additions':''}`;
  } else {
    statusDot.className = 'ms-dot user';
    statusText.textContent = `${allDishes.length} dish${allDishes.length!==1?'es':''} · Community-sourced`;
  }

  if (!geminiMenuKey && allDishes.length === 0) {
    container.querySelector('#menuBody').innerHTML = `
      <div class="menu-key-api-wrap">
        <p>🤖 Add your Gemini API key to auto-populate menus with AI. Get one free at <a href="https://aistudio.google.com/apikey" target="_blank" style="color:var(--accent)">aistudio.google.com</a></p>
        <div class="menu-key-row">
          <input id="geminiKeyInput" type="password" placeholder="AIza…" />
          <button onclick="saveGeminiKey(document.getElementById('geminiKeyInput').value);renderMenuSection(currentDish,document.getElementById('menuSectionContainer'))">Save</button>
        </div>
      </div>`;
    return;
  }

  if (!geminiMenuKey && allDishes.length === 0) return;

  const chipsHTML = allDishes.map(d => {
    const rating = dishRating(d);
    const ratingEl = rating
      ? `<span style="color:var(--accent2)">★ ${rating}</span> <span style="color:var(--muted);font-size:.7rem">(${d.reviews.length})</span>`
      : `<span style="color:var(--muted);font-size:.7rem">No reviews</span>`;
    return `<div class="dish-chip" onclick="openDishItem('${id}','${d.id}')">
      <div class="dc-em">${d.emoji}</div>
      <div class="dc-info">
        <div class="dc-name">${d.name}</div>
        ${d.desc ? `<div class="dc-desc">${d.desc}</div>` : ''}
      </div>
      <div class="dc-right">
        ${d.price ? `<div class="dc-price">${d.price}</div>` : ''}
        <div class="dc-rating">${ratingEl}</div>
        <div class="dc-source ${d.source==='ai'?'ai-src':'user-src'}">${d.source==='ai'?'AI':'Community'}</div>
      </div>
    </div>`;
  }).join('');

  container.querySelector('#menuBody').innerHTML = `
    <div class="dish-chips">${chipsHTML}</div>
    <button class="add-dish-btn" onclick="openAddDishForm('${id}')">
      <span>＋</span> Add a dish
    </button>`;
}

// ── open individual dish item detail ──
function openDishItem(restaurantId, dishId) {
  const restaurant = restaurantById.get(restaurantId);
  const allDishes = getAllDishes(restaurantId);
  const dish = allDishes.find(d => d.id === dishId);
  if (!dish) return;

  const rating = dishRating(dish);
  const ratingEl = rating
    ? `<div class="stars">${starsHTML(rating)}</div> <span class="rnum">${rating}</span> <span style="color:var(--muted);font-size:.73rem">(${dish.reviews.length} review${dish.reviews.length!==1?'s':''})</span>`
    : `<span style="color:var(--muted);font-size:.8rem">No reviews yet</span>`;

  const revsHTML = dish.reviews.length ? dish.reviews.map(rv => `
    <div class="rev-item">
      <div class="rev-top">
        <div style="display:flex;align-items:center;gap:8px">
          <div style="width:28px;height:28px;border-radius:50%;background:var(--accent);display:flex;align-items:center;justify-content:center;font-size:.77rem;font-weight:700;color:#fff;flex-shrink:0">${rv.av||rv.user[0]}</div>
          <div><div class="rev-name">${rv.user}</div><div class="stars" style="margin-top:1px">${starsHTML(rv.rating,'0.72rem')}</div></div>
        </div>
        <div class="rev-date">${rv.date}</div>
      </div>
      <div class="rev-text">${rv.text}</div>
      ${rv.photo ? `<img class="rev-photo" src="${rv.photo}"/>` : ''}
    </div>`).join('')
    : `<div style="color:var(--muted);font-size:.84rem;padding:6px 0">No reviews yet — be the first!</div>`;

  document.getElementById('dishItemSheet').innerHTML = `
    <div class="drag-handle"></div>
    <div style="padding:0 18px 20px">
      <div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
        <div style="font-size:2.8rem">${dish.emoji}</div>
        <div>
          <div style="font-family:'Playfair Display',serif;font-size:1.15rem;font-weight:700">${dish.name}</div>
          <div style="color:var(--muted);font-size:.8rem;margin-top:2px">@ ${restaurant?.name || ''}</div>
          <div style="display:flex;align-items:center;gap:8px;margin-top:5px">${ratingEl}</div>
        </div>
        ${dish.price ? `<div style="margin-left:auto;font-size:1.1rem;font-weight:700;color:var(--accent2)">${dish.price}</div>` : ''}
      </div>
      ${dish.desc ? `<p style="color:#b8b0a4;font-size:.86rem;line-height:1.6;margin-bottom:16px">${dish.desc}</p>` : ''}
      <div style="display:flex;align-items:center;gap:6px;margin-bottom:14px">
        <span style="font-size:.7rem;padding:2px 8px;border-radius:7px;font-weight:600;${dish.source==='ai'?'background:rgba(242,196,109,.15);color:var(--accent2)':'background:rgba(106,191,138,.15);color:var(--green)'}">
          ${dish.source==='ai'?'🤖 AI-sourced':'👥 Community'}
        </span>
        <span style="color:var(--muted);font-size:.73rem">${dish.category}</span>
      </div>
      <div class="sec-sub">Reviews (${dish.reviews.length})</div>
      ${revsHTML}
      <button class="wr-btn" onclick="openReviewForDish('${restaurantId}','${dish.name}')">✍️ Review this dish</button>
    </div>`;
  document.getElementById('dishItemOverlay').classList.add('open');
}

// ── open add dish form ──
function openAddDishForm(restaurantId) {
  if (!currentUser) { openAuth('login'); showToast('Sign in to add dishes'); return; }
  document.getElementById('addDishSheet').innerHTML = `
    <div class="drag-handle"></div>
    <h3 style="font-family:'Playfair Display',serif;font-size:1.05rem;margin-bottom:14px">Add a Dish</h3>
    <div class="form-group">
      <label class="form-label">Dish Name *</label>
      <input class="form-input" id="addDishName" placeholder="e.g. Tonkotsu Ramen"/>
    </div>
    <div class="form-group">
      <label class="form-label">Description</label>
      <input class="form-input" id="addDishDesc" placeholder="Brief description (optional)"/>
    </div>
    <div class="form-group">
      <label class="form-label">Price</label>
      <input class="form-input" id="addDishPrice" placeholder="e.g. $14"/>
    </div>
    <div class="form-group">
      <label class="form-label">Your Rating *</label>
      <div class="star-sel" id="addDishStars">
        <span class="s" onclick="setStar(1)">★</span><span class="s" onclick="setStar(2)">★</span>
        <span class="s" onclick="setStar(3)">★</span><span class="s" onclick="setStar(4)">★</span>
        <span class="s" onclick="setStar(5)">★</span>
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Review *</label>
      <textarea class="form-textarea" id="addDishReview" placeholder="What did you think of this dish?"></textarea>
    </div>
    <div class="form-group">
      <label class="form-label">Photo (optional)</label>
      <div class="upload-zone" id="uploadZone">
        <input type="file" accept="image/*" onchange="handlePhoto(event)"/>
        <div class="upload-icon">📷</div>
        <div class="upload-text">Tap to upload · <span>JPG, PNG</span></div>
      </div>
      <div class="preview-box" id="previewBox"><img id="photoPreview" src="" alt=""/></div>
    </div>
    <button class="submit-btn" onclick="submitNewDish('${restaurantId}')">Add Dish & Review</button>`;
  selectedStars = 0;
  uploadedPhoto = null;
  document.getElementById('addDishOverlay').classList.add('open');
}

async function submitNewDish(restaurantId) {
  const name = document.getElementById('addDishName')?.value?.trim();
  const desc = document.getElementById('addDishDesc')?.value?.trim() || '';
  const price = document.getElementById('addDishPrice')?.value?.trim() || '';
  const text = document.getElementById('addDishReview')?.value?.trim();
  if (!name) { showToast('Please enter a dish name'); return; }
  if (!selectedStars) { showToast('Please select a rating'); return; }
  if (!text) { showToast('Please write a review'); return; }

  // inject into localReviews so user dishes appear via getUserDishes()
  const newDishReview = {
    user: currentUser.name, av: currentUser.av,
    uid: currentUser.uid, userEmail: currentUser.email,
    date: new Date().toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}),
    rating: selectedStars,
    dishName: name, dishDesc: desc, dishPrice: price,
    text, photo: uploadedPhoto || null,
    restaurantName: restaurantById.get(restaurantId)?.name||'',
  };
  // Save to Firestore
  try {
    if(window._fsAddReview) {
      const fsId = await window._fsAddReview(restaurantId, newDishReview);
      newDishReview.firestoreId = fsId;
    }
  } catch(e) { console.warn('Firestore write failed:', e); }

  if (!localReviews[restaurantId]) localReviews[restaurantId] = [];
  localReviews[restaurantId].unshift(newDishReview);
  if (uploadedPhoto) {
    if (!localPhotos[restaurantId]) localPhotos[restaurantId] = [];
    localPhotos[restaurantId].unshift(uploadedPhoto);
  }
  recordGameReview(restaurantId, name, !!uploadedPhoto);

  document.getElementById('addDishOverlay').classList.remove('open');
  showToast(`✅ "${name}" added!`);
  // re-render the detail sheet menu section
  setTimeout(() => {
    if (currentDish?.id === restaurantId) {
      const container = document.getElementById('menuSectionContainer');
      if (container) renderMenuSection(currentDish, container);
    }
  }, 300);
  renderProfile();
}

// ── open review pre-filled with dish name ──
function openReviewForDish(restaurantId, dishName) {
  document.getElementById('dishItemOverlay').classList.remove('open');
  const r = restaurantById.get(restaurantId);
  if (r) { currentDish = r; }
  openReview(dishName);
}


// Cached restaurant lookup by id
const restaurantById = new Map();

// Convert a restaurant name to the seeded_ key format
function nameToSeededKey(name) {
  return 'seeded_' + (name||'').toLowerCase()
    .replace(/[\u2018\u2019\u201c\u201d'"]/g, '')
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}

function registerRestaurant(r) {
  restaurantById.set(r.id, r);
  const seededKey = nameToSeededKey(r.name);
  if (localReviews[seededKey]) {
    if (!localReviews[r.id]) {
      localReviews[r.id] = localReviews[seededKey].map(rv => ({...rv, _seededFrom: seededKey}));
    } else {
      const existingTexts = new Set(localReviews[r.id].map(rv => rv.text));
      const toAdd = localReviews[seededKey].filter(rv => !existingTexts.has(rv.text))
        .map(rv => ({...rv, _seededFrom: seededKey}));
      if (toAdd.length) localReviews[r.id] = [...localReviews[r.id], ...toAdd];
    }
  } else {
    // Fuzzy: match by significant tokens
    const nameLower = (r.name||'').toLowerCase();
    for (const key of Object.keys(localReviews)) {
      if (!key.startsWith('seeded_') || localReviews[r.id]?.some(rv=>rv.seeded)) break;
      const phrase = key.replace('seeded_','').replace(/_/g,' ');
      const tokens = phrase.split(' ').filter(t => t.length > 2);
      if (tokens.length > 0 && tokens.every(t => nameLower.includes(t))) {
        if (!localReviews[r.id]) localReviews[r.id] = [];
        const existingTexts = new Set(localReviews[r.id].map(rv => rv.text));
        const toAdd = localReviews[key].filter(rv => !existingTexts.has(rv.text))
          .map(rv => ({...rv, _seededFrom: key}));
        if (toAdd.length) { localReviews[r.id].push(...toAdd); break; }
      }
    }
  }
}

// renderCard intercept handled below

async function openDish(id) {
  const r = restaurantById.get(id);
  if(!r) { showToast('Restaurant data not found'); return; }
  currentDish = r;

  // Fetch Firestore reviews and merge with local/seeded ones
  try {
    if(window._fsFetchReviews) {
      const fsRevs = await window._fsFetchReviews(id);
      if(fsRevs.length) {
        const seeded = (localReviews[id]||[]).filter(rv => rv.seeded);
        // Merge: Firestore reviews + seeded, deduplicated by firestoreId
        const existing = new Set((localReviews[id]||[]).filter(rv=>rv.firestoreId).map(rv=>rv.firestoreId));
        const newFsRevs = fsRevs.filter(rv => !existing.has(rv.firestoreId));
        localReviews[id] = [...newFsRevs, ...(localReviews[id]||[]).filter(rv=>!rv.firestoreId||rv.seeded)];
      }
    }
  } catch(e) { /* offline or error — use cached */ }

  const dist = getDist(r);
  const distEl = dist!==null ? `<span class="dist-badge">📍 ${distLabel(dist)}</span>` : '';
  const closedEl = r.closed ? `<span class="closed-badge">⚠️ Permanently Closed</span>` : '';
  const openStatus = isLikelyOpen(r);
  const openEl = !r.closed && openStatus!==null
    ? `<span style="font-size:.75rem;font-weight:600;color:${openStatus?'var(--green)':'var(--red)'}">${openStatus?'● Open now':'● Likely closed'}</span>` : '';

  const revs = (localReviews[id]||[]);
  const rating = revs.length ? Math.round(revs.reduce((s,rv)=>s+rv.rating,0)/revs.length*10)/10 : null;
  const ratingEl = rating
    ? `<div class="stars">${starsHTML(rating)}</div><span class="rnum">${rating}</span><span style="color:var(--muted);font-size:.73rem">(${revs.length} review${revs.length!==1?'s':''})</span>`
    : `<span style="color:var(--muted);font-size:.78rem">No reviews yet — be first!</span>`;

  const photos = localPhotos[id]||[];
  const galleryHTML = photos.length ? `
    <div class="sec-sub" style="margin-top:2px">Photos (${photos.length})</div>
    <div class="pgallery">${photos.map(p=>`<div class="pgallery-cell"><img src="${p}"/></div>`).join('')}</div>` : '';

  const heroThumb = photos.length ? `<img src="${photos[0]}" style="width:100%;height:100%;object-fit:cover"/>` : r.emoji;

  const revsHTML = revs.length ? revs.map(rv=>`
    <div class="rev-item">
      <div class="rev-top">
        <div style="display:flex;align-items:center;gap:8px">
          <div style="width:28px;height:28px;border-radius:50%;background:var(--accent);display:flex;align-items:center;justify-content:center;font-size:.77rem;font-weight:700;color:#fff;flex-shrink:0">${rv.av||rv.user[0]}</div>
          <div><div class="rev-name">${rv.user}</div><div class="stars" style="margin-top:1px">${starsHTML(rv.rating,'0.72rem')}</div></div>
        </div>
        <div class="rev-date">${rv.date}</div>
      </div>
      <div class="rev-text">${rv.text}</div>
      ${rv.photo?`<img class="rev-photo" src="${rv.photo}"/>`:''}
    </div>`).join('')
    : `<div style="color:var(--muted);font-size:.85rem;padding:8px 0">No reviews yet. Be the first — and keep it about the food.</div>`;

  const websiteEl = r.website ? `<a href="${r.website}" target="_blank" style="color:var(--accent);font-size:.78rem;word-break:break-all">${r.website.replace(/^https?:\/\//,'')}</a>` : '—';
  const orderUrl = `https://www.doordash.com/search?query=${encodeURIComponent(r.name)}&store_type=restaurant`;
  const orderBtn = r.closed ? '' : `<a href="${orderUrl}" target="_blank" class="wr-btn" style="display:block;text-align:center;text-decoration:none;background:#FF3008;color:#fff;font-weight:600;font-size:.9rem;padding:13px;border-radius:12px;margin-top:14px;">🍔 Order on DoorDash</a>`;

  document.getElementById('dishSheet').innerHTML = `
    <div class="drag-handle"></div>
    <div class="detail-hero">
      <div class="detail-em">${heroThumb}</div>
      <div class="detail-title">
        <h2>${r.name}</h2>
        <div class="detail-rest">${r.cuisine ? r.cuisine.split(';').slice(0,2).join(' · ') : 'Restaurant'}</div>
        <div class="detail-row">${ratingEl}${distEl}${closedEl}${openEl}</div>
      </div>
    </div>
    <div class="detail-body">
      <div class="info-grid">
        <div class="info-cell"><div class="ic-label">Address</div><div class="ic-val" style="font-size:.8rem">${r.address}</div></div>
        <div class="info-cell"><div class="ic-label">Hours</div><div class="ic-val" style="font-size:.8rem">${r.hours}</div></div>
        <div class="info-cell"><div class="ic-label">Phone</div><div class="ic-val" style="font-size:.82rem">${r.phone||'—'}</div></div>
        <div class="info-cell"><div class="ic-label">Website</div><div class="ic-val">${websiteEl}</div></div>
      </div>
      ${orderBtn}
      ${r.closed?`<div style="background:rgba(224,96,96,.1);border:1px solid rgba(224,96,96,.25);border-radius:10px;padding:10px 13px;font-size:.84rem;color:var(--red);margin-bottom:14px">⚠️ This restaurant appears to be permanently closed or no longer operating. It is excluded from rankings.</div>`:''}
      ${currentUser?renderCompletionBar(id):''}
      ${galleryHTML}
      <div class="sec-sub">Dish Reviews</div>
      ${revsHTML}
      ${r.closed?'':`<button class="wr-btn" onclick="openReview()">✍️ Review a Dish Here</button>`}
      <div class="menu-section" id="menuSectionContainer">
        <div class="sec-sub" style="margin-top:18px">Menu & Dishes</div>
        <div id="menuSectionInner"></div>
      </div>
      <div class="osm-credit">Restaurant data: <a href="https://maps.google.com" target="_blank">Google Places</a> · We rank food, not décor.</div>
    </div>`;
  document.getElementById('dishOverlay').classList.add('open');
  // render menu section async
  const menuContainer = document.getElementById('menuSectionInner');
  if (menuContainer && !r.closed) renderMenuSection(r, menuContainer);
}

// ═══════════════════════════════════════════════
//  REVIEW
// ═══════════════════════════════════════════════
function openReview(prefillDishName='') {
  if(!currentUser){document.getElementById('dishOverlay').classList.remove('open');openAuth('login');showToast('Sign in to review!');return;}
  selectedStars=0; uploadedPhoto=null;
  // Reset subcategory state
  reviewSubcatPath=[]; reviewSubcatLabel=''; reviewSubcatCustom='';
  const effectiveQuery = prefillDishName || lastDishQuery || '';
  const subcatPickerHTML = renderSubcatPicker(effectiveQuery);
  document.getElementById('reviewSheet').innerHTML=`
    <div class="drag-handle"></div>
    <h3 style="font-family:'Playfair Display',serif;font-size:1.05rem;margin-bottom:3px">Review a dish at</h3>
    <div style="color:var(--accent);font-size:.85rem;font-weight:500;margin-bottom:16px">${currentDish.name}</div>
    <div class="form-group">
      <label class="form-label">Dish Name</label>
      <input class="form-input" id="rvDishName" placeholder="e.g. Tonkotsu Ramen, Birria Tacos…" value="${prefillDishName}"
        oninput="onDishNameChange(this.value,'${effectiveQuery}')"/>
    </div>
    ${subcatPickerHTML ? `<div class="form-group">${subcatPickerHTML}</div>` : ''}
    <div class="form-group"><label class="form-label">Your Rating</label>
      <div class="star-sel" id="starSel"><span class="s" onclick="setStar(1)">★</span><span class="s" onclick="setStar(2)">★</span><span class="s" onclick="setStar(3)">★</span><span class="s" onclick="setStar(4)">★</span><span class="s" onclick="setStar(5)">★</span></div>
    </div>
    <div class="form-group"><label class="form-label">Your Review</label>
      <textarea class="form-textarea" id="rvText" placeholder="How was the actual food? (We don't need to know about the parking.)"></textarea>
    </div>
    <div class="form-group"><label class="form-label">Add a Photo (optional)</label>
      <div class="upload-zone" id="uploadZone">
        <input type="file" accept="image/*" onchange="handlePhoto(event)"/>
        <div class="upload-icon">📷</div>
        <div class="upload-text">Tap to upload · <span>JPG, PNG, HEIC</span></div>
      </div>
      <div class="preview-box" id="previewBox"><img id="photoPreview" src="" alt=""/></div>
    </div>
    <button class="submit-btn" onclick="submitReview()">Submit Review</button>`;
  document.getElementById('reviewOverlay').classList.add('open');
}

function setStar(n){selectedStars=n;document.querySelectorAll('#starSel .s').forEach((s,i)=>s.classList.toggle('lit',i<n));}

function handlePhoto(e) {
  const file=e.target.files[0];if(!file) return;
  const reader=new FileReader();
  reader.onload=async ev=>{
    const dataUrl = ev.target.result;
    uploadedPhoto = dataUrl; // local preview immediately
    document.getElementById('photoPreview').src=dataUrl;
    document.getElementById('previewBox').style.display='block';
    document.getElementById('uploadZone').style.borderColor='var(--green)';
    showToast('📷 Photo ready!');
    // Upload to Firebase Storage in background
    if(window._uploadPhoto && currentUser) {
      try {
        const path = `reviews/${currentUser.uid}/${Date.now()}.jpg`;
        const url = await window._uploadPhoto(dataUrl, path);
        uploadedPhoto = url; // replace data URL with storage URL
      } catch(err) {
        showToast('⚠️ Photo upload failed — review still submitted');
        // Keep local data URL as fallback
      }
    }
  };
  reader.readAsDataURL(file);
}

async function submitReview() {
  const dishName=document.getElementById('rvDishName')?.value?.trim();
  const text=document.getElementById('rvText')?.value?.trim();
  if(!selectedStars){showToast('Please select a rating!');return;}
  if(!text){showToast('Please write a review!');return;}

  const id=currentDish.id;
  const restaurantName=currentDish.name||'';

  // Build review object
  const reviewData = {
    user: currentUser.name,
    av: currentUser.av,
    uid: currentUser.uid,
    userEmail: currentUser.email,
    date: new Date().toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}),
    rating: selectedStars,
    dishName: dishName||'',
    dishSubcat: reviewSubcatLabel||'',
    text,
    photo: uploadedPhoto||null,
    restaurantName,
  };

  // Save to Firestore
  let firestoreId = null;
  try {
    if(window._fsAddReview) {
      firestoreId = await window._fsAddReview(id, reviewData);
    }
  } catch(e) {
    console.warn('Firestore write failed:', e.message);
  }

  // Also add to local cache so UI updates immediately
  if(!localReviews[id]) localReviews[id]=[];
  localReviews[id].unshift({...reviewData, firestoreId});

  if(uploadedPhoto){
    if(!localPhotos[id]) localPhotos[id]=[];
    localPhotos[id].unshift(uploadedPhoto);
  }

  restaurantCache.clear();
  recordGameReview(id, dishName, !!uploadedPhoto);

  document.getElementById('reviewOverlay').classList.remove('open');
  showToast('🎉 Review submitted!');
  renderCityTiles();
  setTimeout(()=>{
    openDish(id);
    const mn = document.getElementById('menuSectionInner');
    if(mn) renderMenuSection(currentDish, mn);
  },350);
  renderProfile();
}

// ═══════════════════════════════════════════════
//  MAP
// ═══════════════════════════════════════════════
async function initMap() {
  const loc = mapCenter || userLoc;
  const center = loc ? [loc.lat, loc.lng] : [47.612,-122.328];
  if(mapInstance){mapInstance.invalidateSize();drawMapRadiusCircle();await refreshMap();return;}
  mapInstance=L.map('leafletMap',{zoomControl:true}).setView(center,13);
  L.tileLayer('https://api.maptiler.com/maps/dataviz-dark/{z}/{x}/{y}.png?key=MAhaKL3FUawTzM9zBx4L',{attribution:'<a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap</a>',maxZoom:20,tileSize:512,zoomOffset:-1,crossOrigin:true}).addTo(mapInstance);
  drawMapRadiusCircle();
  await refreshMap();
}

function drawRadiusCircle() {
  // Legacy — used by main location changes
  if(mapInstance) drawMapRadiusCircle();
}
function drawMapRadiusCircle() {
  if(!mapInstance) return;
  if(radiusCircle) mapInstance.removeLayer(radiusCircle);
  const loc = mapCenter || userLoc;
  if(!loc || !mapRadius) return;
  radiusCircle=L.circle([loc.lat,loc.lng],{
    radius:mapRadius*1609.34,color:'#e8854a',weight:2,dashArray:'6 4',fillColor:'#e8854a',fillOpacity:.05
  }).addTo(mapInstance);
  L.circleMarker([loc.lat,loc.lng],{radius:7,color:'#f2c46d',weight:3,fillColor:'#f2c46d',fillOpacity:1}).addTo(mapInstance);
}

async function refreshMap() {
  if(!mapInstance) return;
  const dish=(document.getElementById('mapDishSearch')?.value||'').trim().toLowerCase();
  const mapSheet=document.getElementById('mapPinList');
  mapSheet.innerHTML=`<div class="loading-wrap" style="padding:20px"><div class="spinner"></div></div>`;

  const loc = mapCenter || userLoc;
  if(!loc){
    mapSheet.innerHTML=`<div class="empty"><div class="ei">📍</div><p>Search a dish and neighborhood above.<br>No ambiance scores — just the food.</p></div>`;
    return;
  }

  try {
    const {cuisTags}=dish?parseQuery(dish):{cuisTags:[]};
    const searchTerms = dish ? [dish, ...cuisTags] : cuisTags;
    let restaurants = await fetchRestaurants(loc.lat, loc.lng, mapRadius, searchTerms);
    if(dish) restaurants=restaurants.filter(r=>r.name.toLowerCase().includes(dish)||r.cuisine.toLowerCase().includes(dish)||(DISH_TO_CUISINE[dish]||[]).some(t=>r.cuisine.includes(t)));
    currentMapDishes=restaurants;

    mapMarkers.forEach(m=>mapInstance.removeLayer(m));
    mapMarkers=[];

    restaurants.forEach(r=>{
      const icon=L.divIcon({className:'',html:`<div class="map-marker${r.closed?' closed-m':''}">${r.emoji} ${r.rating||'?'}★</div>`,iconAnchor:[32,20]});
      const m=L.marker([r.lat,r.lng],{icon}).addTo(mapInstance);
      m.on('click',()=>{registerRestaurant(r);openDish(r.id);});
      mapMarkers.push(m);
      registerRestaurant(r);
    });

    const sorted=sortList(restaurants,userLoc?'nearest':'rating');
    const loc = mapCenter || userLoc;
    const dish=(document.getElementById('mapDishSearch')?.value||'').trim();
    const locLabel = mapCenter ? mapCenter.label : (userLoc ? userLoc.label.split(',')[0] : '');
    const radiusTxt = mapRadius ? ` · ${mapRadius} mi` : '';
    document.getElementById('mapSheetTitle').textContent =
      (dish ? `🍽️ ${dish}` : '📍 Restaurants') + (locLabel ? ` near ${locLabel}` : '') + radiusTxt;
    document.getElementById('mapSheetCnt').textContent=`${restaurants.length} found`;
    mapSheet.innerHTML=sorted.map(r=>{
      const dist=getDist(r);
      return`<div class="map-pin-card" onclick="registerRestaurant(arguments[0]);openDish('${r.id}')"
          onmouseenter="this._r=arguments[0]">
        <div class="map-pin-em">${r.emoji}</div>
        <div><div class="map-pin-name">${r.name}</div><div class="map-pin-rest">${r.cuisine.split(';')[0]||'Restaurant'}</div></div>
        <div class="map-pin-rt">
          <div class="map-pin-rat">${r.rating||'—'}${r.rating?'★':''}</div>
          ${dist!==null?`<div class="map-pin-dist">${distLabel(dist)}</div>`:''}
        </div>
      </div>`;
    }).join('');

    // store refs for click
    sorted.forEach(r=>registerRestaurant(r));

    drawMapRadiusCircle();
    if(restaurants.length&&mapInstance){
      if(loc&&mapRadius){
        mapInstance.fitBounds(L.circle([loc.lat,loc.lng],{radius:mapRadius*1609.34}).getBounds(),{padding:[20,20]});
      } else if(restaurants.length>1) {
        mapInstance.fitBounds(L.latLngBounds(restaurants.map(r=>[r.lat,r.lng])),{padding:[40,40]});
      }
    }
  } catch(err) {
    mapSheet.innerHTML=`<div class="empty"><div class="ei">⚠️</div><p>Error: ${err.message}</p></div>`;
  }
}

async function doMapSearch() {
  const locQuery = (document.getElementById('mapLocSearch')?.value || '').trim();

  if (locQuery) {
    // Geocode the location using Nominatim
    try {
      document.getElementById('mapSheetTitle').textContent = '🔍 Finding location…';
      const r = await fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(locQuery)}`, {
        headers: { 'Accept-Language': 'en' }
      });
      const data = await r.json();
      if (data.length) {
        const {lat, lon, display_name} = data[0];
        const label = display_name.split(',').slice(0,2).join(', ').trim();
        mapCenter = { lat: parseFloat(lat), lng: parseFloat(lon), label };
        mapInstance.setView([mapCenter.lat, mapCenter.lng], 14);
        // Show the active location bar
        const bar = document.getElementById('mapLocBar');
        if(bar) { bar.style.display='flex'; }
        const lbl = document.getElementById('mapLocBarLabel');
        if(lbl) lbl.textContent = label;
      } else {
        showToast('Location not found — try "Ballard, Seattle" or "Capitol Hill, WA"');
      }
    } catch(e) {
      showToast('Could not geocode location');
    }
  }

  await refreshMap();
}

function clearMapLoc() {
  mapCenter = null;
  document.getElementById('mapLocSearch').value = '';
  const bar = document.getElementById('mapLocBar');
  if(bar) bar.style.display = 'none';
  if(userLoc && mapInstance) mapInstance.setView([userLoc.lat, userLoc.lng], 13);
  refreshMap();
}

function setMapRadius(r, btn) {
  mapRadius = r;
  // Update map radius buttons only
  document.querySelectorAll('.map-rrow .rbtn').forEach(b => b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  drawMapRadiusCircle();
  refreshMap();
}

// ═══════════════════════════════════════════════
//  VIEWS
// ═══════════════════════════════════════════════
function switchView(name,btn){
  document.querySelectorAll('.nitem').forEach(b=>b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  if(name==='home'){document.getElementById('homeView').classList.add('active');return;}
  if(name==='map'){document.getElementById('mapView').classList.add('active');setTimeout(initMap,120);return;}
  if(name==='profile'){document.getElementById('profileView').classList.add('active');renderProfile();return;}
  if(name==='admin'){document.getElementById('adminView').classList.add('active');loadAdminTab(currentAdminTab);return;}
  if(name==='explore'){
    document.getElementById('resultsView').classList.add('active');
    // show all, no dish filter — use structured shape so renderResults works
    performSearch('','',false);
    return;
  }
  if(name==='saved'){document.getElementById('savedView').classList.add('active');renderSavedView();return;}
  showToast('Coming soon!');
  document.getElementById('homeView').classList.add('active');
}

function goHome(){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.getElementById('homeView').classList.add('active');
  document.querySelectorAll('.nitem').forEach((b,i)=>b.classList.toggle('active',i===0));
  document.getElementById('searchInput').value='';
}

// ═══════════════════════════════════════════════
//  AUTH — Firebase
// ═══════════════════════════════════════════════
function openAuth(tab='login'){
  const s=document.getElementById('authSheet');
  s.innerHTML=`<div class="drag-handle"></div>
    <h2 style="font-family:'Playfair Display',serif;font-size:1.25rem;margin-bottom:5px">Join BiteRank</h2>
    <p style="color:var(--muted);font-size:.82rem;margin-bottom:17px">The app for people who eat at restaurants for the <em>food</em>.</p>
    <div class="auth-tabs">
      <button class="auth-tab ${tab==='login'?'active':''}" id="atL" onclick="renderAuthForm('login')">Sign In</button>
      <button class="auth-tab ${tab==='signup'?'active':''}" id="atS" onclick="renderAuthForm('signup')">Sign Up</button>
    </div>
    <div id="authForm"></div>
    <div class="auth-divider">or</div>
    <button class="social-btn" onclick="signInWithGoogle()">
      <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
      Continue with Google
    </button>`;
  document.getElementById('authOverlay').classList.add('open');
  renderAuthForm(tab);
}

function renderAuthForm(tab){
  document.getElementById('atL').className='auth-tab'+(tab==='login'?' active':'');
  document.getElementById('atS').className='auth-tab'+(tab==='signup'?' active':'');
  document.getElementById('atL').onclick=()=>renderAuthForm('login');
  document.getElementById('atS').onclick=()=>renderAuthForm('signup');
  const f=document.getElementById('authForm');
  if(tab==='login'){
    f.innerHTML=`<div class="form-group"><label class="form-label">Email</label><input class="form-input" id="aEmail" type="email" placeholder="you@email.com"/></div>
      <div class="form-group"><label class="form-label">Password</label><input class="form-input" id="aPass" type="password" placeholder="••••••••"/></div>
      <div id="authErr" style="color:var(--red);font-size:.78rem;margin-bottom:8px;display:none"></div>
      <button class="submit-btn" style="margin-top:4px" onclick="signIn()">Sign In</button>`;
  } else {
    f.innerHTML=`<div class="form-group"><label class="form-label">Name</label><input class="form-input" id="aName" placeholder="Your name"/></div>
      <div class="form-group"><label class="form-label">Email</label><input class="form-input" id="aEmail" type="email" placeholder="you@email.com"/></div>
      <div class="form-group"><label class="form-label">Password</label><input class="form-input" id="aPass" type="password" placeholder="At least 6 characters"/></div>
      <div id="authErr" style="color:var(--red);font-size:.78rem;margin-bottom:8px;display:none"></div>
      <button class="submit-btn" style="margin-top:4px" onclick="signUp()">Create Account</button>`;
  }
}

function showAuthErr(msg){const e=document.getElementById('authErr');if(e){e.textContent=msg;e.style.display='block';}}

async function signIn(){
  const email=document.getElementById('aEmail')?.value?.trim();
  const pass=document.getElementById('aPass')?.value;
  if(!email||!pass){showAuthErr('Please fill all fields');return;}
  const btn=document.querySelector('#authForm .submit-btn');
  if(btn){btn.textContent='Signing in…';btn.disabled=true;}
  try {
    await window._fbSignInEmail(email, pass);
    document.getElementById('authOverlay').classList.remove('open');
    showToast('👋 Welcome back!');
  } catch(e) {
    const msgs={'auth/invalid-credential':'Wrong email or password','auth/user-not-found':'No account found','auth/wrong-password':'Wrong password','auth/too-many-requests':'Too many attempts — try later'};
    showAuthErr(msgs[e.code]||e.message);
    if(btn){btn.textContent='Sign In';btn.disabled=false;}
  }
}

async function signUp(){
  const name=document.getElementById('aName')?.value?.trim();
  const email=document.getElementById('aEmail')?.value?.trim();
  const pass=document.getElementById('aPass')?.value;
  if(!name||!email||!pass){showAuthErr('Please fill all fields');return;}
  if(pass.length<6){showAuthErr('Password must be at least 6 characters');return;}
  const btn=document.querySelector('#authForm .submit-btn');
  if(btn){btn.textContent='Creating account…';btn.disabled=true;}
  try {
    await window._fbSignUpEmail(name, email, pass);
    document.getElementById('authOverlay').classList.remove('open');
    showToast('🎉 Account created!');
  } catch(e) {
    const msgs={'auth/email-already-in-use':'An account with this email already exists','auth/invalid-email':'Invalid email address','auth/weak-password':'Password is too weak'};
    showAuthErr(msgs[e.code]||e.message);
    if(btn){btn.textContent='Create Account';btn.disabled=false;}
  }
}

async function signInWithGoogle(){
  try {
    await window._fbSignInGoogle();
    document.getElementById('authOverlay').classList.remove('open');
    showToast('✅ Signed in with Google!');
  } catch(e) {
    if(e.code!=='auth/popup-closed-by-user') showToast('Google sign-in failed: '+e.message);
  }
}

// ── DEFAULT LOCATION PERSISTENCE ──
// Stored in localStorage keyed by Firebase UID so each user has their own default
function getStoredLoc(uid) {
  try {
    const raw = localStorage.getItem('br_loc_' + uid);
    return raw ? JSON.parse(raw) : null;
  } catch(e) { return null; }
}
function storeLoc(uid, loc) {
  try { localStorage.setItem('br_loc_' + uid, JSON.stringify(loc)); } catch(e) {}
}
function clearStoredLoc(uid) {
  try { localStorage.removeItem('br_loc_' + uid); } catch(e) {}
}

// Called after sign-in/sign-up. Loads saved location or shows onboarding prompt.
function initUserLocation(uid, isNewUser) {
  const saved = getStoredLoc(uid);
  if (saved) {
    // Returning user — silently apply their saved location
    applyLocation(saved);
  } else if (isNewUser) {
    // Brand new account — show location onboarding
    showLocOnboarding();
  } else {
    // Existing user, no saved location — show onboarding
    showLocOnboarding();
  }
}

function showLocOnboarding() {
  // Remove any existing onboarding
  const existing = document.getElementById('locOnboarding');
  if (existing) existing.remove();

  const activeKey = '';
  const div = document.createElement('div');
  div.className = 'loc-onboard-overlay';
  div.id = 'locOnboarding';
  div.innerHTML = `
    <div class="loc-onboard-card">
      <span class="loc-onboard-icon">📍</span>
      <h2>Where are you based?</h2>
      <p>Set your default city so we can show you the best dishes nearby — no atmosphere scores, just the food.</p>
      <div class="loc-section-label">Detect automatically</div>
      <button class="gps-btn" onclick="onboardGPS()" style="margin-bottom:14px">
        <span style="font-size:1.3rem">🎯</span>
        <div><div style="font-weight:600">Use my current location</div><span class="gps-sub">Uses your device GPS</span></div>
        <span style="margin-left:auto;color:var(--accent)">→</span>
      </button>
      <div class="loc-section-label">Choose a city</div>
      <div class="city-grid">
        ${Object.entries(CITIES).map(([k,v])=>`
          <button class="city-btn" onclick="onboardCity('${k}')">
            <span>${v.emoji}</span>${v.name.split(',')[0]}
          </button>`).join('')}
      </div>
      <div class="loc-section-label">Or enter a city</div>
      <div class="manual-row">
        <input class="form-input" id="onboardLocInput" placeholder="e.g. Austin TX…" onkeydown="if(event.key==='Enter')onboardManual()"/>
        <button class="icon-btn" onclick="onboardManual()">→</button>
      </div>
      <button style="width:100%;background:transparent;border:none;color:var(--muted);font-family:'DM Sans',sans-serif;font-size:.78rem;margin-top:14px;cursor:pointer;padding:6px" onclick="dismissOnboarding()">Skip for now</button>
    </div>`;
  document.body.appendChild(div);
  setTimeout(() => document.getElementById('onboardLocInput')?.focus(), 400);
}

function dismissOnboarding() {
  const el = document.getElementById('locOnboarding');
  if (el) el.remove();
}

function onboardCity(key) {
  const c = CITIES[key];
  const loc = {lat:c.lat, lng:c.lng, label:c.name, cityKey:key};
  if (currentUser?.uid) storeLoc(currentUser.uid, loc);
  applyLocation(loc);
  dismissOnboarding();
  showToast(`📍 Default location set to ${c.name}`);
}

function onboardGPS() {
  if (!navigator.geolocation) { showToast('GPS not available'); return; }
  showToast('🎯 Getting your location…');
  navigator.geolocation.getCurrentPosition(
    pos => {
      const {latitude:lat, longitude:lng} = pos.coords;
      let bestKey=null, bestDist=Infinity;
      Object.entries(CITIES).forEach(([k,v])=>{
        const d=haversine(lat,lng,v.lat,v.lng);
        if(d<bestDist){bestDist=d;bestKey=k;}
      });
      const label = bestDist<40 ? `Near ${CITIES[bestKey].name.split(',')[0]}` : `${lat.toFixed(2)}°, ${lng.toFixed(2)}°`;
      const loc = {lat, lng, label, cityKey: bestDist<40?bestKey:null};
      if (currentUser?.uid) storeLoc(currentUser.uid, loc);
      applyLocation(loc);
      dismissOnboarding();
      showToast(`📍 Default location set: ${label}`);
    },
    () => showToast('Could not get GPS — try selecting a city.')
  );
}

async function onboardManual() {
  const val = (document.getElementById('onboardLocInput')?.value || '').trim().toLowerCase();
  if (!val) return;
  const match = Object.entries(CITIES).find(([k,v])=>
    k.includes(val)||v.name.toLowerCase().includes(val)||val.includes(k)
  );
  if (match) { onboardCity(match[0]); return; }
  showToast('🔍 Looking up location…');
  try {
    const r = await fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(val)}`,
      {headers:{'Accept-Language':'en'}});
    const data = await r.json();
    if (!data.length) { showToast('Location not found'); return; }
    const {lat, lon, display_name} = data[0];
    const label = display_name.split(',').slice(0,2).join(',').trim();
    const loc = {lat:parseFloat(lat), lng:parseFloat(lon), label, cityKey:null};
    if (currentUser?.uid) storeLoc(currentUser.uid, loc);
    applyLocation(loc);
    dismissOnboarding();
    showToast(`📍 Default location set: ${label}`);
  } catch(e) { showToast('Could not find that location'); }
}

function setUser(u){
  const isNew = !currentUser;
  currentUser=u;
  // Load game state and preferences from Firestore
  loadGameStateFromFirestore(u.uid);
  loadPrefsFromFirestore(u.uid);
  // Check admin status then update UI
  checkAdminStatus(u.email).then(() => {
    loadSavedList();
    updateHdrAvatar();
    renderProfile();
    updateLevelBadge();
    updateStreakBanner();
    initUserLocation(u.uid, isNew);
    renderTrendingStrip();
  });
}

async function loadGameStateFromFirestore(uid) {
  try {
    const serverState = await window._fsLoadGameState(uid);
    const localState = loadGameState();
    // Prefer server state if it exists and is newer or equal
    if (serverState) {
      const merged = {
        ...localState,
        ...serverState,
        // Server wins for all fields
        xp: serverState.xp ?? localState?.xp ?? 0,
        totalReviews: serverState.totalReviews ?? localState?.totalReviews ?? 0,
        totalPhotos: serverState.totalPhotos ?? localState?.totalPhotos ?? 0,
        pioneerCount: serverState.pioneerCount ?? localState?.pioneerCount ?? 0,
        currentStreak: serverState.currentStreak ?? localState?.currentStreak ?? 0,
        maxStreak: serverState.maxStreak ?? localState?.maxStreak ?? 0,
        lastReviewDate: serverState.lastReviewDate ?? localState?.lastReviewDate ?? null,
        earnedBadges: serverState.earnedBadges || localState?.earnedBadges || [],
        fullCompletions: serverState.fullCompletions ?? localState?.fullCompletions ?? 0,
        reviewedDishes: serverState.reviewedDishes || localState?.reviewedDishes || {},
      };
      gameState = merged;
      saveGameState();
    }
  } catch(e) {
    // Fall back to local
  }
}
function updateHdrAvatar(){
  const h=document.getElementById('hdrRight');
  if(!currentUser){
    h.innerHTML=`<button class="btn-ghost" onclick="openAuth('login')">Sign in</button>`;
    const lb=document.getElementById('levelBadge');if(lb)lb.style.display='none';
    return;
  }
  const inner=currentUser.avatarImg?`<img src="${currentUser.avatarImg}" style="width:100%;height:100%;object-fit:cover;border-radius:50%" referrerpolicy="no-referrer"/>`:(currentUser.av||'?');
  const adminBtn = isAdmin ? `<button class="admin-btn" onclick="openAdmin()" title="Admin Dashboard">⚙️</button>` : '';
  h.innerHTML=`${adminBtn}<button class="feedback-btn" onclick="openFeedback()" title="Send Feedback">💬</button><div class="avatar-btn" onclick="switchView('profile',document.querySelectorAll('.nitem')[4])">${inner}</div>`;
}
async function signOut(){
  try { if(window._fbSignOut) await window._fbSignOut(); } catch(e){}
  handleSignOut();
}
function handleSignOut(){
  // Don't clear stored location — keep it for next login
  // Keep local game state (it survives in localStorage)
  currentUser=null;
  userLoc=null;
  document.getElementById('locPillText').textContent='Set location';
  const bar=document.getElementById('homeRadiusBar');if(bar)bar.style.display='none';
  const ctx=document.getElementById('homeCtxBar');if(ctx)ctx.style.display='none';
  const b=document.getElementById('levelBadge');if(b)b.style.display='none';
  updateHdrAvatar();renderProfile();goHome();showToast('Signed out.');
}

// ═══════════════════════════════════════════════
//  PROFILE
// ═══════════════════════════════════════════════
function renderProfile(){
  const el=document.getElementById('profileContent');
  if(!currentUser){el.innerHTML=`<div class="empty" style="padding:60px 20px"><div class="ei">👤</div><p style="margin-bottom:18px">Sign in to track what you've eaten,<br>loved, and want to try next.</p><button class="search-btn" style="width:100%;max-width:280px;padding:12px" onclick="openAuth('login')">Sign In / Create Account</button></div>`;return;}
  // collect all reviews from localReviews
  const allRevs=[];
  for(const [rid,revs] of Object.entries(localReviews)){
    revs.filter(r=>r.user===currentUser.name).forEach(r=>allRevs.push({...r,restId:rid}));
  }
  const inner=currentUser.avatarImg?`<img src="${currentUser.avatarImg}"/>`:(currentUser.av||'?');
  el.innerHTML=`<div class="prof-hdr">
    <div class="prof-av-wrap"><div class="prof-av" id="pAv">${inner}</div><div class="av-edit" onclick="document.getElementById('avFile').click()">✏️</div><input type="file" id="avFile" accept="image/*" style="display:none" onchange="uploadAvatar(event)"/></div>
    <div class="prof-name">${currentUser.name}</div><div class="prof-email">${currentUser.email}</div>
    <div class="prof-stats">
      <div class="stat-cell"><div class="stat-v">${allRevs.length}</div><div class="stat-l">Reviews</div></div>
      <div class="stat-cell"><div class="stat-v">${allRevs.filter(r=>r.photo).length}</div><div class="stat-l">Photos</div></div>
      <div class="stat-cell"><div class="stat-v">${allRevs.length?(allRevs.reduce((s,r)=>s+r.rating,0)/allRevs.length).toFixed(1):'—'}</div><div class="stat-l">Avg ★</div></div>
    </div>
  </div>
  <div class="prof-body">
    ${renderGameProfile()}
    <div class="prof-sec" style="margin-top:18px">My Preferences</div>
    ${renderPrefs()}
    <div class="prof-sec" style="margin-top:18px">My Reviews (${allRevs.length})</div>
    ${allRevs.length?allRevs.map(r=>`<div class="rev-mine" onclick="openDishById('${r.restId}')">
      <div style="display:flex;align-items:center;gap:9px;margin-bottom:5px">
        <span style="font-size:1.2rem">${restaurantById.get(r.restId)?.emoji||'🍽️'}</span>
        <div><div style="font-weight:600;font-size:.88rem">${r.dishName||'Dish'} @ ${restaurantById.get(r.restId)?.name||'Restaurant'}</div>
        <div style="color:var(--muted);font-size:.74rem">${starsHTML(r.rating,'0.7rem')} · ${r.date}</div></div>
      </div>
      <div style="color:#b8b0a4;font-size:.82rem;line-height:1.5">${r.text}</div>
      ${r.photo?`<img class="rev-mine-img" src="${r.photo}"/>`:''}
    </div>`).join(''):`<div style="color:var(--muted);font-size:.85rem;line-height:1.6">No reviews yet. Find a restaurant and share your thoughts!</div>`}
    <button class="logout-btn" onclick="signOut()">Sign Out</button>
  </div>`;
}

const DIETARY_OPTIONS = [
  { id: 'vegetarian', label: 'Vegetarian', emoji: '🥬' },
  { id: 'vegan', label: 'Vegan', emoji: '🌱' },
  { id: 'gluten-free', label: 'Gluten-Free', emoji: '🌾' },
  { id: 'dairy-free', label: 'Dairy-Free', emoji: '🥛' },
  { id: 'halal', label: 'Halal', emoji: '☪️' },
  { id: 'kosher', label: 'Kosher', emoji: '✡️' },
  { id: 'pescatarian', label: 'Pescatarian', emoji: '🐟' },
  { id: 'keto', label: 'Keto', emoji: '🥑' },
];

const CUISINE_OPTIONS = [
  { id: 'american', label: 'American' },
  { id: 'mexican', label: 'Mexican' },
  { id: 'italian', label: 'Italian' },
  { id: 'chinese', label: 'Chinese' },
  { id: 'japanese', label: 'Japanese' },
  { id: 'indian', label: 'Indian' },
  { id: 'thai', label: 'Thai' },
  { id: 'vietnamese', label: 'Vietnamese' },
  { id: 'korean', label: 'Korean' },
  { id: 'mediterranean', label: 'Mediterranean' },
  { id: 'french', label: 'French' },
  { id: 'ethiopian', label: 'Ethiopian' },
  { id: 'brazilian', label: 'Brazilian' },
  { id: 'peruvian', label: 'Peruvian' },
];

const CITY_OPTIONS = Object.entries(CITIES).map(([key, val]) => ({
  id: key,
  label: `${val.emoji} ${val.name}`,
}));

function renderPrefs() {
  return `
    <div style="display:flex;flex-direction:column;gap:12px">
      <!-- Home City -->
      <div>
        <div style="font-size:.78rem;color:var(--muted);margin-bottom:6px">Home City</div>
        <select id="prefHomeCity" onchange="updatePref('homeCity', this.value)" style="width:100%;padding:10px 12px;border-radius:8px;border:1px solid var(--border);background:var(--surface);color:var(--text);font-size:.9rem">
          <option value="">— Not set —</option>
          ${CITY_OPTIONS.map(c => `<option value="${c.id}" ${userPrefs.homeCity === c.id ? 'selected' : ''}>${c.label}</option>`).join('')}
        </select>
      </div>

      <!-- Discovery Mode -->
      <div>
        <div style="font-size:.78rem;color:var(--muted);margin-bottom:6px">Discovery Mode</div>
        <div style="display:flex;gap:8px">
          <button id="prefModeSwipe" onclick="updatePref('discoveryMode','swipe')" class="pref-mode-btn ${userPrefs.discoveryMode === 'swipe' ? 'active' : ''}" style="flex:1;padding:10px;border-radius:8px;border:1px solid var(--border);background:${userPrefs.discoveryMode === 'swipe' ? 'var(--accent)' : 'transparent'};color:${userPrefs.discoveryMode === 'swipe' ? '#fff' : 'var(--text)'};font-size:.85rem;cursor:pointer;font-weight:600">🎴 Swipe</button>
          <button id="prefModeSearch" onclick="updatePref('discoveryMode','search')" class="pref-mode-btn ${userPrefs.discoveryMode === 'search' ? 'active' : ''}" style="flex:1;padding:10px;border-radius:8px;border:1px solid var(--border);background:${userPrefs.discoveryMode === 'search' ? 'var(--accent)' : 'transparent'};color:${userPrefs.discoveryMode === 'search' ? '#fff' : 'var(--text)'};font-size:.85rem;cursor:pointer;font-weight:600">🔍 Search</button>
        </div>
      </div>

      <!-- Dietary Restrictions -->
      <div>
        <div style="font-size:.78rem;color:var(--muted);margin-bottom:6px">Dietary Restrictions</div>
        <div style="display:flex;flex-wrap:wrap;gap:6px">
          ${DIETARY_OPTIONS.map(d => `
            <button onclick="toggleDietary('${d.id}')" class="pref-tag ${userPrefs.dietary.includes(d.id) ? 'active' : ''}" style="padding:6px 12px;border-radius:20px;border:1px solid ${userPrefs.dietary.includes(d.id) ? 'var(--accent)' : 'var(--border)'};background:${userPrefs.dietary.includes(d.id) ? 'rgba(232,133,74,0.15)' : 'transparent'};color:${userPrefs.dietary.includes(d.id) ? 'var(--accent)' : 'var(--text)'};font-size:.8rem;cursor:pointer">${d.emoji} ${d.label}</button>
          `).join('')}
        </div>
      </div>

      <!-- Preferred Cuisines -->
      <div>
        <div style="font-size:.78rem;color:var(--muted);margin-bottom:6px">Favorite Cuisines</div>
        <div style="display:flex;flex-wrap:wrap;gap:6px">
          ${CUISINE_OPTIONS.map(c => `
            <button onclick="toggleCuisinePref('${c.id}')" class="pref-tag ${userPrefs.cuisinePrefs.includes(c.id) ? 'active' : ''}" style="padding:6px 12px;border-radius:20px;border:1px solid ${userPrefs.cuisinePrefs.includes(c.id) ? 'var(--accent)' : 'var(--border)'};background:${userPrefs.cuisinePrefs.includes(c.id) ? 'rgba(232,133,74,0.15)' : 'transparent'};color:${userPrefs.cuisinePrefs.includes(c.id) ? 'var(--accent)' : 'var(--text)'};font-size:.8rem;cursor:pointer">${c.label}</button>
          `).join('')}
        </div>
      </div>

      <!-- Notifications -->
      <div style="display:flex;justify-content:space-between;align-items:center">
        <div>
          <div style="font-weight:600;font-size:.9rem">Notifications</div>
          <div style="font-size:.78rem;color:var(--muted)">Streak reminders & new features</div>
        </div>
        <label style="position:relative;display:inline-block;width:48px;height:26px;cursor:pointer">
          <input type="checkbox" id="prefNotif" onchange="updatePref('notifications', this.checked)" ${userPrefs.notifications ? 'checked' : ''} style="opacity:0;width:0;height:0">
          <span style="position:absolute;inset:0;background:${userPrefs.notifications ? 'var(--accent)' : 'var(--border)'};border-radius:13px;transition:.3s"></span>
          <span style="position:absolute;top:3px;left:${userPrefs.notifications ? '25px' : '3px'};width:20px;height:20px;background:#fff;border-radius:50%;transition:.3s"></span>
        </label>
      </div>
    </div>
  `;
}

function updatePref(key, value) {
  userPrefs[key] = value;
  savePrefs();
  applyPrefs();
  renderProfile();
}

function toggleDietary(id) {
  const idx = userPrefs.dietary.indexOf(id);
  if (idx === -1) userPrefs.dietary.push(id);
  else userPrefs.dietary.splice(idx, 1);
  savePrefs();
  applyPrefs();
  renderProfile();
}

function toggleCuisinePref(id) {
  const idx = userPrefs.cuisinePrefs.indexOf(id);
  if (idx === -1) userPrefs.cuisinePrefs.push(id);
  else userPrefs.cuisinePrefs.splice(idx, 1);
  savePrefs();
  applyPrefs();
  renderProfile();
}

function openDishById(id){const r=restaurantById.get(id);if(r){currentDish=r;openDish(id);}}
function uploadAvatar(e){const file=e.target.files[0];if(!file)return;const reader=new FileReader();reader.onload=ev=>{currentUser.avatarImg=ev.target.result;document.getElementById('pAv').innerHTML=`<img src="${ev.target.result}"/>`;updateHdrAvatar();showToast('✅ Avatar updated!');};reader.readAsDataURL(file);}

// ═══════════════════════════════════════════════
//  GAMIFICATION ENGINE
// ═══════════════════════════════════════════════

// ── LEVELS ──
const LEVELS = [
  { name:'Foodie',    min:0,    max:199,   emoji:'🍽️',  color:'#8a8478' },
  { name:'Taster',   min:200,  max:499,   emoji:'🥢',  color:'#6abf8a' },
  { name:'Regular',  min:500,  max:999,   emoji:'🍴',  color:'#e8854a' },
  { name:'Critic',   min:1000, max:1999,  emoji:'⭐',  color:'#f2c46d' },
  { name:'Connoisseur',min:2000,max:3999, emoji:'🎖️', color:'#e8854a' },
  { name:'Expert',   min:4000, max:7999,  emoji:'👨‍🍳', color:'#f2c46d' },
  { name:'Legend',   min:8000, max:Infinity, emoji:'🏆', color:'#f2c46d' },
];

// ── BADGES ──
const BADGE_DEFS = [
  { id:'first_review',  emoji:'✍️',  name:'First Bite',    desc:'Leave your first review',           check: s => s.totalReviews >= 1 },
  { id:'pioneer',       emoji:'🚩',  name:'Pioneer',       desc:'First to review a dish anywhere',   check: s => s.pioneerCount >= 1 },
  { id:'streak3',       emoji:'🔥',  name:'On Fire',       desc:'3-day review streak',               check: s => s.maxStreak >= 3 },
  { id:'streak7',       emoji:'🌋',  name:'Unstoppable',   desc:'7-day review streak',               check: s => s.maxStreak >= 7 },
  { id:'reviews10',     emoji:'📝',  name:'Regular',       desc:'10 total reviews',                  check: s => s.totalReviews >= 10 },
  { id:'reviews50',     emoji:'📚',  name:'Prolific',      desc:'50 total reviews',                  check: s => s.totalReviews >= 50 },
  { id:'photos5',       emoji:'📸',  name:'Shutterbug',    desc:'Upload 5 photos',                   check: s => s.totalPhotos >= 5 },
  { id:'completion',    emoji:'🎯',  name:'Completionist', desc:'Try all dishes at a restaurant',    check: s => s.fullCompletions >= 1 },
];

// ── XP REWARDS ──
const XP = {
  review:        50,
  reviewWithPhoto: 80,
  pioneer:       150,  // first to review a dish
  streak:        25,   // bonus per day of streak
  streakBonus:   () => Math.random() < 0.3 ? 50 : 0,  // 30% chance of variable bonus
  completion:    200,  // finished all dishes at a restaurant
};

// ── GAME STATE ── persisted in localStorage
const GAME_STATE_KEY = 'biterank_gamestate';
function loadGameState() {
  try {
    const raw = localStorage.getItem(GAME_STATE_KEY);
    if (raw) return JSON.parse(raw);
  } catch(e) {}
  return null;
}
function saveGameState() {
  try {
    localStorage.setItem(GAME_STATE_KEY, JSON.stringify(gameState));
  } catch(e) {}
  updateWishlistCount();
  // Sync to Firestore (non-blocking)
  if (currentUser?.uid) {
    window._fsSaveGameState(currentUser.uid, gameState).catch(() => {});
  }
}

let gameState = loadGameState() || {
  xp: 0,
  totalReviews: 0,
  totalPhotos: 0,
  pioneerCount: 0,
  currentStreak: 0,
  maxStreak: 0,
  lastReviewDate: null,  // ISO date string
  earnedBadges: [],
  fullCompletions: 0,
  reviewedDishes: {},    // { restaurantId: Set of dish names }
};

function getLevelInfo(xp) {
  return LEVELS.find(l => xp >= l.min && xp < l.max) || LEVELS[LEVELS.length - 1];
}

function getNextLevel(xp) {
  const idx = LEVELS.findIndex(l => xp >= l.min && xp < l.max);
  return idx < LEVELS.length - 1 ? LEVELS[idx + 1] : null;
}

function xpProgressPct(xp) {
  const cur = getLevelInfo(xp);
  const next = getNextLevel(xp);
  if (!next) return 100;
  const range = next.min - cur.min;
  const earned = xp - cur.min;
  return Math.min(100, Math.round(earned / range * 100));
}

// ── STREAK LOGIC ──
function updateStreak() {
  const today = new Date().toISOString().split('T')[0];
  const last = gameState.lastReviewDate;
  if (!last) {
    gameState.currentStreak = 1;
  } else {
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    if (last === today) {
      // already reviewed today, no change
    } else if (last === yesterday) {
      gameState.currentStreak++;
    } else {
      gameState.currentStreak = 1; // streak broken
    }
  }
  gameState.lastReviewDate = today;
  gameState.maxStreak = Math.max(gameState.maxStreak, gameState.currentStreak);
  saveGameState();
}

// ── AWARD XP & CHECK BADGES ──
function awardXP(amount, reason, isPioneer = false, hasPhoto = false) {
  if (!currentUser) return;
  const before = getLevelInfo(gameState.xp);
  gameState.xp += amount;

  // streak bonus
  const streakBonus = gameState.currentStreak > 1
    ? XP.streak * (gameState.currentStreak - 1) + XP.streakBonus()
    : 0;
  if (streakBonus > 0) gameState.xp += streakBonus;

  const total = amount + streakBonus;
  const after = getLevelInfo(gameState.xp);

  // show XP popup
  showXPPop(`+${total} XP`, reason + (streakBonus > 0 ? ` · 🔥 +${streakBonus} streak` : ''));

  // level up?
  if (after.name !== before.name) {
    setTimeout(() => {
      showXPPop(`🎉 Level Up!`, `You're now a ${after.emoji} ${after.name}!`);
      triggerConfetti();
    }, 1400);
  }

  checkBadges();
  updateStreakBanner();
  updateLevelBadge();
  saveGameState();
}

function checkBadges() {
  BADGE_DEFS.forEach(b => {
    if (!gameState.earnedBadges.includes(b.id) && b.check(gameState)) {
      gameState.earnedBadges.push(b.id);
      saveGameState();
      setTimeout(() => {
        showXPPop(`${b.emoji} Badge Unlocked!`, b.name);
        if (b.id === 'streak7' || b.id === 'reviews50') triggerConfetti();
      }, 2800);
    }
  });
}

// ── HOOK INTO REVIEW SUBMISSION ──
function recordGameReview(restaurantId, dishName, hasPhoto) {
  if (!currentUser) return;

  updateStreak();
  gameState.totalReviews++;
  if (hasPhoto) gameState.totalPhotos++;

  // pioneer check — first review of this dish globally
  const allRevsForDish = Object.values(localReviews)
    .flat()
    .filter(r => r.dishName?.toLowerCase() === dishName?.toLowerCase());
  const isPioneer = dishName && allRevsForDish.length === 1; // just submitted = 1
  if (isPioneer) {
    gameState.pioneerCount++;
    gameState.xp += XP.pioneer;
    setTimeout(() => showXPPop('🚩 Pioneer!', `First to rank "${dishName}"!`), 700);
  }

  // track dish completion per restaurant
  if (dishName && restaurantId) {
    if (!gameState.reviewedDishes[restaurantId]) gameState.reviewedDishes[restaurantId] = [];
    if (!gameState.reviewedDishes[restaurantId].includes(dishName.toLowerCase())) {
      gameState.reviewedDishes[restaurantId].push(dishName.toLowerCase());
    }
    // check if all known dishes at this restaurant have been reviewed
    const menuDishes = getAllDishes(restaurantId);
    if (menuDishes.length > 0 && menuDishes.every(d =>
      gameState.reviewedDishes[restaurantId]?.includes(d.name.toLowerCase())
    )) {
      gameState.fullCompletions++;
      gameState.xp += XP.completion;
      setTimeout(() => { showXPPop('🎯 Completionist!', 'You\'ve tried every dish here!'); triggerConfetti(); }, 1400);
    }
  }

  const baseXP = hasPhoto ? XP.reviewWithPhoto : XP.review;
  awardXP(baseXP, hasPhoto ? 'Review + photo' : 'Review submitted', isPioneer, hasPhoto);
  saveGameState();
}

// ── UI HELPERS ──
function showXPPop(label, reason) {
  const pop = document.getElementById('xpPop');
  document.getElementById('xpPopLabel').textContent = label;
  document.getElementById('xpPopReason').textContent = reason;
  pop.classList.add('show');
  clearTimeout(pop._t);
  pop._t = setTimeout(() => pop.classList.remove('show'), 2800);
}

function updateLevelBadge() {
  if (!currentUser) return;
  const lvl = getLevelInfo(gameState.xp);
  const badge = document.getElementById('levelBadge');
  if (badge) {
    badge.textContent = `${lvl.emoji} ${lvl.name}`;
    badge.style.display = '';
  }
}

function updateStreakBanner() {
  const banner = document.getElementById('streakBanner');
  const daysEl = document.getElementById('streakDays');
  if (!banner) return;
  if (currentUser && gameState.currentStreak >= 2) {
    banner.style.display = '';
    daysEl.textContent = gameState.currentStreak;
  } else {
    banner.style.display = 'none';
  }
}

// ── CONFETTI ──
function triggerConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext('2d');
  const pieces = Array.from({length: 80}, () => ({
    x: Math.random() * canvas.width,
    y: -10,
    r: Math.random() * 6 + 3,
    d: Math.random() * 80 + 10,
    color: ['#e8854a','#f2c46d','#6abf8a','#fff','#e06060'][Math.floor(Math.random()*5)],
    tilt: Math.random() * 10 - 5,
    tiltAngle: 0,
    tiltAngleInc: (Math.random() * 0.1 + 0.05) * (Math.random() > 0.5 ? 1 : -1),
  }));
  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      p.tiltAngle += p.tiltAngleInc;
      p.y += Math.cos(frame / 10 + p.d) + 2;
      p.x += Math.sin(frame / 20) * 0.5;
      p.tilt = Math.sin(p.tiltAngle) * 12;
      ctx.beginPath();
      ctx.lineWidth = p.r;
      ctx.strokeStyle = p.color;
      ctx.moveTo(p.x + p.tilt + p.r / 4, p.y);
      ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 4);
      ctx.stroke();
    });
    frame++;
    if (frame < 120) requestAnimationFrame(draw);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  draw();
}

// ── GAMIFICATION PROFILE SECTION ──
function renderGameProfile() {
  if (!currentUser) return '';
  const lvl = getLevelInfo(gameState.xp);
  const next = getNextLevel(gameState.xp);
  const pct = xpProgressPct(gameState.xp);

  const badgesHTML = BADGE_DEFS.map(b => {
    const earned = gameState.earnedBadges.includes(b.id);
    return `<div class="badge-cell ${earned ? 'earned' : 'locked'}" title="${b.desc}">
      <span class="badge-em">${b.emoji}</span>
      <div class="badge-name">${b.name}</div>
    </div>`;
  }).join('');

  const streakHTML = gameState.currentStreak >= 2
    ? `<div style="display:flex;align-items:center;gap:6px;margin-top:8px;font-size:.8rem;color:var(--accent2)">🔥 <strong>${gameState.currentStreak}-day streak</strong> <span style="color:var(--muted)">(best: ${gameState.maxStreak})</span></div>`
    : '';

  return `
    <div class="xp-card">
      <div class="xp-card-top">
        <div class="xp-level-name">${lvl.emoji} ${lvl.name}</div>
        <div class="xp-next">${next ? `${gameState.xp} / ${next.min} XP` : `${gameState.xp} XP · Max level`}</div>
      </div>
      <div class="xp-bar-wrap"><div class="xp-bar-fill" style="width:${pct}%"></div></div>
      <div class="xp-bar-label"><span>${lvl.name}</span>${next ? `<span>${next.name}</span>` : '<span>Legend ✓</span>'}</div>
      ${streakHTML}
    </div>
    <div class="prof-sec">Badges (${gameState.earnedBadges.length}/${BADGE_DEFS.length})</div>
    <div class="badges-grid">${badgesHTML}</div>`;
}

// ── DISH COMPLETION BAR (shown inside restaurant detail) ──
function renderCompletionBar(restaurantId) {
  if (!currentUser) return '';
  const menuDishes = getAllDishes(restaurantId);
  if (menuDishes.length < 2) return '';
  const tried = (gameState.reviewedDishes[restaurantId] || []).length;
  const total = menuDishes.length;
  const pct = Math.round(tried / total * 100);
  return `<div class="completion-bar-wrap">
    <div class="completion-top">
      <span class="completion-label">🎯 Your dish progress</span>
      <span class="completion-pct">${tried}/${total}</span>
    </div>
    <div class="completion-bar"><div class="completion-fill" style="width:${pct}%"></div></div>
    <div class="completion-sub">${pct === 100 ? '🏆 You\'ve tried every dish here!' : `Try ${total - tried} more dish${total - tried !== 1 ? 'es' : ''} to complete this restaurant`}</div>
  </div>`;
}

// ── PIONEER TAG on dish cards ──
function isPioneerDish(restaurantId, dishName) {
  // a dish is "pioneer-able" if it has exactly 0 reviews from anyone else
  const revs = (localReviews[restaurantId] || []).filter(r =>
    r.dishName?.toLowerCase() === dishName?.toLowerCase()
  );
  return revs.length === 0;
}


// ═══════════════════════════════════════════════
//  CITY TILES
// ═══════════════════════════════════════════════

// Top 12 US cities by population — default when no review data exists
const DEFAULT_CITIES = [
  {key:'nyc',      name:'New York',      emoji:'🗽', state:'NY'},
  {key:'la',       name:'Los Angeles',   emoji:'🌴', state:'CA'},
  {key:'chicago',  name:'Chicago',       emoji:'🌬️', state:'IL'},
  {key:'houston',  name:'Houston',       emoji:'🤠', state:'TX'},
  {key:'phoenix',  name:'Phoenix',       emoji:'🌵', state:'AZ'},
  {key:'philly',   name:'Philadelphia',  emoji:'🔔', state:'PA'},
  {key:'san_antonio', name:'San Antonio',emoji:'🌶️', state:'TX'},
  {key:'sd',       name:'San Diego',     emoji:'🏖️', state:'CA'},
  {key:'dallas',   name:'Dallas',        emoji:'⭐', state:'TX'},
  {key:'sf',       name:'San Francisco', emoji:'🌉', state:'CA'},
  {key:'seattle',  name:'Seattle',       emoji:'🌲', state:'WA'},
  {key:'denver',   name:'Denver',        emoji:'🏔️', state:'CO'},
];

// Extend CITIES map with additional cities
const EXTRA_CITIES = {
  houston:    {name:'Houston, TX',      lat:29.7604, lng:-95.3698, emoji:'🤠'},
  phoenix:    {name:'Phoenix, AZ',      lat:33.4484, lng:-112.0740,emoji:'🌵'},
  philly:     {name:'Philadelphia, PA', lat:39.9526, lng:-75.1652, emoji:'🔔'},
  san_antonio:{name:'San Antonio, TX',  lat:29.4241, lng:-98.4936, emoji:'🌶️'},
  sd:         {name:'San Diego, CA',    lat:32.7157, lng:-117.1611,emoji:'🏖️'},
  dallas:     {name:'Dallas, TX',       lat:32.7767, lng:-96.7970, emoji:'⭐'},
  denver:     {name:'Denver, CO',       lat:39.7392, lng:-104.9903,emoji:'🏔️'},
  boston:     {name:'Boston, MA',       lat:42.3601, lng:-71.0589, emoji:'🦞'},
  atlanta:    {name:'Atlanta, GA',      lat:33.7490, lng:-84.3880, emoji:'🍑'},
  dc:         {name:'Washington, DC',   lat:38.9072, lng:-77.0369, emoji:'🏛️'},
  vegas:      {name:'Las Vegas, NV',    lat:36.1699, lng:-115.1398,emoji:'🎰'},
  nashville:  {name:'Nashville, TN',    lat:36.1627, lng:-86.7816, emoji:'🎸'},
};

// Merge into CITIES
Object.assign(CITIES, EXTRA_CITIES);

// Count reviews per city from localReviews
function getReviewCountByCity() {
  const counts = {};
  for (const [restId, revs] of Object.entries(localReviews)) {
    if (!revs.length) continue;
    // Extract city from restaurant id — gpl_ ids can be matched to restaurantById
    const r = restaurantById.get(restId);
    if (!r) continue;
    // Find which city this restaurant is closest to
    let bestKey = null, bestDist = Infinity;
    Object.entries(CITIES).forEach(([k,v]) => {
      const d = haversine(r.lat, r.lng, v.lat, v.lng);
      if (d < bestDist && d < 30) { bestDist = d; bestKey = k; }
    });
    if (bestKey) {
      counts[bestKey] = (counts[bestKey] || 0) + revs.length;
    }
  }
  return counts;
}

function renderCityTiles() {
  const grid = document.getElementById('cityTilesGrid');
  if (!grid) return;

  const reviewCounts = getReviewCountByCity();
  const hasReviews = Object.keys(reviewCounts).length > 0;

  // Build tile list: if we have review data, sort by activity; else use default population order
  let tileCities;
  if (hasReviews) {
    // Sort by review count descending, show top 11 + custom
    const sorted = Object.entries(reviewCounts)
      .sort((a,b) => b[1]-a[1])
      .slice(0,11)
      .map(([key, count]) => {
        const city = CITIES[key];
        return city ? {key, name:city.name.split(',')[0], emoji:city.emoji, count} : null;
      })
      .filter(Boolean);
    // Fill up to 11 with popular cities not already in list
    const existingKeys = new Set(sorted.map(t=>t.key));
    for (const dc of DEFAULT_CITIES) {
      if (sorted.length >= 11) break;
      if (!existingKeys.has(dc.key)) sorted.push({...dc, count:0});
    }
    tileCities = sorted;
  } else {
    tileCities = DEFAULT_CITIES.slice(0,11).map(dc => ({...dc, count:0}));
  }

  const activeCityKey = userLoc?.cityKey || '';

  const tilesHTML = tileCities.map(tile => {
    const isActive = tile.key === activeCityKey;
    const isHot = tile.count > 0;
    return `<div class="city-tile${isActive?' active-city':''}" onclick="selectCityTile('${tile.key}')">
      ${isHot ? `<div class="city-tile-hot">🔥 ${tile.count}</div>` : ''}
      <div class="city-tile-em">${tile.emoji}</div>
      <div class="city-tile-name">${tile.name}</div>
      <div class="city-tile-count">${tile.count > 0 ? `${tile.count} review${tile.count!==1?'s':''}` : tile.state||''}</div>
    </div>`;
  }).join('');

  // Custom location tile always last
  const customTile = `<div class="city-tile custom-tile" onclick="openLocPicker()">
    <div class="city-tile-em">🔍</div>
    <div class="city-tile-name">Other</div>
    <div class="city-tile-count">Custom city</div>
  </div>`;

  grid.innerHTML = tilesHTML + customTile;
}

// ═══════════════════════════════════════════════
//  CITY PAGE
// ═══════════════════════════════════════════════

let currentCityKey = null;
let currentCityTab = 'top';
let cityRestaurants = [];

async function selectCityTile(key) {
  const city = CITIES[key];
  if (!city) return;
  currentCityKey = key;
  currentCityTab = 'top';

  // Set location silently
  const loc = {lat:city.lat, lng:city.lng, label:city.name, cityKey:key};
  applyLocation(loc);

  // Switch to city view
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('cityView').classList.add('active');
  document.querySelectorAll('.nitem').forEach(b => b.classList.remove('active'));

  // Populate hero
  document.getElementById('cityPageEm').textContent = city.emoji || '🌆';
  document.getElementById('cityPageName').textContent = city.name.split(',')[0];
  document.getElementById('cityPageSub').textContent = `Finding the best food (ignoring the décor)…`;
  document.getElementById('citySearchInput').value = '';

  // Reset tabs
  document.querySelectorAll('.city-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('cityTabTop').classList.add('active');

  // Load restaurants
  await loadCityContent();
}

async function loadCityContent() {
  const city = CITIES[currentCityKey];
  if (!city) return;
  const content = document.getElementById('cityContent');
  content.innerHTML = `<div class="loading-wrap"><div class="spinner"></div><div class="loading-text">Finding top dishes in ${city.name.split(',')[0]}…</div></div>`;

  try {
    // Fetch restaurants for this city
    const q = document.getElementById('citySearchInput').value.trim() || 'restaurant';
    cityRestaurants = await fetchRestaurants(city.lat, city.lng, activeRadius, [q]);
    renderCityContent();
  } catch(err) {
    content.innerHTML = `<div class="empty"><div class="ei">⚠️</div><p>Could not load restaurants.<br>${err.message}</p></div>`;
  }
}

function renderCityContent() {
  const city = CITIES[currentCityKey];
  const content = document.getElementById('cityContent');
  const q = document.getElementById('citySearchInput').value.trim().toLowerCase();

  // Filter by search if any
  let list = cityRestaurants;
  if (q) {
    list = list.filter(r =>
      r.name.toLowerCase().includes(q) ||
      r.cuisine.toLowerCase().includes(q)
    );
  }

  // Sort based on active tab
  let sorted = [...list];
  if (currentCityTab === 'top') {
    // Rated dishes first (by rating), then unrated sorted by distance
    const rated = sorted.filter(r => r.rating !== null).sort((a,b) => (b.rating||0)-(a.rating||0));
    const unrated = sorted.filter(r => r.rating === null).sort((a,b) => (getDist(a)||999)-(getDist(b)||999));
    sorted = [...rated, ...unrated];
  } else if (currentCityTab === 'trending') {
    sorted.sort((a,b) => b.reviews - a.reviews);
  } else if (currentCityTab === 'nearest') {
    sorted.sort((a,b) => (getDist(a)||999) - (getDist(b)||999));
  } else if (currentCityTab === 'new') {
    // "New" = recently added to our local data — reverse the array as proxy
    sorted.reverse();
  }

  const totalRated = sorted.filter(r => r.rating !== null).length;
  const cityName = city.name.split(',')[0];
  document.getElementById('cityPageSub').textContent =
    `${sorted.length} restaurants · ${totalRated > 0 ? `${totalRated} rated` : 'Be the first to review!'}`;

  if (!sorted.length) {
    content.innerHTML = `<div class="empty"><div class="ei">🍽️</div><p>No restaurants found in ${cityName}.<br>Try a broader search or increase the radius.</p></div>`;
    return;
  }

  // Render ranked dish cards
  content.innerHTML = sorted.map((r, i) => {
    const rank = i + 1;
    const dist = getDist(r);
    const distBadge = dist !== null ? `<span class="dish-dist">${distLabel(dist)}</span>` : '';
    const photo = (localPhotos[r.id]||[])[0];
    const thumb = photo
      ? `<div class="dish-rank-thumb"><img src="${photo}" alt=""/></div>`
      : `<div class="dish-rank-thumb">${r.emoji}</div>`;
    const rating = r.rating;
    const ratingEl = rating
      ? `<div class="stars">${starsHTML(rating)}</div><span class="rnum">${rating}</span><span class="rcnt">(${r.reviews})</span>`
      : `<span style="color:var(--muted);font-size:.74rem">No reviews — be first!</span>`;
    const openStatus = isLikelyOpen(r);
    const openEl = r.closed
      ? `<span class="dbadge b-closed">Closed</span>`
      : openStatus === true ? `<span style="color:var(--green);font-size:.7rem;font-weight:600">● Open</span>`
      : '';

    return `<div class="dish-rank-card" onclick="openDish('${r.id}')">
      <div class="dish-rank-num ${rank <= 3 ? 'top3' : ''}">${rank}</div>
      ${thumb}
      <div class="dish-rank-info">
        <div class="dish-rank-name">${r.name}</div>
        <div class="dish-rank-rest">${r.cuisine ? r.cuisine.split(';')[0] : 'Restaurant'}</div>
        <div class="dish-rank-meta">${ratingEl}${openEl}</div>
      </div>
      <div class="dish-rank-right">
        <span class="dish-price">${r.price||''}</span>
        ${distBadge}
      </div>
    </div>`;
  }).join('');

  // Register all restaurants for detail view
  sorted.forEach(r => registerRestaurant(r));
}

function setCityTab(tab, btn) {
  currentCityTab = tab;
  document.querySelectorAll('.city-tab').forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderCityContent();
}

async function doCitySearch() {
  await loadCityContent();
}

// selectCityTile now handled above

// ═══════════════════════════════════════════════
//  DISH TAXONOMY ENGINE
// ═══════════════════════════════════════════════

// Full taxonomy tree — each node has: label, emoji, keywords (for matching reviews/restaurants),
// and optional children. Leaf nodes have no children.
const DISH_TAXONOMY = {
  ramen: {
    label:'Ramen', emoji:'🍜',
    keywords:['ramen','ramen shop','ramen bar','noodle soup','japanese noodle'],
    children:{
      style:{
        label:'By style', emoji:'🥣',
        children:{
          tonkotsu:{ label:'Tonkotsu', emoji:'🐷', keywords:['tonkotsu','pork bone','hakata'], children:{
            shio_tonkotsu:{ label:'Shio Tonkotsu', emoji:'🧂', keywords:['shio tonkotsu','salt tonkotsu'] },
            shoyu_tonkotsu:{ label:'Shoyu Tonkotsu', emoji:'🍶', keywords:['shoyu tonkotsu'] },
          }},
          shoyu:{ label:'Shoyu', emoji:'🍶', keywords:['shoyu ramen','soy sauce ramen','tokyo ramen'], children:{
            classic_shoyu:{ label:'Classic Shoyu', emoji:'🫙', keywords:['classic shoyu','tokyo shoyu'] },
            spicy_shoyu:{ label:'Spicy Shoyu', emoji:'🌶️', keywords:['spicy shoyu'] },
          }},
          miso:{ label:'Miso', emoji:'🧡', keywords:['miso ramen','sapporo ramen'], children:{
            white_miso:{ label:'White Miso', emoji:'⬜', keywords:['white miso','shiro miso'] },
            red_miso:{ label:'Red Miso', emoji:'🟥', keywords:['red miso','aka miso'] },
            spicy_miso:{ label:'Spicy Miso', emoji:'🌶️', keywords:['spicy miso','kara miso'] },
          }},
          shio:{ label:'Shio', emoji:'🧂', keywords:['shio ramen','salt ramen'], children:{
            classic_shio:{ label:'Classic Shio', emoji:'🫙', keywords:['classic shio'] },
            seafood_shio:{ label:'Seafood Shio', emoji:'🦐', keywords:['seafood shio','seafood salt'] },
          }},
        },
      },
      format:{
        label:'By format', emoji:'🍱',
        children:{
          tsukemen:{ label:'Tsukemen', emoji:'🫕', keywords:['tsukemen','dipping ramen','dipping noodle'] },
          mazemen:{ label:'Mazemen / Mazesoba', emoji:'🥡', keywords:['mazemen','mazesoba','brothless','abura soba','dry ramen'] },
          tantan:{ label:'Tantanmen', emoji:'🌶️', keywords:['tantanmen','tan tan','sesame ramen','spicy sesame'] },
          curry:{ label:'Curry Ramen', emoji:'🍛', keywords:['curry ramen'] },
          vegan:{ label:'Vegan / Vegetarian', emoji:'🥬', keywords:['vegan ramen','vegetarian ramen','veggie ramen'] },
        },
      },
    },
  },

  sushi: {
    label:'Sushi', emoji:'🍣',
    keywords:['sushi','japanese','omakase'],
    children:{
      style:{
        label:'By style', emoji:'🍱',
        children:{
          nigiri:{ label:'Nigiri', emoji:'🍣', keywords:['nigiri','nigiri sushi'] },
          maki:{ label:'Maki / Rolls', emoji:'🌀', keywords:['maki','roll','hand roll','temaki'], children:{
            classic_roll:{ label:'Classic Roll', emoji:'🫙', keywords:['california roll','spicy tuna roll','salmon roll'] },
            specialty_roll:{ label:'Specialty Roll', emoji:'⭐', keywords:['specialty roll','signature roll','chef roll'] },
            hand_roll:{ label:'Hand Roll', emoji:'🌯', keywords:['hand roll','temaki'] },
          }},
          sashimi:{ label:'Sashimi', emoji:'🐟', keywords:['sashimi'] },
          omakase:{ label:'Omakase', emoji:'👨‍🍳', keywords:['omakase','chef omakase','omakase menu'] },
          temaki:{ label:'Temaki', emoji:'🌯', keywords:['temaki','hand roll'] },
        },
      },
      protein:{
        label:'By protein', emoji:'🐠',
        children:{
          salmon:{ label:'Salmon', emoji:'🐟', keywords:['salmon sushi','salmon roll','salmon nigiri'] },
          tuna:{ label:'Tuna / Bluefin', emoji:'🟥', keywords:['tuna sushi','tuna roll','bluefin','maguro','otoro','chutoro'] },
          yellowtail:{ label:'Yellowtail', emoji:'💛', keywords:['yellowtail','hamachi'] },
          scallop:{ label:'Scallop', emoji:'🫧', keywords:['scallop sushi','hotate'] },
          uni:{ label:'Uni (Sea Urchin)', emoji:'🦔', keywords:['uni','sea urchin'] },
          wagyu:{ label:'Wagyu / A5 Beef', emoji:'🥩', keywords:['wagyu sushi','a5 sushi','beef sushi'] },
        },
      },
    },
  },

  tacos: {
    label:'Tacos', emoji:'🌮',
    keywords:['taco','tacos','mexican','tex-mex','taqueria'],
    children:{
      protein:{
        label:'By protein', emoji:'🥩',
        children:{
          carne_asada:{ label:'Carne Asada', emoji:'🥩', keywords:['carne asada','grilled beef'] },
          al_pastor:{ label:'Al Pastor', emoji:'🍍', keywords:['al pastor','pastor taco'] },
          birria:{ label:'Birria', emoji:'🌊', keywords:['birria','birria tacos','quesabirria'] },
          carnitas:{ label:'Carnitas', emoji:'🐷', keywords:['carnitas'] },
          fish:{ label:'Fish Tacos', emoji:'🐟', keywords:['fish taco','baja fish','grilled fish taco'] },
          shrimp:{ label:'Shrimp Tacos', emoji:'🦐', keywords:['shrimp taco','camarones'] },
          veggie:{ label:'Vegetarian', emoji:'🥬', keywords:['veggie taco','bean taco','mushroom taco','potato taco'] },
        },
      },
      style:{
        label:'By style', emoji:'🌮',
        children:{
          street:{ label:'Street Tacos', emoji:'🛒', keywords:['street taco','street style','corn tortilla'] },
          baja:{ label:'Baja Style', emoji:'🌊', keywords:['baja','baja taco','baja style'] },
          tex_mex:{ label:'Tex-Mex', emoji:'⭐', keywords:['tex-mex','flour tortilla','loaded taco'] },
          fusion:{ label:'Fusion', emoji:'🌏', keywords:['fusion taco','korean taco','japanese taco','asian taco'] },
        },
      },
    },
  },

  burgers: {
    label:'Burgers', emoji:'🍔',
    keywords:['burger','burgers','smash burger','cheeseburger'],
    children:{
      style:{
        label:'By style', emoji:'🍔',
        children:{
          smash:{ label:'Smash Burger', emoji:'💥', keywords:['smash burger','smashburger'] },
          classic:{ label:'Classic / Stacked', emoji:'🏛️', keywords:['classic burger','stacked burger','tall burger'] },
          steakhouse:{ label:'Steakhouse Style', emoji:'🥩', keywords:['steakhouse burger','wagyu burger','dry-aged'] },
          veggie:{ label:'Veggie / Plant-Based', emoji:'🥬', keywords:['veggie burger','plant burger','impossible','beyond burger'] },
        },
      },
      protein:{
        label:'By protein', emoji:'🥩',
        children:{
          beef:{ label:'Beef', emoji:'🐄', keywords:['beef burger','chuck','brisket blend'] },
          wagyu:{ label:'Wagyu', emoji:'⭐', keywords:['wagyu burger','a5 burger'] },
          chicken:{ label:'Chicken', emoji:'🐔', keywords:['chicken burger','fried chicken burger','crispy chicken'] },
          lamb:{ label:'Lamb', emoji:'🐑', keywords:['lamb burger'] },
        },
      },
    },
  },

  pizza: {
    label:'Pizza', emoji:'🍕',
    keywords:['pizza','pizzeria','neapolitan','new york pizza'],
    children:{
      style:{
        label:'By style', emoji:'🍕',
        children:{
          neapolitan:{ label:'Neapolitan', emoji:'🇮🇹', keywords:['neapolitan pizza','wood fired','wood-fired','napoletana'] },
          ny_style:{ label:'New York Style', emoji:'🗽', keywords:['new york pizza','ny style','ny pizza','foldable'] },
          detroit:{ label:'Detroit Style', emoji:'🟥', keywords:['detroit pizza','detroit style','square pizza'] },
          chicago:{ label:'Chicago Deep Dish', emoji:'🏙️', keywords:['deep dish','chicago pizza','stuffed pizza'] },
          roman:{ label:'Roman / Al Taglio', emoji:'✂️', keywords:['roman pizza','al taglio','pizza al taglio','sheet pizza'] },
          grandma:{ label:"Grandma / Sicilian", emoji:'👵', keywords:['grandma pizza','sicilian pizza','square slice'] },
        },
      },
      toppings:{
        label:'By toppings', emoji:'🧀',
        children:{
          margherita:{ label:'Margherita', emoji:'🍅', keywords:['margherita','tomato basil','classic margherita'] },
          pepperoni:{ label:'Pepperoni', emoji:'🔴', keywords:['pepperoni pizza','pepperoni'] },
          white:{ label:'White Pizza', emoji:'⬜', keywords:['white pizza','bianca','no sauce'] },
          truffle:{ label:'Truffle', emoji:'🍄', keywords:['truffle pizza','black truffle','truffle oil'] },
          veggie:{ label:'Veggie', emoji:'🥦', keywords:['veggie pizza','vegetarian pizza'] },
        },
      },
    },
  },

  pasta: {
    label:'Pasta', emoji:'🍝',
    keywords:['pasta','italian','noodle','spaghetti','fettuccine'],
    children:{
      shape:{
        label:'By shape', emoji:'🍝',
        children:{
          spaghetti:{ label:'Spaghetti', emoji:'🍝', keywords:['spaghetti','spaghetti carbonara','spaghetti bolognese'] },
          tagliatelle:{ label:'Tagliatelle / Fettuccine', emoji:'🎀', keywords:['tagliatelle','fettuccine','pappardelle'] },
          penne:{ label:'Penne / Rigatoni', emoji:'⬛', keywords:['penne','rigatoni','paccheri'] },
          filled:{ label:'Filled (Ravioli / Tortellini)', emoji:'🫙', keywords:['ravioli','tortellini','agnolotti'] },
          gnocchi:{ label:'Gnocchi', emoji:'🟡', keywords:['gnocchi','potato gnocchi'] },
        },
      },
      sauce:{
        label:'By sauce', emoji:'🫙',
        children:{
          carbonara:{ label:'Carbonara', emoji:'🥚', keywords:['carbonara'] },
          bolognese:{ label:'Bolognese / Ragù', emoji:'🍖', keywords:['bolognese','ragu','meat sauce'] },
          cacio:{ label:'Cacio e Pepe', emoji:'🧀', keywords:['cacio e pepe','cacio pepe'] },
          amatriciana:{ label:'Amatriciana', emoji:'🟥', keywords:['amatriciana'] },
          aglio:{ label:'Aglio e Olio', emoji:'🧄', keywords:['aglio','aglio e olio','garlic oil'] },
          pesto:{ label:'Pesto', emoji:'🌿', keywords:['pesto pasta','basil pesto'] },
          cream:{ label:'Cream / Alfredo', emoji:'🤍', keywords:['cream sauce','alfredo','cream pasta'] },
          seafood:{ label:'Seafood Pasta', emoji:'🦞', keywords:['seafood pasta','vongole','alle vongole','frutti di mare'] },
        },
      },
    },
  },

  pho: {
    label:'Phở', emoji:'🍲',
    keywords:['pho','vietnamese','pho bo','noodle soup'],
    children:{
      protein:{
        label:'By protein', emoji:'🥩',
        children:{
          pho_bo:{ label:'Phở Bò (Beef)', emoji:'🐄', keywords:['pho bo','beef pho','brisket pho'], children:{
            tai:{ label:'Phở Tái (Rare Beef)', emoji:'🥩', keywords:['pho tai','rare beef pho','rare sliced'] },
            chin:{ label:'Phở Chín (Well Done)', emoji:'🍖', keywords:['pho chin','well done beef'] },
            gau:{ label:'Phở Gầu (Brisket)', emoji:'🐄', keywords:['pho gau','brisket pho'] },
            special:{ label:'Phở Đặc Biệt (Special)', emoji:'⭐', keywords:['pho dac biet','special pho','everything pho'] },
          }},
          pho_ga:{ label:'Phở Gà (Chicken)', emoji:'🐔', keywords:['pho ga','chicken pho'] },
          pho_hai_san:{ label:'Phở Hải Sản (Seafood)', emoji:'🦐', keywords:['pho hai san','seafood pho'] },
          pho_chay:{ label:'Phở Chay (Vegan)', emoji:'🌿', keywords:['pho chay','vegan pho','vegetarian pho'] },
        },
      },
      broth:{
        label:'By broth', emoji:'🫕',
        children:{
          traditional:{ label:'Traditional Clear Broth', emoji:'🫙', keywords:['traditional pho','clear broth pho'] },
          spicy:{ label:'Spicy Broth', emoji:'🌶️', keywords:['spicy pho','spicy broth'] },
          bone_broth:{ label:'Bone Broth Style', emoji:'🦴', keywords:['bone broth pho','rich broth'] },
        },
      },
    },
  },

  dim_sum: {
    label:'Dim Sum', emoji:'🥟',
    keywords:['dim sum','yum cha','chinese','cantonese','dumpling'],
    children:{
      category:{
        label:'By category', emoji:'🍱',
        children:{
          dumplings:{ label:'Dumplings & Har Gow', emoji:'🥟', keywords:['har gow','har gao','shrimp dumpling','steamed dumpling'], children:{
            har_gow:{ label:'Har Gow', emoji:'🦐', keywords:['har gow','har gao'] },
            siu_mai:{ label:'Siu Mai', emoji:'🥟', keywords:['siu mai','shumai','pork dumpling'] },
            xiao_long_bao:{ label:'Xiao Long Bao (Soup Dumplings)', emoji:'🫧', keywords:['xiao long bao','xlb','soup dumpling','shanghai dumpling'] },
          }},
          bao:{ label:'Bao & Buns', emoji:'🫓', keywords:['bao','bun','bbq pork bun','char siu bao'], children:{
            char_siu:{ label:'Char Siu Bao (BBQ Pork)', emoji:'🐷', keywords:['char siu bao','bbq pork bun','baked bun'] },
            lo_mai_gai:{ label:'Lo Mai Gai (Sticky Rice)', emoji:'🍚', keywords:['lo mai gai','sticky rice','lotus leaf'] },
          }},
          cheung_fun:{ label:'Cheung Fun (Rice Noodle Rolls)', emoji:'🌀', keywords:['cheung fun','rice noodle roll','rice roll'] },
          turnip_cake:{ label:'Turnip Cake / Lo Bak Go', emoji:'🟨', keywords:['turnip cake','lo bak go','radish cake'] },
          egg_tart:{ label:'Egg Tarts', emoji:'🥚', keywords:['egg tart','dan tat','portuguese tart'] },
          fried:{ label:'Fried Items', emoji:'🍤', keywords:['fried taro','wu gok','spring roll','egg roll'] },
        },
      },
    },
  },

  korean_bbq: {
    label:'Korean BBQ', emoji:'🍖',
    keywords:['korean bbq','kbbq','korean','bbq','grill'],
    children:{
      protein:{
        label:'By protein', emoji:'🥩',
        children:{
          samgyeopsal:{ label:'Samgyeopsal (Pork Belly)', emoji:'🐷', keywords:['samgyeopsal','pork belly','grilled pork'] },
          bulgogi:{ label:'Bulgogi (Marinated Beef)', emoji:'🐄', keywords:['bulgogi','marinated beef','beef bulgogi'] },
          galbi:{ label:'Galbi (Short Ribs)', emoji:'🍖', keywords:['galbi','short rib','flanken','LA galbi'] },
          chadolbaegi:{ label:'Chadolbaegi (Brisket)', emoji:'🥩', keywords:['chadolbaegi','brisket','beef brisket'] },
          dak_galbi:{ label:'Dak Galbi (Spicy Chicken)', emoji:'🐔', keywords:['dak galbi','spicy chicken','stir-fried chicken'] },
          wagyu_kbbq:{ label:'Wagyu / Premium Cuts', emoji:'⭐', keywords:['wagyu kbbq','premium cut','a5 kbbq'] },
        },
      },
      style:{
        label:'By style', emoji:'🔥',
        children:{
          charcoal:{ label:'Charcoal Grilled', emoji:'⚫', keywords:['charcoal grill','charcoal bbq'] },
          tabletop:{ label:'Tabletop Grill', emoji:'🍳', keywords:['tabletop grill','all-you-can-eat','ayce'] },
          ssam:{ label:'Ssam (Lettuce Wraps)', emoji:'🌿', keywords:['ssam','lettuce wrap','bossam'] },
        },
      },
    },
  },

  pad_thai: {
    label:'Pad Thai', emoji:'🍜',
    keywords:['pad thai','thai noodle','thai stir fry','thai'],
    children:{
      protein:{
        label:'By protein', emoji:'🥩',
        children:{
          shrimp_pt:{ label:'Shrimp Pad Thai', emoji:'🦐', keywords:['shrimp pad thai','prawn pad thai'] },
          chicken_pt:{ label:'Chicken Pad Thai', emoji:'🐔', keywords:['chicken pad thai'] },
          tofu_pt:{ label:'Tofu / Vegan Pad Thai', emoji:'🟡', keywords:['tofu pad thai','vegan pad thai','vegetarian pad thai'] },
          combo_pt:{ label:'Combination Pad Thai', emoji:'🍤', keywords:['combo pad thai','mixed pad thai'] },
        },
      },
      style:{
        label:'By style', emoji:'🍜',
        children:{
          street_pt:{ label:'Street Style', emoji:'🛒', keywords:['street pad thai','wok pad thai','authentic pad thai'] },
          royal_pt:{ label:'Royal / Wrapped', emoji:'👑', keywords:['royal pad thai','egg-wrapped','wrapped pad thai'] },
          dry_pt:{ label:'Dry Style', emoji:'🏜️', keywords:['dry pad thai','less sauce'] },
        },
      },
    },
  },
};

// ── TAXONOMY STATE ──
let activeTaxonomyPath = [];   // e.g. ['ramen', 'style', 'tonkotsu']
let activeTaxonomyNode = null; // the current node object

// Given a dish query, find the root taxonomy key
function getTaxonomyRoot(dishQuery) {
  if (!dishQuery) return null;
  const dq = dishQuery.toLowerCase().trim();
  const map = {
    'ramen':dq.includes('ramen'),
    'sushi':dq.includes('sushi'),
    'tacos':dq.includes('taco'),
    'burgers':dq.includes('burger'),
    'pizza':dq.includes('pizza'),
    'pasta':dq.includes('pasta'),
    'pho':dq.includes('pho'),
    'dim_sum':dq.includes('dim sum')||dq.includes('dimsum'),
    'korean_bbq':dq.includes('korean')||dq.includes('kbbq'),
    'pad_thai':dq.includes('pad thai')||dq.includes('padthai'),
  };
  return Object.entries(map).find(([k,v])=>v)?.[0] || null;
}

// Get node at a given path
function getTaxonomyNode(path) {
  if (!path || !path.length) return null;
  let node = DISH_TAXONOMY[path[0]];
  for (let i = 1; i < path.length; i++) {
    if (!node || !node.children) return null;
    node = node.children[path[i]];
  }
  return node;
}

// Get all keyword strings for a node and its descendants
function getTaxonomyKeywords(node) {
  if (!node) return [];
  const kws = [...(node.keywords || [])];
  if (node.children) {
    Object.values(node.children).forEach(child => {
      kws.push(...getTaxonomyKeywords(child));
    });
  }
  return [...new Set(kws)];
}

// ═══════════════════════════════════════════════
//  REVIEW SUBCATEGORY PICKER
// ═══════════════════════════════════════════════

// State for the review form's subcategory picker
let reviewSubcatPath = [];       // path within taxonomy tree
let reviewSubcatLabel = '';      // final selected label (e.g. "Tonkotsu → Shio Tonkotsu")
let reviewSubcatCustom = '';     // user-typed custom subcategory

// User-contributed subcategories — grows organically as reviews are submitted
// Stored in memory; would persist to a backend in production
const userSubcategories = {};    // { 'ramen': [{label:'Dan Dan Noodles', emoji:'🌶️', keywords:['dan dan']}], ... }

// Get all subcategory chips for the picker at a given path
function getSubcatChildren(dishQuery, path) {
  const rootKey = getTaxonomyRoot(dishQuery);
  if (!rootKey) return [];

  const fullPath = path.length ? path : [rootKey];
  const node = getTaxonomyNode(fullPath);
  if (!node) return [];

  const built = node.children
    ? Object.entries(node.children).map(([key, n]) => ({
        key, label: n.label, emoji: n.emoji || '',
        hasChildren: !!(n.children && Object.keys(n.children).length),
        path: [...fullPath, key],
        isUser: false,
      }))
    : [];

  // Append any user-contributed ones at this level
  const userKey = fullPath.join('/');
  const userOnes = (userSubcategories[userKey] || []).map(u => ({
    key: 'user_' + u.label.toLowerCase().replace(/\s+/g,'_'),
    label: u.label, emoji: u.emoji || '🏷️',
    hasChildren: false,
    path: [...fullPath, 'user_' + u.label.toLowerCase().replace(/\s+/g,'_')],
    isUser: true,
  }));

  return [...built, ...userOnes];
}

// Render the subcategory picker HTML (injected into review form)
function renderSubcatPicker(dishQuery) {
  const rootKey = getTaxonomyRoot(dishQuery);
  if (!rootKey) return ''; // no taxonomy for this dish

  const currentPath = reviewSubcatPath.length ? reviewSubcatPath : [rootKey];
  const children = getSubcatChildren(dishQuery, currentPath);
  const currentNode = getTaxonomyNode(currentPath);
  const dishLabel = DISH_TAXONOMY[rootKey]?.label || dishQuery;

  // Breadcrumb
  let breadcrumb = `<span class="subcat-breadcrumb-item" data-sc-reset="1">${dishLabel}</span>`;
  for (let i = 1; i < currentPath.length; i++) {
    const n = getTaxonomyNode(currentPath.slice(0, i + 1));
    breadcrumb += `<span style="color:var(--border);margin:0 2px">›</span>`;
    breadcrumb += `<span class="subcat-breadcrumb-item" data-sc-path='${JSON.stringify(currentPath.slice(0, i+1))}'>${n?.label || ''}</span>`;
  }

  // If something is already selected, show it
  if (reviewSubcatLabel) {
    return `<div class="subcat-wrap" id="subcatWrap">
      <div class="subcat-label">Dish subcategory <span>optional</span></div>
      <div class="subcat-selected-display">
        <span>🏷️ ${reviewSubcatLabel}</span>
        <span class="clear" onclick="clearSubcat('${dishQuery}')">✕ Change</span>
      </div>
    </div>`;
  }

  if (!children.length) {
    // Leaf node — show custom input only
    return `<div class="subcat-wrap" id="subcatWrap">
      <div class="subcat-label">Dish subcategory <span>optional</span></div>
      <div class="subcat-breadcrumb">${breadcrumb}</div>
      <div class="subcat-custom-row">
        <input class="subcat-custom-input" id="subcatCustomInput" placeholder="e.g. Spicy Shio, Truffle Tonkotsu…" oninput="reviewSubcatCustom=this.value"/>
        <button class="subcat-custom-btn" onclick="confirmCustomSubcat('${dishQuery}')">Add</button>
      </div>
    </div>`;
  }

  const chips = children.map(ch => `
    <div class="subcat-chip${ch.hasChildren?' has-children':''}" 
         onclick="selectSubcatChip('${dishQuery}', ${JSON.stringify(ch.path)}, '${ch.label}', ${ch.hasChildren})">
      ${ch.emoji} ${ch.label}
    </div>`).join('');

  return `<div class="subcat-wrap" id="subcatWrap">
    <div class="subcat-label">Dish subcategory <span>optional</span></div>
    <div class="subcat-breadcrumb">${breadcrumb}</div>
    <div class="subcat-chips">${chips}</div>
    <div class="subcat-custom-row">
      <input class="subcat-custom-input" id="subcatCustomInput" placeholder="Add a new subcategory…" oninput="reviewSubcatCustom=this.value" onkeydown="if(event.key==='Enter')confirmCustomSubcat('${dishQuery}')"/>
      <button class="subcat-custom-btn" onclick="confirmCustomSubcat('${dishQuery}')">Add</button>
    </div>
  </div>`;
}

function selectSubcatChip(dishQuery, path, label, hasChildren) {
  if (hasChildren) {
    // Drill deeper — re-render picker at new path
    reviewSubcatPath = path;
    const wrap = document.getElementById('subcatWrap');
    if (wrap) wrap.outerHTML = renderSubcatPicker(dishQuery);
    // Re-attach since we replaced outerHTML
    const newWrap = document.getElementById('subcatWrap');
    if (newWrap) newWrap.outerHTML = renderSubcatPicker(dishQuery);
    refreshSubcatPicker(dishQuery);
  } else {
    // Leaf — select it
    const fullLabel = buildSubcatLabel(path);
    reviewSubcatLabel = fullLabel;
    reviewSubcatPath = path;
    refreshSubcatPicker(dishQuery);
  }
}

function buildSubcatLabel(path) {
  // Build a human-readable label like "By style › Tonkotsu › Shio Tonkotsu"
  const parts = [];
  for (let i = 1; i < path.length; i++) {
    const n = getTaxonomyNode(path.slice(0, i + 1));
    if (n) parts.push(n.label);
  }
  return parts.join(' › ');
}

function confirmCustomSubcat(dishQuery) {
  const input = document.getElementById('subcatCustomInput');
  const val = (input ? input.value : reviewSubcatCustom).trim();
  if (!val) { showToast('Please type a subcategory name'); return; }

  // Add to user subcategories at current level
  const levelKey = (reviewSubcatPath.length ? reviewSubcatPath : [getTaxonomyRoot(dishQuery)]).join('/');
  if (!userSubcategories[levelKey]) userSubcategories[levelKey] = [];
  if (!userSubcategories[levelKey].find(u => u.label.toLowerCase() === val.toLowerCase())) {
    userSubcategories[levelKey].push({ label: val, emoji: '🏷️', keywords: [val.toLowerCase()] });
  }

  // Set as selected
  const pathLabel = reviewSubcatPath.length > 1 ? buildSubcatLabel(reviewSubcatPath) + ' › ' + val : val;
  reviewSubcatLabel = pathLabel;
  reviewSubcatCustom = '';
  refreshSubcatPicker(dishQuery);

  // Also grow the taxonomy for future searchers
  growTaxonomy(dishQuery, val, reviewSubcatPath);
}

function clearSubcat(dishQuery) {
  reviewSubcatLabel = '';
  reviewSubcatPath = [];
  reviewSubcatCustom = '';
  refreshSubcatPicker(dishQuery);
}

function refreshSubcatPicker(dishQuery) {
  const existing = document.getElementById('subcatWrap');
  if (!existing) return;
  const temp = document.createElement('div');
  temp.innerHTML = renderSubcatPicker(dishQuery);
  existing.replaceWith(temp.firstChild);
}

// Grow the taxonomy tree with a new user-contributed node
function growTaxonomy(dishQuery, label, parentPath) {
  const rootKey = getTaxonomyRoot(dishQuery);
  if (!rootKey) return;

  // Navigate to parent
  let parentNode = getTaxonomyNode(parentPath.length ? parentPath : [rootKey]);
  if (!parentNode) return;

  // Add to children if not already present
  const newKey = 'user_' + label.toLowerCase().replace(/[^a-z0-9]+/g, '_');
  if (!parentNode.children) parentNode.children = {};
  if (!parentNode.children[newKey]) {
    parentNode.children[newKey] = {
      label,
      emoji: '🏷️',
      keywords: [label.toLowerCase()],
      isUserAdded: true,
    };
    // Re-render taxonomy bar if currently showing this dish
    if (getTaxonomyRoot(lastDishQuery) === rootKey) {
      renderTaxonomy(lastDishQuery);
    }
  }
}

// Called when dish name input changes — show/hide subcat picker
function onDishNameChange(val, dishQuery) {
  // dishQuery is what was searched; val is what user typed in the review form
  const effectiveQuery = val || dishQuery || '';
  const rootKey = getTaxonomyRoot(effectiveQuery);
  const wrap = document.getElementById('subcatWrap');
  if (!wrap) return;

  if (rootKey) {
    // Reset path if dish changed
    const existingRoot = reviewSubcatPath[0];
    if (existingRoot !== rootKey) {
      reviewSubcatPath = [];
      reviewSubcatLabel = '';
    }
    const temp = document.createElement('div');
    temp.innerHTML = renderSubcatPicker(effectiveQuery);
    if (temp.firstChild) wrap.replaceWith(temp.firstChild);
  } else {
    wrap.style.display = 'none';
  }
}

// Render the taxonomy bar
function renderTaxonomy(dishQuery) {
  const wrap = document.getElementById('taxonomyWrap');
  const trailEl = document.getElementById('taxonomyTrail');
  const nodesEl = document.getElementById('taxonomyNodes');
  if (!wrap) return;

  const rootKey = getTaxonomyRoot(dishQuery);
  if (!rootKey) { wrap.style.display = 'none'; return; }

  // If path doesn't start with this root, reset to root
  if (activeTaxonomyPath[0] !== rootKey) {
    activeTaxonomyPath = [rootKey];
  }

  const currentNode = getTaxonomyNode(activeTaxonomyPath);
  if (!currentNode) { wrap.style.display = 'none'; return; }

  wrap.style.display = '';

  // ── Breadcrumb trail ──
  let trailHtml = `<span class="taxonomy-trail-item" onclick="selectTaxonomyPath([])">All ${currentNode.label || dishQuery}</span>`;
  for (let i = 0; i < activeTaxonomyPath.length; i++) {
    const node = getTaxonomyNode(activeTaxonomyPath.slice(0, i + 1));
    if (i === 0) continue; // root is shown as "All X"
    trailHtml += `<span class="taxonomy-trail-sep">›</span>`;
    trailHtml += `<span class="taxonomy-trail-item" onclick="selectTaxonomyPath(${JSON.stringify(activeTaxonomyPath.slice(0, i+1))})">${node?.label || ''}</span>`;
  }
  trailEl.innerHTML = trailHtml;

  // ── Child nodes ──
  if (!currentNode.children) {
    nodesEl.innerHTML = '';
    return;
  }

  const childEntries = Object.entries(currentNode.children);
  nodesEl.innerHTML = childEntries.map(([key, node]) => {
    const path = [...activeTaxonomyPath, key];
    const hasChildren = node.children && Object.keys(node.children).length > 0;
    return `<div class="tax-node${hasChildren?' ':'  leaf'}" onclick="selectTaxonomyPath(${JSON.stringify(path)})">
      <span>${node.emoji || ''}</span>
      <span>${node.label}</span>
      ${hasChildren ? '<span class="tax-arrow">›</span>' : ''}
    </div>`;
  }).join('');
}

// Called when user taps a taxonomy node
function selectTaxonomyPath(path) {
  if (!path || !path.length) {
    // Reset to root
    const rootKey = getTaxonomyRoot(lastDishQuery);
    activeTaxonomyPath = rootKey ? [rootKey] : [];
  } else {
    activeTaxonomyPath = path;
  }
  activeTaxonomyNode = getTaxonomyNode(activeTaxonomyPath);
  renderTaxonomy(lastDishQuery);
  renderResults(); // re-filter results with taxonomy
}

// Filter a restaurant list by current taxonomy node keywords
function filterByTaxonomy(list) {
  if (!activeTaxonomyPath || activeTaxonomyPath.length <= 1) return list; // root = no filter
  const node = getTaxonomyNode(activeTaxonomyPath);
  if (!node) return list;
  const kws = getTaxonomyKeywords(node);
  if (!kws.length) return list;

  return list.filter(r => {
    // Check restaurant name and cuisine
    const text = (r.name + ' ' + r.cuisine + ' ' + (r.dishName||'')).toLowerCase();
    if (kws.some(kw => text.includes(kw.toLowerCase()))) return true;
    // Check dish reviews — including user-set dishSubcat which grows organically
    const reviews = localReviews[r.id] || [];
    return reviews.some(rev => {
      const reviewText = [rev.dishName||'', rev.text||'', rev.dishSubcat||''].join(' ').toLowerCase();
      return kws.some(kw => reviewText.includes(kw.toLowerCase()));
    });
  });
}

// ═══════════════════════════════════════════════
//  ADMIN & FEEDBACK SYSTEM
// ═══════════════════════════════════════════════

let isAdmin = false;
let currentAdminTab = 'feedback';
let fbStarRating = 0;

// Check admin status when user signs in
async function checkAdminStatus(email) {
  if (!email || !window._fsGetDoc) return false;
  try {
    const snap = await window._fsGetDoc('admins', email);
    isAdmin = snap.exists();
    return isAdmin;
  } catch(e) {
    isAdmin = false;
    return false;
  }
}

// ── FEEDBACK ──
function openFeedback() {
  fbStarRating = 0;
  document.getElementById('fbText').value = '';
  document.querySelectorAll('#fbStars .s').forEach(s => s.classList.remove('lit'));
  document.getElementById('feedbackOverlay').classList.add('open');
}

function setFbStar(n) {
  fbStarRating = n;
  document.querySelectorAll('#fbStars .s').forEach((s,i) => s.classList.toggle('lit', i < n));
}

async function submitFeedback() {
  const text = document.getElementById('fbText')?.value?.trim();
  const category = document.getElementById('fbCategory')?.value;
  if (!text) { showToast('Please write your feedback'); return; }
  if (!window._fsAdd) { showToast('Not connected to database'); return; }

  try {
    await window._fsAdd('feedback', {
      text,
      category,
      rating: fbStarRating || null,
      userEmail: currentUser?.email || 'anonymous',
      userName: currentUser?.name || 'Anonymous',
      uid: currentUser?.uid || null,
      page: lastDishQuery || document.querySelector('.view.active')?.id || 'home',
    });
    document.getElementById('feedbackOverlay').classList.remove('open');
    showToast('💬 Thanks for your feedback!');
  } catch(e) {
    showToast('Could not submit feedback: ' + e.message);
  }
}

// ── FLAG REVIEW ──
async function flagReview(restaurantId, dishName, reviewText, userEmail) {
  if (!currentUser) { showToast('Sign in to flag reviews'); return; }
  if (!window._fsAdd) return;
  try {
    await window._fsAdd('flagged', {
      restaurantId,
      dishName,
      reviewText: reviewText.substring(0, 300),
      reviewAuthor: userEmail,
      flaggedBy: currentUser.email,
      reason: 'User flagged as inappropriate',
    });
    showToast('🚩 Review flagged for review');
  } catch(e) {
    showToast('Could not flag review');
  }
}

// ── ADMIN DASHBOARD ──
function openAdmin() {
  if (!isAdmin) { showToast('Admin access required'); return; }
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nitem').forEach(b => b.classList.remove('active'));
  document.getElementById('adminView').classList.add('active');
  loadAdminTab('feedback');
}

async function loadAdminTab(tab, btn) {
  if (!isAdmin) return;
  currentAdminTab = tab;
  document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');
  else {
    const tabBtn = document.querySelector(`.admin-tab[data-tab="${tab}"]`);
    if (tabBtn) tabBtn.classList.add('active');
  }

  const body = document.getElementById('adminBody');
  body.innerHTML = '<div class="admin-empty">Loading…</div>';

  try {
    if (tab === 'feedback') await renderAdminFeedback(body);
    else if (tab === 'flagged') await renderAdminFlagged(body);
    else if (tab === 'reviews') renderAdminReviews(body);
    else if (tab === 'analytics') renderAdminAnalytics(body);
    else if (tab === 'users') await renderAdminUsers(body);
  } catch(e) {
    body.innerHTML = `<div class="admin-empty">Error: ${e.message}</div>`;
  }
}

// ── FEEDBACK TAB ──
async function renderAdminFeedback(body) {
  const snap = await window._fsQuery('feedback', 'ts', 'desc', 50);
  const items = [];
  snap.forEach(d => items.push({id: d.id, ...d.data()}));

  // Update badge
  const badge = document.getElementById('feedbackBadge');
  if (badge) { badge.textContent = items.length; badge.style.display = items.length ? '' : 'none'; }

  if (!items.length) { body.innerHTML = '<div class="admin-empty">No feedback yet 🎉</div>'; return; }

  const catEmoji = {bug:'🐛', feature:'💡', content:'📝', other:'💬'};
  body.innerHTML = items.map(item => `
    <div class="admin-card">
      <div class="admin-card-top">
        <span class="admin-cat-badge">${catEmoji[item.category]||'💬'} ${item.category||'general'}</span>
        ${item.rating ? `<span class="admin-rating-badge">${'★'.repeat(item.rating)} ${item.rating}/5</span>` : ''}
      </div>
      <div class="admin-card-meta">${item.userName||'Anonymous'} · ${item.userEmail||''} · ${item.ts?.toDate?.()?.toLocaleDateString()||'just now'}</div>
      <div class="admin-card-text">${escHtml(item.text||'')}</div>
      <div class="admin-card-actions">
        <button class="admin-action-btn" onclick="deleteAdminItem('feedback','${item.id}',this.closest('.admin-card'))">🗑 Delete</button>
      </div>
    </div>`).join('');
}

// ── FLAGGED TAB ──
async function renderAdminFlagged(body) {
  const snap = await window._fsQuery('flagged', 'ts', 'desc', 50);
  const items = [];
  snap.forEach(d => items.push({id: d.id, ...d.data()}));

  const badge = document.getElementById('flaggedBadge');
  if (badge) { badge.textContent = items.length; badge.style.display = items.length ? '' : 'none'; }

  if (!items.length) { body.innerHTML = '<div class="admin-empty">No flagged reviews 🎉</div>'; return; }

  body.innerHTML = items.map(item => `
    <div class="admin-card">
      <div class="admin-card-top">
        <span class="admin-cat-badge">🚩 ${escHtml(item.dishName||'Unknown dish')}</span>
      </div>
      <div class="admin-card-meta">Author: ${escHtml(item.reviewAuthor||'?')} · Flagged by: ${escHtml(item.flaggedBy||'?')} · ${item.ts?.toDate?.()?.toLocaleDateString()||'just now'}</div>
      <div class="admin-card-text">"${escHtml(item.reviewText||'')}"</div>
      <div class="admin-card-actions">
        <button class="admin-action-btn approve" onclick="deleteAdminItem('flagged','${item.id}',this.closest('.admin-card'))">✓ Dismiss flag</button>
        <button class="admin-action-btn" onclick="removeReviewAndFlag('${item.id}','${item.restaurantId}','${escHtml(item.reviewAuthor||'')}',this.closest('.admin-card'))">🗑 Remove review</button>
      </div>
    </div>`).join('');
}

// ── REVIEWS TAB ──
async function renderAdminReviews(body) {
  body.innerHTML = '<div class="admin-empty">Loading reviews…</div>';

  // Fetch from Firestore
  let fsRevs = [];
  try {
    if(window._fsFetchAllReviews) {
      const snap = await window._fsFetchAllReviews(100);
      snap.forEach(d => fsRevs.push({firestoreId: d.id, ...d.data()}));
    }
  } catch(e) {}

  // Also include non-seeded local reviews not yet in Firestore
  const localOnly = [];
  for (const [rid, revs] of Object.entries(localReviews)) {
    revs.filter(r => !r.seeded && !r.firestoreId)
      .forEach(r => localOnly.push({...r, restId: rid}));
  }

  const allRevs = [
    ...fsRevs.map(r => ({...r, restId: r.restaurantId, isFirestore: true})),
    ...localOnly,
  ];

  if (!allRevs.length) {
    body.innerHTML = '<div class="admin-empty">No user reviews yet</div>';
    return;
  }

  body.innerHTML = `<div class="admin-section-title">${allRevs.length} user review${allRevs.length!==1?'s':''}</div>` +
    allRevs.map(r => `
    <div class="admin-card">
      <div class="admin-card-top">
        <span style="font-weight:600;font-size:.88rem">${escHtml(r.dishName||'Dish')}</span>
        <span class="admin-rating-badge">${'★'.repeat(r.rating||0)} ${r.rating||0}/5</span>
      </div>
      <div class="admin-card-meta">
        ${escHtml(r.user||r.userName||'?')} · ${escHtml(r.userEmail||'')} · ${r.date||''} · 
        <em>${escHtml(r.restaurantName||restaurantById.get(r.restId)?.name||r.restId||'')}</em>
      </div>
      <div class="admin-card-text">${escHtml(r.text||'')}</div>
      <div class="admin-card-actions">
        ${r.firestoreId
          ? `<button class="admin-action-btn" onclick="adminDeleteFsReview('${r.firestoreId}','${r.restId||''}',this.closest('.admin-card'))">🗑 Remove</button>`
          : `<button class="admin-action-btn" onclick="adminDeleteLocalReview('${r.restId}','${escHtml(r.user||'')}','${escHtml(r.dishName||'')}',this.closest('.admin-card'))">🗑 Remove</button>`
        }
      </div>
    </div>`).join('');
}

async function adminDeleteFsReview(firestoreId, restaurantId, el) {
  try {
    if(window._fsDeleteReview) await window._fsDeleteReview(firestoreId);
    // Also remove from local cache
    if(restaurantId && localReviews[restaurantId]) {
      localReviews[restaurantId] = localReviews[restaurantId].filter(r => r.firestoreId !== firestoreId);
    }
    if(el) el.remove();
    restaurantCache.clear();
    showToast('Review deleted');
  } catch(e) { showToast('Error: ' + e.message); }
}

// ── ANALYTICS TAB ──
function renderAdminAnalytics(body) {
  // Count reviews per city
  const cityCount = {};
  const dishCount = {};
  const dishRatings = {};
  let totalReviews = 0;

  for (const [rid, revs] of Object.entries(localReviews)) {
    const r = restaurantById.get(rid);
    totalReviews += revs.length;

    revs.forEach(rev => {
      // dish count
      const dish = (rev.dishName||'').toLowerCase().trim();
      if (dish) {
        dishCount[dish] = (dishCount[dish]||0)+1;
        if (!dishRatings[dish]) dishRatings[dish] = [];
        dishRatings[dish].push(rev.rating||0);
      }

      // city count
      if (r) {
        let bestCity = null, bestDist = Infinity;
        Object.entries(CITIES).forEach(([k,v]) => {
          const d = haversine(r.lat, r.lng, v.lat, v.lng);
          if (d < bestDist && d < 50) { bestDist=d; bestCity=k; }
        });
        if (bestCity) cityCount[bestCity] = (cityCount[bestCity]||0)+1;
      }
    });
  }

  const topCities = Object.entries(cityCount).sort((a,b)=>b[1]-a[1]).slice(0,6);
  const topDishes = Object.entries(dishCount).sort((a,b)=>b[1]-a[1]).slice(0,8)
    .map(([dish,cnt]) => {
      const avg = dishRatings[dish] ? (dishRatings[dish].reduce((s,v)=>s+v,0)/dishRatings[dish].length).toFixed(1) : '—';
      return {dish, cnt, avg};
    });

  const users = new Set();
  for (const revs of Object.values(localReviews)) revs.forEach(r => r.user && users.add(r.user));

  body.innerHTML = `
    <div class="admin-stat-grid">
      <div class="admin-stat"><div class="admin-stat-val">${totalReviews}</div><div class="admin-stat-lbl">Total Reviews</div></div>
      <div class="admin-stat"><div class="admin-stat-val">${Object.keys(localReviews).length}</div><div class="admin-stat-lbl">Restaurants Rated</div></div>
      <div class="admin-stat"><div class="admin-stat-val">${users.size}</div><div class="admin-stat-lbl">Reviewers</div></div>
      <div class="admin-stat"><div class="admin-stat-val">${Object.keys(dishCount).length}</div><div class="admin-stat-lbl">Unique Dishes</div></div>
    </div>
    <div class="admin-section-title">🏙️ Top Cities by Review Activity</div>
    ${topCities.length ? topCities.map(([k,cnt]) => {
      const city = CITIES[k];
      return `<div class="admin-user-row"><span>${city?.emoji||'🌆'} ${city?.name?.split(',')[0]||k}</span><span class="admin-user-role">${cnt} reviews</span></div>`;
    }).join('') : '<div class="admin-empty" style="padding:10px">No city data yet</div>'}
    <div class="admin-section-title" style="margin-top:16px">🍽️ Top Dishes</div>
    ${topDishes.length ? topDishes.map(({dish,cnt,avg}) =>
      `<div class="admin-user-row"><span style="text-transform:capitalize">${escHtml(dish)}</span><span style="display:flex;gap:8px"><span class="admin-user-role">${cnt} reviews</span><span class="admin-rating-badge">★ ${avg}</span></span></div>`
    ).join('') : '<div class="admin-empty" style="padding:10px">No dish data yet</div>'}`;
}

// ── ADMIN USERS TAB ──
async function renderAdminUsers(body) {
  const snap = await window._fsGet('admins');
  const admins = [];
  snap.forEach(d => admins.push({email: d.id, ...d.data()}));

  body.innerHTML = `
    <div class="admin-section-title">Admin Allowlist</div>
    <div class="admin-input-row">
      <input class="admin-input" id="newAdminEmail" placeholder="email@example.com" type="email"/>
      <button class="admin-add-btn" onclick="addAdmin()">+ Add</button>
    </div>
    ${admins.map(a => `
      <div class="admin-user-row">
        <div><div class="admin-user-email">${escHtml(a.email)}</div></div>
        <div style="display:flex;align-items:center;gap:8px">
          <span class="admin-user-role">${a.role||'admin'}</span>
          ${a.email !== currentUser?.email
            ? `<button class="admin-action-btn" onclick="removeAdmin('${escHtml(a.email)}',this.closest('.admin-user-row'))">Remove</button>`
            : '<span style="font-size:.72rem;color:var(--muted)">(you)</span>'}
        </div>
      </div>`).join('')}`;
}

async function addAdmin() {
  const email = document.getElementById('newAdminEmail')?.value?.trim().toLowerCase();
  if (!email || !email.includes('@')) { showToast('Enter a valid email'); return; }
  try {
    await window._fsSet('admins', email, { role: 'admin', addedBy: currentUser?.email, addedAt: new Date().toISOString() });
    showToast('✅ Admin added: ' + email);
    document.getElementById('newAdminEmail').value = '';
    await loadAdminTab('users');
  } catch(e) { showToast('Error: ' + e.message); }
}

async function removeAdmin(email, el) {
  if (!confirm(`Remove admin access for ${email}?`)) return;
  try {
    await window._fsDel('admins', email);
    if (el) el.remove();
    showToast('Removed: ' + email);
  } catch(e) { showToast('Error: ' + e.message); }
}

async function deleteAdminItem(collection, id, el) {
  try {
    await window._fsDel(collection, id);
    if (el) el.remove();
    showToast('Deleted');
  } catch(e) { showToast('Error: ' + e.message); }
}

function adminDeleteLocalReview(restId, userName, dishName, el) {
  if (!localReviews[restId]) return;
  localReviews[restId] = localReviews[restId].filter(r =>
    !(r.user === userName && r.dishName === dishName)
  );
  if (el) el.remove();
  showToast('Review removed');
  restaurantCache.clear();
}

async function removeReviewAndFlag(flagId, restId, reviewAuthor, el) {
  // Remove from flagged collection
  try { await window._fsDel('flagged', flagId); } catch(e) {}
  // Remove from local reviews
  if (restId && localReviews[restId]) {
    localReviews[restId] = localReviews[restId].filter(r => r.user !== reviewAuthor);
    restaurantCache.clear();
  }
  if (el) el.remove();
  showToast('Review removed and flag resolved');
}

function escHtml(s) {
  return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ═══════════════════════════════════════════════
//  SAVED LIST ("Want to Try")
// ═══════════════════════════════════════════════

function loadSavedList() {
  try {
    const uid = currentUser?.uid || 'guest';
    const raw = localStorage.getItem('br_saved_' + uid);
    savedList = new Set(raw ? JSON.parse(raw) : []);
  } catch(e) { savedList = new Set(); }
}

function saveSavedList() {
  try {
    const uid = currentUser?.uid || 'guest';
    localStorage.setItem('br_saved_' + uid, JSON.stringify([...savedList]));
  } catch(e) {}
}

function toggleSave(restaurantId) {
  if (savedList.has(restaurantId)) {
    savedList.delete(restaurantId);
    showToast('Removed from saved');
  } else {
    savedList.add(restaurantId);
    showToast('🔖 Saved!');
  }
  saveSavedList();
  // Re-render any visible cards so bookmark icon updates
  if (currentResults) renderResults();
}

function renderSavedView() {
  const el = document.getElementById('savedContent');
  if (!el) return;
  if (savedList.size === 0) {
    el.innerHTML = '<div class="empty"><div class="ei">🔖</div><p>No saved restaurants yet.<br>Tap the 🔖 on any card to save it.</p></div>';
    return;
  }
  const saved = [...savedList].map(id => restaurantById.get(id)).filter(Boolean);
  if (!saved.length) {
    el.innerHTML = '<div class="empty"><div class="ei">🔖</div><p>Your saved restaurants will appear here.</p></div>';
    return;
  }
  el.innerHTML = `<div style="padding:14px 14px 4px;font-size:.8rem;color:var(--muted)">${saved.length} saved restaurant${saved.length!==1?'s':''}</div>` +
    saved.map(renderCard).join('');
}

// ═══════════════════════════════════════════════
//  NEAR ME NOW
// ═══════════════════════════════════════════════

function nearMeNow() {
  if (!navigator.geolocation) { showToast('GPS not available on this device'); return; }
  showToast('🎯 Getting your location…');
  navigator.geolocation.getCurrentPosition(
    pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      // Find nearest city
      let bestKey = null, bestDist = Infinity;
      Object.entries(CITIES).forEach(([k,v]) => {
        const d = haversine(lat, lng, v.lat, v.lng);
        if (d < bestDist) { bestDist = d; bestKey = k; }
      });
      const label = bestDist < 40
        ? `Near ${CITIES[bestKey].name.split(',')[0]}`
        : `${lat.toFixed(2)}°, ${lng.toFixed(2)}°`;
      applyLocation({ lat, lng, label, cityKey: bestDist < 40 ? bestKey : null });
      // Search for top-rated dishes nearby with tight radius
      setRadius(1, document.querySelector('.rbtn'));
      performSearch('', '', true);
      showToast(`🎯 Top-rated dishes within 1 mi — no vibes required`);
    },
    () => showToast('Could not get location — please enable GPS')
  );
}

// ═══════════════════════════════════════════════
//  TRENDING THIS WEEK
// ═══════════════════════════════════════════════

function computeTrending() {
  // Count reviews added in the last 7 days
  const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
  const counts = {};
  for (const [rid, revs] of Object.entries(localReviews)) {
    const recentCount = revs.filter(rv => {
      if (rv.seeded) return false;
      // Check ts if available, otherwise treat "Just now" as recent
      if (rv.ts?.toDate) return rv.ts.toDate().getTime() > weekAgo;
      return rv.date === 'Just now';
    }).length;
    if (recentCount > 0) counts[rid] = recentCount;
  }
  return Object.entries(counts).sort((a,b) => b[1]-a[1]).slice(0,8);
}

function renderTrendingStrip() {
  const trending = computeTrending();
  const strip = document.getElementById('trendingStrip');
  const chips = document.getElementById('trendingChips');
  if (!strip || !chips) return;

  if (!trending.length) {
    strip.style.display = 'none';
    return;
  }

  strip.style.display = '';
  chips.innerHTML = trending.map(([rid, count]) => {
    const r = restaurantById.get(rid);
    if (!r) return '';
    const topDish = (localReviews[rid]||[]).filter(rv=>!rv.seeded).sort((a,b)=>b.rating-a.rating)[0];
    return `<span class="tag" onclick="openDish('${rid}')" style="display:flex;align-items:center;gap:5px">
      ${r.emoji} <span>${topDish?.dishName || r.name}</span>
      <span style="background:rgba(232,133,74,.2);color:var(--accent);border-radius:8px;padding:1px 6px;font-size:.65rem">🔥${count}</span>
    </span>`;
  }).filter(Boolean).join('');
}

// ═══════════════════════════════════════════════
//  GITHUB AUTO-DEPLOY INSTRUCTIONS (one-time setup)
// ═══════════════════════════════════════════════
// No code needed — handled via Cloudflare Pages + GitHub integration

// ═══════════════════════════════════════════════
//  HASH ROUTING — shareable URLs
// ═══════════════════════════════════════════════
// Formats:
//   #/search/ramen           → search for ramen
//   #/search/ramen/seattle   → search ramen in Seattle
//   #/city/seattle           → open Seattle city page
//   #/restaurant/gpl_xxx     → open restaurant detail

function getShareableUrl() {
  const base = window.location.origin + window.location.pathname;
  if (lastDishQuery) {
    const city = userLoc?.cityKey || '';
    return city ? `${base}#/search/${encodeURIComponent(lastDishQuery)}/${city}` : `${base}#/search/${encodeURIComponent(lastDishQuery)}`;
  }
  return base;
}

function pushHashState(type, ...parts) {
  const hash = '#/' + type + (parts.length ? '/' + parts.map(encodeURIComponent).join('/') : '');
  if (window.location.hash !== hash) {
    window.history.pushState(null, '', hash);
  }
}

function handleHashRoute() {
  const hash = window.location.hash;
  if (!hash || hash === '#') return;
  const parts = hash.slice(2).split('/').map(decodeURIComponent);
  const type = parts[0];

  if (type === 'search' && parts[1]) {
    const dish = parts[1];
    const city = parts[2];
    if (city && CITIES[city]) {
      const loc = CITIES[city];
      applyLocation({ lat: loc.lat, lng: loc.lng, label: loc.name, cityKey: city });
    }
    setTimeout(() => performSearch(dish, '', true), 300);
  } else if (type === 'city' && parts[1] && CITIES[parts[1]]) {
    setTimeout(() => selectCityTile(parts[1]), 300);
  }
}

// Update hash when searching
// hash push is handled inline in performSearch below

// Handle back/forward browser navigation
window.addEventListener('popstate', handleHashRoute);

// Share button helper
function shareCurrentView() {
  const url = getShareableUrl();
  if (navigator.share) {
    navigator.share({ title: 'BiteRank', text: 'No ambiance rating required.', url });
  } else {
    navigator.clipboard.writeText(url).then(() => showToast('🔗 Link copied!'));
  }
}

// ═══════════════════════════════════════════════
//  NEIGHBORHOOD FILTER
// ═══════════════════════════════════════════════

function renderNeighborhoodBar(cityKey) {
  const bar = document.getElementById('nbhdBar');
  const chips = document.getElementById('nbhdChips');
  if (!bar || !chips) return;

  const nbhds = cityKey ? CITY_NEIGHBORHOODS[cityKey] : null;
  if (!nbhds || !nbhds.length) {
    bar.style.display = 'none';
    return;
  }

  bar.style.display = 'flex';

  // Build chips: "All" reset + one per neighborhood
  const allActive = !activeNeighborhood;
  chips.innerHTML = `<button class="nbhd-btn${allActive?' active':''}" onclick="setNeighborhood(null)">All</button>` +
    nbhds.map(n =>
      `<button class="nbhd-btn${activeNeighborhood?.label===n.label?' active':''}"
        onclick="setNeighborhood(${JSON.stringify(n).replace(/"/g,'&quot;')})">${n.label}</button>`
    ).join('');
}

function setNeighborhood(nbhd) {
  activeNeighborhood = nbhd;

  // Update chip active states
  document.querySelectorAll('.nbhd-btn').forEach(btn => {
    const isAll = btn.textContent === 'All';
    const isThis = nbhd && btn.textContent === nbhd.label;
    btn.classList.toggle('active', nbhd ? isThis : isAll);
  });

  // Re-run search from new center
  performSearch(lastDishQuery, lastCuisineCat, false);
}

document.getElementById('searchInput').addEventListener('keydown',e=>{if(e.key==='Enter')doSearch();});
// Render city tiles on load
renderCityTiles();
// Load saved list for guest users
loadSavedList();
// Render trending strip
renderTrendingStrip();
// Handle deep link / hash routing
setTimeout(handleHashRoute, 600);
// Location is loaded per-user via initUserLocation() after Firebase auth.
// For signed-out visitors, silently try GPS as a fallback.
if(navigator.geolocation && !currentUser){
  navigator.geolocation.getCurrentPosition(pos=>{
    if(currentUser) return; // user signed in while waiting — let initUserLocation handle it
    const {latitude:lat,longitude:lng}=pos.coords;
    let bestKey=null,bestDist=Infinity;
    Object.entries(CITIES).forEach(([k,v])=>{const d=haversine(lat,lng,v.lat,v.lng);if(d<bestDist){bestDist=d;bestKey=k;}});
    const label=bestDist<40?`Near ${CITIES[bestKey].name.split(',')[0]}`:`${lat.toFixed(2)}°, ${lng.toFixed(2)}°`;
    applyLocation({lat,lng,label,cityKey:bestDist<40?bestKey:null});
  }, ()=>{});
}

// ═══════════════════════════════════════════════
//  FOOD SWIPER - TINDER-STYLE FOOD DECIDER
// ═══════════════════════════════════════════════

const SWIPE_DISHES = [
  { emoji: '🍕', name: 'Pizza', desc: 'Wood-fired, thin crust, deep dish...', tags: ['pizza'] },
  { emoji: '🍔', name: 'Burger', desc: 'Juicy patties with all the fixings', tags: ['burger', 'american'] },
  { emoji: '🍜', name: 'Ramen', desc: 'Rich broths and chewy noodles', tags: ['ramen', 'japanese'] },
  { emoji: '🍣', name: 'Sushi', desc: 'Fresh fish and perfect rice', tags: ['sushi', 'japanese'] },
  { emoji: '🌮', name: 'Tacos', desc: 'Street-style or fancy, always good', tags: ['tacos', 'mexican'] },
  { emoji: '🥐', name: 'Brunch', desc: 'Eggs, pastries, and good coffee', tags: ['breakfast', 'brunch'] },
  { emoji: '🍝', name: 'Pasta', desc: 'Fresh noodles and savory sauces', tags: ['pasta', 'italian'] },
  { emoji: '🍛', name: 'Curry', desc: 'Spiced, saucy, comforting', tags: ['curry', 'indian'] },
  { emoji: '🥗', name: 'Salad', desc: 'Fresh, healthy, satisfying', tags: ['salad', 'healthy'] },
  { emoji: '🍱', name: 'Dim Sum', desc: 'Small plates, big flavors', tags: ['dim sum', 'chinese'] },
  { emoji: '🥩', name: 'Steak', desc: 'Perfectly cooked beef', tags: ['steak'] },
  { emoji: '🍲', name: 'Pho', desc: 'Fragrant Vietnamese noodle soup', tags: ['pho', 'vietnamese'] },
  { emoji: '🍗', name: 'Chicken', desc: 'Fried, roasted, or grilled', tags: ['chicken'] },
  { emoji: '🥡', name: 'Chinese Food', desc: 'Classic takeout favorites', tags: ['chinese'] },
  { emoji: '🥙', name: 'Mediterranean', desc: 'Hummus, falafel, and more', tags: ['mediterranean', 'greek'] },
  { emoji: '🍤', name: 'Seafood', desc: 'Fresh from the ocean', tags: ['seafood', 'fish'] },
  { emoji: '🥞', name: 'Pancakes', desc: 'Fluffy stacks of joy', tags: ['breakfast', 'pancakes'] },
  { emoji: '🍰', name: 'Dessert', desc: 'Sweet treats to finish the meal', tags: ['dessert'] },
  { emoji: '🌯', name: 'Burrito', desc: 'Stuffed and satisfying', tags: ['burrito', 'mexican'] },
  { emoji: '🍛', name: 'Thai Food', desc: 'Bold, spicy, aromatic', tags: ['thai'] },
];

let swipeDeck = [];
let currentSwipeIndex = 0;
let swipeStartX = 0;
let swipeCurrentX = 0;

function startFoodSwipe() {
  // Shuffle deck
  swipeDeck = [...SWIPE_DISHES].sort(() => Math.random() - 0.5);
  currentSwipeIndex = 0;
  
  document.getElementById('swipeOverlay').classList.add('open');
  renderSwipeCard();
}

function renderSwipeCard() {
  const container = document.getElementById('swipeCards');
  const progress = document.getElementById('swipeProgress');
  
  if (currentSwipeIndex >= swipeDeck.length) {
    // Show all options if they swiped through everything
    showAllSwipeOptions();
    return;
  }
  
  const dish = swipeDeck[currentSwipeIndex];
  const remaining = swipeDeck.length - currentSwipeIndex;
  
  container.innerHTML = `
    <div class="swipe-card-main" id="activeSwipeCard" 
         onmousedown="startSwipe(event)" 
         ontouchstart="startSwipe(event)"
         ondragstart="return false">
      <span class="swipe-card-emoji">${dish.emoji}</span>
      <span class="swipe-card-name">${dish.name}</span>
      <span class="swipe-card-desc">${dish.desc}</span>
      <span class="swipe-card-count">${remaining} more options</span>
    </div>
  `;
  
  progress.textContent = `Option ${currentSwipeIndex + 1} of ${swipeDeck.length}`;
  
  // Add swipe event listeners
  const card = document.getElementById('activeSwipeCard');
  card.addEventListener('touchstart', startSwipe, { passive: true });
  card.addEventListener('touchmove', moveSwipe, { passive: true });
  card.addEventListener('touchend', endSwipe, { passive: true });
  card.addEventListener('mousedown', startSwipe);
}

function startSwipe(e) {
  swipeStartX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
  swipeCurrentX = swipeStartX;
  
  const card = document.getElementById('activeSwipeCard');
  if (e.type.includes('mouse')) {
    document.addEventListener('mousemove', moveSwipe);
    document.addEventListener('mouseup', endSwipe);
  }
}

function moveSwipe(e) {
  swipeCurrentX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
  const deltaX = swipeCurrentX - swipeStartX;
  const card = document.getElementById('activeSwipeCard');
  
  if (card) {
    card.style.transform = `translateX(${deltaX}px) rotate(${deltaX * 0.05}deg)`;
    
    // Visual feedback
    if (deltaX > 50) {
      card.style.borderColor = 'var(--green)';
    } else if (deltaX < -50) {
      card.style.borderColor = 'var(--red)';
    } else {
      card.style.borderColor = 'var(--border)';
    }
  }
}

function endSwipe(e) {
  const deltaX = swipeCurrentX - swipeStartX;
  const threshold = 80;
  
  const card = document.getElementById('activeSwipeCard');
  if (!card) return;
  
  if (deltaX > threshold) {
    // Swiped right - YES!
    card.classList.add('swiped-right');
    setTimeout(() => handleSwipeLike(), 300);
  } else if (deltaX < -threshold) {
    // Swiped left - NO
    card.classList.add('swiped-left');
    setTimeout(() => handleSwipeSkip(), 300);
  } else {
    // Snap back
    card.style.transform = '';
    card.style.borderColor = '';
  }
  
  if (e.type.includes('mouse')) {
    document.removeEventListener('mousemove', moveSwipe);
    document.removeEventListener('mouseup', endSwipe);
  }
}

function swipeSkip() {
  const card = document.getElementById('activeSwipeCard');
  if (card) {
    card.classList.add('swiped-left');
    setTimeout(() => handleSwipeSkip(), 300);
  }
}

function swipeLike() {
  const card = document.getElementById('activeSwipeCard');
  if (card) {
    card.classList.add('swiped-right');
    setTimeout(() => handleSwipeLike(), 300);
  }
}

function handleSwipeSkip() {
  currentSwipeIndex++;
  renderSwipeCard();
}

function handleSwipeLike() {
  const dish = swipeDeck[currentSwipeIndex];

  // Add to persistent wishlist (deduped by name)
  if (!wishlist.find(d => d.name === dish.name)) {
    wishlist.push({ ...dish, addedAt: Date.now(), matchCount: Math.floor(Math.random() * 200 + 50) });
    saveWishlist();
  }

  // Show match screen
  showSwipeMatch(dish);
}

function showSwipeMatch(dish) {
  const savedDish = wishlist.find(d => d.name === dish.name);
  const matchCount = savedDish?.matchCount || Math.floor(Math.random() * 200 + 80);

  // Create match overlay
  const matchOverlay = document.createElement('div');
  matchOverlay.className = 'swipe-match';
  matchOverlay.id = 'swipeMatchOverlay';
  matchOverlay.innerHTML = `
    <div class="match-saved-banner">
      <span class="match-check">✓</span>
      <span>Added to your food list</span>
    </div>
    <div class="match-dish-hero">
      <span class="match-dish-emoji">${dish.emoji}</span>
      <div class="match-dish-info">
        <h2 class="match-dish-name">${dish.name}</h2>
        <p class="match-dish-desc">${dish.desc}</p>
      </div>
    </div>
    <div class="match-social-proof">
      <span class="match-fire">🔥</span>
      <span>${matchCount} people added ${dish.name} this month</span>
    </div>
    <div class="match-wishlist-preview">
      <span class="match-list-label">Your food list</span>
      <span class="match-list-count">${wishlist.length} dish${wishlist.length !== 1 ? 'es' : ''} saved</span>
    </div>
    <div class="swipe-match-buttons">
      <button class="swipe-match-btn primary" onclick="goToDishResults('${dish.tags[0]}', '${dish.name}')">
        Find ${dish.name} Near Me →
      </button>
      <button class="swipe-match-btn secondary" onclick="keepSwiping()">
        Keep Swiping
      </button>
      <button class="swipe-match-btn ghost" onclick="showWishlist(); keepSwiping();">
        View My Food List →
      </button>
    </div>
  `;

  document.body.appendChild(matchOverlay);

  // Trigger confetti and pulse
  triggerConfetti();
  matchOverlay.classList.add('pop-in');
}

function goToDishResults(tag, displayName) {
  // Remove match overlay
  const overlay = document.getElementById('swipeMatchOverlay');
  if (overlay) overlay.remove();
  
  // Close swipe overlay
  document.getElementById('swipeOverlay').classList.remove('open');
  
  // Search for this dish
  quickSearch(tag);
  
  // Show toast
  showToast(`Finding ${displayName} near you! 🍽️`);
}

function keepSwiping() {
  const overlay = document.getElementById('swipeMatchOverlay');
  if (overlay) overlay.remove();

  currentSwipeIndex++;
  renderSwipeCard();
}

function showWishlist() {
  const overlay = document.getElementById('swipeMatchOverlay');
  if (overlay) overlay.remove();

  if (wishlist.length === 0) {
    showToast('Your food list is empty — swipe right on dishes you want to try!');
    return;
  }

  // Build wishlist panel
  const panel = document.createElement('div');
  panel.id = 'wishlistPanel';
  panel.style.cssText = 'position:fixed;inset:0;background:rgba(10,10,15,0.98);z-index:1000;overflow-y:auto;padding:20px;';

  const dishes = wishlist.map((d, i) => `
    <div style="display:flex;align-items:center;gap:14px;padding:14px 0;border-bottom:1px solid var(--border)">
      <span style="font-size:2rem">${d.emoji}</span>
      <div style="flex:1">
        <div style="font-weight:600;font-size:1rem">${d.name}</div>
        <div style="color:var(--muted);font-size:0.82rem">${d.desc}</div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:4px">
        <span style="color:var(--accent);font-size:0.8rem;font-weight:600">${d.matchCount || 80}+</span>
        <span style="font-size:0.7rem;color:var(--muted)">saved</span>
      </div>
      <button onclick="removeFromWishlist(${i})" style="background:none;border:none;color:var(--red);cursor:pointer;font-size:1.2rem;padding:4px" title="Remove">✕</button>
    </div>
  `).join('');

  panel.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px;padding-top:10px">
      <h2 style="font-family:'Playfair Display',serif;font-size:1.5rem;margin:0">Your Food List</h2>
      <div style="display:flex;gap:10px">
        <button onclick="exportWishlist()" style="background:var(--accent);border:none;color:#fff;padding:8px 14px;border-radius:8px;font-size:0.85rem;cursor:pointer">Share List</button>
        <button onclick="closeWishlist()" style="background:transparent;border:1px solid var(--border);color:var(--text);padding:8px 14px;border-radius:8px;font-size:0.85rem;cursor:pointer">Close</button>
      </div>
    </div>
    <p style="color:var(--muted);font-size:0.85rem;margin-bottom:20px">${wishlist.length} dish${wishlist.length !== 1 ? 'es' : ''} you want to try</p>
    ${dishes}
  `;

  document.body.appendChild(panel);
}

function removeFromWishlist(index) {
  wishlist.splice(index, 1);
  saveWishlist();
  showWishlist(); // Refresh
}

function closeWishlist() {
  const panel = document.getElementById('wishlistPanel');
  if (panel) panel.remove();
}

function exportWishlist() {
  const text = wishlist.map(d => `${d.emoji} ${d.name} — ${d.desc}`).join('\n');
  const shareText = `My BiteRank Food List 🍽️\n\n${text}\n\nDiscover yours at bite-rank.com`;
  if (navigator.share) {
    navigator.share({ title: 'My Food List', text: shareText }).catch(() => {});
  } else {
    navigator.clipboard.writeText(shareText).then(() => showToast('Food list copied to clipboard!'));
  }
}

function showAllSwipeOptions() {
  const container = document.getElementById('swipeCards');
  const progress = document.getElementById('swipeProgress');
  
  container.innerHTML = `
    <div style="text-align:center;padding:40px 20px">
      <div style="font-size:3rem;margin-bottom:15px">🤔</div>
      <h3 style="font-family:'Playfair Display',serif;font-size:1.2rem;margin-bottom:10px">Still deciding?</h3>
      <p style="color:var(--muted);font-size:0.9rem;margin-bottom:20px">You swiped through everything! Try browsing by cuisine or search for something specific.</p>
      <button class="swipe-match-btn primary" onclick="closeSwipeAndBrowse()" style="max-width:200px;margin:0 auto">
        Browse All Cuisines →
      </button>
    </div>
  `;
  
  progress.textContent = 'All options viewed';
}

function closeSwipeAndBrowse() {
  document.getElementById('swipeOverlay').classList.remove('open');
  // Scroll to cuisine section
  document.querySelector('.cats-scroll').scrollIntoView({ behavior: 'smooth' });
}

// ═══════════════════════════════════════════════
//  HASH-BASED ROUTING - SHAREABLE URLs
// ═══════════════════════════════════════════════

// Parse hash and route accordingly
function handleHashRoute() {
  const hash = window.location.hash.slice(1); // Remove #
  if (!hash) return;
  
  const parts = hash.split('/').filter(Boolean);
  if (parts.length === 0) return;
  
  const [type, ...params] = parts;
  
  switch(type) {
    case 'restaurant':
      if (params[0]) {
        const restId = decodeURIComponent(params[0]);
        openDishByHash(restId);
      }
      break;
      
    case 'city':
      if (params[0]) {
        const cityKey = decodeURIComponent(params[0]);
        if (CITIES[cityKey]) {
          selectCityTile(cityKey);
        }
      }
      break;
      
    case 'search':
      if (params[0]) {
        const query = decodeURIComponent(params[0]);
        // Wait for location to be set, then search
        if (userLoc) {
          quickSearch(query);
        } else {
          // Store pending search
          window._pendingSearch = query;
          showToast('Set your location to search');
          openLocPicker();
        }
      }
      break;
      
    case 'dish':
      if (params[0]) {
        const dish = decodeURIComponent(params[0]);
        quickSearch(dish);
      }
      break;
  }
}

// Open restaurant by ID from hash
async function openDishByHash(restaurantId) {
  // Try to find in current results or fetch
  if (!restaurantById.has(restaurantId)) {
    // Need to fetch this restaurant
    // For now, show loading and try to fetch from Google Places
    showToast('Loading restaurant...');
    // In a real implementation, you'd have an API endpoint to fetch by ID
    goHome();
    return;
  }
  
  const restaurant = restaurantById.get(restaurantId);
  if (restaurant) {
    currentDish = restaurant;
    openDish(restaurantId);
  }
}

// Update URL hash when viewing content
function updateHash(type, ...params) {
  const encoded = params.map(p => encodeURIComponent(p));
  window.location.hash = `/${type}/${encoded.join('/')}`;
}

// Clear hash when going home
function clearHash() {
  window.history.pushState('', document.title, window.location.pathname + window.location.search);
}

// Override existing functions to update hash

// Override openDish to update hash
const _originalOpenDish = openDish;
openDish = function(id) {
  updateHash('restaurant', id);
  return _originalOpenDish(id);
};

// Override selectCityTile to update hash
const _originalSelectCityTile = selectCityTile;
selectCityTile = async function(key) {
  updateHash('city', key);
  return _originalSelectCityTile(key);
};

// Override quickSearch to update hash
const _originalQuickSearch = quickSearch;
quickSearch = function(q) {
  updateHash('search', q);
  return _originalQuickSearch(q);
};

// Override goHome to clear hash
const _originalGoHome = goHome;
goHome = function() {
  clearHash();
  return _originalGoHome();
};

// Listen for hash changes
window.addEventListener('hashchange', handleHashRoute);

// Listen for popstate (back/forward buttons)
window.addEventListener('popstate', () => {
  if (window.location.hash) {
    handleHashRoute();
  } else {
    goHome();
  }
});

// Check hash on initial load
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    handleHashRoute();
    updateWishlistCount(); // Initialize wishlist badge
  }, 1000); // Wait for auth and location init
});

// Share current view function (replaces the old one)
function shareCurrentView() {
  const url = window.location.href;
  const text = getShareText();
  
  if (navigator.share) {
    navigator.share({
      title: 'BiteRank',
      text: text,
      url: url
    }).catch(() => {
      // User cancelled
    });
  } else {
    // Fallback to clipboard
    navigator.clipboard.writeText(url).then(() => {
      showToast('Link copied to clipboard!');
    }).catch(() => {
      showToast('Could not copy link');
    });
  }
}

function getShareText() {
  const hash = window.location.hash;
  if (!hash) return 'Check out BiteRank - Skip the ambiance. Just the food.';
  
  const parts = hash.split('/').filter(Boolean);
  const [type, ...params] = parts;
  
  switch(type) {
    case 'restaurant':
      return currentDish ? 
        `Check out ${currentDish.name} on BiteRank` : 
        'Check out this restaurant on BiteRank';
    case 'city':
      const cityKey = params[0];
      return cityKey && CITIES[cityKey] ? 
        `Explore ${CITIES[cityKey].name} on BiteRank` : 
        'Explore restaurants on BiteRank';
    case 'search':
      return `Find ${decodeURIComponent(params[0])} near you on BiteRank`;
    case 'dish':
      return `Find the best ${decodeURIComponent(params[0])} on BiteRank`;
    default:
      return 'Check out BiteRank - Skip the ambiance. Just the food.';
  }
}

// Add getShareableUrl function for components
function getShareableUrl(type, ...params) {
  const base = window.location.origin + window.location.pathname;
  const encoded = params.map(p => encodeURIComponent(p)).join('/');
  return `${base}#/${type}/${encoded}`;
}
