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
- **Six kinds of fire, not one orange** — every burning cell is given a **style** when it
  ignites, picked from a slow noise field so styles come in organic patches (with a little
  speckle where they meet): **classic** orange; **ember** (deep red, low and slow, breathing
  like a coal bed, throws embers freely); **golden blaze** (tall, fast, white-hot at the
  heart, spits sparks); **gas flame** (a blue-white body with an orange rim, narrow and
  steady); **copper** (the green-teal of burning copper salts, licking sideways); and a rare
  **violet**. Each has its own colour for the glow, flame tongues, embers and sparks (blue
  fire even reflects blue on the water), its own tongue shapes and its own tempo, and all of
  them cool to the same dull coals at the end. **Fire variety** sets how much of a fire is
  non-classic (0 = all classic orange); Magic fire still overrides it for fantasy colours.
- **Flames that don't move in lockstep** — every cell flickers at its **own** two
  frequencies (it used to be one shared pair, so a fire beat at a single rhythm), every
  flame tongue runs at its own speed, embers and sparks pulse at their own rates, and a
  short-wavelength ripple travels across the fire so neighbours are always out of step.
  Measured on a 30-cell cluster, the flicker's spectral lock-in drops about 4×.
- **More flame shapes** — beyond the four below, **forked** flames (two prongs leaning apart)
  and low **rolling** flames, each style favouring its own.
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
- **Natural fires are lightning strikes — only when it's raining.** Dry, clear and
  cloudy skies start no fires on their own (no clear-sky lightning); rain throws the
  occasional strike, monsoon more, storms the most. So left on its own the forest
  stays calm and green, with the odd wildfire rolling in on a passing storm — you
  start the rest yourself by clicking. (Toggle/rate under **Natural fires** in the WE
  properties.)
- **Living sky** — the weather has two layers. The wet↔dry stages above drive rain,
  lightning and fire; on top of them sits a **mood** that changes the light and the air:
  - **Fog** — drifting banks of mist (two parallax layers) that soften every contrast,
    plus wisps of mist rising off the ponds; flames glow *through* it and bloom
    brighter; wind stills, fireflies drift out. Meets a sunset as golden, god-ray-lit mist.
  - **Windy** — a gale: trees sway hard, leaves swirl and eddy, pale dandelion seeds
    stream past, wind streaks thicken, gusts come far more often, clouds race.
  - **Sunset** — golden light with a low sun's glare bleeding in from a corner and
    **god rays** fanning across the forest, each breathing on its own rhythm; the water
    throws back more, warmer glints (and it's likelier right after rain).
  - **Night** — a deep moonlit blue with a cool moon-glare, silvery water glints,
    fireflies swarming, mushrooms glowing, fire blazing against the dark, and the odd
    **shooting star**. Selectable any time; in the auto-cycle only if you opt in.
  Each is a continuous level that eases in **and** out through an S-curve (it starts
  gently, swells, then settles) over ~25–60 s — **nothing snaps**: the fire-spread
  multiplier, drought haze, wind and rain escalation glide too (they used to jump when
  the weather changed stage).
- **Moods flow into each other** — a sunset-to-night handoff passes through a violet
  **dusk** glow neither mood has alone (and the same going back to dawn). In the
  auto-cycle moods follow a day's logic: sunrise comes through mist, dusk follows
  sunset, a night ends in dawn fog.
- **Drifting cloud shadows** (on by default) — soft dark masses slide across the forest
  with the wind, falling on the canopy as well as the ground. A faint dapple under a
  clear sky, heavy as cover builds, gone at night. One scrolling noise texture, so it's
  nearly free at any resolution.
- **Rain ripples** — raindrops ring the ponds and rivers with widening circles.
- **Rainbow** — after a storm clears, a soft rainbow rises over the forest, lingers a
  minute or two, and fades.
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
- **Day / night cycle** — a sun and moon travel the sky; sunrise/sunset gold and a
  violet dusk glow blend with the weather moods. In Wallpaper Engine choose **Cycle**
  (set the minutes per day), **Real clock** (follows your PC), **Fixed** (hold a time)
  or **Off**; the *Time of day* slider sets the time instantly (the sky glides there) and
  *Night darkness* sets how deep night gets
- **Better bare ground** — dirt is painted as blended soil patches (loam, clay, sand,
  damp near water) with pebbles, cracks, leaf litter and roots; paths get their own detail
- **Grass regrows in visible stages** — bare soil → sparse sprouts → tufts → full grass
- **Fire glow merged into the flame pass** — the whole fire is one instanced draw and
  one composite instead of two, trimming a GL→2D handoff every frame
- **Audio reactivity** — fire glow + wind respond to system audio
  via `window.wallpaperRegisterAudioListener`
- **Mouse hover indicator** — dashed circle shows ignition radius before you click
- **Starter fire on first load** so the wallpaper opens with visible action
- RGB edge vignette feeds Wallpaper Engine's hardware lighting plugin
  (iCUE / Aura Sync / Razer Chroma / Razer Synapse / SignalRGB / OpenRGB)

## Performance

Built **GPU-first**: Wallpaper Engine runs mostly on gaming rigs, so the heavy,
per-frame drawing is offloaded to the graphics card and the CPU is left to do
what it's good at — simulate the fire. The CPU runs the cellular-automaton fire
sim and packs compact buffers; the GPU draws everything else.

The wallpaper defaults to a 120 fps cap so high-refresh desktops get smoother
motion, while the sim keeps fire spread, weather, regrowth and particle lifetimes
at the same gameplay pace regardless of frame rate.

### GPU-accelerated rendering (instanced WebGL, with a 2D fallback)

The three things that used to dominate the frame — the **fire glow**, the
**dynamic fire effects** (flame tongues, sparks, embers, smoke) and the **entire
tree canopy** — are now each a **single instanced WebGL draw call** instead of
thousands of individual 2D fills. A screen-filling blaze that once submitted tens
of thousands of draw calls from one CPU core (the old stutter wall) is now a
handful of GPU draws, composited over the 2D terrain.

- **Glow + effects** — every flame blob is packed into one buffer and drawn as a
  soft additively-blended sprite (its falloff *is* the bloom, so there's no
  separate blur pass). Smoke is a second alpha-blended pass.
- **Trees** — the whole canopy is one instanced textured-quad draw from a pre-baked
  size/variant atlas; **sway, growth and the burning-tree char/shrink are
  per-instance**. This replaced the old cached-canvas canopy that had to be
  *rebuilt* in bands as the trees swayed — the rebuild was the source of the 4K/5K
  frame-time spikes, and it's gone (no world-sized tree canvas to rebuild or keep
  in RAM either).
- **Guarded fallback** — every GPU path is feature-detected and falls straight
  back to the original 2D renderer if WebGL or instancing is unavailable, **and on
  GPU context loss** (driver TDR/reset, common on Windows) it drops cleanly to 2D
  for the session. Same look either way; the 2D path is the proven original code.

### Adaptive quality & GPU matching

- **Quality preset** defaults to **High** and can be set to Low / Medium / High /
  Ultra, or **Auto** — which reads the GPU from the WebGL renderer string and picks
  a tier (RTX / modern Radeon / Arc → Ultra, GTX 10/16-series → High, integrated →
  Medium, software raster → Low).
- **Refresh-aware frame pacing** — the display's real refresh rate (or Wallpaper
  Engine's own FPS limit) is learned from the vsync-aligned frame timestamps. The
  **Max FPS** cap holds its average rate on any monitor (120 on a 144 Hz screen is
  really 120, not 72), and is skipped when the cap is at or above the refresh.
- **Adaptive frame-budget governor** — watches the smoothed frame time against what
  the screen can actually deliver and, *only* when frames run long for a sustained
  stretch, trims the cheapest-to-lose detail.
  This is the robust "auto" that works on **any** GPU regardless of vendor string:
  capable hardware always runs full quality; a weak GPU under a max blaze sheds
  gracefully and recovers the instant there's headroom.
- **Max-fire glow LOD** — a *screen-filling* inferno is still tens of thousands of
  large additive blobs (a fill-rate wall even for one draw call), so above a high
  cell-count threshold the GPU limits the invisible extra glow layers and coarsens
  the main flame (neighbours' enlarged glow keeps it seamless), pulled in further
  by the governor when frames slip. Normal and even large fires are untouched —
  full quality.

### Measured frame times

Real hardware (GTX 1050 Ti, the weakest target), whole frame = sim + render:

| Scene | Frame time |
|---|---|
| Idle forest, 4K | ~2 ms (sim 0.3 ms) |
| Normal wildfire, 1080p–1440p | ~2–5 ms |
| **Screen-filling inferno, 4K** (~17k burning cells) | **~9 ms median** (sim 3 + render 6) |
| **Its burn-down** (whole screen a glowing coal bed + ageing scars) | **~9 ms median, 12.6 ms p90** |
| 5K, active fire | ~7–10 ms |

The worst case used to be the *aftermath*: once a huge fire burned down, every
cell was a hot coal drawn with CPU canvas calls and the scar layer re-baked the
whole view every few frames — 30–600 ms frames. The coal bed is now one instanced
GPU draw and the scar layer re-bakes only the 16×16-cell tiles that changed,
under a per-frame time budget. The fire simulation itself was made ~4× faster
(proven bit-identical to the old code with a seeded RNG). Net: 100+ fps through a
screen-filling 4K fire and its burn-down on the weakest target GPU. Validated by a
pre-upload smoke test: no errors across
1080p→5K / ultrawide / portrait, both render paths, all presets, all
seasons/weather, no flicker, stable memory (instance buffers and particle pools
plateau — no leak), and clean recovery from a forced WebGL context loss.

### Start-up & scaled displays

- **Fast load** — Wallpaper Engine hands over every setting at once on load; the
  world is now generated **once** for the whole batch (it used to be ~9 times,
  ~8 s of frozen screen at 4K), and the ground texture is rasterised directly
  instead of via ~550k canvas calls. A 4K load now builds the world in ~0.3 s.
  Resizes are debounced, and a hidden / 0×0 viewport no longer wipes the world.
- **Native resolution on scaled displays** — on a 4K monitor at 150–200% Windows
  scaling the wallpaper renders at full device resolution (devicePixelRatio
  aware) instead of half-resolution stretched; pointer input is mapped to match.

### RAM

The cached ground layers (terrain / water / paths / ash) are world-sized; their
area is capped (~64 MP) so a large **Map size** at 4K/5K can't exhaust memory, and
on the GPU path the now-unused 2D glow/tree canvases aren't allocated. Comfortable
on the 16 GB+ machines this targets.

### Other levers & CPU-side optimizations

4K levers if you want even more headroom: raise **Zoom**, drop **Quality preset**,
or lower **Tree density** / **Map size**. **"Scale detail with resolution"** (on by
default) grows the internal cell size with the display so a 4K screen renders the
same physical density as 1080p instead of 4× the work.

- **Two-tier baked terrain** — the worldgen-static ground (dirt, smooth water,
  paths, lily pads, rocks, grass) is baked once per world; the per-fire ash/scar
  layer re-bakes only the **tiles a change touched** (in view, time-budgeted), so
  its cost follows how much changed, not how much has burned. Half-resolution
  shoreline blur cuts the one-time bake hitch.
- **No per-frame string garbage** — the flame/ember/smoke fills reuse interned
  `rgb()` strings (colour quantized to 16 levels, exact opacity via `globalAlpha`)
  instead of building `rgba(…)` strings every draw, eliminating GC micro-stutters.
- **Pooled particles** — smoke and embers recycle dead objects through a free-list
  instead of allocating per spawn, so a roaring fire adds almost nothing to GC.
- **Strided regrowth** — the ash/regrowth grid pass visits ¼ of the cells per tick
  at 4× rates (statistically identical, a quarter of the scan cost).
- **Time-based pacing** — sway, sparkle and rebuild cadences are gated by
  wall-clock time, not frame count, so a 144/240 Hz display doesn't pay 2–4× for
  motion it can't perceive between frames.
- Fixed-timestep simulation decoupled from render rate, with render interpolation
  for moving particles/fish/birds/rain/smoke; in-place particle compaction.

If you're on a weaker GPU, leave Quality on **Auto** (or drop to **Medium**), and
use **Max FPS** = 30/60 for battery laptops.

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
| Performance | Quality preset (Auto/Low/Medium/High/Ultra — Auto matches your GPU), Max FPS, Scale detail with resolution (4K) |
| Terrain | Tree density (lushness), Tree size, Grass density, Rock density, Zoom (smaller = more zoomed out / lusher), Rivers, Lily pads, Paths, Rocks, Elevation shading |
| Fire | Spread rate, Tree burn duration, Grass burn duration, Fire glow, Flame plumes, Embers, Smoke, Magic fire, Fire variety |
| Wind | Wind strength, Wind rotation speed, Wind streaks, Drifting leaves |
| Seasons | Season (auto/spring/summer/autumn/winter), Season length (auto-cycle), Winter snow intensity |
| Weather | Mode (auto/drought/clear/cloudy/rain/monsoon/storm/fog/windy/sunset/night), Front direction (LTR/RTL/TTB/BTT/static), Transition speed, Drifting cloud shadows, Include night in auto-cycle, Rain intensity, Rain scatter, Rain extinguishes |
| Auto-ignition & regrowth | Auto-ignite, Auto-ignite rate, Regrowth, Regrowth rate |
| Atmosphere | Birds, Fireflies, Fish shadows, Ground critters (deer/rabbits), Butterflies & dragonflies, Screen effects toggle, Wind gusts, Starter fire on load |
| Audio reactivity | React to system audio, Audio strength |
| RGB lighting | RGB edge mode, RGB edge strength |
| Interaction | Mouse interaction, Click ignition radius, Show ignition radius hint, Hold to pour fire, Right-click rain burst, Mouse-wheel zoom, Reset world |
| Debug | Debug overlay (FPS + particle counts) |

## License

MIT
