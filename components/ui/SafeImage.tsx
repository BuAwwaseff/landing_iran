"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { cn } from "@/lib/cn";
import type { MediaAsset } from "@/lib/site-types";

type SafeImageProps = {
  media: MediaAsset;
  className?: string;
  priority?: boolean;
};

function toAspectRatio(ratio: string) {
  const [width, height] = ratio.split(":").map(Number);
  if (!width || !height) return "1 / 1";
  return `${width} / ${height}`;
}

export default function SafeImage({ media, className, priority }: SafeImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const ratio = useMemo(() => toAspectRatio(media.ratio), [media.ratio]);

  return (
    <div
      className={cn("safe-image", `safe-image--${media.variant}`, className)}
      style={{ aspectRatio: ratio }}
    >
      <div className="safe-image__fallback" aria-hidden="true">
        <span className="safe-image__glow safe-image__glow--emerald" />
        <span className="safe-image__glow safe-image__glow--gold" />
        <span className="safe-image__grid" />
        <span className="safe-image__motif" />
      </div>

      {media.src ? (
        <Image
          alt={media.decorative ? "" : media.alt}
          aria-hidden={media.decorative ? true : undefined}
          className={cn("safe-image__img", loaded && !failed && "is-loaded")}
          fill
          loading={priority ? "eager" : "lazy"}
          onError={() => setFailed(true)}
          onLoad={() => setLoaded(true)}
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          src={media.src}
          style={{ objectFit: media.fit }}
        />
      ) : null}
    </div>
  );
}
