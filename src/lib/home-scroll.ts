const KEY = "homeScrollY";

/** Remember where the visitor is on the home page before a case study opens. */
export function rememberHomeScroll() {
  try {
    sessionStorage.setItem(KEY, String(window.scrollY));
  } catch {
    /* storage unavailable — fall back to the top of the page */
  }
}

/** For visitors who landed straight on a case study: send them to the projects grid instead. */
export function rememberProjectsSection() {
  try {
    if (sessionStorage.getItem(KEY) === null) sessionStorage.setItem(KEY, "projects");
  } catch {
    /* storage unavailable — fall back to the top of the page */
  }
}

/** Put the visitor back where they left off, with no scroll animation. */
export function restoreHomeScroll() {
  let saved: string | null = null;
  try {
    saved = sessionStorage.getItem(KEY);
    sessionStorage.removeItem(KEY);
  } catch {
    return;
  }
  if (saved === null) return;

  const root = document.documentElement;
  const previousBehavior = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";

  const jump = () => {
    const target =
      saved === "projects"
        ? (document.getElementById("projects")?.offsetTop ?? 0)
        : Number(saved);
    if (Number.isFinite(target)) window.scrollTo(0, target);
  };

  jump();
  // The grid animates in, so re-apply once the layout has settled.
  requestAnimationFrame(() => {
    jump();
    root.style.scrollBehavior = previousBehavior;
  });
}
