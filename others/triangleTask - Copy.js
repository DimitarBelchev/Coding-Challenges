//     Calculate the Area of the Triangle:

//         We use the coordinates of the triangle's vertices (xA,yA)(xA, yA), (xB,yB)(xB, yB), and (xC,yC)(xC, yC) to calculate the area of the triangle.

//     Calculate Sub-Areas:

//         Divide the triangle into smaller triangles using the points (x1,y1)(x_1, y_1) and (x2,y2)(x_2, y_2), and calculate their areas.

//         Specifically, create and calculate the areas of the triangles:

//             (xA,yA)(xA, yA), (xB,yB)(xB, yB), (x1,y1)(x_1, y_1)

//             (xA,yA)(xA, yA), (xB,yB)(xB, yB), (x2,y2)(x_2, y_2)

//             (xB,yB)(xB, yB), (xC,yC)(xC, yC), (x1,y1)(x_1, y_1)

//             (xB,yB)(xB, yB), (xC,yC)(xC, yC), (x2,y2)(x_2, y_2)

//             (xA,yA)(xA, yA), (xC,yC)(xC, yC), (x1,y1)(x_1, y_1)

//             (xA,yA)(xA, yA), (xC,yC)(xC, yC), (x2,y2)(x_2, y_2)

//     Check Conditions:

//         Verify that the line segment is inside the triangle by checking if the sum of the sub-areas equals the total area of the triangle.

// Here's how to implement it in JavaScript:

// Function to calculate the area of a triangle given its vertices
function calculateArea(x1, y1, x2, y2, x3, y3) {
  return Math.abs((x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2.0);
}

// Function to check if a line segment lies inside a triangle
function isLineInTriangle(xA, yA, xB, yB, xC, yC, x1, y1, x2, y2) {
  // Area of the triangle ABC
  const totalArea = calculateArea(xA, yA, xB, yB, xC, yC);

  // Areas of the sub-triangles formed with the line segment points
  const area1 = calculateArea(xA, yA, xB, yB, x1, y1);
  const area2 = calculateArea(xA, yA, xB, yB, x2, y2);
  const area3 = calculateArea(xB, yB, xC, yC, x1, y1);
  const area4 = calculateArea(xB, yB, xC, yC, x2, y2);
  const area5 = calculateArea(xA, yA, xC, yC, x1, y1);
  const area6 = calculateArea(xA, yA, xC, yC, x2, y2);

  // Check if the sum of the sub-areas equals the total area
  const sumOfSubAreas = area1 + area2 + area3 + area4 + area5 + area6;
  return sumOfSubAreas === totalArea;
}

// Example Usage:
const xA = 0,
  yA = 0,
  xB = 5,
  yB = 0,
  xC = 3,
  yC = 5;
const x1 = 1,
  y1 = 1,
  x2 = 4,
  y2 = 3;

const result = isLineInTriangle(xA, yA, xB, yB, xC, yC, x1, y1, x2, y2);
console.log(
  result
    ? "The line is inside the triangle"
    : "The line is not inside the triangle"
);

// Explanation:

//     calculateArea: This function calculates the area of a triangle given its three vertices using the determinant formula.

//     isLineInTriangle: This function checks if a line segment lies inside a triangle by comparing the sum of the sub-triangles' areas with the total area of the triangle.

//     Example Usage: An example to demonstrate the function with specific coordinates of the triangle and the line segment.

// This method ensures that the line segment is entirely within the triangle by verifying that the sum of the sub-areas formed by the line segment points equals the area of the triangle. If the sum matches, the line segment is inside the triangle; otherwise, it is not.
