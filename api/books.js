export function booksStore() {
    let storage = [
        {
            "id": "01",
            "category": "fantasia",
            "title": "RagNaroK",
            "spec": {
                "data_publication": "12-12-199",
                "author": "Yan Vastrubet"
            },
            "details": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "url_cap": "img/capa-livro.jpg"
        },
        {
            "id": "02",
            "category": "fantasia",
            "title": "RagNaroK",
            "spec": {
                "data_publication": "12-12-199",
                "author": "Yan Vastrubet"
            },
            "details": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "url_cap": "img/capa-livro.jpg"
        },
        {
            "id": "03",
            "category": "fantasia",
            "title": "fantasia",
            "spec": {
                "data_publication": "12-12-199",
                "author": "Yan Vastrubet"
            },
            "details": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "url_cap": "img/capa-livro.jpg"
        },
        {
            "id": "04",
            "category": "infantil",
            "title": "RagNaroK",
            "spec": {
                "data_publication": "12-12-199",
                "author": "Yan Vastrubet"
            },
            "details": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "url_cap": "img/capa-livro.jpg"
        },
        {
            "id": "05",
            "category": "infantil",
            "title": "RagNaroK",
            "spec": {
                "data_publication": "12-12-199",
                "author": "Yan Vastrubet"
            },
            "details": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "url_cap": "img/capa-livro.jpg"
        },
        {
            "id": "06",
            "category": "infantil",
            "title": "RagNaroK",
            "spec": {
                "data_publication": "12-12-199",
                "author": "Yan Vastrubet"
            },
            "details": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "url_cap": "img/capa-livro.jpg"
        },
        {
            "id": "07",
            "category": "suspense",
            "title": "Lorem",
            "spec": {
                "data_publication": "12-12-199",
                "author": "Yan Vastrubet"
            },
            "details": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "url_cap": "img/capa-livro.jpg"
        },
        {
            "id": "08",
            "category": "suspense",
            "title": "Lorem",
            "spec": {
                "data_publication": "12-12-199",
                "author": "Yan Vastrubet"
            },
            "details": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "url_cap": "img/capa-livro.jpg"
        },
        {
            "id": "09",
            "category": "suspense",
            "title": "Lorem",
            "spec": {
                "data_publication": "12-12-199",
                "author": "Yan Vastrubet"
            },
            "details": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "url_cap": "img/capa-livro.jpg"
        },
        {
            "id": "10",
            "category": "terror",
            "title": "dolor",
            "spec": {
                "data_publication": "12-12-199",
                "author": "Yan Vastrubet"
            },
            "details": "dolor ipsum dolor sit amet consectetur adipisicing elit.",
            "url_cap": "img/capa-livro.jpg"
        },
        {
            "id": "11",
            "category": "terror",
            "title": "dolor",
            "spec": {
                "data_publication": "12-12-199",
                "author": "Yan Vastrubet"
            },
            "details": "dolor ipsum dolor sit amet consectetur adipisicing elit.",
            "url_cap": "img/capa-livro.jpg"
        }
    ];

    return storage;
}

// TODO: feature failed
// let storage = {};
// let newStorage = [];

// export function booksStore() {
//     fetch("./api/books.json")
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(response){
//       setBooksStorage(response, storage);
//       newStorage = storage.data;
//     });
    
//     return newStorage;
// }

// export const setBooksStorage = (newBook, storage) => {
//     storage.data = newBook;
// }
