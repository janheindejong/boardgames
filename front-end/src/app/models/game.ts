export interface Participant {
    player: string
    rank: number 
    id: number
    game_id: number
    points: number
}


export interface Game {
    id: number
    name: string
    datetime: string
    duration: number 
    points: number
    participants: Participant[]
}