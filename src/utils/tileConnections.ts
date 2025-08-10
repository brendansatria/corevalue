const connections: Record<string, string[]> = {
  // Path Tiles
  '/assets/game/I_path_tile.png': ['top', 'bottom'],
  '/assets/game/L_path_tile.png': ['top', 'right'],
  '/assets/game/T_path_tile.png': ['top', 'right', 'bottom'],
  
  // Fixed Path Tiles (not rotatable)
  '/assets/game/L_path_fix__tile_for_round_2.png': ['right', 'bottom'],
  '/assets/game/T_path_fix__tile_for_round_3.png': ['left', 'top', 'right'],

  // Start and Customer Tiles
  '/assets/game/start_tile.png': ['top'],
  '/assets/game/pelanggan_baru_5RP_tile.png': ['bottom'],
  '/assets/game/pelanggan_tetap_10RP_tile.png': ['bottom'],
  '/assets/game/pelanggan_tetap_15RP_tile.png': ['bottom'],
  '/assets/game/pelanggan_baru_5RP_connected_tile.png': ['bottom'],
  '/assets/game/pelanggan_tetap_10RP_connected_tile.png': ['bottom'],
  '/assets/game/pelanggan_tetap_15RP_connected_tile.png': ['bottom'],
};

const rotateConnection = (connection: string, rotation: number): string => {
  const directions = ['top', 'right', 'bottom', 'left'];
  const index = directions.indexOf(connection);
  if (index === -1) return connection;
  const rotatedIndex = (index + rotation / 90) % 4;
  return directions[rotatedIndex];
};

export const getConnections = (asset: string, rotation: number): string[] => {
  const baseConnections = connections[asset] || [];
  if (rotation === 0) return baseConnections;
  return baseConnections.map(conn => rotateConnection(conn, rotation));
};