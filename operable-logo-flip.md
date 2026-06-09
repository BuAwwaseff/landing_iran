# MELBET Logo Variant: Flip

Status: approved  
Use with: [operable-logo-base.md](./operable-logo-base.md)

## Intent

This variant flips each letter around the Y axis in sequence. It is cleaner and more compact than `slot`, so it works well when the logo needs motion without dominating the layout.

Best fit:
- compact hero tops
- promo bars
- navigation-adjacent placements with enough room for motion

Less ideal:
- ultra-small lockups under the normal nav size
- layouts that already have heavy 3D motion nearby

## Apply

- Add `melbet-logo--flip` to the main wrapper.
- Keep `melbet-logo--glow` if the page uses the standard luminous treatment.
- Keep `backface-visibility: hidden` on every letter group.
- Do not combine with `slot` or `twirl`.

## Variant CSS

```css
.melbet-logo--flip .melbet-logo__letter {
  animation: melbetLetterFlip 4.2s cubic-bezier(0.22, 1, 0.36, 1) infinite;
  animation-delay: calc(var(--melbet-letter-index, 0) * 110ms);
}

@keyframes melbetLetterFlip {
  0%,
  12%,
  100% {
    transform: rotateY(0deg);
  }

  28% {
    transform: rotateY(180deg);
  }

  42% {
    transform: rotateY(360deg);
  }

  50% {
    transform: rotateY(0deg);
  }
}
```

## Operable Notes

- This variant depends on hidden backfaces. If you can see mirrored letter shapes, that base rule is missing.
- The sequence should read like a clean left-to-right card flip, not a chaotic spin.
- Keep the logo on a surface with enough contrast because the silhouette gets thinner at mid-flip.
- If the page is especially dense, this is the safest animated choice among the three approved variants.

## Done When

- Each letter flips horizontally in order from `M` to `T`.
- The letters return to their front face before the next cycle.
- No mirrored backfaces are visible.
- The motion feels crisp rather than elastic.
