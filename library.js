document.getElementById('error-message').style.display = "none";
document.getElementById('spinner-field').style.display = "none";
const searchBook = () =>{
    const inputField = document.getElementById("input-field");
    const inputValue = inputField.value;
    if(inputValue === ""){
        document.getElementById('error-message').style.display = 'block';
    }else{

        console.log(inputValue);
        document.getElementById('spinner-field').style.display = "block";
        fetch(`http://openlibrary.org/search.json?q=${inputValue}`)
        .then(response => response.json())
        .then(data => displayBooksDetails(data.docs))
    }
}

const displayBooksDetails = (books) =>{
    document.getElementById('error-message').style.display = 'none';
    document.getElementById('spinner-field').style.display = "none";
    document.getElementById('heading').style.display = "none";

    const searchResult = document.getElementById("search-result")
    searchResult.innerHTML = ``;
    books.forEach(singleBook =>{
        const {title, author_name,publisher, cover_i, author_key}= singleBook;
        const bookCard = document.createElement("div");
        bookCard.classList.add("col");
        bookCard.innerHTML = `
        <div class="card shadow-lg">
        <img src="https://covers.openlibrary.org/b/id/${cover_i}-M.jpg" alt=".." class="card-img-top w-full">
      <div class="card-body">
        <h5 class="card-title">title : ${title}</h5>
        <h5 class="card-title">Author : ${author_name[0]}</h5>
        <h5 class="card-title">Publisher : ${publisher[0]}</h5> 
      </div>
      </div>
      <div class="card-footer"><button class="btn btn-outline btn-outline-success" onclick="loadAuthorDetail('${
        author_key[0]
        }')">Author Detail</button></div>
         </div>
        `
        searchResult.appendChild(bookCard)
    })
}
const loadAuthorDetail = (authorId) =>{
    console.log(authorId);
    fetch(`https://openlibrary.org/authors/${authorId}.json`)
    .then((res) => res.json())
    .then((data) => displayAuthorDetail(data));
}
const displayAuthorDetail = (author) =>{
    window.scrollTo(0, 40);
    const { name, birth_date, bio } = author;
  const detailContainer = document.getElementById("author-detail");
  detailContainer.innerHTML = `
     <div>
        <h5 class="card-title">Author Name: ${name}</h5>
        <p class="card-text">Author DOB: ${birth_date ? birth_date : "N/a"}</p>
        <p class="card-text">Author Bio: ${bio ? bio : "N/a"}</p>
     </div>
     
     `;

}
searchBook();