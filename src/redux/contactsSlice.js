import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = {
  contacts:[
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: "",
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact(state, action) {
        // state.contacts.push(action.payload);
    
     state.contacts= [...state.contacts, action.payload];
      },  
 
      
    deleteContact(state, action) {
      
     state.contacts = state.contacts.filter(
       contact => contact.id !== action.payload
     );
        
      },
    
  },
});

console.log(contactsSlice)
/*
{
    name: 'posts',
    actions : {
        createPost,
        updatePost,
        deletePost,
    },
    reducer
}
*/






export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;



// console.log(addContact({ id: 123, title: 'Hello World' }))
// {type : "posts/createPost", payload : {id : 123, title : "Hello World"}}