export const THEME_KEY = "er-theme";
export const themeChoices = ["system", "light", "dark"] as const;
export type ThemeChoice = (typeof themeChoices)[number];

// Runs in <head> before first paint. Sets data-theme (resolved) and data-theme-choice on <html>.
export const themeScript = `(function(){var d=document.documentElement,k=${JSON.stringify(THEME_KEY)},c="system";try{var s=localStorage.getItem(k);if(s==="light"||s==="dark")c=s}catch(e){}var m=window.matchMedia("(prefers-color-scheme: dark)");function a(){var ch=d.getAttribute("data-theme-choice")||"system";d.setAttribute("data-theme",ch==="system"?(m.matches?"dark":"light"):ch)}d.setAttribute("data-theme-choice",c);a();m.addEventListener("change",a)})();`;
