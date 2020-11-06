const items = [
    {
        name: 'Array length',
        description: 'Get the length of an array',
        code: 'let length = array.length;'
    },
    {
        name: 'For each',
        description: 'Calls a function once for each element in an array, in order',
        code: 'array.forEach( item => { /* do things with item */ } );'
    },
    {
        name: 'document.querySelector',
        description: 'Används för att hitta ett element i DOM, med hjälp av en CSS-selektor.',
        code: `let button = document.querySelector('.form button');`
    },
    {
        name: 'element.addEventListener',
        description: 'Lägga på en händelse på elementet, t.ex ett klick',
        code: `button.addEventListener('click', event => {})`
    },
    {
        name: 'document.createElement',
        description: 'Skapar upp ett element i DOM',
        code: `let button = document.createElement('button');`
    },
    {
        name: 'Map',
        description: 'Skapar en ny array genom att omvandla varje element i arrayen',
        code: `items.map(mystery => mystery.name)`
        // The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
    }
]

console.log('JavaScript higher order functions');

let a = items.find(mystery => mystery.name == 'Map');
console.log('4a: a==', a);


/*
" citattecken, quotes "
' apostrof, single quotes '
` grav accent ` (template strings)
´ akut accent ´ (används inte till strängar)
* asterisk
( parentes, parentheses/brackets/braces )
[ hakparents, square brackets ]
{ måsvingar/blockparentes, curly braces }

*/
