export const fetchLatestVersion = async () => {
  if ("serviceWorker" in navigator) {
    await navigator.serviceWorker.getRegistrations().then((registrations) => {
      for (const registration of registrations) {
        registration.update();
      }
    });
  }
};
