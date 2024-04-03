import './App.css';
import BookItem from './components/bookItem/BookItem';


//npm i (para instalar dependencias, si es que hubo algun commit o cambio de otra persona)
//Aplicacion donde van a estar todos los Componentes, y donde va a estar nuestra Web
function App() {
  return(
    <div>
      <div className="d-flex justify-content-center flex-wrap">
        {books.map((book, i) => (//Se usa () cuando es un codigo que se puede escribir en una sola linea, sino va {}
            <BookItem
              key = {i}
              title = {book.bookTitle}
              author = {book.bookAuthor}
              pageCount = {book.pageCount}
              rating = {book.bookRating}
              imageUrl = {book.imageUrl}
            />
          ))}
      </div>
    </div>
  )
}


const books = [
  {
    bookTitle: "100 años de soledad",
    bookAuthor: "Gabriel García Márquez",
    bookRating: Array(5).fill('*'),
    pageCount: 410,
    imageUrl: "https://images.cdn3.buscalibre.com/fit-in/360x360/61/8d/618d227e8967274cd9589a549adff52d.jpg",
  },
  {
    bookTitle: "Asesinato en el Orient Express",
    bookAuthor: "Agatha Christie",
    bookRating: Array(4).fill("*"),
    pageCount: 256,
    imageUrl: "https://m.media-amazon.com/images/I/71Sb60uKFbL.SY425.jpg",
  },
  {
    bookTitle: "Las dos torres",
    bookAuthor: "J.R.R. Tolkien",
    bookRating: Array(5).fill("*"),
    pageCount: 352,
    imageUrl: "https://m.media-amazon.com/images/I/A1y0jd28riL.AC_UF1000,1000_QL80.jpg",
  },
  {
    bookTitle: "50 sombras de Grey",
    bookAuthor: "E.L. James",
    bookRating: Array(1).fill("*"),
    pageCount: 514,
    imageUrl: "https://prodimage.images-bn.com/pimages/9781728260839_p0_v2_s1200x630.jpg",
  },
  {
    bookTitle: "El código Da Vinci",
    bookAuthor: "Dan Brown",
    bookRating: Array(4).fill("*"),
    pageCount: 590,
    imageUrl: "https://m.media-amazon.com/images/I/A1L-ulNrn+L.SY425.jpg",
  },
  {
    bookTitle: "Harry Potter y la piedra filosofal",
    bookAuthor: "J.K. Rowling",
    bookRating: Array(5).fill("*"),
    pageCount: 336,
    imageUrl: "https://m.media-amazon.com/images/I/81klJGqMlcL.SY425.jpg",
  },
  {
    bookTitle: "Cien años de soledad",
    bookAuthor: "Gabriel García Márquez",
    bookRating: Array(5).fill("*"),
    pageCount: 417,
    imageUrl: "https://m.media-amazon.com/images/I/91m51NXjg6L.SY425.jpg",
  },
  {
    bookTitle: "1984",
    bookAuthor: "George Orwell",
    bookRating: Array(5).fill("*"),
    pageCount: 368,
    imageUrl: "https://m.media-amazon.com/images/I/41L+OrmfZML.SY445_SX342.jpg",
  },
  {
    bookTitle: "Don Quijote de la Mancha",
    bookAuthor: "Miguel de Cervantes",
    bookRating: Array(4).fill("*"),
    pageCount: 1056,
    imageUrl: "https://m.media-amazon.com/images/I/51zh5LauEGL.SY445_SX342.jpg",
  },
  {
    bookTitle: "Orgullo y prejuicio",
    bookAuthor: "Jane Austen",
    bookRating: Array(5).fill("*"),
    pageCount: 388,
    imageUrl: "https://m.media-amazon.com/images/I/A1H6n6dj+GL.SY425.jpg",
  },
  {
    bookTitle: "El Alquimista",
    bookAuthor: "Paulo Coelho",
    bookRating: Array(5).fill("*"),
    pageCount: 192,
    imageUrl: "https://m.media-amazon.com/images/I/61PZrOxnKrL.SY425.jpg",
  },
  {
    bookTitle: "El principito",
    bookAuthor: "Antonie de Saint Exupéry",
    bookRating: Array(4).fill("*"),
    pageCount: 89,
    imageUrl: "https://m.media-amazon.com/images/I/51r72khRTwL.SY425.jpg",
  },
];

export default App

