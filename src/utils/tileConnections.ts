const connections: Record<string, string[]> = {
  // Path Tiles
  '/assets/game/I_path_tile.png': ['top', 'bottom'],
  '/assets/game/L_path_tile.png': ['top', 'right'],
  '/assets/game/T_path_tile.png': ['top', 'right', 'bottom'],
  
  // Fixed Path Tiles (not rotatable)
  '/assets/game/L_path_fix__tile_for_round_2.png': ['right', 'bottom'],
  '/assets/game/T_path_fix__tile_for_round_3.png': ['left', 'top', 'right'],

  // Start Tile
  '/assets/game/start_tile.png': ['top'],
};

const rotateConnection = (connection: string, rotation: number): string => {
  const directions = ['top', 'right', 'bottom', 'left'];
  const index = directions.indexOf(connection);
  if (index === -1) return connection;
  const rotatedIndex = (index + rotation / 90) % 4;
  return directions[rotatedIndex];
};

export const getConnections = (
  asset: string,
  rotation: number,
  type: string,
  row: number,
  col: number
): string[] => {
  if (type === 'customer') {
    if (row === 0) {
      return ['bottom']; // Customer in the first row opens downwards
    }
    if (col === 0) {
      return ['right']; // Customer in the first column opens to the right
    }
    if (col === 4) { // Customer in the fifth column opens to the left
      return ['left'];
    }
    // Default for any other customer position
    return ['bottom'];
  }

  const baseConnections = connections[asset] || [];
  if (rotation === 0) return baseConnections;
  return baseConnections.map(conn => rotateConnection(conn, rotation));
};