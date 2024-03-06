const CHANGE_PAGE_MIN_INTERVAL = 800;

export function isNewRequestAllowed(lastRequestTime: number): boolean {
  const currentTime = new Date().getTime();
  if (currentTime - lastRequestTime >= CHANGE_PAGE_MIN_INTERVAL) {
    return true;
  } else {
    return false;
  }
}
