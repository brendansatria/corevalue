export interface TileConfig {
  type: 'customer' | 'path' | 'start' | 'empty';
  asset?: string;
  rotatable?: boolean;
  initialRotation?: number;
}

// This layout is based on the visual information from `round_1_example.png`
export const round1Layout: TileConfig[][] = [
  // Row 0
  [
    { type: 'empty' },
    { type: 'customer', asset: '/assets/game/pelanggan_tetap_10RP.png' },
    { type: 'path', asset: '/assets/game/T_path.png', rotatable: true, initialRotation: 180 },
    { type: 'customer', asset: '/assets/game/pelanggan_tetap_15RP.png' },
    { type: 'empty' },
  ],
  // Row 1
  [
    { type: 'empty' },
    { type: 'path', asset: '/assets/game/I_path.png', rotatable: true, initialRotation: 90 },
    { type: 'path', asset: '/assets/game/L_path.png', rotatable: true, initialRotation: 180 },
    { type: 'path', asset: '/assets/game/I_path.png', rotatable: true, initialRotation: 90 },
    { type: 'empty' },
  ],
  // Row 2
  [
    { type: 'customer', asset: '/assets/game/pelanggan_baru_5RP.png' },
    { type: 'path', asset: '/assets/game/T_path.png', rotatable: true, initialRotation: 270 },
    { type: 'path', asset: '/assets/game/L_path.png', rotatable: true, initialRotation: 90 },
    { type: 'path', asset: '/assets/game/L_path.png', rotatable: true, initialRotation: 0 },
    { type: 'customer', asset: '/assets/game/pelanggan_baru_5RP.png' },
  ],
  // Row 3
  [
    { type: 'path', asset: '/assets/game/I_path.png', rotatable: true, initialRotation: 90 },
    { type: 'path', asset: '/assets/game/L_path.png', rotatable: true, initialRotation: 270 },
    { type: 'path', asset: '/assets/game/T_path.png', rotatable: true, initialRotation: 0 },
    { type: 'path', asset: '/assets/game/T_path_fix_round_3.png', rotatable: false, initialRotation: 90 },
    { type: 'path', asset: '/assets/game/I_path.png', rotatable: true, initialRotation: 90 },
  ],
  // Row 4
  [
    { type: 'customer', asset: '/assets/game/pelanggan_baru_5RP.png' },
    { type: 'path', asset: '/assets/game/L_path.png', rotatable: true, initialRotation: 0 },
    { type: 'start', asset: '/assets/game/start.png' },
    { type: 'path', asset: '/assets/game/L_path.png', rotatable: true, initialRotation: 270 },
    { type: 'empty' },
  ],
];