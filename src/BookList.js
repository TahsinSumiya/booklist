import React,{useState,useReducer} from 'react'
import {reducer} from './reducer'
const booksData=[
    {id :1,name:"brida"},
    {id :2,name:"The alchemist"},
    {id :3,name:"TimeMachine"},
    
];



const BookList = () => {

 
  const [booksState,dispatch]=useReducer(reducer,{
    books:booksData,
    isModalOpen:false,
    modalText:""

  })
    // const [books,setBooks]=useState(booksData)
    const [bookName,setBookName]=useState("")
    // const [modalText,setmodalText]=useState("")
    // const [isModalOpen,setisModalOpen]=useState(false)
    const removeBook = (id)=>{
      dispatch({type:"REMOVE",payLoad:id})
     } 
    const handleSubmit=(e)=>{
      e.preventDefault();
      const newBook ={id:new Date().getTime().toString(),name:bookName}
      dispatch({type:"ADD",payLoad:newBook})
      setBookName("")
      // setBooks((prevState)=>{
      //     const newBook ={id:new Date().getTime().toString(),name:bookName}
      //     return [...prevState,newBook]
      // })
      // setisModalOpen(true);
      // setmodalText("book is added")
    }
    const Modal = ({modalText})=>{
       return <p>{modalText}</p>
    }
 
   
  return (
    <div className='container'>
     <h3 className='title'>Book List</h3>
     <form onSubmit={handleSubmit} className="form">
      <input type='text'value={bookName}
      onChange={(e)=>{
        setBookName(e.target.value)
      }}
      ></input>
      <button className="btn-submit" type='submit'>submit</button>
     </form>
     {booksState.isModalOpen && <Modal modalText={booksState.modalText} />}
     {booksState.books.map((book)=>{
      const {id,name}=book
      return <li key={id} className="list">
           {name}
           <button className='rem-btn' onClick={()=>{removeBook(id)}}>-</button>
      </li>
     })}
    </div>
  )
}

export default BookList
