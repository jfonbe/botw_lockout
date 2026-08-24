import type { Task } from "../../../shared/types/tasks.js"

const killTasks: Task[] = [
    {
        id: "kill-lynel-01",
        text: "{count}x - Roter Leune besiegen",
        difficulty: "medium",
        variables: {
            count: {
                min: 1,
                max: 3
            }
        }
    },
    {
        id: "kill-lynel-02",
        text: "{count}x - Blauer Leune besiegen",
        difficulty: "medium",
        variables: {
            count: {
                min: 1,
                max: 3
            }
        }
    },
    {
        id: "kill-lynel-03",
        text: "{count}x - Schwarzer Leune besiegen",
        difficulty: "medium",
        variables: {
            count: {
                min: 1,
                max: 3
            }
        }
    },
    {
        id: "kill-lynel-04",
        text: "{count}x - Silberner Leune besiegen",
        difficulty: "medium",
        variables: {
            count: {
                min: 1,
                max: 3
            }
        }
    },
    {
        id: "kill-hinox-01",
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
        id: "kill-hinox-02",
        text: "{count}x - Blauer Hinox besiegen",
        difficulty: "medium",
        variables: {
            count: {
                min: 1,
                max: 3
            }
        }
    },
    {
        id: "kill-hinox-03",
        text: "{count}x - Schwarzer Hinox besiegen",
        difficulty: "medium",
        variables: {
            count: {
                min: 1,
                max: 3
            }
        }
    },
    {
        id: "kill-hinox-04",
        text: "{count}x - Stalhinox besiegen",
        difficulty: "medium",
        variables: {
            count: {
                min: 1,
                max: 3
            }
        }
    },
    {
        id: "kill-bokblin-01",
        text: "{count}x - Roter Bokblin besiegen",
        difficulty: "medium",
        variables: {
            count: {
                min: 1,
                max: 3
            }
        }
    },
    {
        id: "kill-bokblin-02",
        text: "{count}x - Blauer Bokblin besiegen",
        difficulty: "medium",
        variables: {
            count: {
                min: 1,
                max: 3
            }
        }
    },
    {
        id: "kill-bokblin-03",
        text: "{count}x - Schwarzer Bokblin besiegen",
        difficulty: "medium",
        variables: {
            count: {
                min: 1,
                max: 3
            }
        }
    },
    {
        id: "kill-bokblin-4",
        text: "{count}x - Silberner Bokblin besiegen",
        difficulty: "medium",
        variables: {
            count: {
                min: 1,
                max: 3
            }
        }
    },
    {
        id: "kill-moblin-01",
        text: "{count}x - Roter Moblin besiegen",
        difficulty: "medium",
        variables: {
            count: {
                min: 1,
                max: 3
            }
        }
    },
    {
        id: "kill-moblin-02",
        text: "{count}x - Blauer Moblin besiegen",
        difficulty: "medium",
        variables: {
            count: {
                min: 1,
                max: 3
            }
        }
    },
    {
        id: "kill-moblin-03",
        text: "{count}x - Schwarzer Moblin besiegen",
        difficulty: "medium",
        variables: {
            count: {
                min: 1,
                max: 3
            }
        }
    },
    {
        id: "kill-moblin-04",
        text: "{count}x - Silberner Moblin besiegen",
        difficulty: "medium",
        variables: {
            count: {
                min: 1,
                max: 3
            }
        }
    },
    {
        id: "kill-guardian-01",
        text: "{count}x - Wächter (Läufer) besiegen",
        difficulty: "medium",
        variables: {
            count: {
                min: 1,
                max: 3
            }
        }
    },
    {
        id: "kill-guardian-02",
        text: "{count}x - Wächter (Flieger) besiegen",
        difficulty: "medium",
        variables: {
            count: {
                min: 1,
                max: 3
            }
        }
    },
    {
        id: "kill-guardian-03",
        text: "{count}x - Wächter (Level 1) besiegen",
        difficulty: "medium",
        variables: {
            count: {
                min: 1,
                max: 3
            }
        }
    },
    {
        id: "kill-guardian-04",
        text: "{count}x - Wächter (Level 2) besiegen",
        difficulty: "medium",
        variables: {
            count: {
                min: 1,
                max: 3
            }
        }
    },
    {
        id: "kill-guardian-05",
        text: "{count}x - Wächter (Level 3) besiegen",
        difficulty: "medium",
        variables: {
            count: {
                min: 1,
                max: 3
            }
        }
    },
    {
        id: "kill-chuchu-01",
        text: "{count}x - Schleim besiegen",
        difficulty: "easy",
        variables: {
            count: {
                min: 1,
                max: 5
            }
        }
    },
    {
        id: "kill-chuchu-02",
        text: "{count}x - Eis-Schleim besiegen",
        difficulty: "easy",
        variables: {
            count: {
                min: 1,
                max: 5
            }
        }
    },
    {
        id: "kill-chuchu-03",
        text: "{count}x - Elektro-Schleim besiegen",
        difficulty: "easy",
        variables: {
            count: {
                min: 1,
                max: 5
            }
        }
    },
    {
        id: "kill-chuchu-04",
        text: "{count}x - Feuer-Schleim besiegen",
        difficulty: "easy",
        variables: {
            count: {
                min: 1,
                max: 5
            }
        }
    },
    {
        id: "kill-windblight",
        text: "{count}x - Ganons Windfluch besiegen",
        difficulty: "hard",
        variables: {
            count: {
                min: 1,
                max: 2
            }
        }
    },
    {
        id: "kill-fireblight",
        text: "{count}x - Ganons Feuerfluch besiegen",
        difficulty: "hard",
        variables: {
            count: {
                min: 1,
                max: 2
            }
        }
    },
    {
        id: "kill-thunderblight",
        text: "{count}x - Ganons Donnerfluch besiegen",
        difficulty: "hard",
        variables: {
            count: {
                min: 1,
                max: 2
            }
        }
    },
    {
        id: "kill-waterblight",
        text: "{count}x - Ganons Wasserfluch besiegen",
        difficulty: "hard",
        variables: {
            count: {
                min: 1,
                max: 2
            }
        }
    },
    {
        id: "kill-ganon",
        text: "{count}x - Ganon besiegen",
        difficulty: "hard",
        variables: {
            count: {
                min: 1,
                max: 1
            }
        }
    },
    {
        id: "kill-lizalfos-01",
        text: "{count}x - Echsalfos besiegen",
        difficulty: "easy",
        variables: {
            count: {
                min: 1,
                max: 5
            }
        }
    },
    {
        id: "kill-lizalfos-02",
        text: "{count}x - Blauer Echsalfos besiegen",
        difficulty: "medium",
        variables: {
            count: {
                min: 1,
                max: 4
            }
        }
    },
    {
        id: "kill-lizalfos-03",
        text: "{count}x - Schwarzer Echsalfos besiegen",
        difficulty: "medium",
        variables: {
            count: {
                min: 1,
                max: 3
            }
        }
    },
    {
        id: "kill-lizalfos-04",
        text: "{count}x - Silberner Echsalfos besiegen",
        difficulty: "hard",
        variables: {
            count: {
                min: 1,
                max: 2
            }
        }
    },
    {
        id: "kill-lizalfos-05",
        text: "{count}x - Eis-Echsalfos besiegen",
        difficulty: "medium",
        variables: {
            count: {
                min: 1,
                max: 3
            }
        }
    },
    {
        id: "kill-lizalfos-06",
        text: "{count}x - Elektro-Echsalfos besiegen",
        difficulty: "medium",
        variables: {
            count: {
                min: 1,
                max: 3
            }
        }
    },
    {
        id: "kill-lizalfos-07",
        text: "{count}x - Feuer-Echsalfos besiegen",
        difficulty: "medium",
        variables: {
            count: {
                min: 1,
                max: 3
            }
        }
    },
    {
        id: "kill-stone-talus-01",
        text: "{count}x - Iwarok (Selten) besiegen",
        difficulty: "hard",
        variables: {
            count: {
                min: 1,
                max: 2
            }
        }
    },
    {
        id: "kill-stone-talus-02",
        text: "{count}x - Iwarok (Leuchtend) besiegen",
        difficulty: "medium",
        variables: {
            count: {
                min: 1,
                max: 2
            }
        }
    },
    {
        id: "kill-stone-talus-03",
        text: "{count}x - Iwarok besiegen",
        difficulty: "medium",
        variables: {
            count: {
                min: 1,
                max: 2
            }
        }
    },
    {
        id: "kill-stone-talus-04",
        text: "{count}x - Glacirok besiegen",
        difficulty: "medium",
        variables: {
            count: {
                min: 1,
                max: 2
            }
        }
    },
    {
        id: "kill-stone-talus-05",
        text: "{count}x - Magmarok besiegen",
        difficulty: "medium",
        variables: {
            count: {
                min: 1,
                max: 2
            }
        }
    },
    {
        id: "kill-stone-pebblit-01",
        text: "{count}x - Ishirok besiegen",
        difficulty: "medium",
        variables: {
            count: {
                min: 1,
                max: 2
            }
        }
    },
    {
        id: "kill-stone-pebblit-02",
        text: "{count}x - Glarock besiegen",
        difficulty: "medium",
        variables: {
            count: {
                min: 1,
                max: 2
            }
        }
    },
    {
        id: "kill-stone-pebblit-03",
        text: "{count}x - Magrock besiegen",
        difficulty: "medium",
        variables: {
            count: {
                min: 1,
                max: 2
            }
        }
    },
    {
        id: "kill-yiga-novice",
        text: "{count}x - Yiga-Novizen besiegen",
        difficulty: "easy",
        variables: {
            count: {
                min: 1,
                max: 5
            }
        }
    },
    {
        id: "kill-yiga-blademaster",
        text: "{count}x - Yiga-Offizier besiegen",
        difficulty: "medium",
        variables: {
            count: {
                min: 1,
                max: 3
            }
        }
    },
    {
        id: "kill-koga",
        text: "{count}x - Meister Koga besiegen",
        difficulty: "hard",
        variables: {
            count: {
                min: 1,
                max: 1
            }
        }
    },
    {
        id: "kill-wizzrobe-01",
        text: "{count}x - Eis-Pyromagus besiegen",
        difficulty: "medium",
        variables: {
            count: {
                min: 1,
                max: 3
            }
        }
    },
    {
        id: "kill-wizzrobe-02",
        text: "{count}x - Elektro-Pyromagus besiegen",
        difficulty: "medium",
        variables: {
            count: {
                min: 1,
                max: 3
            }
        }
    },
    {
        id: "kill-wizzrobe-03",
        text: "{count}x - Feuer-Pyromagus besiegen",
        difficulty: "medium",
        variables: {
            count: {
                min: 1,
                max: 3
            }
        }
    },
    {
        id: "kill-molduga",
        text: "{count}x - Moldora besiegen",
        difficulty: "hard",
        variables: {
            count: {
                min: 1,
                max: 2
            }
        }
    },
    {
        id: "kill-keese-01",
        text: "{count}x - Flederbeißer besiegen",
        difficulty: "easy",
        variables: {
            count: {
                min: 1,
                max: 5
            }
        }
    },
    {
        id: "kill-keese-02",
        text: "{count}x - Eis-Flederbeißer besiegen",
        difficulty: "easy",
        variables: {
            count: {
                min: 1,
                max: 5
            }
        }
    },
    {
        id: "kill-keese-03",
        text: "{count}x - Elektro-Flederbeißer besiegen",
        difficulty: "easy",
        variables: {
            count: {
                min: 1,
                max: 5
            }
        }
    },
    {
        id: "kill-keese-04",
        text: "{count}x - Feuer-Flederbeißer besiegen",
        difficulty: "easy",
        variables: {
            count: {
                min: 1,
                max: 5
            }
        }
    },
    {
        id: "kill-octorok-01",
        text: "{count}x - Fels-Oktorok besiegen",
        difficulty: "easy",
        variables: {
            count: {
                min: 1,
                max: 5
            }
        }
    },
    {
        id: "kill-octorok-02",
        text: "{count}x - Wasser-Oktorok besiegen",
        difficulty: "easy",
        variables: {
            count: {
                min: 1,
                max: 5
            }
        }
    },
    {
        id: "kill-octorok-03",
        text: "{count}x - Wald-Oktorok besiegen",
        difficulty: "easy",
        variables: {
            count: {
                min: 1,
                max: 5
            }
        }
    }
]

export default killTasks