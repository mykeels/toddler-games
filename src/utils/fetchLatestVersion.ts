export const fetchLatestVersion = async () => {
  if ("serviceWorker" in navigator) {
    await navigator.serviceWorker.getRegistrations().then((registrations) => {
      for (const registration of registrations) {
        registration.update();
      }
    });
  }
  await new Promise(resolve => setTimeout(resolve, 1000));
};

export const isNewVersionAvailable = async () => {
  if ("serviceWorker" in navigator) {
    const registration = await navigator.serviceWorker.getRegistration();
    return registration?.waiting;
  }
  return false;
}
