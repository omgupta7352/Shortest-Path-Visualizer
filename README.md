# Shortest Path Visualizer

![SHORTEST PATH FINDER](pathfinder.png)

**Shortest Path  Visualizer** is a web application designed to visualize pathfinding algorithms on a grid. This is a visual tool built using HTML, CSS, and JavaScript that allows users to find the shortest path between two points on a grid using various pathfinding algorithms. It's an educational and interactive way to understand how algorithms like Dijkstra, A*, and others work.

## Table of Contents
- [Pathfinding Algorithms](#pathfinding-algorithms)
- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [How It Works](#how-it-works)
- [Contributing](#contributing)

## Pathfinding Algorithms :technologist:

- Dijkstra's Algorithm
- A* (A-Star) Algorithm
- Breadth-First Search (BFS)
- Depth-First Search (DFS)

## Features

- **Algorithms**: Visualize different pathfinding algorithms.
- **Responsive design**: Responsive design, compatible with mobile and desktop.
- **Interactive Grid**: A 25x50 grid where users can select start and end nodes, place blocks, and visualize paths.
- **Random Block Generation**: Generates random blocks as obstacles.
- **Path Visualization**: Visualize the shortest path using BFS (Breadth First Search) or similar algorithms.
- **Block Manipulation**: Add or remove blocks interactively on the grid.
- **Reset**: Reset the grid to start a new visualization.
- Real-time visual animations of the algorithms in action

## Demo

Try out the Shortest Path Visualizer live [here](https://shortestpathvisual.netlify.app/).

## Technologies Used

This project uses the following technologies:

- **HTML5:** For structuring the grid and the user interface.
- **CSS3:** For styling the app and creating responsive layouts.
- **JavaScript (ES6):** For implementing the pathfinding algorithms, user interaction logic, and animations.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/omgupta7352/Shortest-Path-Visualizer
    ```

2. Navigate to the project directory:

    ```bash
    cd Shortest-Path-Visualizer
    ```

3. Open `index.html` in your web browser.

## Usage

Once the app is running in your browser, you can begin using it to visualize different pathfinding algorithms:

1. **Set Start Node**: Click on the **"starting node"** button, then click on a cell in the grid to place the start node (green color).
2. **Set End Node**: Click on the **"ending node"** button, then click on a cell in the grid to place the end node (pink color).
3. **Place Blocks**: Click on the **"select blocks"** button, then click or drag over the grid to place obstacles (gray color) that the path must navigate around.
4. **Random Blocks**: Click on **"generate random blocks"** to fill the grid with random obstacles.
5. **Remove Blocks**: Click on the **"remove blocks"** button, then click on any block to remove it from the grid.
7. **Find Shortest Path**: Click on the **"find shortest path"** button to visualize the shortest path between the start and end nodes (highlighted path).
8. **Reset**: Click **"reset"** to clear the grid and start over.

## How It Works

1. **Grid Setup:** 
   - The grid consists of rows and columns where the user can place a start point, an end point, and obstacles.
2. **Pathfinding Algorithms:**
   - **Dijkstra's Algorithm:** Guarantees the shortest path by exploring all possible paths based on distance.
   - **A* Algorithm:** Uses heuristics to speed up the process, finding the shortest path faster by prioritizing nodes.
   - **BFS (Breadth-First Search):** Explores the nearest nodes layer by layer and guarantees the shortest path in unweighted grids.
   - **DFS (Depth-First Search):** Explores paths by going deep into one direction first but may not guarantee the shortest path.
3. **Real-time Visualization:**
   - Once an algorithm is chosen, it visually explores the grid in real-time, showing the process step-by-step.
4. **Reset and Re-run:** 
   - After completion, you can reset the grid and try different algorithms or grid setups.

## Contributing

Contributions are always welcome! To contribute to this project:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:

    ```bash
    git checkout -b feature/your-feature-name
    ```

3. Commit your changes:

    ```bash
    git commit -m 'Add some feature'
    ```

4. Push to the branch:

    ```bash
    git push origin feature/your-feature-nam
    
5. Open a pull request on GitHub.
