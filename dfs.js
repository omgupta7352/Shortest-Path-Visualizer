async function dfs() {
  let visited = new Set(); // Set to keep track of visited cells
  let parents = {}; // Store parent of each cell for path tracing
  let found = false; // Flag to indicate if the destination is found

  // Starting and ending points
  let start = s;
  let end = en;

  // Directions for moving (up, down, left, right)
  const directions = [
    [-1, 0], // Move up
    [1, 0], // Move down
    [0, -1], // Move left
    [0, 1], // Move right
  ];

  // Helper function to check if a cell is within bounds and not blocked
  function canVisit(cell) {
    let [x, y] = cell;
    return (
      x >= 0 &&
      x < 25 &&
      y >= 0 &&
      y < 50 &&
      !visited.has(`${cell}`) &&
      !bl.some((b) => b[0] === x && b[1] === y)
    );
  }

  // Recursive DFS function
  async function dfsRecursive(cell) {
    // If we've reached the destination, terminate the recursion
    if (cell[0] === end[0] && cell[1] === end[1]) {
      found = true;
      return true;
    }

    visited.add(`${cell}`); // Mark the cell as visited

    // Explore all possible directions (up, down, left, right)
    for (let [dx, dy] of directions) {
      let neighbor = [cell[0] + dx, cell[1] + dy];

      // If the neighbor can be visited, explore it
      if (canVisit(neighbor)) {
        parents[`${neighbor}`] = cell; // Set the current cell as the parent of the neighbor

        // Visualize the path exploration
        if (neighbor[0] !== start[0] || neighbor[1] !== start[1]) {
          const promise = new Promise((accept) => {
            setTimeout(() => {
              document.getElementById("myTable").rows[neighbor[0]].cells[
                neighbor[1]
              ].style.background = "Dodgerblue";
              accept();
            }, 10);
          });
          await promise;
        }

        // Recursively call dfsRecursive on the neighbor
        if (await dfsRecursive(neighbor)) {
          return true; // Stop further exploration if destination is found
        }
      }
    }

    return false; // No path found in this branch, backtrack
  }

  // Main function to initiate the DFS search
  async function findPath() {
    // Start DFS from the starting cell
    await dfsRecursive(start);

    // If a path is found, reconstruct and highlight the path
    if (found) {
      let path = [];
      let step = end;

      // Trace back the path from end to start
      while (step !== null) {
        path.push(step);
        step = parents[`${step}`] || null;
      }

      path.reverse(); // Reverse to get the path from start to end

      // Highlight the path
      for (let [x, y] of path) {
        if (
          (x !== start[0] || y !== start[1]) &&
          (x !== end[0] || y !== end[1])
        ) {
          const promise = new Promise((accept) => {
            setTimeout(() => {
              document.getElementById("myTable").rows[x].cells[
                y
              ].style.backgroundColor = "yellow";
              accept();
            }, 10);
          });
          await promise;
        }
      }
    } else {
      // No path found, alert the user
      window.alert("No way to reach the end point");
    }
  }

  // Call the function to start the DFS search
  await findPath();
}
