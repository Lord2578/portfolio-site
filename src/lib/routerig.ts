export const ROUTERIG_REPO = "https://github.com/Lord2578/route-rig";

export const ROUTERIG_SCREENS = [
  {
    id: "map-route-comparison",
    label: "Route comparison",
    src: "/projects/routerig/source/map-route-comparison.png",
    alt: "Map screen showing a truck route, car route, and the distance/duration comparison card",
  },
  {
    id: "map-waypoints",
    label: "Multi-stop planning",
    src: "/projects/routerig/source/map-waypoints.png",
    alt: "Map screen with a stop added between origin and destination",
  },
  {
    id: "saved-routes",
    label: "Saved routes",
    src: "/projects/routerig/source/saved-routes.png",
    alt: "Saved routes list screen",
  },
] as const;

export const ROUTERIG_STACK = [
  "Expo (dev client)",
  "React Native",
  "TypeScript",
  "react-native-maps",
  "TanStack Query",
  "NativeWind",
  "React Navigation",
  "expo-location",
  "expo-task-manager",
  "OpenRouteService",
] as const;

export const ROUTERIG_DECISIONS = [
  {
    title: "OpenRouteService over HERE",
    detail:
      "HERE Truck Routing was the original pick, but its free tier requires a credit card on file. Switched to OpenRouteService — no billing info needed, and its HGV profile still covers height, weight, and length restrictions.",
  },
  {
    title: "Background tracking, added after the MVP",
    detail:
      "Deliberately scoped out of v1 (a well-known time sink, and it needs a physical device to test). Layered in once the core flow was solid, using expo-task-manager + expo-location with a module-level task so the OS can invoke it without the React tree mounted.",
  },
  {
    title: "Native map providers, not forced parity",
    detail:
      "Apple Maps on iOS, Google Maps on Android — react-native-maps' platform defaults. Forcing Google Maps on both would mean a second API key and a billing card just for visual consistency.",
  },
] as const;
