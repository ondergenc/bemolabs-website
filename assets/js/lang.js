/*
 * Bemo Labs — language toggle
 *
 * Two-state switch (EN / TR). Persists the choice in localStorage so
 * repeat visitors don't have to flip every load. Falls back to the
 * browser's primary Accept-Language if no preference is stored — Turkish
 * users land on Turkish copy by default; everyone else gets English.
 *
 * Markup contract:
 *   - Any element with [data-lang="en"] or [data-lang="tr"] gets shown
 *     based on the active language.
 *   - <html lang="..."> is updated so screen readers + the CSS rules in
 *     styles.css pick up the change.
 *   - The .lang-switch container's buttons get `data-set-lang="..."`.
 */

(function () {
    const STORAGE_KEY = 'bemolabs.lang';
    const html = document.documentElement;

    function detectInitialLang() {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === 'en' || stored === 'tr') return stored;
        const nav = (navigator.language || 'en').toLowerCase();
        return nav.startsWith('tr') ? 'tr' : 'en';
    }

    function applyLang(lang) {
        html.lang = lang;
        localStorage.setItem(STORAGE_KEY, lang);
        document.querySelectorAll('.lang-switch button').forEach((btn) => {
            btn.classList.toggle('is-active', btn.dataset.setLang === lang);
            btn.setAttribute('aria-pressed', btn.dataset.setLang === lang ? 'true' : 'false');
        });
    }

    function attach() {
        document.querySelectorAll('.lang-switch button').forEach((btn) => {
            btn.addEventListener('click', () => applyLang(btn.dataset.setLang));
        });
    }

    // First-render flicker guard: set <html lang> before the body
    // becomes visible so the matching [data-lang] content is the only
    // thing that paints.
    applyLang(detectInitialLang());

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', attach);
    } else {
        attach();
    }
})();
