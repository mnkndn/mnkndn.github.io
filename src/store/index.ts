import { atom } from "nanostores";

export const $route = atom<string>("home");

export function changeRoute(route: string) {
  $route.set(route);
}
