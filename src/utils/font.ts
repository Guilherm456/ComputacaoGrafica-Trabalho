const Letters: {
  [key: string]: number[][][];
} = {
  A: [
    [
      [-2.5, 3.5, 0.0],
      [2.5, 3.5, 0.0],
      [2.5, -3.5, 0.0],
      [1.5, -3.5, 0.0],
      [1.5, -0.5, 0.0],
      [-1.5, -0.5, 0.0],
      [-1.5, -3.5, 0.0],
      [-2.5, -3.5, 0.0],
    ],
    [
      [-1.5, 2.5, 0.0],
      [1.5, 2.5, 0.0],
      [1.5, 0.5, 0.0],
      [-1.5, 0.5, 0.0],
    ],
  ],
  B: [
    [
      [-2.5, 3.5, 0.0],
      [2.5, 3.5, 0.0],
      [2.5, 0.5, 0.0],
      [1.5, 0.5, 0.0],
      [1.5, -0.5, 0.0],
      [2.5, -0.5, 0.0],
      [2.5, -3.5, 0.0],
      [-2.5, -3.5, 0.0],
    ],
    [
      [-1.5, 2.5, 0.0],
      [1.5, 2.5, 0.0],
      [1.5, 0.5, 0.0],
      [-1.5, 0.5, 0.0],
    ],
    [
      [-1.5, -0.5, 0.0],
      [1.5, -0.5, 0.0],
      [1.5, -2.5, 0.0],
      [-1.5, -2.5, 0.0],
    ],
  ],
  C: [
    [
      [-2.5, 3.5, 0.0],
      [2.5, 3.5, 0.0],
      [2.5, 2.5, 0.0],
      [-1.5, 2.5, 0.0],
      [-1.5, -2.5, 0.0],
      [2.5, -2.5, 0.0],
      [2.5, -3.5, 0.0],
      [-2.5, -3.5, 0.0],
    ],
  ],
  D: [
    [
      [-2.5, 3.5, 0.0],
      [1.5, 3.5, 0.0],
      [1.5, 2.5, 0.0],
      [2.5, 2.5, 0.0],
      [2.5, -2.5, 0.0],
      [1.5, -2.5, 0.0],
      [1.5, -3.5, 0.0],
      [-2.5, -3.5, 0.0],
    ],
    [
      [-1.5, 2.5, 0.0],
      [0.5, 2.5, 0.0],
      [0.5, 1.5, 0.0],
      [1.5, 1.5, 0.0],
      [1.5, -1.5, 0.0],
      [0.5, -1.5, 0.0],
      [0.5, -2.5, 0.0],
      [-1.5, -2.5, 0.0],
    ],
  ],
  E: [
    [
      [-2.5, 3.5, 0.0],
      [2.5, 3.5, 0.0],
      [2.5, 2.5, 0.0],
      [-1.5, 2.5, 0.0],
      [-1.5, 0.5, 0.0],
      [2.5, 0.5, 0.0],
      [2.5, -0.5, 0.0],
      [-1.5, -0.5, 0.0],
      [-1.5, -2.5, 0.0],
      [2.5, -2.5, 0.0],
      [2.5, -3.5, 0.0],
      [-2.5, -3.5, 0.0],
    ],
  ],
  F: [
    [
      [-2.5, 3.5, 0.0],
      [2.5, 3.5, 0.0],
      [2.5, 2.5, 0.0],
      [-1.5, 2.5, 0.0],
      [-1.5, 0.5, 0.0],
      [2.5, 0.5, 0.0],
      [2.5, -0.5, 0.0],
      [-1.5, -0.5, 0.0],
      [-1.5, -3.5, 0.0],
      [-2.5, -3.5, 0.0],
    ],
  ],
  G: [
    [
      [-2.5, 3.5, 0.0],
      [2.5, 3.5, 0.0],
      [2.5, 2.5, 0.0],
      [-1.5, 2.5, 0.0],
      [-1.5, -2.5, 0.0],
      [1.5, -2.5, 0.0],
      [1.5, -0.5, 0.0],
      [0.5, -0.5, 0.0],
      [0.5, 0.5, 0.0],
      [2.5, 0.5, 0.0],
      [2.5, -3.5, 0.0],
      [-2.5, -3.5, 0.0],
    ],
  ],
  H: [
    [
      [-2.5, 3.5, 0.0],
      [-1.5, 3.5, 0.0],
      [-1.5, 0.5, 0.0],
      [1.5, 0.5, 0.0],
      [1.5, 3.5, 0.0],
      [2.5, 3.5, 0.0],
      [2.5, -3.5, 0.0],
      [1.5, -3.5, 0.0],
      [1.5, -0.5, 0.0],
      [-1.5, -0.5, 0.0],
      [-1.5, -3.5, 0.0],
      [-2.5, -3.5, 0.0],
    ],
  ],
  I: [
    [
      [-2.5, 3.5, 0.0],
      [2.5, 3.5, 0.0],
      [2.5, 2.5, 0.0],
      [0.5, 2.5, 0.0],
      [0.5, -2.5, 0.0],
      [2.5, -2.5, 0.0],
      [2.5, -3.5, 0.0],
      [-2.5, -3.5, 0.0],
      [-2.5, -2.5, 0.0],
      [-0.5, -2.5, 0.0],
      [-0.5, 2.5, 0.0],
      [-2.5, 2.5, 0.0],
    ],
  ],
  J: [
    [
      [0.5, 3.5, 0.0],
      [2.5, 3.5, 0.0],
      [2.5, -2.5, 0.0],
      [1.5, -2.5, 0.0],
      [1.5, -3.5, 0.0],
      [-1.5, -3.5, 0.0],
      [-1.5, -2.5, 0.0],
      [-2.5, -2.5, 0.0],
      [-2.5, -1.5, 0.0],
      [-1.5, -1.5, 0.0],
      [-1.5, -2.5, 0.0],
      [1.5, -2.5, 0.0],
      [1.5, 2.5, 0.0],
      [0.5, 2.5, 0.0],
    ],
  ],
  K: [
    [
      [-2.5, 3.5, 0.0],
      [-1.5, 3.5, 0.0],
      [-1.5, 0.5, 0.0],
      [-0.5, 0.5, 0.0],
      [-0.5, 1.5, 0.0],
      [0.5, 1.5, 0.0],
      [0.5, 2.5, 0.0],
      [1.5, 2.5, 0.0],
      [1.5, 3.5, 0.0],
      [2.5, 3.5, 0.0],
      [2.5, 2.5, 0.0],
      [1.5, 2.5, 0.0],
      [1.5, 1.5, 0.0],
      [0.5, 1.5, 0.0],
      [0.5, 0.5, 0.0],
      [-0.5, 0.5, 0.0],
      [-0.5, -0.5, 0.0],
      [0.5, -0.5, 0.0],
      [0.5, -1.5, 0.0],
      [1.5, -1.5, 0.0],
      [1.5, -2.5, 0.0],
      [2.5, -2.5, 0.0],
      [2.5, -3.5, 0.0],
      [1.5, -3.5, 0.0],
      [1.5, -2.5, 0.0],
      [0.5, -2.5, 0.0],
      [0.5, -1.5, 0.0],
      [-0.5, -1.5, 0.0],
      [-0.5, -0.5, 0.0],
      [-1.5, -0.5, 0.0],
      [-1.5, -3.5, 0.0],
      [-2.5, -3.5, 0.0],
    ],
  ],
  L: [
    [
      [-2.5, 3.5, 0],
      [-2.5, -3.5, 0],
      [2.5, -3.5, 0],
      [2.5, -2.5, 0],
      [-1.5, -2.5, 0],
      [-1.5, 3.5, 0],
    ],
  ],
  M: [
    [
      [-2.5, 3.5, 0.0],
      [-1.5, 3.5, 0.0],
      [-1.5, 2.5, 0.0],
      [-0.5, 2.5, 0.0],
      [-0.5, 1.5, 0.0],
      [0.5, 1.5, 0.0],
      [0.5, 2.5, 0.0],
      [1.5, 2.5, 0.0],
      [1.5, 3.5, 0.0],
      [2.5, 3.5, 0.0],
      [2.5, -3.5, 0.0],
      [1.5, -3.5, 0.0],
      [1.5, 0.5, 0.0],
      [1.5, 0.5, 0.0],
      [0.5, 0.5, 0.0],
      [0.5, -0.5, 0.0],
      [-0.5, -0.5, 0.0],
      [-0.5, 0.5, 0.0],
      [-1.5, 0.5, 0.0],
      [-1.5, -3.5, 0.0],
      [-2.5, -3.5, 0.0],
    ],
  ],
  N: [
    [
      [-2.5, 3.5, 0.0],
      [-1.5, 3.5, 0.0],
      [-1.5, 2.5, 0.0],
      [-0.5, 2.5, 0.0],
      [-0.5, 1.5, 0.0],
      [0.5, 1.5, 0.0],
      [0.5, 0.5, 0.0],
      [1.5, 0.5, 0.0],
      [1.5, 3.5, 0.0],
      [2.5, 3.5, 0.0],
      [2.5, -3.5, 0.0],
      [1.5, -3.5, 0.0],
      [1.5, -0.5, 0.0],
      [0.5, -0.5, 0.0],
      [0.5, 0.5, 0.0],
      [-0.5, 0.5, 0.0],
      [-0.5, 1.5, 0.0],
      [-1.5, 1.5, 0.0],
      [-1.5, -3.5, 0.0],
      [-2.5, -3.5, 0.0],
    ],
  ],
  O: [
    [
      [-2.5, 3.5, 0.0],
      [2.5, 3.5, 0.0],
      [2.5, -3.5, 0.0],
      [-2.5, -3.5, 0.0],
    ],
    [
      [1.5, 2.5, 0.0],
      [1.5, -2.5, 0.0],
      [-1.5, -2.5, 0.0],
      [-1.5, 2.5, 0.0],
    ],
  ],
  P: [
    [
      [-2.5, 3.5, 0.0],
      [2.5, 3.5, 0.0],
      [2.5, -0.5, 0.0],
      [-1.5, -0.5, 0.0],
      [-1.5, -3.5, 0.0],
      [-2.5, -3.5, 0.0],
    ],
    [
      [-1.5, 2.5, 0.0],
      [1.5, 2.5, 0.0],
      [1.5, 0.5, 0.0],
      [-1.5, 0.5, 0.0],
    ],
  ],
  Q: [
    [
      [-2.5, 3.5, 0.0],
      [2.5, 3.5, 0.0],
      [2.5, -2.5, 0.0],
      [0.5, -2.5, 0.0],
      [0.5, -3.5, 0.0],
      [-0.5, -3.5, 0.0],
      [-0.5, -2.5, 0.0],
      [-2.5, -2.5, 0.0],
    ],
    [
      [-1.5, 2.5, 0.0],
      [1.5, 2.5, 0.0],
      [1.5, -1.5, 0.0],
      [0.5, -1.5, 0.0],
      [0.5, 0.5, 0.0],
      [-0.5, 0.5, 0.0],
      [-0.5, -1.5, 0.0],
      [-1.5, -1.5, 0.0],
    ],
  ],
  R: [
    [
      [-2.5, 3.5, 0.0],
      [2.5, 3.5, 0.0],
      [2.5, -0.5, 0.0],
      [1.5, -0.5, 0.0],
      [1.5, -3.5, 0.0],
      [0.5, -3.5, 0.0],
      [0.5, -0.5, 0.0],
      [-1.5, -0.5, 0.0],
      [-1.5, -3.5, 0.0],
      [-2.5, -3.5, 0.0],
    ],
    [
      [-1.5, 2.5, 0.0],
      [1.5, 2.5, 0.0],
      [1.5, 0.5, 0.0],
      [-1.5, 0.5, 0.0],
    ],
  ],
  S: [
    [
      [-2.5, 3.5, 0.0],
      [2.5, 3.5, 0.0],
      [2.5, 1.5, 0.0],
      [1.5, 1.5, 0.0],
      [1.5, 2.5, 0.0],
      [-1.5, 2.5, 0.0],
      [-1.5, 0.5, 0.0],
      [2.5, 0.5, 0.0],
      [2.5, -3.5, 0.0],
      [-2.5, -3.5, 0.0],
      [-2.5, -1.5, 0.0],
      [-1.5, -1.5, 0.0],
      [-1.5, -2.5, 0.0],
      [1.5, -2.5, 0.0],
      [1.5, -0.5, 0.0],
      [-2.5, -0.5, 0.0],
    ],
  ],
  T: [
    [
      [-2.5, 3.5, 0.0],
      [2.5, 3.5, 0.0],
      [2.5, 2.5, 0.0],
      [0.5, 2.5, 0.0],
      [0.5, -3.5, 0.0],
      [-0.5, -3.5, 0.0],
      [-0.5, 2.5, 0.0],
      [-2.5, 2.5, 0.0],
    ],
  ],
  U: [
    [
      [-2.5, 3.5, 0.0],
      [-1.5, 3.5, 0.0],
      [-1.5, -2.5, 0.0],
      [1.5, -2.5, 0.0],
      [1.5, 3.5, 0.0],
      [2.5, 3.5, 0.0],
      [2.5, -3.5, 0.0],
      [-2.5, -3.5, 0.0],
    ],
  ],
  V: [
    [
      [-2.5, 3.5, 0.0],
      [-1.5, 3.5, 0.0],
      [-1.5, -1.5, 0.0],
      [-0.5, -1.5, 0.0],
      [-0.5, -2.5, 0.0],
      [0.5, -2.5, 0.0],
      [0.5, -1.5, 0.0],
      [1.5, -1.5, 0.0],
      [1.5, 3.5, 0.0],
      [2.5, 3.5, 0.0],
      [2.5, -1.5, 0.0],
      [1.5, -1.5, 0.0],
      [1.5, -2.5, 0.0],
      [0.5, -2.5, 0.0],
      [0.5, -3.5, 0.0],
      [-0.5, -3.5, 0.0],
      [-0.5, -2.5, 0.0],
      [-1.5, -2.5, 0.0],
      [-1.5, -1.5, 0.0],
      [-2.5, -1.5, 0.0],
    ],
  ],
  W: [
    [
      [-2.5, 3.5, 0.0],
      [-1.5, 3.5, 0.0],
      [-1.5, -0.5, 0.0],
      [-0.5, -0.5, 0.0],
      [-0.5, 0.5, 0.0],
      [0.5, 0.5, 0.0],
      [0.5, -0.5, 0.0],
      [1.5, -0.5, 0.0],
      [1.5, 3.5, 0.0],
      [2.5, 3.5, 0.0],
      [2.5, -3.5, 0.0],
      [1.5, -3.5, 0.0],
      [1.5, -2.5, 0.0],
      [0.5, -2.5, 0.0],
      [0.5, -1.5, 0.0],
      [-0.5, -1.5, 0.0],
      [-0.5, -2.5, 0.0],
      [-1.5, -2.5, 0.0],
      [-1.5, -3.5, 0.0],
      [-2.5, -3.5, 0.0],
    ],
  ],
  X: [
    [
      [-2.5, 3.5, 0.0],
      [-1.5, 3.5, 0.0],
      [-1.5, 0.5, 0.0],
      [1.5, 0.5, 0.0],
      [1.5, 3.5, 0.0],
      [2.5, 3.5, 0.0],
      [2.5, 0.5, 0.0],
      [1.5, 0.5, 0.0],
      [1.5, -0.5, 0.0],
      [2.5, -0.5, 0.0],
      [2.5, -3.5, 0.0],
      [1.5, -3.5, 0.0],
      [1.5, -0.5, 0.0],
      [-1.5, -0.5, 0.0],
      [-1.5, -3.5, 0.0],
      [-2.5, -3.5, 0.0],
      [-2.5, -0.5, 0.0],
      [-1.5, -0.5, 0.0],
      [-1.5, 0.5, 0.0],
      [-2.5, 0.5, 0.0],
    ],
  ],
  Y: [
    [
      [-2.5, 3.5, 0.0],
      [-1.5, 3.5, 0.0],
      [-1.5, 1.5, 0.0],
      [-0.5, 1.5, 0.0],
      [-0.5, 0.5, 0.0],
      [0.5, 0.5, 0.0],
      [0.5, 1.5, 0.0],
      [1.5, 1.5, 0.0],
      [1.5, 3.5, 0.0],
      [2.5, 3.5, 0.0],
      [2.5, 1.5, 0.0],
      [1.5, 1.5, 0.0],
      [1.5, -0.5, 0.0],
      [0.5, -0.5, 0.0],
      [0.5, -3.5, 0.0],
      [-0.5, -3.5, 0.0],
      [-0.5, -0.5, 0.0],
      [-1.5, -0.5, 0.0],
      [-1.5, 1.5, 0.0],
      [-2.5, 1.5, 0.0],
    ],
  ],
  Z: [
    [
      [-2.5, 3.5, 0.0],
      [2.5, 3.5, 0.0],
      [2.5, 1.5, 0.0],
      [1.5, 1.5, 0.0],
      [1.5, 0.5, 0.0],
      [0.5, 0.5, 0.0],
      [0.5, -0.5, 0.0],
      [-0.5, -0.5, 0.0],
      [-0.5, -1.5, 0.0],
      [-1.5, -1.5, 0.0],
      [-1.5, -2.5, 0.0],
      [2.5, -2.5, 0.0],
      [2.5, -3.5, 0.0],
      [-2.5, -3.5, 0.0],
      [-2.5, -1.5, 0.0],
      [-1.5, -1.5, 0.0],
      [-1.5, -0.5, 0.0],
      [-0.5, -0.5, 0.0],
      [-0.5, 0.5, 0.0],
      [0.5, 0.5, 0.0],
      [0.5, 1.5, 0.0],
      [1.5, 1.5, 0.0],
      [1.5, 2.5, 0.0],
      [-2.5, 2.5, 0.0],
    ],
  ],
  0: [
    [
      [-2.5, 3.5, 0.0],
      [2.5, 3.5, 0.0],
      [2.5, -3.5, 0.0],
      [-2.5, -3.5, 0.0],
    ],
    [
      [-1.5, 2.5, 0.0],
      [1.5, 2.5, 0.0],
      [1.5, -2.5, 0.0],
      [-1.5, -2.5, 0.0],
    ],
  ],
  1: [
    [
      [-1.5, 3.5, 0.0],
      [0.5, 3.5, 0.0],
      [0.5, -3.5, 0.0],
      [-0.5, -3.5, 0.0],
      [-0.5, 2.5, 0.0],
      [-1.5, 2.5, 0.0],
    ],
  ],
  2: [
    [
      [-2.5, 3.5, 0.0],
      [2.5, 3.5, 0.0],
      [2.5, -0.5, 0.0],
      [-1.5, -0.5, 0.0],
      [-1.5, -2.5, 0.0],
      [2.5, -2.5, 0.0],
      [2.5, -3.5, 0.0],
      [-2.5, -3.5, 0.0],
      [-2.5, 0.5, 0.0],
      [1.5, 0.5, 0.0],
      [1.5, 2.5, 0.0],
      [-2.5, 2.5, 0.0],
    ],
  ],
  3: [
    [
      [-2.5, 3.5, 0.0],
      [2.5, 3.5, 0.0],
      [2.5, -3.5, 0.0],
      [-2.5, -3.5, 0.0],
      [-2.5, -2.5, 0.0],
      [1.5, -2.5, 0.0],
      [1.5, -0.5, 0.0],
      [-1.5, -0.5, 0.0],
      [-1.5, 0.5, 0.0],
      [1.5, 0.5, 0.0],
      [1.5, 2.5, 0.0],
      [-2.5, 2.5, 0.0],
    ],
  ],
  4: [
    [
      [-2.5, 3.5, 0.0],
      [-1.5, 3.5, 0.0],
      [-1.5, 0.5, 0.0],
      [1.5, 0.5, 0.0],
      [1.5, 3.5, 0.0],
      [2.5, 3.5, 0.0],
      [2.5, -3.5, 0.0],
      [1.5, -3.5, 0.0],
      [1.5, -0.5, 0.0],
      [-2.5, -0.5, 0.0],
    ],
  ],
  5: [
    [
      [-2.5, 3.5, 0.0],
      [2.5, 3.5, 0.0],
      [2.5, 2.5, 0.0],
      [-1.5, 2.5, 0.0],
      [-1.5, 0.5, 0.0],
      [2.5, 0.5, 0.0],
      [2.5, -3.5, 0.0],
      [-2.5, -3.5, 0.0],
      [-2.5, -2.5, 0.0],
      [1.5, -2.5, 0.0],
      [1.5, -0.5, 0.0],
      [-2.5, -0.5, 0.0],
    ],
  ],
  6: [
    [
      [-2.5, 3.5, 0.0],
      [2.5, 3.5, 0.0],
      [2.5, 2.5, 0.0],
      [-1.5, 2.5, 0.0],
      [-1.5, 0.5, 0.0],
      [2.5, 0.5, 0.0],
      [2.5, -3.5, 0.0],
      [-2.5, -3.5, 0.0],
      [-2.5, -2.5, 0.0],
      [-2.5, -0.5, 0.0],
    ],
    [
      [-1.5, -0.5, 0.0],
      [1.5, -0.5, 0.0],
      [1.5, -2.5, 0.0],
      [-1.5, -2.5, 0.0],
    ],
  ],
  7: [
    [
      [-2.5, 3.5, 0.0],
      [2.5, 3.5, 0.0],
      [2.5, -3.5, 0.0],
      [1.5, -3.5, 0.0],
      [1.5, 2.5, 0.0],
      [-2.5, 2.5, 0.0],
    ],
  ],
  8: [
    [
      [-2.5, 3.5, 0.0],
      [2.5, 3.5, 0.0],
      [2.5, -3.5, 0.0],
      [-2.5, -3.5, 0.0],
    ],
    [
      [-1.5, 2.5, 0.0],
      [1.5, 2.5, 0.0],
      [1.5, 0.5, 0.0],
      [-1.5, 0.5, 0.0],
    ],
    [
      [-1.5, -0.5, 0.0],
      [1.5, -0.5, 0.0],
      [1.5, -2.5, 0.0],
      [-1.5, -2.5, 0.0],
    ],
  ],
  9: [
    [
      [-2.5, 3.5, 0.0],
      [2.5, 3.5, 0.0],
      [2.5, -3.5, 0.0],
      [1.5, -3.5, 0.0],
      [1.5, -0.5, 0.0],
      [-2.5, -0.5, 0.0],
    ],
    [
      [-1.5, 2.5, 0.0],
      [1.5, 2.5, 0.0],
      [1.5, 0.5, 0.0],
      [-1.5, 0.5, 0.0],
    ],
  ],
};

export default Letters;
