export const getBaseUrl = () => {
  if (typeof document !== "undefined") {
    const currentScript = (document.currentScript ||
      document.querySelector(
        "script[data-scope='toddler-games']"
      )) as HTMLScriptElement;

    const entryUrl =
      currentScript?.getAttribute("src") || new URL(import.meta.url).origin;
    const baseUrl =
      entryUrl
        .split("?")[0]
        ?.replace("/dist/assets/remoteEntry.js", "")
        .replace("/assets/remoteEntry.js", "") || "/";

    if (import.meta.env.ASSET_URL) {
      return `${baseUrl}/${import.meta.env.ASSET_URL}`;
    }
    return baseUrl;
  }
  const entryUrl = new URL(import.meta.url).origin;
  if (import.meta.env.ASSET_URL) {
    return `${entryUrl}/${import.meta.env.ASSET_URL}`;
  }
  return "/";
};
