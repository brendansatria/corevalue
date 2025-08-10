export interface TileConfig {
  type: 'customer' | 'path' | 'start' | 'empty';
  asset?: string;
  rotatable?: boolean;
  initialRotation?: number;
  points?: number;
  connectedAsset?: string;
}

const createEmptyGrid = (rows: number, cols: number): TileConfig[][] =>
  Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => ({ type: 'empty' }))
  );

// Round 1: 5x5 grid
const round1Layout = createEmptyGrid(5, 5);
round1Layout[3][0] = { type: 'customer', asset: '/assets/game/pelanggan_baru_5RP_tile.png', points: 5, connectedAsset: '/assets/game/pelanggan_baru_5RP_connected_tile.png' };
round1Layout[0][1] = { type: 'customer', asset: '/assets/game/pelanggan_tetap_10RP_tile.png', points: 10, connectedAsset: '/assets/game/pelanggan_tetap_10RP_connected_tile.png' };
round1Layout[0][3] = { type: 'customer', asset: '/assets/game/pelanggan_tetap_15RP_tile.png', points: 15, connectedAsset: '/assets/game/pelanggan_tetap_15RP_connected_tile.png' };
round1Layout[4][2] = { type: 'start', asset: '/assets/game/start_tile.png' };
round1Layout[1][1] = { type: 'path', asset: '/assets/game/T_path_tile.png', rotatable: true };
round1Layout[1][2] = { type: 'path', asset: '/assets/game/L_path_tile.png', rotatable: true };
round1Layout[1][3] = { type: 'path', asset: '/assets/game/I_path_tile.png', rotatable: true };
round1Layout[2][1] = { type: 'path', asset: '/assets/game/I_path_tile.png', rotatable: true };
round1Layout[2][2] = { type: 'path', asset: '/assets/game/L_path_tile.png', rotatable: true };
round1Layout[2][3] = { type: 'path', asset: '/assets/game/T_path_tile.png', rotatable: true };
round1Layout[3][1] = { type: 'path', asset: '/assets/game/T_path_tile.png', rotatable: true };
round1Layout[3][2] = { type: 'path', asset: '/assets/game/L_path_tile.png', rotatable: true };
round1Layout[3][3] = { type: 'path', asset: '/assets/game/I_path_tile.png', rotatable: true };

// Round 2: 5x5 grid
const round2Layout = createEmptyGrid(5, 5);
round2Layout[1][0] = { type: 'customer', asset: '/assets/game/pelanggan_baru_5RP_tile.png', points: 5, connectedAsset: '/assets/game/pelanggan_baru_5RP_connected_tile.png' };
round2Layout[2][0] = { type: 'customer', asset: '/assets/game/pelanggan_baru_5RP_tile.png', points: 5, connectedAsset: '/assets/game/pelanggan_baru_5RP_connected_tile.png' };
round2Layout[0][2] = { type: 'customer', asset: '/assets/game/pelanggan_tetap_10RP_tile.png', points: 10, connectedAsset: '/assets/game/pelanggan_tetap_10RP_connected_tile.png' };
round2Layout[3][4] = { type: 'customer', asset: '/assets/game/pelanggan_tetap_15RP_tile.png', points: 15, connectedAsset: '/assets/game/pelanggan_tetap_15RP_connected_tile.png' };
round2Layout[4][2] = { type: 'start', asset: '/assets/game/start_tile.png' };
round2Layout[1][1] = { type: 'path', asset: '/assets/game/L_path_tile.png', rotatable: true };
round2Layout[1][2] = { type: 'path', asset: '/assets/game/L_path_tile.png', rotatable: true };
round2Layout[1][3] = { type: 'path', asset: '/assets/game/L_path_tile.png', rotatable: true };
round2Layout[2][1] = { type: 'path', asset: '/assets/game/T_path_tile.png', rotatable: true };
round2Layout[2][2] = { type: 'path', asset: '/assets/game/I_path_tile.png', rotatable: true };
round2Layout[2][3] = { type: 'path', asset: '/assets/game/T_path_tile.png', rotatable: true };
round2Layout[3][1] = { type: 'path', asset: '/assets/game/L_path_tile.png', rotatable: true };
round2Layout[3][2] = { type: 'path', asset: '/assets/game/L_path_fix__tile_for_round_2.png', rotatable: false };
round2Layout[3][3] = { type: 'path', asset: '/assets/game/L_path_tile.png', rotatable: true };

// Round 3: 6x5 grid
const round3Layout = createEmptyGrid(6, 5);
round3Layout[2][0] = { type: 'customer', asset: '/assets/game/pelanggan_baru_5RP_tile.png', points: 5, connectedAsset: '/assets/game/pelanggan_baru_5RP_connected_tile.png' };
round3Layout[3][4] = { type: 'customer', asset: '/assets/game/pelanggan_baru_5RP_tile.png', points: 5, connectedAsset: '/assets/game/pelanggan_baru_5RP_connected_tile.png' };
round3Layout[4][0] = { type: 'customer', asset: '/assets/game/pelanggan_baru_5RP_tile.png', points: 5, connectedAsset: '/assets/game/pelanggan_baru_5RP_connected_tile.png' };
round3Layout[0][1] = { type: 'customer', asset: '/assets/game/pelanggan_tetap_10RP_tile.png', points: 10, connectedAsset: '/assets/game/pelanggan_tetap_10RP_connected_tile.png' };
round3Layout[0][3] = { type: 'customer', asset: '/assets/game/pelanggan_tetap_15RP_tile.png', points: 15, connectedAsset: '/assets/game/pelanggan_tetap_15RP_connected_tile.png' };
round3Layout[5][3] = { type: 'start', asset: '/assets/game/start_tile.png' };
round3Layout[1][1] = { type: 'path', asset: '/assets/game/T_path_tile.png', rotatable: true };
round3Layout[1][2] = { type: 'path', asset: '/assets/game/L_path_tile.png', rotatable: true };
round3Layout[1][3] = { type: 'path', asset: '/assets/game/T_path_tile.png', rotatable: true };
round3Layout[2][1] = { type: 'path', asset: '/assets/game/I_path_tile.png', rotatable: true };
round3Layout[2][2] = { type: 'path', asset: '/assets/game/L_path_tile.png', rotatable: true };
round3Layout[2][3] = { type: 'path', asset: '/assets/game/T_path_tile.png', rotatable: true };
round3Layout[3][1] = { type: 'path', asset: '/assets/game/T_path_tile.png', rotatable: true };
round3Layout[3][2] = { type: 'path', asset: '/assets/game/L_path_tile.png', rotatable: true };
round3Layout[3][3] = { type: 'path', asset: '/assets/game/T_path_fix__tile_for_round_3.png', rotatable: false };
round3Layout[4][1] = { type: 'path', asset: '/assets/game/L_path_tile.png', rotatable: true };
round3Layout[4][2] = { type: 'path', asset: '/assets/game/L_path_tile.png', rotatable: true };
round3Layout[4][3] = { type: 'path', asset: '/assets/game/T_path_tile.png', rotatable: true };

// Round 4: 6x5 grid
const round4Layout = createEmptyGrid(6, 5);
round4Layout[2][0] = { type: 'customer', asset: '/assets/game/pelanggan_baru_5RP_tile.png', points: 5, connectedAsset: '/assets/game/pelanggan_baru_5RP_connected_tile.png' };
round4Layout[3][0] = { type: 'customer', asset: '/assets/game/pelanggan_baru_5RP_tile.png', points: 5, connectedAsset: '/assets/game/pelanggan_baru_5RP_connected_tile.png' };
round4Layout[1][4] = { type: 'customer', asset: '/assets/game/pelanggan_tetap_10RP_tile.png', points: 10, connectedAsset: '/assets/game/pelanggan_tetap_10RP_connected_tile.png' };
round4Layout[4][4] = { type: 'customer', asset: '/assets/game/pelanggan_tetap_10RP_tile.png', points: 10, connectedAsset: '/assets/game/pelanggan_tetap_10RP_connected_tile.png' };
round4Layout[0][1] = { type: 'customer', asset: '/assets/game/pelanggan_tetap_15RP_tile.png', points: 15, connectedAsset: '/assets/game/pelanggan_tetap_15RP_connected_tile.png' };
round4Layout[0][3] = { type: 'customer', asset: '/assets/game/pelanggan_tetap_15RP_tile.png', points: 15, connectedAsset: '/assets/game/pelanggan_tetap_15RP_connected_tile.png' };
round4Layout[5][1] = { type: 'start', asset: '/assets/game/start_tile.png' };
round4Layout[1][1] = { type: 'path', asset: '/assets/game/T_path_tile.png', rotatable: true };
round4Layout[1][2] = { type: 'path', asset: '/assets/game/L_path_tile.png', rotatable: true };
round4Layout[1][3] = { type: 'path', asset: '/assets/game/T_path_tile.png', rotatable: true };
round4Layout[2][1] = { type: 'path', asset: '/assets/game/T_path_tile.png', rotatable: true };
round4Layout[2][2] = { type: 'path', asset: '/assets/game/L_path_tile.png', rotatable: true };
round4Layout[2][3] = { type: 'path', asset: '/assets/game/T_path_tile.png', rotatable: true };
round4Layout[3][1] = { type: 'path', asset: '/assets/game/I_path_tile.png', rotatable: true };
round4Layout[3][2] = { type: 'path', asset: '/assets/game/T_path_tile.png', rotatable: true };
round4Layout[3][3] = { type: 'path', asset: '/assets/game/T_path_tile.png', rotatable: true };
round4Layout[4][1] = { type: 'path', asset: '/assets/game/T_path_tile.png', rotatable: true };
round4Layout[4][2] = { type: 'path', asset: '/assets/game/L_path_tile.png', rotatable: true };
round4Layout[4][3] = { type: 'path', asset: '/assets/game/T_path_tile.png', rotatable: true };

export const gameRounds = {
  1: { layout: round1Layout },
  2: { layout: round2Layout },
  3: { layout: round3Layout },
  4: { layout: round4Layout },
};