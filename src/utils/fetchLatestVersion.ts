export const fetchLatestVersion = async () => {
  if ('serviceWorker' in navigator) {
    const registrations = await navigator.serviceWorker.getRegistrations();
    for (const registration of registrations) {
      await registration.update().catch((e) => {
        console.warn(e);
      });
      await registration.waiting?.postMessage({ type: 'SKIP_WAITING' });
    }
  }
  await new Promise((resolve) => setTimeout(resolve, 1000));
};

export const isNewVersionAvailable = async () => {
  if ('serviceWorker' in navigator) {
    const registration = await navigator.serviceWorker.getRegistration();
    await registration?.update().catch((e) => {
      console.warn(e);
    });
    return !!registration?.waiting;
  }
  return false;
};
