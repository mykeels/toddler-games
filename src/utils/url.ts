import urlJoin from "url-join";

export const getBaseUrl = () => {
  const assetUrl = import.meta.env.BASE_URL || import.meta.env.ASSET_URL;
  if (typeof document !== "undefined") {
    const currentScript = (document.currentScript ||
      document.querySelector(
        "script[data-scope='toddler-games']"
      )) as HTMLScriptElement;

    const entryUrl =
      currentScript?.getAttribute("src") || new URL(import.meta.url).origin;
    const baseUrl = new URL(entryUrl).origin;

    if (assetUrl && !baseUrl.endsWith(assetUrl)) {
      return urlJoin(baseUrl, assetUrl);
    }
    return baseUrl;
  }
  const entryUrl = new URL(import.meta.url).origin;
  if (assetUrl && !entryUrl.endsWith(assetUrl)) {
    return urlJoin(entryUrl, assetUrl);
  }
  return "/";
};
