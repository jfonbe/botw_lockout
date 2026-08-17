import type { Task } from "../../../shared/types/tasks.js"

const tasks: Task[] = [
    {
        id: 1,
        text: "{count}x - Roter Hinox besiegen",
        difficulty: "medium",
        variables: {
            count: {
                min: 1,
                max: 3
            }
        }
    },
    {
        id: 2,
        text: "{count}x - Roter Leune besiegen",
        difficulty: "hard",
        variables: {
            count: {
                min: 1,
                max: 3
            }
        }
    },
    {
        id: 3,
        text: "{count}x - Wächter besiegen",
        difficulty: "hard",
        variables: {
            count: {
                min: 1,
                max: 3
            }
        }
    },
    {
        id: 4,
        text: "{count}x - Apfel sammeln",
        difficulty: "easy",
        variables: {
            count: {
                min: 1,
                max: 10
            }
        }
    },
    {
        id: 5,
        text: "{count}x - Schwertbanane sammeln",
        difficulty: "easy",
        variables: {
            count: {
                min: 1,
                max: 10
            }
        }
    },
    {
        id: 6,
        text: "{count}x - Hyrule-Gras sammeln",
        difficulty: "easy",
        variables: {
            count: {
                min: 1,
                max: 10
            }
        }
    },
    {
        id: 7,
        text: "{count}x - Antiker Reaktorkern sammeln",
        difficulty: "medium",
        variables: {
            count: {
                min: 1,
                max: 3
            }
        }
    },
    {
        id: 8,
        text: "{count}x - Antike Schraube sammeln",
        difficulty: "easy",
        variables: {
            count: {
                min: 1,
                max: 5
            }
        }
    },
    {
        id: 9,
        text: "{count}x - Antike Feder sammeln",
        difficulty: "easy",
        variables: {
            count: {
                min: 1,
                max: 5
            }
        }
    },
    {
        id: 10,
        text: "{count}x - Sternsplitter sammeln",
        difficulty: "medium",
        variables: {
            count: {
                min: 1,
                max: 2
            }
        }
    },
    {
        id: 11,
        text: "{count}x - Roter Bokblin besiegen",
        difficulty: "easy",
        variables: {
            count: {
                min: 1,
                max: 5
            }
        }
    },
    {
        id: 12,
        text: "{count}x - Blauer Bokblin besiegen",
        difficulty: "easy",
        variables: {
            count: {
                min: 1,
                max: 5
            }
        }
    },
    {
        id: 13,
        text: "{count}x - Schwarzer Bokblin besiegen",
        difficulty: "medium",
        variables: {
            count: {
                min: 1,
                max: 5
            }
        }
    },
    {
        id: 14,
        text: "{count}x - Silberner Bokblin besiegen",
        difficulty: "hard",
        variables: {
            count: {
                min: 1,
                max: 3
            }
        }
    },
    {
        id: 15,
        text: "{count}x - Silberner Moblin besiegen",
        difficulty: "hard",
        variables: {
            count: {
                min: 1,
                max: 3
            }
        }
    },
    {
        id: 16,
        text: "{count}x - Silberner Echsalfoss besiegen",
        difficulty: "hard",
        variables: {
            count: {
                min: 1,
                max: 3
            }
        }
    },
    {
        id: 17,
        text: "{count}x - Zeichen der Bewährung erhalten",
        difficulty: "medium",
        variables: {
            count: {
                min: 1,
                max: 5
            }
        }
    },
    {
        id: 18,
        text: "{count}x - Erinnerungen sammeln",
        difficulty: "easy",
        variables: {
            count: {
                min: 1,
                max: 3
            }
        }
    },
    {
        id: 19,
        text: "{count}x - Krogsamen erhalten",
        difficulty: "medium",
        variables: {
            count: {
                min: 1,
                max: 10
            }
        }
    },
    {
        id: 20,
        text: "{count}x - Rubine sammeln",
        difficulty: "medium",
        variables: {
            count: {
                min: 100,
                max: 1000
            }
        }
    },
    {
        id: 21,
        text: "{count}x - Turm aktivieren",
        difficulty: "easy",
        variables: {
            count: {
                min: 1,
                max: 5
            }
        }
    },
    {
        id: 22,
        text: "Winterwams erhalten",
        difficulty: "easy",
    },
    {
        id: 23,
        text: "Ganon besiegen",
        difficulty: "hard",
    },
    {
        id: 24,
        text: "Herr der Wildnis fotografieren",
        difficulty: "medium",
    },
    {
        id: 25,
        text: "Pferd zähmen",
        difficulty: "easy",
    },
]

export default tasks