export function BookInfo(book) {
  return (`
    <!-- book info -->
    <div class="book-info">
    
      <!-- spec -->
      <div class="book-spec">
          <span class="data-publication">${book.spec.data_publication}</span> | <span class="book-author">${book.spec.author}</span>
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
  `)
}