"use client";

import { useRef, useState } from "react";

export default function SoundtrackPlayer({
  name,
  tracks,
}: {
  name: string;
  tracks: { url: string; title: string }[];
}) {
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [trackIdx, setTrackIdx] = useState(0);
  const [muted, setMuted] = useState(false);
  const [missing, setMissing] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const track = tracks[trackIdx % tracks.length];

  function playPause() {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio
        .play()
        .then(() => {
          setPlaying(true);
          setMissing(false);
        })
        .catch(() => setMissing(true));
    } else {
      audio.pause();
      setPlaying(false);
    }
  }

  function nextTrack() {
    const wasPlaying = playing;
    setTrackIdx((i) => (i + 1) % tracks.length);
    setMissing(false);
    if (wasPlaying) {
      // Let the src swap via key change, then play once loaded.
      requestAnimationFrame(() => audioRef.current?.play().catch(() => setMissing(true)));
    }
  }

  if (!tracks.length) return null;

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open soundtrack"
        style={{
          position: "fixed",
          bottom: "1.5rem",
          right: "1.5rem",
          zIndex: 9999,
          height: "56px",
          padding: "0 1.1rem 0 0.9rem",
          borderRadius: "28px",
          background: "linear-gradient(135deg, #2c241a 0%, #1a1611 100%)",
          color: "#f4c971",
          border: "2px solid #d4a44a",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          fontFamily: "var(--font-cormorant), serif",
          fontSize: "0.95rem",
          fontStyle: "italic",
          boxShadow: "0 6px 20px rgba(0,0,0,0.5)",
        }}
      >
        <span style={{ fontSize: "1.3rem", lineHeight: 1 }}>{playing ? "♫" : "♪"}</span>
        <span>Soundtrack</span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Soundtrack player"
          style={{
            position: "fixed",
            bottom: "5.5rem",
            right: "1.5rem",
            zIndex: 9998,
            width: "320px",
            maxWidth: "calc(100vw - 3rem)",
            background: "rgba(15, 13, 9, 0.97)",
            color: "#f0e6d4",
            border: "1px solid #d4a44a",
            borderRadius: "12px",
            padding: "1.25rem",
            fontFamily: "var(--font-eb-garamond), Georgia, serif",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
            <span style={{ fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#d4a44a" }}>
              Soundtrack
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              style={{ background: "none", border: "none", color: "#5a5247", fontSize: "1.3rem", cursor: "pointer", lineHeight: 1 }}
            >
              &times;
            </button>
          </div>
          <div style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.1rem", marginBottom: "0.25rem", color: "#f4c971" }}>
            {name}
          </div>
          <div style={{ fontStyle: "italic", fontSize: "0.9rem", color: "#ada290", marginBottom: "0.9rem" }}>{track.title}</div>

          <audio
            key={track.url}
            ref={audioRef}
            src={track.url}
            preload="none"
            onEnded={nextTrack}
            onError={() => setMissing(true)}
          />

          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <button onClick={playPause} style={playerBtnStyle(true)}>
              {playing ? "⏸ Pause" : "▶ Play"}
            </button>
            {tracks.length > 1 && (
              <button onClick={nextTrack} style={playerBtnStyle(false)}>
                ⏭ Next
              </button>
            )}
            <span style={{ flex: 1 }} />
            <button
              onClick={() => {
                if (audioRef.current) audioRef.current.muted = !muted;
                setMuted((m) => !m);
              }}
              style={playerBtnStyle(false)}
            >
              {muted ? "🔇" : "🔊"}
            </button>
          </div>
          {missing && (
            <p style={{ fontStyle: "italic", fontSize: "0.85rem", color: "#c97c3e", marginTop: "0.75rem" }}>
              Couldn&apos;t play this track right now.
            </p>
          )}
        </div>
      )}
    </>
  );
}

function playerBtnStyle(primary: boolean): React.CSSProperties {
  return {
    background: primary ? "#d4a44a" : "transparent",
    color: primary ? "#15110a" : "#f0e6d4",
    border: "1px solid #5a5247",
    borderColor: primary ? "#d4a44a" : "#5a5247",
    padding: "0.45rem 0.8rem",
    borderRadius: "6px",
    cursor: "pointer",
    fontFamily: "inherit",
    fontSize: "0.9rem",
    fontWeight: primary ? 600 : 400,
  };
}
