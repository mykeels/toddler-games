export const getBaseUrl = () => {
  if (typeof document !== "undefined") {
    const currentScript = (document.currentScript ||
      document.querySelector(
        "script[data-scope='toddler-games']"
      )) as HTMLScriptElement;
    const baseUrl = currentScript?.getAttribute("src") || new URL(import.meta.url).origin;
    return (
      baseUrl
        .split("?")[0]
        ?.replace("/dist/assets/remoteEntry.js", "")
        .replace("/assets/remoteEntry.js", "") || "/"
    );
  }
  return "/";
};
