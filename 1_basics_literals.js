// const s1 = 'hello';
// console.log(typeof s1);

// const s2 = new String('Hello');
// console.log(typeof s2);

// console.log(window);
//  alert(1);

// console.log(navigator.appVersion);


const book1 = {
    title: 'Book one',
    author: 'John Deo',
    year: '2014',
    getSummary: function() {
        return`${this.title} was written by ${this.author} in ${this.year}`;
    }
};



const book2 = {
    title: 'Book TWo',
    author: 'Jone Deo',
    year: '2017',
    getSummary: function() {
        return`${this.title} was written by ${this.author} in ${this.year}`;
    }
};

// console.log(book2.getSummary());
// console.log(Object.values(book2));
// console.log(Object.keys(book2));
