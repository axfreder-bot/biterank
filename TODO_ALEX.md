# BiteRank — Alex's To-Do List

These are tasks that **require Alex's action** — I can't do them without his credentials, approvals, or direct access.

---

## 🔴 Needs Alex Now (Quick wins)

### 1. Fix Google Places API 403 Error
**Why:** Site is broken — all restaurant searches fail.
**What needs doing:**
- Go to console.cloud.google.com → APIs & Services → Credentials
- Find your Places API key (used by `biterank-proxy.axfreder.workers.dev`)
- Edit HTTP referrer restrictions: either remove them OR add `https://biterank-proxy.axfreder.workers.dev/*`
- **Blocker:** No access to Google Cloud Console from here

---

### 2. Apple Developer Account (for iPhone app)
**Why:** Required to build/deploy the iPhone app.
**What needs doing:**
- Sign up at developer.apple.com/programs ($99/yr)
- Add payment method
- **Blocker:** Requires Apple account + payment

---

### 3. DoorDash Affiliate Signup
**Why:** Enables real commission tracking.
**What needs doing:**
- Go to affiliates.doordash.com
- Apply to join (via Impact.com network)
- Share affiliate ID once approved
- **Blocker:** Requires your signup + approval

---

## 🟡 Needs Alex Soon (Time-sensitive-ish)

### 4. Apply Google Analytics 4
- ✅ Done — Measurement ID: G-BBLM8SZCKY

### 5. Firebase API Key Hardening
**What needs doing:**
- RESTRICT new key: `AIzaSyDyZNxnzY_F0U9ENwLdwTNKQlZrcNKXYCc` (add HTTP referrers: bite-rank.com, biterank.axfreder.workers.dev)
- DISABLE old key: `AIzaSyBvwnrcSog0xfG_9Q6PHt9SgN5YzH4g1TQ`
- **Blocker:** Google Cloud Console access

---

### 6. Reddit Account Building
**What needs doing:**
- Create or use existing Reddit account(s)
- Spend ~1 week building karma in r/fastfoodreview, r/food, r/shittyfoodporn
- Post BiteRank launch posts (drafted in LAUNCH_PLAN.md)
- **Blocker:** Needs human activity (I can draft, you post)

---

## 🟢 Good to Have (No rush)

### 7. iPhone App — Build in Xcode
- Xcode project ready at `/biterank/ios/`
- Needs: Mac + iPhone + Apple Developer account
- I can guide step by step

### 8. Notion Integration
- Explore export/import workflow
- Set up workspace for project tracking
- **Blocker:** Needs Notion account + API token

### 9. Blog Post
- Write intro post for BiteRank (drafted, needs review)
- For: SEO + launch material

### 10. More City Expansions
- Add seeded reviews for: LA, SF, Austin, NYC
- I can do this directly — just need GitHub access confirmed

---

## 📋 Quick Summary for Next Session

Priority order when Alex gets home:
1. 🔴 Fix Google Places API (site is down)
2. 🔴 Sign up for DoorDash affiliate
3. 🟡 Firebase key hardening (same session as #1)
4. 🟡 Reddit account building
5. 🟢 iPhone app build in Xcode
