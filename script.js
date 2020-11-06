if ('serviceWorker' in navigator) {
	// Assumes your service worker has file name "sw.js"
    navigator.serviceWorker.register('sw.js')
    .then(reg => {
        console.log('Registration succeeded. Scope is ' + reg.scope);
    });
}




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
    },
    {
        name: '',
        description: '',
        code: ``
    },
]

console.log('JavaScript higher order functions');

let a = items.find(mystery => mystery.name == 'Map');
// console.log('4a: a==', a);

let b = items.map(mystery => mystery.name);
// console.log('4b: b==', b);

// let nameAndCode = items.map(item => ({
//     name: item.name,
//     sample: item.code
// }));
// console.log('Name and code: ', nameAndCode);

// Första elementet som saknar description
let c = items.find(mystery => mystery.description == '');

// Reducerar en array till ett värde
// Lägger ihop alla koder till en sträng
let d = items.reduce((acc, cur) => acc + '\n' + cur.code, '');
// console.log('4d: d == ', d);

// ... kallas "spread operator"
// Skapar en ny lista med objekt som har allt som fanns i den ursprungliga listan, men en extra egenskap
let e = items.map(mystery => ({ ...mystery, category: 'general' }))
//                           ({ name, description, code, category })
// console.log('4e: ', e);

// Creates a new array with only the elements that the arrow function returns true for
let f = items.filter(mystery => mystery.description != '');
// console.log('4f', f);

// Exempel: hitta alla action-filmer
// let action = movies.filter(movie => movie.keyword == 'action')


// Skapar en ny lista med alla element som har ett namn som kommer efter M i bokstavsordning
let g = items.filter(mystery => {
    // does not work if name===''
    if( mystery.name == '' ) {
        return true;
    } else {
        const c = mystery.name[0].toUpperCase();
        return c > 'M';
    }
});
console.log('4g: ', g);



// "Ta bort" elementet med id==3 från arrayen
const remove = 3;
let h = items.filter(mystery => mystery.id != remove);



/*
" citattecken, quotes "
' apostrof, single quotes '
` grav accent ` (template strings)
´ akut accent ´ (används inte till strängar)
* asterisk
( parentes, parentheses/brackets/braces )
[ hakparents, square brackets ]
{ måsvingar/blockparentes, curly braces }
: kolon
; semikolon

*/
