const data = [
    {
        "piece": "sam0",
        "appareil": "light0",
        "meta": {
            "revision": 0,
            "created": 1498894790393,
            "version": 0
        },
        "$loki": 1
    },
    {
        "piece": "salon0",
        "appareil": "light0",
        "meta": {
            "revision": 0,
            "created": 1498894790393,
            "version": 0
        },
        "$loki": 2
    },
    {
        "piece": "chambre0",
        "appareil": "light0",
        "meta": {
            "revision": 0,
            "created": 1498894790393,
            "version": 0
        },
        "$loki": 3
    },
    {
        "piece": "chmabre0",
        "appareil": "light1",
        "meta": {
            "revision": 0,
            "created": 1498894790393,
            "version": 0
        },
        "$loki": 4
    },
    {
        "piece": "sdb0",
        "appareil": "light0",
        "meta": {
            "revision": 0,
            "created": 1498894790393,
            "version": 0
        },
        "$loki": 5
    },
    {
        "piece": "wc0",
        "appareil": "light0",
        "meta": {
            "revision": 0,
            "created": 1498894790393,
            "version": 0
        },
        "$loki": 6
    },
    {
        "piece": "chaudiere0",
        "meta": {
            "revision": 0,
            "created": 1498894790393,
            "version": 0
        },
        "$loki": 7
    },
    {
        "piece": "sam0",
        "appareil": "prise0",
        "meta": {
            "revision": 0,
            "created": 1498894790393,
            "version": 0
        },
        "$loki": 8
    },
    {
        "piece": "sam0",
        "appareil": "prise1",
        "meta": {
            "revision": 0,
            "created": 1498894790393,
            "version": 0
        },
        "$loki": 9
    },
    {
        "piece": "cuisine0",
        "appareil": "prise0",
        "meta": {
            "revision": 0,
            "created": 1498894790393,
            "version": 0
        },
        "$loki": 10
    },
    {
        "piece": "cuisine0",
        "appareil": "prise1",
        "meta": {
            "revision": 0,
            "created": 1498894790393,
            "version": 0
        },
        "$loki": 11
    },
    {
        "piece": "chambre0",
        "appareil": "prise0",
        "meta": {
            "revision": 0,
            "created": 1498894790393,
            "version": 0
        },
        "$loki": 12
    }
];

console.log(data.map((l) => l.piece).reduce((a,b) => {
    if(!a)
        a = [];
    (!a.includes(b) && a.push(b));
    return a;
},[]));