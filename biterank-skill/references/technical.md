# BiteRank — Technical Reference

## Cloudflare Worker Proxy

**URL:** `https://biterank-proxy.axfreder.workers.dev`
**Purpose:** Proxies Google Places API calls server-side (hides API key from client)
**GitHub:** `axfreder-bot/biterank-proxy` (presumably)

### Places API call flow
```
Client (app.js) → fetch(biterank-proxy?ll=lat,lng&radius=...) → Worker → Google Places API
```

### Places API key
Located in Worker env vars. Key likely has HTTP referrer restrictions set in Google Cloud Console — this is what's causing the 403 error when the referrer is empty (server-side calls).

## Firebase API Keys

### Current keys (as of 2026-03-27)
- **Active:** `AIzaSyDyZNxnzY_F0U9ENwLdwTNKQlZrcNKXYCc` — needs HTTP referrer restrictions
- **Old/exposed:** `AIzaSyBvwnrcSog0xfG_9Q6PHt9SgN5YzH4g1TQ` — should be disabled

### To restrict the active key
1. console.cloud.google.com → APIs & Services → Credentials
2. Edit `AIzaSyDyZNxnzY_F0U9ENwLdwTNKQlZrcNKXYCc`
3. Set HTTP referrers: `https://bite-rank.com/*`, `https://biterank.axfreder.workers.dev/*`
4. Save

## Capacitor iOS Project

### Setup (already done)
```bash
cd ~/projects/biterank
npm install @capacitor/core @capacitor/cli @capacitor/ios
npx cap init BiteRank com.biterank.app --web-dir=www
npx cap add ios
```

### Sync after web changes
```bash
cp index.html css/styles.css js/app.js js/firebase.js www/
cp -r data www/
npx cap sync ios
```

### Build in Xcode
```bash
cd ~/projects/biterank/ios/App
open App.xcworkspace
# Select team in Signing & Capabilities
# Select iPhone as target
# Cmd+R to run
```

## Cloudflare Pages

**Project name:** biterank
**Domain:** bite-rank.com (custom), biterank.axfreder.workers.dev (default)
**Branch:** main → auto-deploys

## Game State Sync Logic

```js
// On sign-in:
loadGameStateFromFirestore(uid) {
  server = fetch from Firestore
  local = load from localStorage
  // server wins on all fields (merge with server preferred)
  gameState = { ...local, ...server }
  saveGameState() // → localStorage + async Firestore write
}

// On game state mutation:
saveGameState() {
  localStorage.setItem(GAME_STATE_KEY, JSON.stringify(gameState))
  if (currentUser?.uid) _fsSaveGameState(uid, gameState) // non-blocking
}
```

## Cities Data

```js
const CITIES = {
  seattle:  { name: 'Seattle, WA',      lat: 47.6062, lng: -122.3321, emoji: '🌲' },
  portland: { name: 'Portland, OR',     lat: 45.5051, lng: -122.6750, emoji: '🌹' },
  sf:       { name: 'San Francisco, CA', lat: 37.7749, lng: -122.4194, emoji: '🌉' },
  nyc:      { name: 'New York, NY',     lat: 40.7128, lng: -74.0060,  emoji: '🗽' },
  chicago:  { name: 'Chicago, IL',      lat: 41.8781, lng: -87.6298,  emoji: '🌬️' },
  la:       { name: 'Los Angeles, CA',  lat: 34.0522, lng: -118.2437, emoji: '🌴' },
  austin:   { name: 'Austin, TX',       lat: 30.2672, lng: -97.7431,  emoji: '🤠' },
  miami:    { name: 'Miami, FL',        lat: 25.7617, lng: -80.1918,  emoji: '🌊' },
};
```

Portland has seeded reviews. Other cities need expansion.

## XP / Gamification Constants

```js
const XP = {
  review: 15,           // Basic review
  reviewWithPhoto: 30,  // Review with photo
  photoUpload: 10,      // Photo uploaded
  pioneerBonus: 20,     // First review for a dish
};

const LEVELS = [
  { name: 'Foodie',       min: 0,    max: 199,   emoji: '🍽️',  color: '#8a8478' },
  { name: 'Taster',       min: 200,  max: 499,   emoji: '🥢',  color: '#6abf8a' },
  { name: 'Regular',      min: 500,  max: 999,   emoji: '🍴',  color: '#e8854a' },
  { name: 'Critic',       min: 1000, max: 1999,  emoji: '⭐',  color: '#f2c46d' },
  { name: 'Connoisseur',  min: 2000, max: 3999,  emoji: '🎖️', color: '#e8854a' },
  { name: 'Legend',       min: 8000, max: Infinity, emoji: '🏆', color: '#f2c46d' },
];
```

## Badge Definitions

Badges are defined in the gamification engine section of app.js. Key badges:
- `streak3`, `streak7`, `streak30` — streak milestones
- `reviews10`, `reviews50`, `reviews100` — review count milestones
- `pioneer10`, `pioneer50` — first-to-review milestones
- `photo10`, `photo50` — photo milestones
- `diverse5`, `diverse10` — reviewed across 5/10 cuisines
- `level5`, `level10` — reached Taster/Regular level

## Food Swiper (SWIPE_DISHES)

20 hardcoded dish categories in `app.js`:
Pizza, Burger, Ramen, Sushi, Tacos, Brunch, Pasta, Curry, Salad, Dim Sum, Steak, Pho, Chicken, Chinese Food, Mediterranean, Seafood, Pancakes, Dessert, Burrito, Thai Food

## Wishlist (localStorage)

Key: `biterank_wishlist`
Persists across sessions on same device.
Not synced to Firestore (stateless wishlist — could be added).

## Google Analytics Measurement ID

`G-BBLM8SZCKY` — set in both:
1. `index.html` (direct GA4 script tag)
2. `js/firebase.js` (Firebase config `measurementId`)

Must match. Duplicate IDs were causing split data — fixed 2026-03-28.

## DoorDash Affiliate Links

Current: Direct search links (no affiliate tracking)
```
https://www.doordash.com/search?query={restaurant_name}&store_type=restaurant
```

After affiliate signup: Replace with Impact.com affiliate links.
