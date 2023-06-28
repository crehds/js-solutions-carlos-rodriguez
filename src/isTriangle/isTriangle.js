export default function isTriangle(a, b, c) {
  // Returns true if a, b, and c are the sides of a triangle, otherwise returns false.
  return !!(a + b > c && a + c > b && b + c > a);
}
