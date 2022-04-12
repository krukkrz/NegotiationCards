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
        title: 'Grocery store',
        situation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
        playerA: {
            role: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
            goals: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
        },
        playerB: {
            role: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
            goals: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
        }
    },
    {
        id: 2,
        title: 'Airport',
        situation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
        playerA: {
            role: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
            goals: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
        },
        playerB: {
            role: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
            goals: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
        }
    },
    {
        id: 3,
        title: 'Salary increase',
        situation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
        playerA: {
            role: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
            goals: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
        },
        playerB: {
            role: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
            goals: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
        }
    },
    {
        id: 4,
        title: 'Salary increase',
        situation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
        playerA: {
            role: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
            goals: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
        },
        playerB: {
            role: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
            goals: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
        }
    },
    {
        id: 5,
        title: 'Salary increase',
        situation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
        playerA: {
            role: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
            goals: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
        },
        playerB: {
            role: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
            goals: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
        }
    },
    {
        id: 6,
        title: 'Salary increase',
        situation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
        playerA: {
            role: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
            goals: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
        },
        playerB: {
            role: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
            goals: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
        }
    },
    {
        id: 7,
        title: 'Salary increase',
        situation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
        playerA: {
            role: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
            goals: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
        },
        playerB: {
            role: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
            goals: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
        }
    },
    {
        id: 8,
        title: 'Salary increase',
        situation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
        playerA: {
            role: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
            goals: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
        },
        playerB: {
            role: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
            goals: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
        }
    },
    {
        id: 9,
        title: 'Salary increase',
        situation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
        playerA: {
            role: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
            goals: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
        },
        playerB: {
            role: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
            goals: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
        }
    },
    {
        id: 10,
        title: 'Salary increase',
        situation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
        playerA: {
            role: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
            goals: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
        },
        playerB: {
            role: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
            goals: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
        }
    },
    {
        id: 11,
        title: 'Salary increase',
        situation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
        playerA: {
            role: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
            goals: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
        },
        playerB: {
            role: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
            goals: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
        }
    },
    {
        id: 12,
        title: 'Salary increase',
        situation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
        playerA: {
            role: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
            goals: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
        },
        playerB: {
            role: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
            goals: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
        }
    },
    {
        id: 13,
        title: 'Salary increase',
        situation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
        playerA: {
            role: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
            goals: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
        },
        playerB: {
            role: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
            goals: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit imperdiet sit at ac leo lectus morbi. Purus arcu interdum commodo quis platea orci volutpat. Id commodo volutpat scelerisque in a. Eget enim facilisis sed nisi vulputate egestas integer nunc. Nibh vitae justo.',
        }
    }
]