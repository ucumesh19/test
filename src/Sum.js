import { track } from "./Random";

export function sum(a, b) {
    track('sum')
    return a + b;
}
