export function BookHeader(book) {
    return (`
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
    `)
  }
  