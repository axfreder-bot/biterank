# BiteRank — Alex's To-Do List

These are tasks that **require Alex's action** — I can't do them without his credentials, approvals, or direct access.

---

## 🔴 Need Alex NOW (Site is broken / Revenue blocked)

### 1. Fix Google Places API 403 Error
**Why:** All restaurant searches fail — site is unusable.
**What needs doing:**
- Go to console.cloud.google.com → APIs & Services → Credentials
- Find your Places API key (used by `biterank-proxy.axfreder.workers.dev`)
- Edit HTTP referrer restrictions: either remove them OR add `https://biterank-proxy.axfreder.workers.dev/*`
- **Blocker:** No access to Google Cloud Console from here

### 2. Sign Up for DoorDash Affiliate
**Why:** Enables real commission tracking on every "Order" button tap.
**What needs doing:**
- Go to affiliates.doordash.com
- Apply to join (via Impact.com network)
- Share affiliate ID once approved so I can add proper tracking links
- **Blocker:** Requires your signup + approval

### 3. Apple Developer Account (for iOS app)
**Why:** Required to build/deploy the iPhone app to App Store.
**What needs doing:**
- Sign up at developer.apple.com/programs ($99/yr)
- Add payment method
- **Blocker:** Requires Apple account + payment

---

## 🟡 Need Alex Soon (Time-sensitive-ish)

### 4. Firebase API Key Hardening
**What needs doing:**
- RESTRICT new key: `AIzaSyDyZNxnzY_F0U9ENwLdwTNKQlZrcNKXYCc`
  - Add HTTP referrers: `bite-rank.com/*`, `biterank.axfreder.workers.dev/*`
- DISABLE old key: `AIzaSyBvwnrcSog0xfG_9Q6PHt9SgN5YzH4g1TQ`
- **Blocker:** Google Cloud Console access (can do same session as #1)

### 5. Reddit Account Building
**What needs doing:**
- Create or use existing Reddit account
- Spend ~1 week building karma in r/fastfoodreview, r/food, r/shittyfoodporn
- Post BiteRank launch posts (drafted in LAUNCH_PLAN.md)
- **Blocker:** Needs human activity — I can draft, you post

### 6. App Store Listing Creation
**What needs doing:**
- Write App Store title, description, keywords
- Create 5 screenshots (Food Swiper hero, map view, XP screen, food list, reviews)
- Design app icon (currently using default)
- **Blocker:** Needs creative assets / App Store Connect access

---

## 🟢 Good to Have (No rush, I can do these)

### 7. "Match" Celebration Animation
**What:** When a user swipes right on a dish, show an animated "Added to your list!" moment.
**Status:** I can implement this directly.
**File:** js/app.js — Food Swiper section

### 8. Food Lists UX
**What:** Named, shareable collections ("My Seattle Food Bucket List")
**Status:** Needs design + implementation
**Priority:** High — creates sharing virality

### 9. Swipe Physics & Haptics (iOS)
**What:** Add haptic feedback (iPhone vibration) on swipe actions
**Status:** Can be done via Capacitor native plugin

### 10. Notion Integration
**What:** Explore export/import workflow, set up workspace for project tracking
**Status:** Needs Notion account + API token

### 11. Blog Post
**What:** Write intro post for BiteRank (draft exists in LAUNCH_PLAN.md)
**Status:** Needs review + publishing

### 12. More City Expansions
**What:** Add seeded reviews for LA, SF, Austin, NYC
**Status:** I can do this directly — just need GitHub access confirmed

---

## 📋 Quick Summary — Priority Order

### Tonight / This Week
1. 🔴 Fix Google Places API (site is down — #1 priority)
2. 🔴 Sign up for DoorDash affiliate
3. 🔴 Apple Developer account ($99)

### Next Week
4. 🟡 Firebase key hardening (same Google Console session as #1)
5. 🟡 App Store listing — write copy + screenshots
6. 🟡 Reddit karma building

### When Time Allows
7. 🟢 Food Lists UX (I can build)
8. 🟢 "Match" animation (I can build)
9. 🟢 Blog post review
10. 🟢 More city expansions

---

## 📁 Strategy Docs in Repo
- `APP_STRATEGY.md` — full product strategy (read it!)
- `LAUNCH_PLAN.md` — Reddit/social launch strategy
- `AFFILIATE.md` — DoorDash/Grubhub affiliate research
- `TODO_ALEX.md` — this file

## 📊 Files
- **Code:** `/biterank/` (GitHub: axfreder-bot/biterank)
- **Live:** bite-rank.com
- **iOS project:** `/biterank/ios/`
