export const iranTheme = {
  id: "iran-premium-depth",
  family: "green-depth",
  font: {
    body: '"Segoe UI", Tahoma, "Noto Sans Arabic", "Vazirmatn", sans-serif',
    display: '"Segoe UI", Tahoma, "Noto Sans Arabic", "Vazirmatn", sans-serif',
    mono: '"IBM Plex Mono", "SFMono-Regular", ui-monospace, monospace',
  },
  color: {
    bg: "#07100f",
    bgTop: "#10231d",
    bgDeep: "#030706",
    foreground: "#f7f0e7",
    foregroundSoft: "#cabfaf",
    primary: "#2d8f68",
    primarySoft: "#60cca0",
    primaryStrong: "#b5ffe1",
    secondary: "#dfb56a",
    danger: "#a94848",
    surface: "rgba(7, 16, 15, 0.76)",
    surfaceStrong: "rgba(8, 13, 12, 0.93)",
    surfaceAccent: "rgba(19, 45, 38, 0.88)",
    borderSoft: "rgba(204, 240, 224, 0.12)",
    borderStrong: "rgba(255, 222, 167, 0.18)",
    gridLine: "rgba(223, 181, 106, 0.08)",
    glow: "rgba(71, 171, 126, 0.32)",
  },
  surface: {
    glass:
      "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.01)), rgba(8,16,15,0.76)",
    stage:
      "linear-gradient(145deg, rgba(16,40,32,0.9), rgba(8,15,13,0.94) 52%, rgba(46,111,86,0.18))",
    accent:
      "linear-gradient(145deg, rgba(30,68,54,0.92), rgba(14,24,22,0.94) 65%, rgba(223,181,106,0.16))",
    shell:
      "linear-gradient(180deg, rgba(9,18,16,0.9), rgba(5,9,8,0.94)), rgba(7,12,11,0.88)",
  },
  background: {
    base:
      "radial-gradient(circle at 14% 8%, rgba(62, 157, 116, 0.18), transparent 22%), radial-gradient(circle at 78% 12%, rgba(223, 181, 106, 0.14), transparent 18%), radial-gradient(circle at 82% 74%, rgba(169, 72, 72, 0.12), transparent 20%), linear-gradient(180deg, #0b1714 0%, #060b0a 44%, #030606 100%)",
    lattice:
      "linear-gradient(90deg, rgba(223,181,106,0.05) 1px, transparent 1px), linear-gradient(180deg, rgba(223,181,106,0.04) 1px, transparent 1px)",
    halo:
      "radial-gradient(circle, rgba(223,181,106,0.18) 0%, rgba(223,181,106,0.05) 38%, transparent 72%)",
  },
  shadow: {
    soft: "0 18px 48px rgba(0, 0, 0, 0.22)",
    card: "0 28px 56px rgba(0, 0, 0, 0.28)",
    hero: "0 38px 88px rgba(0, 0, 0, 0.34)",
    glow: "0 0 72px rgba(71, 171, 126, 0.18)",
  },
  motion: {
    durationFast: 220,
    durationBase: 420,
    durationSlow: 760,
    durationLoop: 5600,
    easingStandard: "easeOutCubic",
    easingEntrance: "cubicBezier(0.22, 1, 0.36, 1)",
    easingEmphasis: "easeOutExpo",
  },
} as const;

export type IranTheme = typeof iranTheme;

