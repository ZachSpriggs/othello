export type Player = "B" | "W";
export interface Coordinate {row: number; col: number;}
export type Board = (Player | null)[][];