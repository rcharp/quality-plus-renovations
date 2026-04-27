import { useRef, useState, useCallback, useEffect } from "react";

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  beforeAlt?: string;
  afterAlt?: string;
  caption?: string;
}

const BeforeAfterSlider = ({ before, after, beforeAlt = "Before", afterAlt = "After", caption }: BeforeAfterSliderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, next)));
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!draggingRef.current) return;
      const x = "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      updateFromClientX(x);
    };
    const onUp = () => { draggingRef.current = false; };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove);
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };
  }, [updateFromClientX]);

  return (
    <figure className="w-full">
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl border border-border select-none touch-none bg-card"
        onMouseDown={(e) => { draggingRef.current = true; updateFromClientX(e.clientX); }}
        onTouchStart={(e) => { draggingRef.current = true; updateFromClientX(e.touches[0].clientX); }}
      >
        <img src={after} alt={afterAlt} className="absolute inset-0 w-full h-full object-cover" draggable={false} />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <img
            src={before}
            alt={beforeAlt}
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
        </div>
        <span className="absolute top-3 left-3 text-xs font-bold uppercase tracking-wider text-white bg-black/70 px-2.5 py-1 rounded-md">Before</span>
        <span className="absolute top-3 right-3 text-xs font-bold uppercase tracking-wider text-black bg-white/90 px-2.5 py-1 rounded-md">After</span>
        <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.2)]" style={{ left: `${pos}%` }}>
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center" style={{ left: 0 }}>
            <span className="text-black font-bold text-sm">⇆</span>
          </div>
        </div>
      </div>
      {caption && <figcaption className="text-center text-sm text-muted-foreground mt-3">{caption}</figcaption>}
    </figure>
  );
};

export default BeforeAfterSlider;