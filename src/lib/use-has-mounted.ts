import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

// The server always renders as "not yet mounted"; the client snapshot flips
// to true on the first client render. Using useSyncExternalStore instead of
// a useState+useEffect pair avoids the setState-in-effect anti-pattern for
// this common hydration-guard case.
export function useHasMounted(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}
