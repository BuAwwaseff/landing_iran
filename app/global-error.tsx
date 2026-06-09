"use client";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  return (
    <html dir="rtl" lang="fa">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          padding: "2rem",
          background:
            "linear-gradient(180deg, rgba(7, 16, 15, 1) 0%, rgba(5, 11, 10, 1) 100%)",
          color: "#f7f0e7",
          fontFamily: "\"Segoe UI\", sans-serif",
        }}
      >
        <div
          style={{
            width: "min(32rem, 100%)",
            display: "grid",
            gap: "1rem",
            padding: "1.5rem",
            border: "1px solid rgba(223, 181, 106, 0.16)",
            borderRadius: "1.5rem",
            background: "rgba(8, 14, 13, 0.9)",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.24)",
          }}
        >
          <strong style={{ fontSize: "1.05rem", letterSpacing: "0.08em" }}>IRAN ROUTE</strong>
          <h1 style={{ margin: 0, fontSize: "1.9rem", lineHeight: 1.05 }}>
            Something went wrong while loading the page.
          </h1>
          <p style={{ margin: 0, color: "rgba(247, 240, 231, 0.74)", lineHeight: 1.7 }}>
            The content is still in place. Try reloading this route after the manifest resets.
          </p>
          {error.digest ? (
            <p
              style={{
                margin: 0,
                color: "rgba(247, 240, 231, 0.56)",
                fontSize: "0.82rem",
                letterSpacing: "0.08em",
              }}
            >
              Digest: {error.digest}
            </p>
          ) : null}
          <button
            onClick={() => reset()}
            style={{
              width: "fit-content",
              minHeight: "2.9rem",
              padding: "0.75rem 1.1rem",
              border: "1px solid rgba(223, 181, 106, 0.2)",
              borderRadius: "999px",
              background: "rgba(223, 181, 106, 0.12)",
              color: "#f7f0e7",
              cursor: "pointer",
            }}
            type="button"
          >
            Reload route
          </button>
        </div>
      </body>
    </html>
  );
}
