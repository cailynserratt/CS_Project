let data = [
    {
        name: 'Lisa',
        age: '28'
    },
    {
        name: 'Mark',
        age: '25'
    },
    {
        name: 'Amanda',
        age: '27'
    },
    {
        name: 'Amber',
        age: '22'
    },
    {
        name: 'Kaeya',
        age: '24'
    },
    {
        name: 'James',
        age: '30'
    },
];

const info = document.querySelector('#info');

let details = data.map(function(item) {
    return '<div>' + item.name + ' ' + 'is ' + item.age + ' years old' + '</div>';
});

info.innerHTML = details.join('\n');