import { createSlice } from "@reduxjs/toolkit";

 import { userList } from "../components/Data"; 

 const userSlice=createSlice({
    name: "users",
    initialState: userList,
    reducers: {
       addUser: (state,action)=>{
        console.log(action);
state.push(action.payload)
       },
       updateUser: (state,action)=>{
        const {id,name,email,age} =action.payload
        const uu = state.find(user => user.id == id)
        if(uu) {
            uu.name=name;
            uu.email=email;
            uu.age= age;
        }
       } ,
       deleteUser: (state,action)=>{
        const {id}=action.payload;
        return state.filter((elem)=> elem.id !== id)

       }

    }

})

export const {addUser,updateUser,deleteUser}=userSlice.actions;
export default userSlice.reducer