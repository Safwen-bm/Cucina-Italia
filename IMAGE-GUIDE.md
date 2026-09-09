# Controluce — image shopping list

Six photos, in total. Download from **Unsplash** (unsplash.com) or
**Pexels** (pexels.com) — both are free to use, no attribution required.
Save each one to `public/images/` in the project using the **exact
filename** below (the code already points at these paths).

General tips before you start:
- On Unsplash, use the orientation filter (Horizontal / Vertical) shown
  under the search bar — it'll save you a lot of scrolling.
- Favor **warm, low, golden-hour or evening light** over bright flat
  daylight — that's the whole mood of the site (the name "Controluce"
  literally means "backlit").
- Slight underexposure / moodiness is good. Avoid stock photos that
  look like a bright fast-casual chain — you want fine-dining, dim,
  intimate.
- Once you have a candidate, open it full-size and check it isn't
  obviously a stock photo of a *specific real, named restaurant* with
  visible signage/branding — generic interiors/dishes are what you want.

---

### 1. `hero-dining-room.jpg`
**Used in:** Hero, full-bleed background, top of the page
**Orientation:** Horizontal / landscape
**Ideal size:** at least 2400×1500px (it fills the whole screen width)
**Search terms:**
- "restaurant interior evening light"
- "fine dining dark moody interior"
- "italian trattoria interior warm light"
**What to look for:** a wide shot of an empty or softly-lit dining room,
warm/amber lighting, some depth (tables receding into the frame). Dark
overall tone — the page overlays white text on top of it, so avoid
anything too bright or busy in the left-center area.

---

### 2. `story-hands-pasta.jpg`
**Used in:** "La Storia" section, portrait image next to the founding story
**Orientation:** Vertical / portrait
**Ideal size:** at least 1200×1500px
**Search terms:**
- "hands making pasta"
- "fresh pasta dough hands"
- "pasta making close up"
**What to look for:** close-up, hands actively shaping or rolling pasta
(tagliatelle, dough on a floured board). Should read as candid/textural,
not a posed chef portrait.

---

### 3. `interno-dining-room.jpg`
**Used in:** "L'Interno" gallery, the large image (top-left, spans two rows)
**Orientation:** Vertical or square-ish, tall
**Ideal size:** at least 1600×1900px
**Search terms:**
- "marble table restaurant interior"
- "elegant restaurant dining room"
- "italian restaurant interior design"
**What to look for:** a well-composed interior shot — marble or wood
tables, warm brass or pendant lighting, ideally some greenery. This is
the biggest image in the gallery grid, so pick your strongest interior
shot for this slot.

---

### 4. `interno-wine-pour.jpg`
**Used in:** "L'Interno" gallery, top-right small image
**Orientation:** Horizontal, roughly 4:3
**Ideal size:** at least 1200×900px
**Search terms:**
- "pouring red wine restaurant"
- "wine pour glass table"
- "red wine glass candlelight"
**What to look for:** a glass being poured or a filled glass on a table,
warm light, shallow depth of field (blurred background).

---

### 5. `interno-ingredients.jpg`
**Used in:** "L'Interno" gallery, bottom-right small image
**Orientation:** Horizontal, roughly 4:3
**Ideal size:** at least 1200×900px
**Search terms:**
- "italian ingredients flat lay"
- "tomatoes basil olive oil wood table"
- "fresh ingredients rustic table"
**What to look for:** tomatoes, basil, olive oil, maybe parmesan or
garlic, arranged on a wood or stone surface. Warm, slightly rustic.

---

### 6. `interno-facade.jpg`
**Used in:** "L'Interno" gallery, full-width banner at the bottom
**Orientation:** Wide horizontal (roughly 2:1)
**Ideal size:** at least 2400×1200px
**Search terms:**
- "restaurant entrance night"
- "restaurant facade evening warm light"
- "cafe storefront dusk"
**What to look for:** an exterior/entrance shot at dusk or night, warm
light spilling out of windows or doorway. Should NOT have a readable
sign with an existing restaurant's real name/logo — you want something
generic enough to stand in for "Controluce" (you can always add your
own sign/logo over it later, or crop tight enough that no signage is
visible).

---

## After downloading

1. Rename each file to match the names above exactly (case-sensitive).
2. Drop them all into `public/images/`, replacing the placeholder
   versions already there.
3. Run `npm run dev` and check each section — because the placeholders
   were generated at the same aspect ratios, your real photos should
   drop in without shifting the layout. If a photo looks oddly cropped,
   it's almost always fixable by picking a photo closer to the
   "ideal size" ratio above rather than changing the code.
