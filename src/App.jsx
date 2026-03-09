import { useState, useEffect, useCallback, useRef } from "react";

const BREAKPOINT_SMALL = 600;

function useWindowSize() {
  const [size, setSize] = useState({ w: window.innerWidth, h: window.innerHeight });
  useEffect(() => {
    const onResize = () => setSize({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return size;
}

/* ─── Palette ─── */
const G = {
  blue: "#4285F4", red: "#EA4335", yellow: "#FBBC04", green: "#34A853",
  bg: "#FFFFFF", surface: "#F8F9FA", surfaceHover: "#F1F3F4",
  card: "#FFFFFF", border: "#E0E0E0", text: "#202124", textDim: "#5F6368",
  shadow: "0 1px 3px rgba(60,64,67,0.16), 0 1px 2px rgba(60,64,67,0.08)",
  shadowLg: "0 4px 12px rgba(60,64,67,0.15), 0 1px 4px rgba(60,64,67,0.1)",
  radius: 24,
};

/* ─── Icons ─── */
const MediaIconFull = () => (
  <svg viewBox="0 0 48 48" fill="none" style={{ width: "100%", height: "100%" }}>
    <rect x="4" y="8" width="40" height="28" rx="4" fill={G.red} opacity=".12" />
    <rect x="4" y="8" width="40" height="28" rx="4" stroke={G.red} strokeWidth="2" fill="none" />
    <polygon points="20,15 20,29 32,22" fill={G.red} />
    <rect x="12" y="40" width="24" height="2.5" rx="1.25" fill={G.red} opacity=".25" />
  </svg>
);
const CameraIconFull = () => (
  <svg viewBox="0 0 48 48" fill="none" style={{ width: "100%", height: "100%" }}>
    <rect x="4" y="14" width="40" height="26" rx="4" fill={G.blue} opacity=".12" />
    <rect x="4" y="14" width="40" height="26" rx="4" stroke={G.blue} strokeWidth="2" fill="none" />
    <path d="M16 14V11a2 2 0 012-2h12a2 2 0 012 2v3" stroke={G.blue} strokeWidth="2" />
    <circle cx="24" cy="27" r="7" stroke={G.blue} strokeWidth="2" fill="none" />
    <circle cx="24" cy="27" r="3" fill={G.blue} />
  </svg>
);
const QuranIconFull = () => (
  <svg viewBox="0 0 48 48" fill="none" style={{ width: "100%", height: "100%" }}>
    <path d="M10 8h4c6 0 10 3 10 8v24c0-4-3-7-8-7H10V8z" fill={G.green} opacity=".12" />
    <path d="M10 8h4c6 0 10 3 10 8v24c0-4-3-7-8-7H10V8z" stroke={G.green} strokeWidth="2" fill="none" />
    <path d="M38 8h-4c-6 0-10 3-10 8v24c0-4 3-7 8-7h6V8z" fill={G.green} opacity=".12" />
    <path d="M38 8h-4c-6 0-10 3-10 8v24c0-4 3-7 8-7h6V8z" stroke={G.green} strokeWidth="2" fill="none" />
    <path d="M20 20h8M20 26h8" stroke={G.green} strokeWidth="1.5" opacity=".4" />
  </svg>
);
const MapIconFull = () => (
  <svg viewBox="0 0 48 48" fill="none" style={{ width: "100%", height: "100%" }}>
    <path d="M24 42S10 28 10 20a14 14 0 1128 0c0 8-14 22-14 22z" fill={G.yellow} opacity=".18" />
    <path d="M24 42S10 28 10 20a14 14 0 1128 0c0 8-14 22-14 22z" stroke="#E8A000" strokeWidth="2" fill="none" />
    <circle cx="24" cy="20" r="5" fill={G.yellow} />
  </svg>
);

/* Small nav icons */
const NavMediaIcon = ({ active }) => (
  <svg viewBox="0 0 24 24" fill="none" style={{ width: 28, height: 28 }}>
    <rect x="2" y="4" width="20" height="14" rx="2" stroke={active ? G.red : G.textDim} strokeWidth="1.8" />
    <polygon points="10,8 10,14 15,11" fill={active ? G.red : G.textDim} />
  </svg>
);
const NavCameraIcon = ({ active }) => (
  <svg viewBox="0 0 24 24" fill="none" style={{ width: 28, height: 28 }}>
    <rect x="2" y="7" width="20" height="13" rx="2" stroke={active ? G.blue : G.textDim} strokeWidth="1.8" />
    <path d="M8 7V5.5A1.5 1.5 0 019.5 4h5A1.5 1.5 0 0116 5.5V7" stroke={active ? G.blue : G.textDim} strokeWidth="1.8" />
    <circle cx="12" cy="13.5" r="3.5" stroke={active ? G.blue : G.textDim} strokeWidth="1.8" />
  </svg>
);
const NavQuranIcon = ({ active }) => (
  <svg viewBox="0 0 24 24" fill="none" style={{ width: 28, height: 28 }}>
    <path d="M5 4h2c3 0 5 1.5 5 4v12c0-2-1.5-3.5-4-3.5H5V4z" stroke={active ? G.green : G.textDim} strokeWidth="1.8" />
    <path d="M19 4h-2c-3 0-5 1.5-5 4v12c0-2 1.5-3.5 4-3.5h3V4z" stroke={active ? G.green : G.textDim} strokeWidth="1.8" />
  </svg>
);
const NavMapIcon = ({ active }) => (
  <svg viewBox="0 0 24 24" fill="none" style={{ width: 28, height: 28 }}>
    <path d="M12 21S5 14 5 10a7 7 0 1114 0c0 4-7 11-7 11z" stroke={active ? "#E8A000" : G.textDim} strokeWidth="1.8" />
    <circle cx="12" cy="10" r="2.5" fill={active ? "#E8A000" : G.textDim} />
  </svg>
);

const BackIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" style={{ width: 22, height: 22 }}>
    <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const PlayIcon = ({ size = 28 }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: size, height: size }}><path d="M8 5v14l11-7z" /></svg>
);
const PauseIcon = ({ size = 28 }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: size, height: size }}>
    <rect x="6" y="4" width="4" height="16" rx="1" /><rect x="14" y="4" width="4" height="16" rx="1" />
  </svg>
);
const SkipFwdIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 20, height: 20 }}>
    <polygon points="4,3 14,12 4,21" /><rect x="16" y="3" width="3" height="18" rx="1" />
  </svg>
);
const SkipBckIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 20, height: 20 }}>
    <polygon points="20,3 10,12 20,21" /><rect x="5" y="3" width="3" height="18" rx="1" />
  </svg>
);
const BroadcastIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 20, height: 20 }}>
    <path d="M4.9 19.1A14 14 0 010 12 14 14 0 014.9 4.9" />
    <path d="M8.8 15.2A8 8 0 016 12a8 8 0 012.8-3.2" />
    <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
    <path d="M15.2 8.8A8 8 0 0118 12a8 8 0 01-2.8 3.2" />
    <path d="M19.1 4.9A14 14 0 0124 12a14 14 0 01-4.9 7.1" />
  </svg>
);
const MonitorIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 20, height: 20 }}>
    <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
  </svg>
);
const VolumeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 16, height: 16 }}>
    <path d="M11 5L6 9H2v6h4l5 4V5z" />
    <path d="M15.5 8.5a5 5 0 010 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const BellIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 20, height: 20 }}>
    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" />
  </svg>
);
const LightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 20, height: 20 }}>
    <path d="M9 18h6M10 22h4" />
    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A7 7 0 107.5 11.5c.76.76 1.23 1.52 1.41 2.5" />
  </svg>
);
const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 36, height: 36 }}>
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 018 0v4" />
  </svg>
);

/* ─── Data ─── */
const CAMERA_FEEDS = [
  { id: "aft", label: "Aft Camera", color: G.blue },
  { id: "rh", label: "Right Hand", color: G.green },
  { id: "lh", label: "Left Hand", color: "#E8A000" },
];
const MEDIA_ITEMS = [
  { id: 1, title: "Welcome Aboard", duration: "3:12", type: "video" },
  { id: 2, title: "Safety Briefing", duration: "6:45", type: "video" },
  { id: 3, title: "Ocean Planet", duration: "1:48:22", type: "movie" },
  { id: 4, title: "Sky Lounge Mix", duration: "3:22:00", type: "audio" },
  { id: 5, title: "City of Stars", duration: "2:01:14", type: "movie" },
];
const QURAN_SURAHS = [
  { id: 1, name: "Al-Fatiha", ayahs: 7, duration: "1:02" },
  { id: 2, name: "Al-Baqarah", ayahs: 286, duration: "2:25:30" },
  { id: 36, name: "Ya-Sin", ayahs: 83, duration: "23:10" },
  { id: 55, name: "Ar-Rahman", ayahs: 78, duration: "19:45" },
  { id: 67, name: "Al-Mulk", ayahs: 30, duration: "9:58" },
  { id: 112, name: "Al-Ikhlas", ayahs: 4, duration: "0:18" },
];

const PIN_CODE = "10535";

/* ═══════════════════════════════════════
   PASSWORD LOCK SCREEN
   ═══════════════════════════════════════ */
function LockScreen({ onUnlock }) {
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);
  const [shaking, setShaking] = useState(false);

  const handleKey = (k) => {
    if (k === "del") {
      setPin(p => p.slice(0, -1));
      setError(false);
      return;
    }
    const next = pin + k;
    if (next.length <= 5) {
      setPin(next);
      setError(false);
      if (next.length === 5) {
        if (next === PIN_CODE) {
          setTimeout(() => onUnlock(), 200);
        } else {
          setError(true);
          setShaking(true);
          setTimeout(() => { setPin(""); setShaking(false); }, 600);
        }
      }
    }
  };

  const dots = Array.from({ length: 5 }).map((_, i) => (
    <div key={i} style={{
      width: 14, height: 14, borderRadius: "50%",
      background: i < pin.length ? (error ? G.red : G.blue) : "transparent",
      border: `2px solid ${error ? G.red : (i < pin.length ? G.blue : G.border)}`,
      transition: "all 0.15s",
    }} />
  ));

  const keys = ["1","2","3","4","5","6","7","8","9","","0","del"];

  return (
    <div style={{
      width: "100vw", height: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", background: G.bg, gap: 24,
      fontFamily: "'Google Sans', 'Product Sans', system-ui, sans-serif",
    }}>
      <style>{`@keyframes shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-8px)}75%{transform:translateX(8px)}}`}</style>
      <div style={{ color: G.textDim }}><LockIcon /></div>
      <div style={{
        fontSize: 18, fontWeight: 500, color: G.text,
      }}>Enter PIN</div>
      <div style={{
        display: "flex", gap: 12,
        animation: shaking ? "shake 0.3s ease 2" : "none",
      }}>{dots}</div>
      {error && <div style={{ fontSize: 13, color: G.red, fontWeight: 500, marginTop: -12 }}>Incorrect PIN</div>}
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(3, 64px)",
        gap: 10, marginTop: 8,
      }}>
        {keys.map((k, i) => (
          k === "" ? <div key={i} /> :
          <button key={i} onClick={() => handleKey(k)} style={{
            width: 64, height: 52, borderRadius: 14, fontSize: k === "del" ? 13 : 22,
            fontWeight: 500, border: `1.5px solid ${G.border}`, background: G.card,
            cursor: "pointer", color: G.text, boxShadow: G.shadow,
            fontFamily: "'Google Sans', system-ui, sans-serif",
            transition: "all 0.12s", display: "flex", alignItems: "center", justifyContent: "center",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = G.surface; e.currentTarget.style.borderColor = G.blue; }}
            onMouseLeave={e => { e.currentTarget.style.background = G.card; e.currentTarget.style.borderColor = G.border; }}
          >{k === "del" ? "⌫" : k}</button>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   IFE STATUS BAR
   ═══════════════════════════════════════ */
function IFEBar({ isSmall }) {
  const [callSent, setCallSent] = useState(false);
  const [lightOn, setLightOn] = useState(false);
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 8,
      padding: isSmall ? "5px 10px" : "6px 14px",
      background: G.surface, borderBottom: `1px solid ${G.border}`, flexShrink: 0,
    }}>
      <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:.55}}`}</style>
      <div style={{
        flex: 1, fontSize: 11, fontWeight: 700, color: G.textDim,
        fontFamily: "'Google Sans', system-ui", letterSpacing: 0.8,
      }}>SEAT 14A</div>
      <button onClick={() => setLightOn(!lightOn)} style={{
        display: "flex", alignItems: "center", gap: 5,
        padding: "5px 12px", borderRadius: 50,
        background: lightOn ? `${G.yellow}22` : "transparent",
        border: `1.5px solid ${lightOn ? "#E8A000" : G.border}`,
        cursor: "pointer", color: lightOn ? "#D49800" : G.textDim,
        fontSize: 11, fontWeight: 600, fontFamily: "'Google Sans', system-ui",
        transition: "all 0.2s",
      }}>
        <LightIcon />
        {!isSmall && <span>{lightOn ? "Light On" : "Light"}</span>}
      </button>
      <button onClick={() => { if (!callSent) { setCallSent(true); setTimeout(() => setCallSent(false), 4000); } }} style={{
        display: "flex", alignItems: "center", gap: 5,
        padding: "5px 12px", borderRadius: 50,
        background: callSent ? `${G.red}14` : `${G.blue}08`,
        border: `1.5px solid ${callSent ? G.red : G.blue}`,
        cursor: callSent ? "default" : "pointer",
        color: callSent ? G.red : G.blue,
        fontSize: 11, fontWeight: 600, fontFamily: "'Google Sans', system-ui",
        transition: "all 0.25s",
        animation: callSent ? "pulse 1.5s ease infinite" : "none",
      }}>
        <BellIcon />
        <span>{callSent ? "Calling..." : (isSmall ? "Call" : "Attendant")}</span>
      </button>
    </div>
  );
}

/* ═══════════════════════════════════════
   NAV BAR (vertical left rail, icons centered)
   ═══════════════════════════════════════ */
function NavBar({ active, onNavigate, isSmall }) {
  const items = [
    { id: "media", Icon: NavMediaIcon, label: "Media", color: G.red },
    { id: "camera", Icon: NavCameraIcon, label: "Camera", color: G.blue },
    { id: "quran", Icon: NavQuranIcon, label: "Quran", color: G.green },
    { id: "map", Icon: NavMapIcon, label: "Map", color: "#E8A000" },
  ];
  return (
    <div style={{
      display: "flex", flexDirection: "column", alignItems: "center",
      justifyContent: "center", gap: isSmall ? 6 : 10,
      padding: isSmall ? "8px 4px" : "12px 6px",
      background: G.surface, borderRight: `1px solid ${G.border}`, flexShrink: 0,
      width: isSmall ? 56 : 68,
      height: "100%",
    }}>
      {items.map(({ id, Icon, label, color }) => {
        const isActive = active === id;
        return (
          <button key={id} onClick={() => onNavigate(id)} style={{
            display: "flex", flexDirection: "column", alignItems: "center", gap: 2,
            padding: isSmall ? "6px 4px" : "8px 6px", borderRadius: 14,
            background: isActive ? `${color}10` : "transparent",
            border: "none", cursor: "pointer", transition: "all 0.15s",
            width: "100%",
          }}>
            <Icon active={isActive} />
            <span style={{
              fontSize: isSmall ? 9 : 10, fontWeight: isActive ? 700 : 500,
              color: isActive ? color : G.textDim,
              fontFamily: "'Google Sans', system-ui",
            }}>{label}</span>
          </button>
        );
      })}
    </div>
  );
}

/* ─── Layout wrapper: vertical NavBar on left + content on right ─── */
function ScreenWithNav({ active, onNavigate, isSmall, children }) {
  return (
    <div style={{ display: "flex", flexDirection: "row", height: "100%", width: "100%" }}>
      <NavBar active={active} onNavigate={onNavigate} isSmall={isSmall} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", minWidth: 0 }}>
        {children}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   TOP BAR
   ═══════════════════════════════════════ */
function TopBar({ title, onBack, isSmall, rightContent, color = G.blue }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", padding: isSmall ? "8px 10px" : "10px 16px",
      borderBottom: `1px solid ${G.border}`, flexShrink: 0, background: G.bg, gap: 10,
    }}>
      {onBack && (
        <button onClick={onBack} style={{
          background: G.surface, border: "none", color, cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: 6, borderRadius: 50, width: 34, height: 34, transition: "background 0.15s",
        }}
          onMouseEnter={e => e.currentTarget.style.background = G.surfaceHover}
          onMouseLeave={e => e.currentTarget.style.background = G.surface}
        ><BackIcon /></button>
      )}
      <span style={{
        fontFamily: "'Google Sans', 'Product Sans', system-ui", fontSize: isSmall ? 16 : 18,
        color: G.text, fontWeight: 500, flex: 1,
      }}>{title}</span>
      {rightContent}
    </div>
  );
}

/* ─── Video Preview ─── */
function VideoPreview({ label, isSmall, fullWidth }) {
  if (isSmall) return null;
  return (
    <div style={{
      width: fullWidth ? "100%" : 320, height: fullWidth ? "100%" : 190,
      minHeight: fullWidth ? 0 : 190,
      background: "linear-gradient(145deg, #1a1a2e, #16213e)",
      borderRadius: G.radius - 4, display: "flex", alignItems: "center", justifyContent: "center",
      border: `1px solid ${G.border}`, position: "relative", overflow: "hidden", flexShrink: 0,
    }}>
      <div style={{
        position: "absolute", inset: 0, opacity: 0.04,
        backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.4) 3px, rgba(255,255,255,0.4) 4px)",
      }} />
      <span style={{
        fontFamily: "'Google Sans', monospace", fontSize: 12, color: "rgba(255,255,255,0.4)",
        letterSpacing: 1, textTransform: "uppercase", fontWeight: 500,
      }}>{label || "No Signal"}</span>
      <div style={{ position: "absolute", top: 10, left: 12, display: "flex", alignItems: "center", gap: 6 }}>
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: G.red, boxShadow: `0 0 8px ${G.red}88` }} />
        <span style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", fontFamily: "monospace" }}>LIVE</span>
      </div>
    </div>
  );
}

/* ─── D-Pad ─── */
function DPad({ onUp, onDown, onLeft, onRight, onCenter, centerLabel = "OK", color = G.blue }) {
  const btnBase = {
    background: G.card, border: `1.5px solid ${G.border}`, cursor: "pointer",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontFamily: "'Google Sans', system-ui", fontWeight: 600,
    transition: "all 0.15s", color: G.textDim, fontSize: 18, boxShadow: G.shadow,
  };
  const arrowHover = (e, enter) => {
    e.currentTarget.style.background = enter ? G.surface : G.card;
    e.currentTarget.style.borderColor = enter ? color : G.border;
    e.currentTarget.style.color = enter ? color : G.textDim;
  };
  return (
    <div style={{ display: "grid", gridTemplateColumns: "54px 62px 54px", gridTemplateRows: "48px 54px 48px", gap: 5, justifyContent: "center" }}>
      <div />
      <button onClick={onUp} style={{ ...btnBase, borderRadius: "16px 16px 6px 6px" }}
        onMouseEnter={e => arrowHover(e, true)} onMouseLeave={e => arrowHover(e, false)}>▲</button>
      <div />
      <button onClick={onLeft} style={{ ...btnBase, borderRadius: "16px 6px 6px 16px" }}
        onMouseEnter={e => arrowHover(e, true)} onMouseLeave={e => arrowHover(e, false)}>◀</button>
      <button onClick={onCenter} style={{
        ...btnBase, borderRadius: 14, background: `${color}0C`,
        border: `2px solid ${color}`, color, fontSize: 13, fontWeight: 700,
      }}
        onMouseEnter={e => e.currentTarget.style.background = `${color}1A`}
        onMouseLeave={e => e.currentTarget.style.background = `${color}0C`}
      >{centerLabel}</button>
      <button onClick={onRight} style={{ ...btnBase, borderRadius: "6px 16px 16px 6px" }}
        onMouseEnter={e => arrowHover(e, true)} onMouseLeave={e => arrowHover(e, false)}>▶</button>
      <div />
      <button onClick={onDown} style={{ ...btnBase, borderRadius: "6px 6px 16px 16px" }}
        onMouseEnter={e => arrowHover(e, true)} onMouseLeave={e => arrowHover(e, false)}>▼</button>
      <div />
    </div>
  );
}

/* ─── Transport Controls (for local/personal playback) ─── */
function TransportControls({ color = G.blue }) {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(35);
  const [volume, setVolume] = useState(70);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: "100%" }}>
      {/* Progress bar */}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontFamily: "monospace", fontSize: 11, color: G.textDim, minWidth: 38 }}>03:24</span>
        <div style={{ flex: 1, height: 5, background: G.surfaceHover, borderRadius: 3, cursor: "pointer", position: "relative" }}
          onClick={e => { const r = e.currentTarget.getBoundingClientRect(); setProgress(((e.clientX - r.left) / r.width) * 100); }}>
          <div style={{ width: `${progress}%`, height: "100%", background: color, borderRadius: 3, transition: "width 0.1s" }} />
          <div style={{
            position: "absolute", top: -5, left: `${progress}%`, transform: "translateX(-50%)",
            width: 14, height: 14, borderRadius: "50%", background: color,
            boxShadow: `0 1px 6px ${color}44`, border: "2px solid white",
          }} />
        </div>
        <span style={{ fontFamily: "monospace", fontSize: 11, color: G.textDim, minWidth: 38 }}>09:48</span>
      </div>
      {/* Skip back, Play/Pause, Skip fwd */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20 }}>
        <button style={{
          background: "none", border: "none", color: G.textDim, cursor: "pointer",
          padding: 8, display: "flex", borderRadius: 50, transition: "all 0.15s",
        }}
          onMouseEnter={e => { e.currentTarget.style.background = G.surface; e.currentTarget.style.color = G.text; }}
          onMouseLeave={e => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = G.textDim; }}
        ><SkipBckIcon /></button>
        <button onClick={() => setPlaying(!playing)} style={{
          width: 56, height: 56, borderRadius: "50%", background: color,
          border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
          color: "#fff", boxShadow: `0 4px 14px ${color}40`, transition: "transform 0.15s, box-shadow 0.15s",
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.06)"; e.currentTarget.style.boxShadow = `0 6px 20px ${color}50`; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = `0 4px 14px ${color}40`; }}
        >{playing ? <PauseIcon /> : <PlayIcon />}</button>
        <button style={{
          background: "none", border: "none", color: G.textDim, cursor: "pointer",
          padding: 8, display: "flex", borderRadius: 50, transition: "all 0.15s",
        }}
          onMouseEnter={e => { e.currentTarget.style.background = G.surface; e.currentTarget.style.color = G.text; }}
          onMouseLeave={e => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = G.textDim; }}
        ><SkipFwdIcon /></button>
      </div>
      {/* Volume */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "0 24px" }}>
        <span style={{ color: G.textDim }}><VolumeIcon /></span>
        <div style={{ flex: 1, height: 4, background: G.surfaceHover, borderRadius: 2, cursor: "pointer" }}
          onClick={e => { const r = e.currentTarget.getBoundingClientRect(); setVolume(((e.clientX - r.left) / r.width) * 100); }}>
          <div style={{ width: `${volume}%`, height: "100%", background: G.textDim, borderRadius: 2 }} />
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   HOME SCREEN (landing page)
   ═══════════════════════════════════════ */
function HomeScreen({ onNavigate, isSmall }) {
  const iconSize = isSmall ? 66 : 88;
  const apps = [
    { id: "media", label: "Media", Icon: MediaIconFull, color: G.red },
    { id: "camera", label: "Camera", Icon: CameraIconFull, color: G.blue },
    { id: "quran", label: "Quran", Icon: QuranIconFull, color: G.green },
    { id: "map", label: "Map", Icon: MapIconFull, color: "#E8A000" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: G.bg }}>
      <IFEBar isSmall={isSmall} />
      <div style={{
        flex: 1, display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", gap: isSmall ? 14 : 28,
      }}>
        <div style={{
          fontFamily: "'Google Sans', 'Product Sans', system-ui",
          fontSize: isSmall ? 13 : 16, color: G.textDim, letterSpacing: 2,
          textTransform: "uppercase", fontWeight: 500,
        }}>Select Source</div>
        <div style={{ display: "flex", gap: isSmall ? 18 : 36, flexWrap: "wrap", justifyContent: "center", padding: "0 16px" }}>
          {apps.map(({ id, label, Icon, color }) => (
            <button key={id} onClick={() => onNavigate(id)} style={{
              display: "flex", flexDirection: "column", alignItems: "center",
              gap: isSmall ? 8 : 10, background: "none", border: "none",
              cursor: "pointer", padding: 0, transition: "transform 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.08)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            >
              <div style={{
                width: iconSize, height: iconSize, borderRadius: iconSize * 0.28,
                background: G.card, border: `1.5px solid ${G.border}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                padding: iconSize * 0.18, boxShadow: G.shadow, transition: "box-shadow 0.2s, border-color 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = G.shadowLg; e.currentTarget.style.borderColor = color; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = G.shadow; e.currentTarget.style.borderColor = G.border; }}
              ><Icon /></div>
              <span style={{
                fontFamily: "'Google Sans', system-ui", fontSize: isSmall ? 12 : 13, color: G.text, fontWeight: 500,
              }}>{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Badge ─── */
function ModeBadge({ mode }) {
  const b = mode === "broadcast";
  return (
    <span style={{
      fontSize: 10, fontFamily: "'Google Sans', monospace", letterSpacing: 1,
      color: b ? G.blue : G.green, fontWeight: 700,
      background: b ? `${G.blue}12` : `${G.green}12`,
      padding: "3px 10px", borderRadius: 50, textTransform: "uppercase",
    }}>{b ? "BCAST" : "LOCAL"}</span>
  );
}

/* ═══════════════════════════════════════
   MEDIA SCREEN
   ═══════════════════════════════════════ */
function MediaScreen({ onBack, onNavigate, isSmall }) {
  const [mode, setMode] = useState(null);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [inPlayer, setInPlayer] = useState(false);
  const isPortrait = window.innerHeight > window.innerWidth;

  // Mode selector
  if (!mode) {
    return (
      <div style={{ display: "flex", flexDirection: "column", height: "100%", background: G.bg }}>
        <IFEBar isSmall={isSmall} />
        <TopBar title="Media" onBack={onBack} isSmall={isSmall} color={G.red} />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: isSmall ? 14 : 20, padding: 20 }}>
          <div style={{ fontSize: isSmall ? 13 : 15, color: G.textDim, fontFamily: "'Google Sans', system-ui", fontWeight: 500 }}>Choose playback mode</div>
          {[
            { id: "broadcast", label: "Global Broadcast", desc: "Stream to all cabin monitors", Icon: BroadcastIcon, color: G.blue },
            { id: "local", label: "Play Locally", desc: "This screen only", Icon: MonitorIcon, color: G.green },
          ].map(({ id, label, desc, Icon, color }) => (
            <button key={id} onClick={() => setMode(id)} style={{
              display: "flex", alignItems: "center", gap: 14,
              background: G.card, border: `1.5px solid ${G.border}`,
              borderRadius: 18, padding: isSmall ? "14px 16px" : "18px 24px",
              cursor: "pointer", width: "100%", maxWidth: 360,
              boxShadow: G.shadow, transition: "all 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.boxShadow = G.shadowLg; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = G.border; e.currentTarget.style.boxShadow = G.shadow; }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: 14,
                background: `${color}12`, display: "flex", alignItems: "center",
                justifyContent: "center", color, flexShrink: 0,
              }}><Icon /></div>
              <div style={{ textAlign: "left" }}>
                <div style={{ color: G.text, fontSize: isSmall ? 14 : 15, fontWeight: 600, fontFamily: "'Google Sans', system-ui" }}>{label}</div>
                {!isSmall && <div style={{ color: G.textDim, fontSize: 12, marginTop: 2 }}>{desc}</div>}
              </div>
            </button>
          ))}
        </div>
        
      </div>
    );
  }

  /* ── BROADCAST: list only, no controls ── */
  if (mode === "broadcast") {
    return (
      <div style={{ display: "flex", flexDirection: "column", height: "100%", background: G.bg }}>
        <IFEBar isSmall={isSmall} />
        <TopBar title="Global Broadcast" onBack={() => setMode(null)} isSmall={isSmall} color={G.blue}
          rightContent={<ModeBadge mode="broadcast" />} />
        <div style={{ flex: 1, overflow: "auto", padding: 12 }}>
          <div style={{ fontSize: 12, color: G.textDim, padding: "4px 4px 10px", fontFamily: "'Google Sans', system-ui" }}>
            Select media to broadcast to all cabin monitors
          </div>
          {MEDIA_ITEMS.map(item => (
            <div key={item.id} style={{
              display: "flex", alignItems: "center", gap: 14, width: "100%",
              background: G.card, border: `1.5px solid ${G.border}`,
              borderRadius: 14, padding: "14px 16px", marginBottom: 8,
              boxShadow: G.shadow, cursor: "pointer", transition: "all 0.15s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = G.blue; e.currentTarget.style.boxShadow = G.shadowLg; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = G.border; e.currentTarget.style.boxShadow = G.shadow; }}
            >
              <div style={{
                width: 40, height: 40, borderRadius: 12, background: `${G.blue}10`,
                display: "flex", alignItems: "center", justifyContent: "center", color: G.blue, flexShrink: 0,
              }}><BroadcastIcon /></div>
              <div style={{ flex: 1, textAlign: "left" }}>
                <div style={{ color: G.text, fontSize: 14, fontWeight: 600, fontFamily: "'Google Sans', system-ui" }}>{item.title}</div>
                <div style={{ color: G.textDim, fontSize: 12, marginTop: 2 }}>{item.type} · {item.duration}</div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    );
  }

  /* ── LOCAL / PERSONAL: Small d-pad browser ── */
  if (isSmall && !inPlayer) {
    const item = MEDIA_ITEMS[selectedIdx];
    return (
      <div style={{ display: "flex", flexDirection: "column", height: "100%", background: G.bg }}>
        <IFEBar isSmall />
        <TopBar title="Local" onBack={() => setMode(null)} isSmall color={G.red}
          rightContent={<ModeBadge mode="local" />} />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14, padding: 16 }}>
          <div style={{
            background: G.surface, borderRadius: 16, padding: "14px 22px",
            textAlign: "center", border: `1.5px solid ${G.border}`, minWidth: 200, boxShadow: G.shadow,
          }}>
            <div style={{ fontSize: 15, fontWeight: 600, color: G.text, fontFamily: "'Google Sans', system-ui" }}>{item.title}</div>
            <div style={{ fontSize: 12, color: G.textDim, marginTop: 4 }}>{item.type} · {item.duration}</div>
            <div style={{ fontSize: 11, color: G.textDim, marginTop: 6, fontFamily: "monospace" }}>{selectedIdx + 1} / {MEDIA_ITEMS.length}</div>
          </div>
          <DPad
            onUp={() => setSelectedIdx(i => Math.max(0, i - 1))}
            onDown={() => setSelectedIdx(i => Math.min(MEDIA_ITEMS.length - 1, i + 1))}
            onLeft={() => setSelectedIdx(i => Math.max(0, i - 1))}
            onRight={() => setSelectedIdx(i => Math.min(MEDIA_ITEMS.length - 1, i + 1))}
            onCenter={() => setInPlayer(true)}
            centerLabel="PLAY" color={G.red}
          />
        </div>
        
      </div>
    );
  }

  /* ── LOCAL: Small d-pad player ── */
  if (isSmall && inPlayer) {
    return <SmallLocalPlayer item={MEDIA_ITEMS[selectedIdx]} onBack={() => setInPlayer(false)} onNavigate={onNavigate} />;
  }

  /* ── LOCAL: Large list ── */
  if (!inPlayer) {
    return (
      <div style={{ display: "flex", flexDirection: "column", height: "100%", background: G.bg }}>
        <IFEBar isSmall={isSmall} />
        <TopBar title="Local Playback" onBack={() => setMode(null)} isSmall={isSmall} color={G.red}
          rightContent={<ModeBadge mode="local" />} />
        <div style={{ flex: 1, overflow: "auto", padding: 12 }}>
          {MEDIA_ITEMS.map((item, idx) => (
            <button key={item.id} onClick={() => { setSelectedIdx(idx); setInPlayer(true); }} style={{
              display: "flex", alignItems: "center", gap: 14, width: "100%",
              background: G.card, border: `1.5px solid ${G.border}`,
              borderRadius: 14, padding: "14px 16px", cursor: "pointer", marginBottom: 8,
              boxShadow: G.shadow, transition: "all 0.15s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = G.red; e.currentTarget.style.boxShadow = G.shadowLg; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = G.border; e.currentTarget.style.boxShadow = G.shadow; }}
            >
              <div style={{
                width: 40, height: 40, borderRadius: 12, background: `${G.red}10`,
                display: "flex", alignItems: "center", justifyContent: "center", color: G.red, flexShrink: 0,
              }}><PlayIcon size={18} /></div>
              <div style={{ flex: 1, textAlign: "left" }}>
                <div style={{ color: G.text, fontSize: 14, fontWeight: 600, fontFamily: "'Google Sans', system-ui" }}>{item.title}</div>
                <div style={{ color: G.textDim, fontSize: 12, marginTop: 2 }}>{item.type} · {item.duration}</div>
              </div>
            </button>
          ))}
        </div>
        
      </div>
    );
  }

  /* ── LOCAL: Large player with full transport ── */
  const item = MEDIA_ITEMS[selectedIdx];
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: G.bg }}>
      <IFEBar isSmall={isSmall} />
      <TopBar title={item.title} onBack={() => setInPlayer(false)} isSmall={isSmall} color={G.red}
        rightContent={<ModeBadge mode="local" />} />
      <div style={{
        flex: 1, display: "flex", flexDirection: isPortrait ? "column" : "row",
        gap: 16, padding: 16, overflow: "auto", alignItems: isPortrait ? "center" : "stretch",
      }}>
        <div style={{ flex: isPortrait ? "0 0 auto" : 1, width: isPortrait ? "100%" : "auto", maxHeight: isPortrait ? 220 : "none" }}>
          <VideoPreview label={item.title} isSmall={false} fullWidth />
        </div>
        <div style={{
          flex: isPortrait ? 1 : "0 0 240px", display: "flex", flexDirection: "column",
          justifyContent: "center", width: "100%", maxWidth: isPortrait ? 420 : "none",
        }}>
          <TransportControls color={G.red} />
        </div>
      </div>
      
    </div>
  );
}

/* ─── Small Local Player (separate for hooks) ─── */
function SmallLocalPlayer({ item, onBack, onNavigate }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: G.bg }}>
      <IFEBar isSmall />
      <TopBar title={item.title} onBack={onBack} isSmall color={G.red}
        rightContent={<ModeBadge mode="local" />} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14, padding: 16 }}>
        <div style={{
          fontSize: 11, color: G.textDim, fontFamily: "monospace", letterSpacing: 1,
          background: G.surface, padding: "4px 12px", borderRadius: 50,
        }}>{playing ? "▶ PLAYING" : "❚❚ PAUSED"} — 03:24 / {item.duration}</div>
        <DPad
          onUp={() => {}} onDown={() => {}}
          onLeft={() => {}} onRight={() => {}}
          onCenter={() => setPlaying(!playing)}
          centerLabel={playing ? "❚❚" : "▶"} color={G.red}
        />
        <div style={{ display: "flex", gap: 4, fontSize: 10, color: G.textDim, fontFamily: "'Google Sans', system-ui" }}>
          <span>◀ Rew</span><span style={{ margin: "0 6px" }}>·</span>
          <span>▲ Vol+</span><span style={{ margin: "0 6px" }}>·</span>
          <span>▼ Vol−</span><span style={{ margin: "0 6px" }}>·</span>
          <span>Fwd ▶</span>
        </div>
      </div>
      
    </div>
  );
}

/* ═══════════════════════════════════════
   CAMERA SCREEN
   ═══════════════════════════════════════ */
function CameraScreen({ onBack, onNavigate, isSmall }) {
  const [activeFeed, setActiveFeed] = useState(CAMERA_FEEDS[0]);
  const isPortrait = window.innerHeight > window.innerWidth;
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: G.bg }}>
      <IFEBar isSmall={isSmall} />
      <TopBar title="Camera" onBack={onBack} isSmall={isSmall} color={G.blue} />
      <div style={{
        flex: 1, display: "flex", flexDirection: isPortrait || isSmall ? "column" : "row",
        gap: 12, padding: 12, overflow: "auto",
        alignItems: isSmall ? "center" : "stretch",
      }}>
        {!isSmall && (
          <div style={{ flex: 1, display: "flex", alignItems: "stretch" }}>
            <VideoPreview label={activeFeed.label} isSmall={false} fullWidth />
          </div>
        )}
        <div style={{
          display: "flex",
          flexDirection: isPortrait || isSmall ? "row" : "column",
          gap: 8, flexShrink: 0,
          justifyContent: "center",
          alignItems: "center",
          width: isSmall ? "100%" : "auto",
        }}>
          {CAMERA_FEEDS.map(feed => (
            <button key={feed.id} onClick={() => setActiveFeed(feed)} style={{
              display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
              background: activeFeed.id === feed.id ? `${feed.color}0A` : G.card,
              border: `1.5px solid ${activeFeed.id === feed.id ? feed.color : G.border}`,
              borderRadius: 14, padding: isSmall ? "10px 16px" : "12px 14px",
              cursor: "pointer", transition: "all 0.15s", minWidth: isSmall ? 96 : 120, boxShadow: G.shadow,
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = feed.color; e.currentTarget.style.boxShadow = G.shadowLg; }}
              onMouseLeave={e => { if (activeFeed.id !== feed.id) { e.currentTarget.style.borderColor = G.border; e.currentTarget.style.boxShadow = G.shadow; } }}
            >
              {!isSmall && (
                <div style={{
                  width: 100, height: 60, borderRadius: 8,
                  background: "linear-gradient(160deg, #1a1a2e, #16213e)",
                  border: `1px solid ${G.border}`,
                }} />
              )}
              <span style={{
                fontSize: isSmall ? 12 : 13, fontWeight: activeFeed.id === feed.id ? 700 : 500,
                color: activeFeed.id === feed.id ? feed.color : G.text, fontFamily: "'Google Sans', system-ui",
              }}>{feed.label}</span>
            </button>
          ))}
        </div>
      </div>
      
    </div>
  );
}

/* ═══════════════════════════════════════
   QURAN SCREEN
   ═══════════════════════════════════════ */
function QuranScreen({ onBack, onNavigate, isSmall, isMedium }) {
  const [selected, setSelected] = useState(null);
  const isPortrait = window.innerHeight > window.innerWidth;
  if (!selected) {
    return (
      <div style={{ display: "flex", flexDirection: "column", height: "100%", background: G.bg }}>
        <IFEBar isSmall={isSmall} />
        <TopBar title="Quran" onBack={onBack} isSmall={isSmall} color={G.green} />
        <div style={{ flex: 1, overflow: "auto", padding: 12 }}>
          {QURAN_SURAHS.map(s => (
            <button key={s.id} onClick={() => setSelected(s)} style={{
              display: "flex", alignItems: "center", gap: 14, width: "100%",
              background: G.card, border: `1.5px solid ${G.border}`,
              borderRadius: 14, padding: isSmall ? "12px 14px" : "14px 16px",
              cursor: "pointer", marginBottom: 8, boxShadow: G.shadow, transition: "all 0.15s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = G.green; e.currentTarget.style.boxShadow = G.shadowLg; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = G.border; e.currentTarget.style.boxShadow = G.shadow; }}
            >
              <div style={{
                width: 40, height: 40, borderRadius: 12, background: `${G.green}12`,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: G.green, fontWeight: 800, fontSize: 14, fontFamily: "'Google Sans', monospace", flexShrink: 0,
              }}>{s.id}</div>
              <div style={{ flex: 1, textAlign: "left" }}>
                <div style={{ color: G.text, fontSize: isSmall ? 14 : 15, fontWeight: 600, fontFamily: "'Google Sans', system-ui" }}>{s.name}</div>
                <div style={{ color: G.textDim, fontSize: 12, marginTop: 2 }}>{s.ayahs} ayahs · {s.duration}</div>
              </div>
            </button>
          ))}
        </div>
        
      </div>
    );
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: G.bg }}>
      <IFEBar isSmall={isSmall} />
      <TopBar title={selected.name} onBack={() => setSelected(null)} isSmall={isSmall} color={G.green} />
      <div style={{
        flex: 1, display: "flex", flexDirection: isPortrait || isSmall ? "column" : "row",
        gap: 16, padding: 16, overflow: "auto", alignItems: isPortrait || isSmall ? "center" : "stretch",
      }}>
        {!isSmall && (
          <div style={{
            flex: isPortrait ? "0 0 auto" : 1, width: isPortrait ? "100%" : "auto",
            display: "flex", alignItems: "center", justifyContent: "center",
            background: `${G.green}08`, borderRadius: G.radius - 4,
            border: `1px solid ${G.border}`, minHeight: 120, maxHeight: isPortrait ? 200 : "none",
          }}>
            <div style={{
              fontFamily: "'Noto Naskh Arabic', serif", fontSize: isMedium ? 32 : 44,
              color: G.green, opacity: 0.7, textAlign: "center", padding: 20, direction: "rtl",
            }}>﷽</div>
          </div>
        )}
        <div style={{
          flex: isPortrait || isSmall ? 1 : "0 0 240px",
          display: "flex", flexDirection: "column", justifyContent: "center",
          width: isSmall ? "100%" : "auto", maxWidth: isPortrait ? 420 : "none", alignItems: "center",
        }}>
          <div style={{
            textAlign: "center", marginBottom: 14, color: G.textDim, fontSize: 12,
            fontFamily: "'Google Sans', monospace", background: G.surface,
            padding: "4px 14px", borderRadius: 50,
          }}>Surah {selected.id} · {selected.ayahs} Ayahs</div>
          <TransportControls color={G.green} />
        </div>
      </div>
      
    </div>
  );
}

/* ═══════════════════════════════════════
   MAP SCREEN
   ═══════════════════════════════════════ */
function MapScreen({ onBack, onNavigate, isSmall }) {
  const [lat, setLat] = useState(24.7136);
  const [lon, setLon] = useState(46.6753);
  const [zoom, setZoom] = useState(10);
  const step = 0.5 / (zoom / 10);

  if (isSmall) {
    return (
      <div style={{ display: "flex", flexDirection: "column", height: "100%", background: G.bg }}>
        <IFEBar isSmall />
        <TopBar title="Map" onBack={onBack} isSmall color="#E8A000" />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14, padding: 16 }}>
          <div style={{
            background: G.surface, borderRadius: 16, padding: "14px 22px",
            textAlign: "center", border: `1.5px solid ${G.border}`, boxShadow: G.shadow, minWidth: 200,
          }}>
            <div style={{ fontFamily: "monospace", fontSize: 14, fontWeight: 600, color: G.text }}>{lat.toFixed(4)}° N</div>
            <div style={{ fontFamily: "monospace", fontSize: 14, fontWeight: 600, color: G.text }}>{lon.toFixed(4)}° E</div>
            <div style={{ fontSize: 11, color: G.textDim, marginTop: 6, fontFamily: "'Google Sans', system-ui" }}>Zoom: {zoom}x</div>
          </div>
          <DPad
            onUp={() => setLat(l => l + step)} onDown={() => setLat(l => l - step)}
            onLeft={() => setLon(l => l - step)} onRight={() => setLon(l => l + step)}
            onCenter={() => setZoom(z => z >= 20 ? 5 : z + 5)}
            centerLabel={`${zoom}x`} color="#E8A000"
          />
          <div style={{ display: "flex", gap: 4, fontSize: 10, color: G.textDim, fontFamily: "'Google Sans', system-ui" }}>
            <span>◀▶ Pan</span><span style={{ margin: "0 6px" }}>·</span>
            <span>▲▼ Pan</span><span style={{ margin: "0 6px" }}>·</span>
            <span>OK = Zoom</span>
          </div>
        </div>
        
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: G.bg }}>
      <IFEBar isSmall={isSmall} />
      <TopBar title="Map" onBack={onBack} isSmall={isSmall} color="#E8A000" />
      <div style={{
        flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
        background: "linear-gradient(160deg, #e8f5e9, #e3f2fd)",
        margin: 12, borderRadius: G.radius - 4,
        border: `1px solid ${G.border}`, position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.08 }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={`h${i}`} style={{ position: "absolute", top: `${(i + 1) * 8}%`, left: 0, right: 0, height: 1, background: G.blue }} />
          ))}
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={`v${i}`} style={{ position: "absolute", left: `${(i + 1) * 6}%`, top: 0, bottom: 0, width: 1, background: G.blue }} />
          ))}
        </div>
        <div style={{
          width: 20, height: 20, borderRadius: "50%", background: G.red,
          border: "3px solid white", boxShadow: `0 0 16px ${G.red}50, ${G.shadowLg}`, zIndex: 1,
        }} />
        <div style={{
          position: "absolute", top: 14, right: 14, width: 36, height: 36, borderRadius: "50%",
          background: "white", border: `1.5px solid ${G.border}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          color: G.text, fontSize: 12, fontWeight: 800, fontFamily: "'Google Sans', system-ui", boxShadow: G.shadow,
        }}>N</div>
        <div style={{ position: "absolute", bottom: 14, right: 14, display: "flex", flexDirection: "column", gap: 4 }}>
          {["+", "−"].map(sym => (
            <button key={sym} onClick={() => setZoom(z => sym === "+" ? Math.min(20, z + 2) : Math.max(2, z - 2))} style={{
              width: 36, height: 36, borderRadius: 10, background: "white",
              border: `1.5px solid ${G.border}`, cursor: "pointer", fontSize: 18,
              fontWeight: 700, color: G.text, display: "flex", alignItems: "center",
              justifyContent: "center", boxShadow: G.shadow, transition: "all 0.15s",
            }}
              onMouseEnter={e => e.currentTarget.style.background = G.surface}
              onMouseLeave={e => e.currentTarget.style.background = "white"}
            >{sym}</button>
          ))}
        </div>
        <div style={{
          position: "absolute", bottom: 14, left: 14, fontSize: 11,
          fontFamily: "'Google Sans', monospace", color: G.textDim,
          background: "rgba(255,255,255,0.9)", padding: "5px 12px", borderRadius: 8,
          boxShadow: G.shadow, fontWeight: 500,
        }}>{lat.toFixed(4)}° N, {lon.toFixed(4)}° E · {zoom}x</div>
      </div>
      
    </div>
  );
}

/* ═══════════════════════════════════════
   MAIN APP
   ═══════════════════════════════════════ */
export default function App() {
  const { w, h } = useWindowSize();
  const minDim = Math.min(w, h);
  const isSmall = minDim < BREAKPOINT_SMALL;
  const isMedium = minDim < 800;
  const [unlocked, setUnlocked] = useState(false);
  const [screen, setScreen] = useState("home");
  const goHome = useCallback(() => setScreen("home"), []);

  if (!unlocked) return <LockScreen onUnlock={() => setUnlocked(true)} />;

  const innerScreen = screen !== "home" ? (
    <ScreenWithNav active={screen} onNavigate={setScreen} isSmall={isSmall}>
      {screen === "media" && <MediaScreen onBack={goHome} onNavigate={setScreen} isSmall={isSmall} />}
      {screen === "camera" && <CameraScreen onBack={goHome} onNavigate={setScreen} isSmall={isSmall} />}
      {screen === "quran" && <QuranScreen onBack={goHome} onNavigate={setScreen} isSmall={isSmall} isMedium={isMedium} />}
      {screen === "map" && <MapScreen onBack={goHome} onNavigate={setScreen} isSmall={isSmall} />}
    </ScreenWithNav>
  ) : null;

  return (
    <div style={{
      width: "100vw", height: "100vh", overflow: "hidden",
      background: G.bg, color: G.text,
      fontFamily: "'Google Sans', 'Product Sans', system-ui, -apple-system, sans-serif",
    }}>
      {screen === "home" && <HomeScreen onNavigate={setScreen} isSmall={isSmall} />}
      {innerScreen}
    </div>
  );
}
