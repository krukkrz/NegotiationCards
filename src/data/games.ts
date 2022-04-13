export type Game = {
    id: number,
    title: string,
    situation: string,
    playerA: Player,
    playerB: Player,
}

type Player = {
    role: string,
    goals: string,
}

export const games: Game[] = [
    {
        id: 1,
        title: 'Furniture store',
        situation: 'In a furniture store there are is a table that costs $599.',
        playerA: {
            role: 'You are a buyer',
            goals: 'Your goal is to finish with the best offer you can. Final price you should be aiming for is $400.',
        },
        playerB: {
            role: 'You are a salesman',
            goals: 'Your goal is to sell this table for its original price. However, since your sales were not great last month, you can not let this customer go.',
        }
    },
    {
        id: 2,
        title: 'Airport',
        situation: 'At the Arlanda airport there is a huge rush before Easter Holiday. Even though there is a Fast Track entry, only few passengers could use it. The rest of them stands in a long line.',
        playerA: {
            role: 'You are the Fast Track information worker.',
            goals: 'You should let go through Fast Track only the disabled, or people with Fast Track ticket. You know that if you let up to 3-4 unqualified people through that entry, nobody will see the difference. However, there are thousands of people at the airport. That would be unfair to the rest of people standing in the line.',
        },
        playerB: {
            role: 'You are a passenger. You came an hour before your flight, but when you saw a huge line to the security check, you realised, that you will most probably not gonna make it. However you\'ve noticed a Fast Track entry with an airport worker next to it.',
            goals: 'Your goal is to convince the airport worker (player A) to let you go through Fast Track entry, even though you are not qualified for it.',
        }
    },
]