export interface TileConfig {
  type: 'customer' | 'path' | 'start' | 'empty';
  asset?: string;
  rotatable?: boolean;
  initialRotation?: number;
}

const createEmptyGrid = (rows: number, cols: number): TileConfig[][] =>
  Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => ({ type: 'empty' }))
  );

// Round 1: 5x5 grid
const round1Layout = createEmptyGrid(5, 5);
round1Layout[3][0] = { type: 'customer', asset: '/assets/game/pelanggan_baru_5RP.png' }; // D1
round1Layout[0][1] = { type: 'customer', asset: '/assets/game/pelanggan_tetap_10RP.png' }; // A2
round1Layout[0][3] = { type: 'customer', asset: '/assets/game/pelanggan_tetap_15RP.png' }; // A4
round1Layout[4][2] = { type: 'start', asset: '/assets/game/start.png' }; // E3
round1Layout[1][1] = { type: 'path', asset: '/assets/game/T_path.png', rotatable: true }; // B2
round1Layout[1][2] = { type: 'path', asset: '/assets/game/L_path.png', rotatable: true }; // B3
round1Layout[1][3] = { type: 'path', asset: '/assets/game/I_path.png', rotatable: true }; // B4
round1Layout[2][1] = { type: 'path', asset: '/assets/game/I_path.png', rotatable: true }; // C2
round1Layout[2][2] = { type: 'path', asset: '/assets/game/L_path.png', rotatable: true }; // C3
round1Layout[2][3] = { type: 'path', asset: '/assets/game/T_path.png', rotatable: true }; // C4
round1Layout[3][1] = { type: 'path', asset: '/assets/game/T_path.png', rotatable: true }; // D2
round1Layout[3][2] = { type: 'path', asset: '/assets/game/L_path.png', rotatable: true }; // D3
round1Layout[3][3] = { type: 'path', asset: '/assets/game/I_path.png', rotatable: true }; // D4

// Round 2: 5x5 grid
const round2Layout = createEmptyGrid(5, 5);
round2Layout[1][0] = { type: 'customer', asset: '/assets/game/pelanggan_baru_5RP.png' }; // B1
round2Layout[2][0] = { type: 'customer', asset: '/assets/game/pelanggan_baru_5RP.png' }; // C1
round2Layout[0][2] = { type: 'customer', asset: '/assets/game/pelanggan_tetap_10RP.png' }; // A3
round2Layout[3][4] = { type: 'customer', asset: '/assets/game/pelanggan_tetap_15RP.png' }; // D5
round2Layout[4][2] = { type: 'start', asset: '/assets/game/start.png' }; // E3
round2Layout[1][1] = { type: 'path', asset: '/assets/game/L_path.png', rotatable: true }; // B2
round2Layout[1][2] = { type: 'path', asset: '/assets/game/L_path.png', rotatable: true }; // B3
round2Layout[1][3] = { type: 'path', asset: '/assets/game/L_path.png', rotatable: true }; // B4
round2Layout[2][1] = { type: 'path', asset: '/assets/game/T_path.png', rotatable: true }; // C2
round2Layout[2][2] = { type: 'path', asset: '/assets/game/I_path.png', rotatable: true }; // C3
round2Layout[2][3] = { type: 'path', asset: '/assets/game/T_path.png', rotatable: true }; // C4
round2Layout[3][1] = { type: 'path', asset: '/assets/game/L_path.png', rotatable: true }; // D2
round2Layout[3][2] = { type: 'path', asset: '/assets/game/L_path_fix_round_2.png', rotatable: false }; // D3 (FIXED)
round2Layout[3][3] = { type: 'path', asset: '/assets/game/L_path.png', rotatable: true }; // D4

// Round 3: 6x5 grid
const round3Layout = createEmptyGrid(6, 5);
round3Layout[2][0] = { type: 'customer', asset: '/assets/game/pelanggan_baru_5RP.png' }; // C1
round3Layout[3][4] = { type: 'customer', asset: '/assets/game/pelanggan_baru_5RP.png' }; // D5
round3Layout[4][0] = { type: 'customer', asset: '/assets/game/pelanggan_baru_5RP.png' }; // E1
round3Layout[0][1] = { type: 'customer', asset: '/assets/game/pelanggan_tetap_10RP.png' }; // A2
round3Layout[0][3] = { type: 'customer', asset: '/assets/game/pelanggan_tetap_15RP.png' }; // A4
round3Layout[5][3] = { type: 'start', asset: '/assets/game/start.png' }; // F4
round3Layout[1][1] = { type: 'path', asset: '/assets/game/T_path.png', rotatable: true }; // B2
round3Layout[1][2] = { type: 'path', asset: '/assets/game/L_path.png', rotatable: true }; // B3
round3Layout[1][3] = { type: 'path', asset: '/assets/game/T_path.png', rotatable: true }; // B4
round3Layout[2][1] = { type: 'path', asset: '/assets/game/I_path.png', rotatable: true }; // C2
round3Layout[2][2] = { type: 'path', asset: '/assets/game/L_path.png', rotatable: true }; // C3
round3Layout[2][3] = { type: 'path', asset: '/assets/game/T_path.png', rotatable: true }; // C4
round3Layout[3][1] = { type: 'path', asset: '/assets/game/T_path.png', rotatable: true }; // D2
round3Layout[3][2] = { type: 'path', asset: '/assets/game/L_path.png', rotatable: true }; // D3
round3Layout[3][3] = { type: 'path', asset: '/assets/game/T_path_fix_round_3.png', rotatable: false }; // D4 (FIXED)
round3Layout[4][1] = { type: 'path', asset: '/assets/game/L_path.png', rotatable: true }; // E2
round3Layout[4][2] = { type: 'path', asset: '/assets/game/L_path.png', rotatable: true }; // E3
round3Layout[4][3] = { type: 'path', asset: '/assets/game/T_path.png', rotatable: true }; // E4

// Round 4: 6x5 grid
const round4Layout = createEmptyGrid(6, 5);
round4Layout[2][0] = { type: 'customer', asset: '/assets/game/pelanggan_baru_5RP.png' }; // C1
round4Layout[3][0] = { type: 'customer', asset: '/assets/game/pelanggan_baru_5RP.png' }; // D1
round4Layout[1][4] = { type: 'customer', asset: '/assets/game/pelanggan_tetap_10RP.png' }; // B5
round4Layout[4][4] = { type: 'customer', asset: '/assets/game/pelanggan_tetap_10RP.png' }; // E5
round4Layout[0][1] = { type: 'customer', asset: '/assets/game/pelanggan_tetap_15RP.png' }; // A2
round4Layout[0][3] = { type: 'customer', asset: '/assets/game/pelanggan_tetap_15RP.png' }; // A4
round4Layout[5][1] = { type: 'start', asset: '/assets/game/start.png' }; // F2
round4Layout[1][1] = { type: 'path', asset: '/assets/game/T_path.png', rotatable: true }; // B2
round4Layout[1][2] = { type: 'path', asset: '/assets/game/L_path.png', rotatable: true }; // B3
round4Layout[1][3] = { type: 'path', asset: '/assets/game/T_path.png', rotatable: true }; // B4
round4Layout[2][1] = { type: 'path', asset: '/assets/game/T_path.png', rotatable: true }; // C2
round4Layout[2][2] = { type: 'path', asset: '/assets/game/L_path.png', rotatable: true }; // C3
round4Layout[2][3] = { type: 'path', asset: '/assets/game/T_path.png', rotatable: true }; // C4
round4Layout[3][1] = { type: 'path', asset: '/assets/game/I_path.png', rotatable: true }; // D2
round4Layout[3][2] = { type: 'path', asset: '/assets/game/T_path.png', rotatable: true }; // D3
round4Layout[3][3] = { type: 'path', asset: '/assets/game/T_path.png', rotatable: true }; // D4
round4Layout[4][1] = { type: 'path', asset: '/assets/game/T_path.png', rotatable: true }; // E2
round4Layout[4][2] = { type: 'path', asset: '/assets/game/L_path.png', rotatable: true }; // E3
round4Layout[4][3] = { type: 'path', asset: '/assets/game/T_path.png', rotatable: true }; // E4

export const gameRounds = {
  1: {
    layout: round1Layout,
    boardImage: '/assets/game/board_3x3.png',
    boardAspectRatio: '142%',
  },
  2: {
    layout: round2Layout,
    boardImage: '/assets/game/board_3x3.png',
    boardAspectRatio: '142%',
  },
  3: {
    layout: round3Layout,
    boardImage: '/assets/game/board_4x3.png',
    boardAspectRatio: '170%',
  },
  4: {
    layout: round4Layout,
    boardImage: '/assets/game/board_4x3.png',
    boardAspectRatio: '170%',
  },
};