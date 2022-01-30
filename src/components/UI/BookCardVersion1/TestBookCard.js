import React from 'react';
import BookCardVersion1 from './BookCardVersion1';
import classes from './TestBookCard.module.css'

const books = [
    {
      id: 1,
      author: "Э. Эггер, А. Бахтияров",
      price: "130",
      title: "История Книги",
      date: "20 февраль 2021",
      url: "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=130",
      
    },
    { 
      id: 2,
      author: "Э. Эггер, А. Бахтияров",
      price : "140",
      title: "История Книги",
      date: "20 февраль 2021",
      url: "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&h=130",
      
    },
    {
        id: 3,
        author: "Э. Эггер, А. Бахтияров",
        price: "130",
        title: "История Книги",
        date: "20 февраль 2021",
        url: "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=130",
        
      },
      {
        id: 4,
        author: "Э. Эггер, А. Бахтияров",
        price: "130",
        title: "История Книги",
        date: "20 февраль 2021",
        url: "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=130",
        
      },
      {
        id: 5,
        author: "Э. Эггер, А. Бахтияров",
        price: "130",
        title: "История Книги",
        date: "20 февраль 2021",
        url: "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=130",
        
      },
]


const TestBookCard = () => {
    return <div className={classes.books}>
     
    {books.map(book => {
      return <BookCardVersion1 cardStyle={"card1"} book={book} key={book.id}/>
    } )}
</div>;

};

export default TestBookCard;
