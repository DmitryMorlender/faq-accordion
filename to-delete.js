const adjecencyList = [];

function DFSRecursion(start) {
  const result = [];
  const visited = {};

  (function DFS(startNode) {
    if (!startNode) return;
    visited[startNode] = true;
    result.push(startNode);

    adjecencyList.forEach((node) => {
      if (!visited[node]) {
        return DFS(node);
      }
    });
  })(start);

  return result;
}

function DFSIterative(start) {
  const result = [];
  const visited = {};
  const stack = [start];
  visited[start] = true;

  while (stack.length) {
    const node = stack.pop();
    result.push(node);

    adjecencyList.forEach((node) => {
      if (!visited[node]) {
        visited[node] = true;
        stack.push(node);
      }
    });
  }

  return result;
}

function BFSIterative(start) {
  const result = [];
  const visited = {};
  const queue = [start];
  visited[node] = true;

  while (queue.length) {
    const node = queue.shift();
    result.push(node);

    adjecencyList.forEach((node) => {
      if (!visited[node]) {
        visited[node] = true;
        queue.push(node);
      }
    });
  }

  return result;
}
