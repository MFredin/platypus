// Procedural SVG generators for the Daybreak line-art motif system:
// concentric rings, radiating sunburst spokes, and cardinal tick marks.
// Kept as plain functions (not static assets) so stroke counts/radii can
// scale with context (hero emblem vs. small rank badge) from one source.

function polar(cx, cy, r, angleDeg) {
  const a = ((angleDeg - 90) * Math.PI) / 180;
  return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
}

function spokesMarkup(cx, cy, rInner, rOuter, count, longEvery, colorVar, longColorVar) {
  const lines = [];
  for (let i = 0; i < count; i++) {
    const angle = (360 / count) * i;
    const isLong = longEvery > 0 && i % longEvery === 0;
    const outer = isLong ? rOuter : rOuter - (rOuter - rInner) * 0.28;
    const [x1, y1] = polar(cx, cy, rInner, angle);
    const [x2, y2] = polar(cx, cy, outer, angle);
    const stroke = isLong ? longColorVar : colorVar;
    const width = isLong ? 1.4 : 0.75;
    lines.push(
      `<line x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}" stroke="${stroke}" stroke-width="${width}" />`
    );
  }
  return lines.join("\n");
}

function ticksMarkup(cx, cy, r, count, len, colorVar) {
  const lines = [];
  for (let i = 0; i < count; i++) {
    const angle = (360 / count) * i;
    const [x1, y1] = polar(cx, cy, r, angle);
    const [x2, y2] = polar(cx, cy, r + len, angle);
    lines.push(
      `<line x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}" stroke="${colorVar}" stroke-width="1.1" />`
    );
  }
  return lines.join("\n");
}

function ringsMarkup(cx, cy, radii, colorVar) {
  return radii
    .map(
      (r, i) =>
        `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${colorVar}" stroke-width="${i === 0 ? 1 : 0.75}" />`
    )
    .join("\n");
}

function spireMarkup(cx, baseY, heights, barWidth, gap, colorVar) {
  const totalWidth = heights.length * barWidth + (heights.length - 1) * gap;
  let x = cx - totalWidth / 2;
  const bars = heights.map((h) => {
    const rect = `<rect x="${x.toFixed(2)}" y="${(baseY - h).toFixed(2)}" width="${barWidth}" height="${h}" fill="${colorVar}" />`;
    x += barWidth + gap;
    return rect;
  });
  return bars.join("\n");
}

/**
 * Primary circular emblem: rising sun + spire silhouette, sunburst spokes,
 * concentric rings with cardinal ticks. Mirrors the Daybreak brand sigil.
 */
function emblem(size = 240) {
  const cx = 120;
  const cy = 120;
  const rings = ringsMarkup(cx, cy, [112, 100], "var(--gold)");
  const ticks = ticksMarkup(cx, cy, 104, 8, 6, "var(--bronze)");
  const spokes = spokesMarkup(cx, cy, 58, 96, 36, 3, "var(--bronze)", "var(--gold)");
  const spire = spireMarkup(
    cx,
    cy + 34,
    [10, 18, 14, 26, 34, 26, 14, 18, 10],
    5,
    2.5,
    "var(--void-black)"
  );

  return `<svg viewBox="0 0 240 240" width="${size}" height="${size}" class="emblem" role="img" aria-label="Daybreak emblem">
    ${rings}
    ${ticks}
    ${spokes}
    <circle cx="${cx}" cy="${cy}" r="40" fill="var(--pale-gold)" opacity="0.92" />
    <circle cx="${cx}" cy="${cy}" r="40" fill="none" stroke="var(--gold)" stroke-width="1.5" />
    ${spire}
  </svg>`;
}

/**
 * Slim horizontal section divider: a short sunburst burst centered on a line.
 */
function sunburstDivider(width = 240) {
  const cx = width / 2;
  const cy = 20;
  const spokes = spokesMarkup(cx, cy, 6, 18, 16, 4, "var(--bronze)", "var(--gold)");
  return `<svg viewBox="0 0 ${width} 40" width="${width}" height="40" class="divider" role="presentation" aria-hidden="true">
    <line x1="0" y1="${cy}" x2="${cx - 22}" y2="${cy}" stroke="var(--bronze)" stroke-width="1" />
    <line x1="${cx + 22}" y1="${cy}" x2="${width}" y2="${cy}" stroke="var(--bronze)" stroke-width="1" />
    ${spokes}
    <circle cx="${cx}" cy="${cy}" r="3" fill="var(--gold)" />
  </svg>`;
}

/**
 * Rank badge whose ornament density scales with tier (0 = Recruit .. 6 = Founder),
 * per the style guide's "richness scales with rank" rule.
 */
function ringBadge(tier = 0, size = 56) {
  const cx = 40;
  const cy = 40;
  const t = Math.max(0, Math.min(6, tier));
  const ringRadii = t >= 5 ? [34, 27, 20] : t >= 2 ? [34, 26] : [30];
  const spokeCount = 8 + t * 4;
  const longEvery = t >= 3 ? 4 : 0;
  const showTicks = t >= 3;
  const glow = t >= 5;

  const rings = ringsMarkup(cx, cy, ringRadii, "var(--gold)");
  const spokes = spokesMarkup(
    cx,
    cy,
    ringRadii[ringRadii.length - 1] - 10,
    ringRadii[0] + 4,
    spokeCount,
    longEvery,
    "var(--bronze)",
    "var(--gold)"
  );
  const ticks = showTicks ? ticksMarkup(cx, cy, ringRadii[0] + 6, 8, 3, "var(--bronze)") : "";

  return `<svg viewBox="0 0 80 80" width="${size}" height="${size}" class="rank-badge" data-tier="${t}" role="presentation" aria-hidden="true">
    ${rings}
    ${ticks}
    ${spokes}
    <circle cx="${cx}" cy="${cy}" r="6" fill="var(--pale-gold)" ${glow ? 'class="rank-badge__glow"' : ""} />
  </svg>`;
}

module.exports = { emblem, sunburstDivider, ringBadge };
