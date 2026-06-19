# Forest Wildfire — Wallpaper Engine wallpaper

An interactive top-down wildfire wallpaper. Click anywhere to spark a fire — flames
spread through grass and trees with the wind, embers fly, smoke billows, lightning
strikes during storms, rain extinguishes flames, and the forest slowly regrows.

Features:
- **Four-season year cycle** — the whole forest slowly drifts through **spring**
  (fresh bright green + drifting pink blossom), **summer** (peak lush, the most
  detailed/neutral look), **autumn** (warm gold/red colour grade + heavy leaf-fall)
  and **winter** (a snow blanket over the ground, frosted desaturated canopy,
  pale frozen ponds and rivers, and falling snow). On Auto-cycle each season
  **dwells at its full look** for most of its slot then blends over the tail, so
  the year actually *shows* spring/summer/autumn/winter instead of sitting in a
  permanent half-blend. Leave it on **Auto-cycle** (set the length of each season)
  or pin a single season from the Wallpaper Engine panel; snow intensity is adjustable.
- **Seasons drive the world, not just its colour** — winter snow **damps fire
  spread** (a frozen forest barely catches) while high summer fans it; **pink
  blossoms** bud on the tree canopies in spring; and **wildlife** (birds, fireflies)
  swells in spring/summer and thins toward winter.
- **Interactive** — left-click (or hold to pour) starts a wildfire at the cursor;
  **right-click drops a rain burst** that puts fires out with steam; **scroll the
  mouse wheel to zoom**. Zoom is a smooth camera zoom toward the cursor that
  *keeps the world and any live fire* (no regeneration) for several steps each
  way; only at the extremes does it regenerate one detail step — bigger/chunkier
  zooming in, smaller/lusher zooming out — with the apparent scale preserved so
  the zoom keeps flowing instead of snapping. All three are individually toggleable.
- Procedural noise terrain (biomes, clearings, dense pockets)
- Rivers, ponds, shoreline tree reflections — smooth blurred-mask shorelines
  (deep water → shallow rim, no blocky/circle edges). Optional lily pads with
  flowers (off by default — toggle in properties).
- **Burn scars blend into their surroundings** — a scar cell whose edge faces
  non-burnt terrain (grass, dirt, water) draws with an organic, jittered, receded
  edge that reveals the ground baked beneath, so the scar blob's outline melts into
  the grass and river bank instead of cutting a hard square grid. Edges shared with
  another scar cell stay square, so the blob still tiles seamlessly — only its outer
  boundary softens
- Dirt paths winding through forest, scattered rocks, elevation shading
- **Detailed side-view trees** (RimWorld-style) that stand up from the ground with
  visible trunks and dappled, textured canopies — 9 species spanning distinct
  silhouettes: sharp-tiered **pine** conifers and their soft round-lobed **fir**
  siblings, leafy green oaks, tall columnar **poplars**, weeping **willows** with
  drooping fronds, white-trunk **birch**, warm-gold **maple**, fiery **autumn**,
  rare **pink-blossom cherry** accents, and bare **dead** trees. Drawn back-to-front
  so nearer trees overlap the ones behind for real depth, with a gentle per-tree sway.
- **Tree growth stages** — regrown trees sprout as tiny saplings and grow into
  towering mature trees over ~1–2 minutes, giving a full size ladder from short
  grass → tall grass → sapling → big tree; the starting forest has size variety too
- **Pannable camera over a larger-than-screen world** — the map is generated bigger
  than the viewport so you can move around it: set the view with **manual pan X/Y**
  sliders, or enable **"Pan toward mouse"** so the view slews wherever the cursor is
  (mouse left of centre → view drifts left, etc.). **Map size** controls how much
  room there is to pan (1.0 = no pan, world == screen). Zoom is still the cell-size
  slider.
- **Lush green jungle floor** — a mossy green ground (not bare brown dirt) carpeted
  in dense green growth, for a verdant, almost-jungle look
- **59 ground-cover types** baked into the grass atlas: ten lush-grass variations,
  tall grass, **wispy seed-head bent-grass**, dry grass, six wildflower colours,
  **true-blue cornflowers**, **tall purple lupine spikes**, **drooping violet
  bell-flowers**, **red-cap toadstools** and **brown forest mushrooms**, **tall
  sunflowers**, **yellow daffodils**, **magenta heather**, **pink foxglove spikes**,
  **reedy cattails**, **wild strawberries**, **moss-capped boulders**, **fallen
  mossy logs** and **old tree stumps** (woody forest structure), clover, ferns,
  shrubs, dandelion
  puffs, spotted mushrooms, berry bushes, flower patches, lavender, tulips,
  pampas-grass plumes, reeds/cattails, **glowing bioluminescent mushrooms**,
  **jungle plants** (broadleaf clumps, big jungle ferns, elephant-ear leaves), and
  a richer flower/clutter band — **daisies, poppies, tall fireweed spikes,
  buttercups, dense wildflower meadows**, plus non-plant ground litter (**scattered
  pebbles, fallen leaves and twigs**). Lush green growth dominates; the showy ones
  are accents.
- Two flammable layers (grass + trees), separate burn rates
- **Fire lifecycle / firepit feel** — every cell goes smolder → grow → blaze → die
  back to a long, glowing **bed of coals** that breathes, cracks, pops and slowly
  cools (cubic ease-in for the build). Flames are long-lived and the coal stage
  lingers, so a fire is something to *watch* — like staring into a campfire — and
  hot clusters occasionally **settle** with a shower of sparks (a log shifting)
- **Intensity-gated spread** — a cell can't ignite neighbours until its flame is
  established, so the fire front creeps organically instead of leaping
- **Blaze / conflagration heat** — cells with many burning neighbours flare larger
  and shift white-hot, so clustered fires read as a roaring blaze while lone flames
  stay a calmer orange; smoke, embers and flame plumes all scale with intensity + heat
- **Varied flickering flame tongues** — flames come in four shapes (standard,
  tall-wispy, wide-squat, curly licker) that **curl and lean with the wind**, with
  occasional taller flare-ups and a deep-red → orange → yellow → white-hot gradient
  over a soft warm glow, so the fire is pretty and lively to watch as it burns
- **Crackling sparks** — bright pinpoints pop off hot flames, arc upward and twinkle
  out, adding the snap and life of a real fire
- **Glowing ember motes** — drifting embers carry a soft warm halo and a gentle pulse,
  floating like living sparks of light
- **Living low/dying fire** — the smoldering, catching and burning-out phases each
  have their own character instead of being a dim copy of the blaze:
  - **smolder wisps + breathing** — a catching or dying cell curls thin grey smoke
    and pulses a dull red even with barely a flame
  - **cooling vs. growing colour** — a *building* fire brightens warm orange/yellow
    while a *dying* one cools to deep blood-red, so you can read growth from death
  - **glowing cracks + coal pops** — the burnt-out coal bed is laced with hot
    fissures and occasionally flares, snapping off crackling sparks and embers
  - **lively creeping front** — the advancing edge eating into fresh fuel glows
    brighter and throws extra sparks, like a real grass fire's leading line
  - a warm-hue spread + wide soft underglow still fuse neighbours into one
    continuous ember bed (no uniform red polka-dots)
- **Heat-shimmer distortion** — a subtle ripple above a blaze (off by default; it's
  a big effect, so it stays out of the way unless you turn it on)
- **Magic fire** (optional slider) — turn it up for coherent patches of cyan, green,
  purple, blue and pink flame, each with a matching coloured glow; 0 = normal fire
- Competing glows (fireflies, glowing mushrooms) are kept subtle so the fire is the star
- **A fire has to build before it spreads** — a cell only catches its neighbours
  once it's a fully established, roaring flame (high intensity gate) and spreads
  at a slow base rate, so fires **build gradually, creep, and naturally peter out**
  rather than racing across the screen. No artificial "forest-wide" cap — it's the
  fire's own physics.
- **Self-balancing forest** — because fires build slowly *and* burnt ground recovers
  on a faster timeline than the fire spreads, the forest holds a healthy equilibrium
  left on auto for hours (a mostly-green map with the odd slow, contained fire and
  its glowing coal-bed) instead of charring down — what you want from a 24/7 wallpaper
- **Multi-stage burn-scar lifecycle** — after the flames pass, the ground heals
  through a visible weathering sequence rather than snapping back to green:
  smouldering ash → **fresh black char** (charcoal chunks, ember still glowing in
  the cracks) → **cooled grey ash bed** (warmth gone, pale ash dusting) → **bare
  scorched earth** (burnt-umber cracked dirt) → **pioneer regrowth** (first moss
  and tiny green sprouts breaking through) → grass → sapling → tree. A scar visibly
  ages black → grey → brown → green over a couple of minutes, and the heal speed
  follows the **Regrowth rate** slider (turn regrowth off and scars linger as a
  barren scorched wasteland — also a natural firebreak).
- **Trees burn down, not out** — a burning tree's canopy is consumed by the fire:
  through the back half of its burn it **shrinks and chars to a dark skeleton**, so
  it visibly collapses to a charred stump before dropping to ash, rather than
  vanishing whole. Most visible at the dying edge of a fire where the flames have
  dropped low.
- **Firelight on the water** — a blaze near the river casts a warm, dancing shimmer
  onto the surface (flattened, surface-reflection ellipses, each at its own phase so
  it ripples rather than strobes), tying the fire and water — the two showpieces —
  together. Scales with the fire's intensity and fades a couple of cells from shore.
- **Wildflowers bloom after a fire** — burned ground regrows flower-rich, with
  fireweed, poppies and dense meadows taking over the nutrient-rich ash before the
  forest slowly reclaims it (just like a real post-fire bloom).
- Wind drives fire spread direction, smoke drift, ember flight, leaf drift, tree sway
- **Wind gusts** — occasional bursts that boost speed and shift direction (stronger in storms)
- Lightning bolts with screen flash, **persistent afterglow column**, RGB edge pulse
- Smoldering ash with heat-red glow
- **Ember comet trails** — embers leave a bright streak as they fly
- **Billowing smoke** — sooty and dark at the base, lightening and swirling with
  turbulence as it rises into clumpy, billowing plumes
- **Animated water sparkles** with travelling wave-band brightness
- **Six weather types** on a dry→wet spectrum: **Drought** (sunny/hot, warm tint,
  fire spreads fast) → Clear → Cloudy → Rain → **Monsoon** (heavy rain) →
  **Storm** (heavy rain + frequent lightning, cool dark tint). Control from the WE
  panel, or leave on Auto.
- **Sensible gradual weather** — Auto-cycle random-walks the spectrum one stage at
  a time (drought → clear → cloudy → rain → …), so it drifts naturally and never
  jumps; each transition eases in slowly
- **Weather affects fire** — drought multiplies spread ~1.65×, wet weather damps it,
  storms throw far more lightning; an atmospheric tint sells each mood
- **Directional weather fronts** — rain rolls across the screen left→right (or
  right→left / top→bottom / bottom→top / static), so one side gets wet before the other
- **Smooth escalation** — light rain ramps up gradually to a full thunderstorm
  (rain density + lightning frequency both scale continuously, no hard snaps)
- **Scattered rain** — drops spawn in coherent patches within the advancing front,
  with a Wallpaper Engine slider for clean curtain rain vs broken rain cells
- Rain extinguishes fires (with steam puffs); storms boost lightning frequency
- Cloud shadows drift across ground (off by default — toggle in properties)
- Bird flocks in V-formation that **steer around active fires**, each bird a
  gull-wing silhouette that **beats its wings** (droop → glide → upstroke)
- **Ground critters** — a few deer and rabbits graze and wander the clearings on
  walking/hopping legs and **bolt away when a fire gets near** (kept light: a
  handful of entities with a cheap local fire-scan, no pathfinding)
- **Daytime insects** — butterflies flutter over the meadows and dragonflies skim
  the water, peaking in spring/summer and gone by deep winter (the daytime
  counterpart to the night fireflies)
- Fireflies with pulsing glow (night/ambient)
- **Fish shadows** gliding under the water — dark fish with wagging tails that wander
  the ponds and rivers and turn back at the shore
- **Gusts stir the canopy** — when a wind gust passes, the trees briefly sway
  noticeably harder (a swell that rolls through and fades), so you feel the wind
  move through the forest
- **"Screen effects" toggle** — the full-screen weather tint, lightning flash and RGB
  edge glow are gentler by default and can be switched off entirely for a calm,
  easy-on-the-eyes desktop background
- **Audio reactivity** — fire glow + wind respond to system audio
  via `window.wallpaperRegisterAudioListener`
- **Mouse hover indicator** — dashed circle shows ignition radius before you click
- **Starter fire on first load** so the wallpaper opens with visible action
- RGB edge vignette feeds Wallpaper Engine's hardware lighting plugin
  (iCUE / Aura Sync / Razer Chroma / Razer Synapse / SignalRGB / OpenRGB)

## Performance

Comfortable at 60 / 120 / 144 fps on modest hardware. The wallpaper defaults to
a 120 fps cap so high-refresh desktops get smoother motion, while the sim keeps
fire spread, weather, regrowth and particle lifetimes at the same gameplay pace.

Measured frame times (1.5× world, ~1080p): **idle forest ~3.3 ms**, an active
wildfire ~4.7 ms, a calm forest with no wind ~1.6 ms, and a worst-case 700+ cell
inferno ~9 ms — all inside the 120 fps budget, with most of the day spent far
under it. Sim ticks run in well under 0.2 ms.

### 4K / high-DPI & frame pacing

The biggest cost is redrawing the swaying tree canopy, which scales with the
number of on-screen trees. Two things keep it smooth at 4K:

- **"Scale detail with resolution"** (on by default) grows the internal cell size
  with the display, so a 4K screen renders the same physical tree size and density
  as 1080p (≈¼ the trees) instead of 4× of everything rendered microscopically.
  Turn it off for true-pixel 4K (much heavier).
- **Amortized tree rebuild** — the canopy is refreshed **one horizontal band per
  frame** (clipped, redrawing any tree whose canopy reaches into the band) rather
  than the whole window at once, so there's no periodic rebuild spike. Tree
  changes (burn/sprout) ride the same banded path. Result: even on a weak GPU at
  4K, an active wildfire holds a flat ~9 ms/frame with no hitches; on the target
  RTX 2070 it's well under the 60 fps budget at every resolution.

Other 4K levers: raise **Zoom**, drop **Quality preset** to Medium/Low (Low also
widens the rebuild bands and drops the fire-glow bloom), or lower **Tree density**
/ **Map size**.

Key optimizations:
- **Two-tier baked layers**: the worldgen-static terrain (dirt, smooth water,
  paths, lily pads, rocks, grass) is baked once per world; the per-fire static
  (ash/scar) layer only refreshes its **visible window** (+ a pan margin), so a
  wildfire's scar updates cost the same whether the world is 1080p or 4K
- **Half-resolution water blur** — the one-time terrain bake builds the soft
  shoreline mask at half-res and upscales it, cutting the worldgen/resize/zoom
  hitch substantially (the blur was its single biggest cost)
- **Visible-region tree layer** — the swaying-tree layer only re-renders the
  on-screen window (+ a pan margin), not the whole oversized world, and blits
  trees 1:1 from a pre-scaled 20-bucket size atlas instead of scaling every
  drawImage (this alone cut typical frame time ~4×, and integer-snapped blits
  render the pixel-art trees crisper too)
- **Event-driven tree refreshes** — the sway is sampled from a 320-entry table
  every 2nd frame; when the wind is calm the layer only rebuilds on an actual
  change (a tree burns down, a sapling sprouts, the camera moves), so a still
  forest costs almost nothing to redraw
- **Visible-window effect passes** — fire glow, ash smoulder glow and water
  sparkles scan/draw only the on-screen cells; off-screen fire still simulates
  but costs no draw time
- **No per-frame string garbage** — the thousands of flame/ember/smoke/glow
  fills reuse interned `rgb()` strings (colour quantized to 16 levels, exact
  opacity via `globalAlpha`) instead of building `rgba(…)` strings every draw,
  eliminating the GC pauses that caused periodic micro-stutters
- **Pooled particles** — the two highest-volume systems (smoke, embers) recycle
  dead objects through a free-list instead of allocating fresh ones each spawn,
  so a roaring fire (hundreds of spawns/sec) adds almost nothing to the young-gen
  GC over a long run
- **Prebuilt glow sprites** — cloud shadows and mushroom halos blit a once-baked
  soft-radial canvas (tinted via `globalAlpha`) instead of building a fresh
  `createRadialGradient` every frame — faster *and* allocation-free
- **Staggered heavy rebuilds** — a static-scar rebuild and a swaying-tree band
  never run on the same frame (the band yields one frame, invisible at the sway
  rate), so the two biggest periodic jobs can't collide into a spike
- **Adaptive frame-budget governor** — watches the smoothed frame time and, *only*
  when frames run long for a sustained stretch, trims the cheapest-to-lose detail
  (water-sparkle count, smoke billow-lobe cadence, glow-blur radius) then restores
  the instant there's headroom. Capable hardware always runs full quality; a weak
  GPU gets a 60 fps floor with a near-invisible (~0.75 % mean-pixel) trade
- **Half-resolution fire-glow blur** — the bloom is blurred at half size and
  upscaled, a quarter of the blur work for the same soft glow
- **Strided regrowth** — the full-grid ash/regrowth pass visits ¼ of the cells
  per tick at 4× rates (statistically identical, quarter the scan cost)
- Opaque (`alpha:false`) main canvas + the world-sized scratch canvas kept out
  of the DOM compositor entirely
- Fixed-timestep simulation decoupled from render rate, with render
  interpolation for moving particles/fish/birds/rain/smoke
- In-place particle compaction (no `kept = []` allocations per frame)
- Sprite atlases for trees, grass, rocks; static rebuilds throttled

If you're on a weaker GPU, drop **Quality preset** to Medium (70% particles) or
Low (40% particles + several effects disabled). Use **Max FPS** = 30/60 for battery
laptops.

## Files

- `index.html` — the wallpaper (single file, no build step)
- `project.json` — Wallpaper Engine metadata + all user properties
- `preview.jpg` — Workshop thumbnail (1280×720)
- `package.json` — `npm run dev` for browser testing
- `.dev-server.js` — tiny zero-dep static server on port 5174 for browser testing
- `.claude/launch.json` — Claude Code preview configuration

The dev server is only for browser testing. Wallpaper Engine itself never runs Node.

## Local browser testing

```
npm run dev
# then open http://127.0.0.1:5174/
```

(Port 5174 is intentionally different from the `marimo-wallpaper` project's 5173
so both can run simultaneously.)

## Publishing to Steam Workshop

1. Open **Wallpaper Engine** → **Editor**.
2. Use **Create Wallpaper** → **From file or template** → **Web wallpaper**.
3. Pick the existing `index.html` and folder.
4. Confirm in the Editor that the wallpaper loads.
5. Test live by changing properties in the right panel — quality, weather,
   density, RGB edge mode, etc.
6. Take a fresh thumbnail in the Editor if `preview.jpg` doesn't capture your
   ideal moment (16:9 recommended).
7. Click **Steam Workshop** → **Publish**.
   - **Title**: Forest Wildfire
   - **Description**: see `project.json` — or write your own
   - **Tags**: Nature, Interactive, Relaxing, Pixel art
   - **Visibility**: Public / Friends Only / Hidden as you prefer
8. After publishing, the wallpaper appears in your Workshop subscriptions and
   can be applied like any other wallpaper.

### iCUE / Aura Sync / Razer Chroma integration

Wallpaper Engine has a built-in **RGB Lighting plugin**:

1. Open WE → **Settings** → **Plugins** tab.
2. Enable **RGB Lighting** if not already on.
3. Pick your hardware (iCUE, Aura, Razer, SignalRGB, OpenRGB, etc).
4. The plugin samples the wallpaper's screen-edge colors and pushes them to LEDs.

The wallpaper's **RGB edge mode** (enabled by default) bleeds fire and lightning
colors out to the screen borders specifically so this plugin picks up dramatic
warm orange during fires and cool blue-white during lightning. Your peripherals
will pulse with the wildfire.

You can tune **RGB edge strength** in the wallpaper properties if it's too
strong / weak for your hardware.

## Property reference

Organized into sections in the Wallpaper Engine picker:

| Section | Properties |
|---|---|
| Performance | Quality preset (Low/Medium/High/Ultra), Max FPS, Scale detail with resolution (4K) |
| Terrain | Tree density (lushness), Tree size, Grass density, Rock density, Zoom (smaller = more zoomed out / lusher), Rivers, Lily pads, Paths, Rocks, Elevation shading |
| Fire | Spread rate, Tree burn duration, Grass burn duration, Fire glow, Flame plumes, Embers, Smoke |
| Wind | Wind strength, Wind rotation speed, Wind streaks, Drifting leaves |
| Seasons | Season (auto/spring/summer/autumn/winter), Season length (auto-cycle), Winter snow intensity |
| Weather | Mode (auto/drought/clear/cloudy/rain/monsoon/storm), Front direction (LTR/RTL/TTB/BTT/static), Transition speed, Cloud shadows, Rain intensity, Rain scatter, Rain extinguishes |
| Auto-ignition & regrowth | Auto-ignite, Auto-ignite rate, Regrowth, Regrowth rate |
| Atmosphere | Birds, Fireflies, Fish shadows, Ground critters (deer/rabbits), Butterflies & dragonflies, Screen effects toggle, Wind gusts, Starter fire on load |
| Audio reactivity | React to system audio, Audio strength |
| RGB lighting | RGB edge mode, RGB edge strength |
| Interaction | Mouse interaction, Click ignition radius, Show ignition radius hint, Hold to pour fire, Right-click rain burst, Mouse-wheel zoom, Reset world |
| Debug | Debug overlay (FPS + particle counts) |

## License

MIT
