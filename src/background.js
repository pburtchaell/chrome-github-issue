// Store the old title
const oldDocumentTitle = document.title

// Get the issue number from the DOM
const issueNumber = document.querySelector('.gh-header-number').textContent

// Construct a new title
const newDocumentTitle = `${issueNumber} · ${oldDocumentTitle.replace(/(Issue)+(\s)+(#)+([0-9])+(\s·\s)/g, '')}`

document.title = newDocumentTitle
