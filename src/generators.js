import d3    from 'd3';
import faker from 'faker';

const programmingLanguages = [
    'php', 'make', 'javascript', 'go', 'erlang', 'elixir', 'lisp', 'haskell', 'python', 'ruby', 'hack', 'scala', 'java', 'rust', 'c', 'css', 'sass', 'stylus'
];

export const generateProgrammingLanguageStats = (shuffle = true, limit = -1) => {
    let langs = programmingLanguages;
    if (shuffle) {
        langs = _.shuffle(langs);
    }
    if (limit < 1) {
        limit = 1 + Math.round(Math.random() * (programmingLanguages.length - 1));
    }

    const stats = langs.map((language, i) => ({ label: language }))
        .slice(0, limit).map(language => {
            language.value = Math.round(Math.random() * 600);

            return language;
        })
    ;

    //stats.sort((a, b) => d3.ascending(a.label, b.label));

    return stats;
};

export const generateSerie = () => {
    const data = [];
    const max  = 100 + Math.random() * (Math.random() * 600);

    for (let i = 0; i < 19; i++) {
        data.push(Math.round(Math.random() * max));
    }

    return data;
};

export const generateStackData = (size = 3) => d3.range(size).map(() => generateSerie().map((v, i) => ({ x: i, y: v })));


export const generateCitiesPopulation = size => d3.range(size).map(() => ({
    city:       faker.address.city(),
    population: 200 + Math.round(Math.random() * Math.random() * 1000000)
}));


const libTreeItems = [
    ['viz', [
        ['stack', [
            ['chart'],
            ['xAxis'],
            ['yAxis'],
            ['layers']
        ]],
        ['pie', [
            ['chart', [
                ['pie', [
                    ['outline'],
                    ['slices'],
                    ['bbox']
                ]],
                ['donut'],
                ['gauge']
            ]],
            ['legends']
        ]]
    ]],
    ['colors', [
        ['rgb'],
        ['hsl']
    ]],
    ['utils', [
        ['randomize'],
        ['resetClock'],
        ['noop'],
        ['tick'],
        ['forceGC'],
        ['stackTrace'],
        ['dbg']
    ]],
    ['generators', [
        ['address'],
        ['city'],
        ['animal'],
        ['movie'],
        ['user']
    ]],
    ['set', [
        ['clone'],
        ['intersect'],
        ['merge'],
        ['reverse'],
        ['toArray'],
        ['toObject'],
        ['fromCSV'],
        ['slice'],
        ['append'],
        ['prepend'],
        ['shuffle'],
        ['pick'],
        ['plouc']
    ]],
    ['text', [
        ['trim'],
        ['slugify'],
        ['snakeCase'],
        ['camelCase'],
        ['repeat'],
        ['padLeft'],
        ['padRight'],
        ['sanitize'],
        ['ploucify']
    ]],
    ['misc', [
        ['whatever', [
            ['hey'],
            ['WTF'],
            ['lol'],
            ['IMHO']
        ]],
        ['other'],
        ['crap', [
            ['crapA'],
            ['crapB', [
                ['crapB1'],
                ['crapB2'],
                ['crapB3'],
                ['crapB4']
            ]],
            ['crapC', [
                ['crapC1'],
                ['crapC2'],
                ['crapC3'],
                ['crapC4'],
                ['crapC5'],
                ['crapC6'],
                ['crapC7'],
                ['crapC8'],
                ['crapC9']
            ]]
        ]]
    ]]
];

export const generateLibTree = (
    name = 'nivo',
    limit,
    children = libTreeItems
) => {
    limit = limit || children.length;
    if (limit > children.length) {
        limit = children.length;
    }

    const tree = { name };
    if (children && children.length > 0) {
        tree.children = d3.range(limit).map((o, i) => {
            const leaf = children[i];

            // full path `${name}.${leaf[0]}`
            return generateLibTree(leaf[0], null, leaf[1] || []);
        });
    } else {
        tree.loc = Math.round(Math.random() * 200000);
    }

    return tree;
};
