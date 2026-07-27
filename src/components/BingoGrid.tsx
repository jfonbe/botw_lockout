import type { GridSettings } from "../types/settings"

type BingoGridProps = {
    gridSize: GridSettings
}

export default function BingoGrid({ gridSize }: BingoGridProps) {
    return (
        <div>
            {Array.from({ length: gridSize.rows }).map((_, row) => (
                <div key={row}>
                    {Array.from({ length: gridSize.cols }).map((_, col) => (
                        <button key={col}>{row}x{col}</button>
                    ))}
                </div>
            ))}
        </div>
    )
}