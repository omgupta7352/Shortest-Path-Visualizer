async function bfs() {
  let visited = []; // Keep track of visited cells
  let queue = []; // Queue for BFS
  let parents = {}; // Store the parent of each cell for path tracing

  // Starting point and end point
  let start = s;
  let end = en;

  // Add the starting point to the queue and mark as visited
  queue.push(start);
  visited.push(start);
  parents[`${start}`] = null; // Root has no parent

  // Directions for moving (up, down, left, right)
  const directions = [
    [-1, 0], // Move up
    [1, 0], // Move down
    [0, -1], // Move left
    [0, 1], // Move right
  ];

  // Helper function to check if a cell is within bounds and not visited or blocked
  function canVisit(cell) {
    let [x, y] = cell;
    return (
      x >= 0 &&
      x < 25 &&
      y >= 0 &&
      y < 50 &&
      !visited.some((c) => c[0] === x && c[1] === y) &&
      !bl.some((b) => b[0] === x && b[1] === y)
    );
  }

  // Main BFS loop
  while (queue.length > 0) {
    let current = queue.shift(); // Get the current cell from the queue

    // Check if we've reached the end
    if (current[0] === end[0] && current[1] === end[1]) {
      let path = [];
      let step = current;

      // Trace back the path from end to start
      while (step !== null) {
        path.push(step);
        step = parents[`${step}`];
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
      return path; // Return the shortest path
    }

    // Explore all possible directions (up, down, left, right)
    for (let [dx, dy] of directions) {
      let next = [current[0] + dx, current[1] + dy];

      // If the next cell can be visited, add it to the queue
      if (canVisit(next)) {
        queue.push(next);
        visited.push(next);
        parents[`${next}`] = current; // Set the current cell as the parent of the next cell

        // Visualize the path exploration
        if (next[0] !== start[0] || next[1] !== start[1]) {
          const promise = new Promise((accept) => {
            setTimeout(() => {
              document.getElementById("myTable").rows[next[0]].cells[
                next[1]
              ].style.background = "Dodgerblue";
              accept();
            }, 10);
          });
          await promise;
        }
      }
    }
  }

  // If no path was found, alert the user
  window.alert("No way to reach the end point");
}
