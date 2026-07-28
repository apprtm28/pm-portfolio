"use client";

/**
 * The icon reflects the active theme through CSS, so the button stays correct before
 * hydration and its accessible name never disagrees with the rendered state.
 */
export default function ThemeToggle() {
  const toggle = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    document.documentElement.classList.toggle("light", !next);
    try {
      window.localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // Storage can be unavailable; the toggle still applies for this page view.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="tap-target min-w-[44px] justify-center rounded border border-border text-muted-foreground transition-colors duration-300 hover:border-muted-foreground/60 hover:text-foreground"
    >
      <span className="sr-only dark:hidden">Switch to dark theme</span>
      <span className="sr-only hidden dark:inline">Switch to light theme</span>
      <svg aria-hidden="true" className="h-4 w-4 dark:hidden" fill="currentColor" viewBox="0 0 20 20">
        <path d="M17.293 13.293A8 8 0 0 1 6.707 2.707a8.001 8.001 0 1 0 10.586 10.586z" />
      </svg>
      <svg aria-hidden="true" className="hidden h-4 w-4 dark:block" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm4 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm-.464 4.95l.707.707a1 1 0 0 0 1.414-1.414l-.707-.707a1 1 0 0 0-1.414 1.414zm2.12-10.607a1 1 0 0 1 0 1.414l-.706.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0zM17 11a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2h1zm-7 4a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1zM5.05 6.464A1 1 0 1 0 6.465 5.05l-.708-.707a1 1 0 0 0-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 1.414zM4 11a1 1 0 1 0 0-2H3a1 1 0 0 0 0 2h1z"
        />
      </svg>
    </button>
  );
}
