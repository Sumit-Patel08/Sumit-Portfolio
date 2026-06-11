import { useEffect, useRef } from "react";

export function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.warn("Video autoplay prevented:", err);
      });
    }
  }, []);

  return (
    <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden bg-black">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover opacity-60"
      >
        <source src="/portfolio-background.mp4" type="video/mp4" />
      </video>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 60%, rgba(0, 0, 0, 0.75) 100%)",
        }}
      />
    </div>
  );
}
