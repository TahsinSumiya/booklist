export const reducer=(state,action)=>{
    if (action.type ==="ADD"){
      const allBooks = [...state.books,action.payLoad]
        return {
          ...state,
          books:allBooks,
          isModalOpen:true,
          modalText:"Book is added"
        }
    }
   
    if (action.type === "REMOVE") {
      const filteredBooks = [...state.books].filter(
        (book) => book.id !== action.payLoad
      );
      return {
        ...state,
        books: filteredBooks,
        isModalOpen: true,
        modalText: "book is removed",
      };
    }
    return state;
  };