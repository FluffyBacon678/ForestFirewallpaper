# Forest Wildfire — Wallpaper Engine wallpaper

An interactive top-down wildfire wallpaper. Click anywhere to spark a fire — flames
spread through grass and trees with the wind, embers fly, smoke billows, lightning
strikes during storms, rain extinguishes flames, and the forest slowly regrows.

Features:
- Procedural noise terrain (biomes, clearings, dense pockets)
- Rivers, ponds, lily pads with flowers, shoreline tree reflections —
  smooth blurred-mask shorelines (deep water → shallow rim, no blocky/circle edges)
- Dirt paths winding through forest, scattered rocks, elevation shading
- **Detailed side-view trees** (RimWorld-style) that stand up from the ground with
  visible trunks and dappled, textured canopies — 5 species: layered conifers,
  leafy green oaks, white-trunk **birch**, warm-gold **maple**, fiery **autumn**,
  and bare **dead** trees. Drawn back-to-front so nearer trees overlap the ones
  behind for real depth, with a gentle per-tree sway.
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
- **37 ground-cover types** baked into the grass atlas: ten lush-grass variations,
  tall grass, dry grass, six wildflower colours, clover, ferns, shrubs, dandelion
  puffs, spotted mushrooms, berry bushes, flower patches, lavender, tulips,
  pampas-grass plumes, reeds/cattails, **glowing bioluminescent mushrooms**, and
  **jungle plants** (broadleaf clumps, big jungle ferns, elephant-ear leaves).
  Lush green growth dominates; the showy ones are accents.
- Two flammable layers (grass + trees), separate burn rates
- **Fire lifecycle** — every cell goes smolder → grow → blaze → die back to embers
  (cubic ease-in): a new flame starts as a tiny ~15%-size faint ember, stays small
  for ~1 second, then builds into the full blaze over the next second
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
- **Heat-shimmer distortion** — a subtle ripple above a blaze (off by default; it's
  a big effect, so it stays out of the way unless you turn it on)
- **Magic fire** (optional slider) — turn it up for coherent patches of cyan, green,
  purple, blue and pink flame, each with a matching coloured glow; 0 = normal fire
- Competing glows (fireflies, glowing mushrooms) are kept subtle so the fire is the star
- Spread is tuned for the lush forest so fires **creep and stay contained** rather
  than engulfing the screen (slower base spread + rarer ember spot-fires)
- **Burn-scar lifecycle** — after the flames pass, a cell goes through smouldering
  ash → a lingering **charred-earth scar** (cold blackened ground) → bare dirt →
  regrown grass → sapling → tree, so a fire leaves a visible black scar that slowly
  heals back to green over minutes. Charred ground also acts as a natural firebreak.
- Wind drives fire spread direction, smoke drift, ember flight, leaf drift, tree sway
- **Wind gusts** — occasional bursts that boost speed and shift direction (stronger in storms)
- Lightning bolts with screen flash, **persistent afterglow column**, RGB edge pulse
- Smoldering ash with heat-red glow
- **Ember comet trails** — embers leave a bright streak as they fly
- **Smoke with per-particle color variety** (light from grass, dark from trees)
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
- Bird flocks in V-formation that **steer around active fires**
- Fireflies with pulsing glow
- **Fish shadows** gliding under the water — dark fish with wagging tails that wander
  the ponds and rivers and turn back at the shore
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

Key optimizations:
- **Two-tier baked layers**: the worldgen-static terrain (dirt, smooth water,
  paths, lily pads, rocks, grass) is baked once per world; the per-fire static
  layer (terrain blit + ash) rebuilds in well under a millisecond, so wildfires
  never hitch even though the smooth-water blur costs ~12 ms (world regen only)
- **Visible-region tree layer** — the swaying-tree layer only re-renders the
  on-screen window (+ a pan margin), not the whole oversized world, and blits
  trees 1:1 from a pre-scaled 20-bucket size atlas instead of scaling every
  drawImage (this alone cut typical frame time ~4×, and integer-snapped blits
  render the pixel-art trees crisper too)
- **Visible-window effect passes** — fire glow, ash smoulder glow and water
  sparkles scan/draw only the on-screen cells; off-screen fire still simulates
  but costs no draw time
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
| Performance | Quality preset (Low/Medium/High/Ultra), Max FPS |
| Terrain | Tree density (lushness), Tree size, Grass density, Rock density, Zoom (smaller = more zoomed out / lusher), Rivers, Lily pads, Paths, Rocks, Elevation shading |
| Fire | Spread rate, Tree burn duration, Grass burn duration, Fire glow, Flame plumes, Embers, Smoke |
| Wind | Wind strength, Wind rotation speed, Wind streaks, Drifting leaves |
| Weather | Mode (auto/drought/clear/cloudy/rain/monsoon/storm), Front direction (LTR/RTL/TTB/BTT/static), Transition speed, Cloud shadows, Rain intensity, Rain scatter, Rain extinguishes |
| Auto-ignition & regrowth | Auto-ignite, Auto-ignite rate, Regrowth, Regrowth rate |
| Atmosphere | Birds, Fireflies, Fish shadows, Screen effects toggle, Wind gusts, Starter fire on load |
| Audio reactivity | React to system audio, Audio strength |
| RGB lighting | RGB edge mode, RGB edge strength |
| Interaction | Mouse interaction, Click ignition radius, Show ignition radius hint, Reset world |
| Debug | Debug overlay (FPS + particle counts) |

## License

MIT
