//DOM

const title = document.getElementById('title')
const author = document.getElementById('author')
const year = document.getElementById('year')
const bookList = document.getElementById('book-list')
const button = document.querySelector('.btn')

button.addEventListener('click', function(e) {
    e.preventDefault()

    if (title.value == '' && author.value == '' && year.value == '') {
        alert('Please Provide Information')
    } else {
        const newRow = document.createElement('tr')

        const newTitle = document.createElement('th')
        newTitle.className = 'text-center'
        newTitle.innerHTML = title.value
        newRow.appendChild(newTitle)

        const newAuthor = document.createElement('th')
        newAuthor.className = 'text-center'
        newAuthor.innerHTML = author.value
        newRow.appendChild(newAuthor)

        const newYear = document.createElement('th')
        newYear.className = 'text-center'
        newYear.innerHTML = year.value
        newRow.appendChild(newYear)

        bookList.appendChild(newRow)

    }

})
