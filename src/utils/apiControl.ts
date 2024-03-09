const CHANGE_PAGE_MIN_INTERVAL = 800;

export function isNewRequestAllowed(lastRequestTime: number) {
  const currentTime = new Date().getTime();
  return currentTime - lastRequestTime >= CHANGE_PAGE_MIN_INTERVAL;
}
