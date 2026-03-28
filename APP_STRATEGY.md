# BiteRank App Strategy
**Date:** 2026-03-28
**Author:** Atlas (Chief of Staff)
**For:** Alex / BiteRank

---

## Two Value Propositions

### VP1: "Find the best restaurants for specific dishes"
> **Core insight:** When people want "ramen" or "tacos al pastor," they want the BEST version of that dish, not the closest or most popular restaurant. Existing apps optimize for the latter.

**What makes this powerful:**
- Dish-first thinking vs. restaurant-first thinking
- Community reviews that are specific to DISHES, not restaurants
- Rankings that are dish-specific ("best tonkotsu ramen in Seattle")
- This is a genuinely underserved angle in the market

**Positioning:** "We rank food, not ambiance" — the tagline already does this work.

---

### VP2: "A dating app for food discovery"
> **Core insight:** Restaurant discovery is broken for people who are tired of algorithm-driven lists, Yelp sorting by review count, and influencer-heavy feeds. Food Swiper is the antidote — serendipitous, swipe-based, fun.

**The analogy:** Tinder disrupted dating by making it feel like a game. BiteRank can do the same for food.

**What makes this powerful:**
- Passive discovery ("just swipe, we'll show you what's great nearby")
- Frictionless — no searching required
- Gamified XP/rewards create habit loops
- "It's a game first, a utility second" — that's the retention moat

---

## Competitive Landscape

### Direct Competitors

| App | Strength | Weakness | BiteRank Advantage |
|-----|----------|----------|-------------------|
| **Yelp** | Scale, reviews, business info | Restaurant-first, not dish-first, cluttered | Dish-specific rankings |
| **Google Maps** | Ubiquity, Places data | Generic, no curation | Food-first curation |
| **TheFork / OpenTable** | Reservations, deals | Restaurant-first, not discovery | Dish discovery + ordering |
| **Allrecipes / Tasty** | Recipe focus | Not restaurant discovery | Bridge recipes → restaurants |
| **DoorDash / Uber Eats** | Ordering, delivery | Not discovery-focused | Discovery + ordering link |

### "Tinder for Food" Space
This space is actually WIDE OPEN. Most attempts:
- **Foodie** ( Tinder for restaurant matches) — hasn't broken through
- **Mouthful** — swipe-based restaurant discovery, small footprint
- **Feast** — food discovery via short video, TikTok-like

**Reality check:** Swipe mechanics alone aren't a moat. The moat is the DATA — dish-specific rankings with real community signal. Swipe UI is the delivery mechanism.

---

## Gamification Architecture

### Core Loop
```
Swipe → Match (want to try) → Add to list → Visit → Review → Earn XP → Level Up
```

### Habit Loops to Engineer

**1. Daily Streak (Duolingo model)**
- "Swipe 5 dishes a day" streak counter
- XP bonus per day of streak
- Badges: 3-day, 7-day, 30-day streaks
- Social proof: "Alex is on a 12-day food discovery streak 🔥"

**2. Pioneer mechanic (already in app)**
- First to review a dish = bonus XP + "🚩 Pioneer" badge
- Creates urgency ("be the first to rank it!")
- Works best with new restaurants/dishes

**3. Dish Completions**
- "You've ranked 8/12 dishes at Ramen Danbo — come back to finish!"
- Progress bars per restaurant
- Completionist badge + XP

**4. Social / Leaderboard**
- City leaderboard: "Top dish rankers in Seattle this week"
- Friends: see what your friends ranked
- "Your taste profile: You rank high on [cuisine type]"

**5. Random Rewards**
- 30% chance of bonus XP on any review (already coded)
- "Jackpot! +50 bonus XP" moments

### Retention Metrics to Track
- DAU/MAU ratio (target: 30%+ for habit-forming app)
- Swipes per session (target: 15+)
- Return within 24h rate
- Review submission rate per swipe

---

## VP2: "Food Swiper" Feature Deep Dive

### What's Already Built
- Swipe right to "want to try," left to skip
- Tap to see restaurant details
- XP system, levels, badges

### Gaps to Fill (Priority Order)

**1. "Match" UX — make it feel rewarding**
- Currently: silent save to list
- Improve: Animated "Added to your food list!" with dish card animation
- Show: "127 people added this dish this week" (social proof)

**2. "Food List" / Want-to-Try collection**
- Named lists (e.g., "Seattle Food Bucket List")
- Shareable ("Check out Alex's food list for Seattle")
- Export to Google Maps integration

**3. Swipe Boost for engagement**
- "See 10 more dishes" prompt at end of session
- "Your session saved 3 dishes you want to try"

**4. Location-aware swipe**
- "Swipe from home" vs "Swipe from current location"
- Better matches when traveling

**5. Difficulty tuning**
- Track what user swipes on vs skips
- If 90% right-swipes, show more niche/exclusive dishes
- If selective, show only highly-rated dishes

---

## Monetization Paths

### Priority 1: Affiliate (Near-term)
- **DoorDash integration** — "Order this dish" button → affiliate commission
- **Grubhub / Uber Eats** — same model
- Estimated: $0.50-3.00 per order referred
- **Restaurant referral** ($1,000/restaurant) if you refer restaurants to DoorDash

### Priority 2: Freemium (3-6 months)
- Free: Swipe discovery + 3 reviews/day
- Pro ($4.99/mo): Unlimited reviews, advanced filters, "near me" priority, no ads
- Pro features: detailed taste profile, exportable lists, early access to new cities

### Priority 3: White Label / B2B (6-12 months)
- License the dish-ranking data to restaurant chains
- "We show you BiteRank's highest-rated dishes" as a restaurant badge
- Restaurant analytics dashboard (what dishes are getting ranked highly)

### Priority 4: Sponsored Discovery
- Restaurants pay to appear in "Near me" results (not top — that's corrupt — but in the relevant set)
- "Sponsored dish" label, clearly distinguished

---

## App Store Strategy

### iOS App (Capacitor — already set up)

**Phase 1: Wrap the web app (NOW)**
- Get on App Store quickly with existing PWA
- Use "Food Swiper" as the hero feature — different from every other food app
- Screenshots: show the swipe mechanic front and center

**Phase 2: Native experience (3 months)**
- Push notifications for streak reminders
- Better swipe physics (haptic feedback on iPhone)
- Camera integration for dish photos
- Apple Watch companion (show nearby top dishes)

### App Store Optimization

**Keyword strategy:**
- Primary: "food finder" "dish reviews" "restaurant rankings" "food swiper"
- Don't try to outrank Yelp on "restaurants" — own "dish discovery"

**Description hook:**
> "Tired of scrolling through restaurant reviews to find the best pad thai? BiteRank ranks dishes, not restaurants. Swipe to discover, rank what you've tried, find the best version of any dish near you."

### Screenshots (Key Art)
- Hero: Swipe card UI with dish photo, restaurant name, rating
- Second: "See what food is ranked near you" map view
- Third: XP/level progression screen
- Fourth: Food list / want-to-try collection

---

## Metrics & Success Thresholds

| Milestone | Target | Timeline |
|-----------|--------|----------|
| App Store listing live | Week 1 | NOW |
| 100 DAU | Month 1 | |
| 500 MAU | Month 3 | |
| First affiliate commission | Month 2 | |
| First Pro subscriber | Month 3 | |
| 1,000 MAU | Month 6 | |
| $1K MRR | Month 6 | |
| 5,000 MAU | Month 12 | |
| $10K MRR | Month 12 | |

---

## Key Risks

**1. Cold start problem** — new users have no data. Solution: seeded reviews already in place. Promote with "100+ dishes already ranked in your city."

**2. Discovery without intent** — swipe apps work when user is bored. Food is often intent-driven ("I'm hungry NOW"). Solution: position as "bored? Just swipe — find your next favorite dish."

**3. Yelp/Google dominance** — these are giant. Don't compete on their turf. Own "dish-first" completely. If someone searches "best ramen," BiteRank should own that query category.

**4. Gamification without substance** — XP and badges wear off. Real value is in the DATA — accurate dish rankings. Lead with utility, support with gamification.

---

## Immediate Action Items (Next 2 Weeks)

1. **Ship the iOS app** — wrap web app, get on App Store
2. **Fix Places API** (Alex, Google Console)
3. **DoorDash affiliate signup** (Alex)
4. **Add "Match" celebration animation** — make saves feel rewarding
5. **Build food lists UX** — named collections that are shareable
6. **Start Reddit community building** — per LAUNCH_PLAN.md
7. **Create App Store listing** with "Food Swiper" as hero feature

---

## One-Line Pitch (For Fundraising / Press)

> "BiteRank is the only app that ranks dishes, not restaurants — think Tinder for food discovery with the engagement of Duolingo."
