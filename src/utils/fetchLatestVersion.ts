export const fetchLatestVersion = async () => {
  if ('serviceWorker' in navigator) {
    const registrations = await navigator.serviceWorker.getRegistrations();
    for (const registration of registrations) {
      await registration.update();
    }
  }
  await new Promise((resolve) => setTimeout(resolve, 1000));
};

export const isNewVersionAvailable = async () => {
  if ('serviceWorker' in navigator) {
    const registration = await navigator.serviceWorker.getRegistration();
    return !!registration?.waiting;
  }
  return false;
};
