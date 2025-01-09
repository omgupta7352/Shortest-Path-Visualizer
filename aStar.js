async function aStar() {
  let visited = new Set(); // Set to keep track of visited cells
  let gScore = {}; // Actual cost from start to each cell
  let fScore = {}; // Estimated cost (gScore + heuristic) to end
  let parents = {}; // Store parent of each cell for path tracing
  let pq = []; // Priority queue (min-heap) for A* algorithm

  // Starting and ending points
  let start = s;
  let end = en;

  // Initialize the starting point
  gScore[`${start}`] = 0;
  fScore[`${start}`] = heuristic(start, end);
  parents[`${start}`] = null;
  pq.push({ pos: start, f: fScore[`${start}`] });

  // Directions for moving (up, down, left, right)
  const directions = [
    [-1, 0], // Move up
    [1, 0], // Move down
    [0, -1], // Move left
    [0, 1], // Move right
  ];

  // Heuristic function (Manhattan distance)
  function heuristic(cell, end) {
    return Math.abs(cell[0] - end[0]) + Math.abs(cell[1] - end[1]);
  }

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

  // Helper function to update the priority queue (min-heap)
  function enqueue(cell, f) {
    pq.push({ pos: cell, f: f });
    pq.sort((a, b) => a.f - b.f); // Sort by f-score (estimated total cost)
  }

  // Main loop of A* algorithm
  while (pq.length > 0) {
    let current = pq.shift(); // Get the cell with the smallest f-score
    let [cx, cy] = current.pos;

    // If we've reached the end, reconstruct the shortest path
    if (cx === end[0] && cy === end[1]) {
      let path = [];
      let step = current.pos;

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

    visited.add(`${current.pos}`); // Mark the cell as visited

    // Explore all possible directions (up, down, left, right)
    for (let [dx, dy] of directions) {
      let neighbor = [cx + dx, cy + dy];

      // If the neighbor can be visited
      if (canVisit(neighbor)) {
        let tentative_gScore = gScore[`${current.pos}`] + 1; // Uniform cost of 1 for each move

        // If this path to the neighbor is shorter, update it
        if (tentative_gScore < (gScore[`${neighbor}`] || Infinity)) {
          gScore[`${neighbor}`] = tentative_gScore;
          let estimated_fScore = tentative_gScore + heuristic(neighbor, end);
          fScore[`${neighbor}`] = estimated_fScore;
          parents[`${neighbor}`] = current.pos; // Set the current cell as the parent of the neighbor
          enqueue(neighbor, estimated_fScore); // Add the neighbor to the priority queue

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
        }
      }
    }
  }

  // If no path was found, alert the user
  window.alert("No way to reach the end point");
}
