export  const BooksBox = (filteredStorage) => {
    let newFilteredStorage = filteredStorage.map((book) => {
        return `
        <!--- single book box -->
        <div class="book-box">
        
            <!-- book header  -->
            <div class="book-header">
            <h3 class="book-title">${book.title}</h3>

            <div 
                data-cap-title="${book.title}" 
                class="book-cap"
                style="background-image: url('/${book.url_cap}');"
            >
            </div>
            </div>
            <!-- /book header  -->

            <!-- book info -->
            <div class="book-info">
                
                <!-- spec -->
                <div class="book-spec">
                    <span class="data-publication">
                        ${book.spec.data_publication}</span> | <span class="book-author">${book.spec.author}
                    </span>
                </div>
                <!-- /spec -->

                <!-- details -->
                <p class="book-details">
                    ${book.details}
                </p>
                <!-- /details -->

                <!-- btn more book -->
                <div class="btn-more-book">
                    <a href="#">Ter agora</a>
                </div>

            </div>
            <!-- /book info  -->

        </div>
        `;
    }).join(" <!--- single book box --> ");

    return newFilteredStorage;

}


