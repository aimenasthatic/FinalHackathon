
    // add krny k leye

// import React, { useState } from 'react'
// import { base } from '../config/fb'
// import {db} from '../config/firebase'
// import { fs } from '../config/fb'
// import { collection } from 'firebase/firestore'
// import { addDoc } from 'firebase/firestore'
// const Store = () => {
//     const [ title , setTitle] = useState('')
//     const [ author , setAuthor] = useState('')
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try{
// const Book = collection(db , 'Book')
//  await addDoc(Book, { title, author })
//             setTitle('')
//             setAuthor('')
//         } catch (error) {
//             console.log(error)
            
//         }
       
//     }
//     function hell(){
//       console.log('hello')
//     }
//     return (
//         <>
//           <form onSubmit={handleSubmit} >
//             <div>
//                 <label htmlFor="title">Title</label>
    //             <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} />
    //             <label htmlFor="author">Author</label>
    //             <input type="text" value={author} onChange={(e)=>{setAuthor(e.target.value)}} />
    //         <button type='submit' onClick={hell} >add book</button>
    //         </div>
    //       </form>
    //     </>
    //   )
    // }
    
    // export default Store;

// use for login/sign in and signout/logout

//     import React from 'react'
// import {auth, loginwithGoogle} from '../config/firebase'
// import { useAuthState } from 'react-firebase-hooks/auth'
// import { signInWithPopup, signOut } from 'firebase/auth'

// function Test() {
//     const [user ,loading, error] = useAuthState(auth)
//      async function handleLogin() {
//         await signInWithPopup(auth, loginwithGoogle)
//      }
   
//   return (
//     <>
//       <h3>login with google</h3>
//       <input type="email"  placeholder='abc@gmail.com'/>
//       <input type="password"  placeholder='***'/>
//       <button onClick={handleLogin}>login with google</button>
     
//       {loading && <p>loading...</p>}
//        {user && (<>
//         <h2>{user?.displayName}</h2>
//         {/* <img src={user?.photoURL || } alt="profile-image" /> */}
//         <img src={user?.photoURL || "https://postimg.cc/mhk7TMtL"} alt="Profile" />
//        </>)}
//     </>
//   )
// }

// export default Test;



// get del Update krny k leye



import React, { useEffect, useState } from 'react'
import { getDocs, collection, doc, deleteDoc  , updateDoc} from 'firebase/firestore'
import { database } from '../config/firebase'

function Products() {
    const productData = collection(database, 'products')
    const [newproduct, setNewProduct] = useState([])
    const [editmode, setEditmode] = useState(false)
    const [titleStore , setTitlestore] = useState('')
    const [id , setId] = useState('')
    useEffect(() => {
        async function getProducts() {
            const data = await getDocs(productData)
            setNewProduct(data.docs.map((doc) => ({
                ...doc.data(), id: doc.id
            })))
        }
        getProducts()
    }, [])

    const handleDelete = async (id) => {
        const docData = doc(database, 'products', id)
        await deleteDoc(docData)
        setNewProduct(newproduct.filter((data) => data.id !== id))
    }
    const handleUpdate = (value) => {
        setEditmode(true)
        setTitlestore(value.title)
        setId(value.id)
    }
    const handleSave = async(id)=>{
        console.log('here is id' , id)
        const docData = doc(database, 'products', id)
        await updateDoc(docData , {title : titleStore})
        setNewProduct(newproduct.map((data , index) => {
            
        }))
    }
    const handleInput = (e)=>{
        setTitlestore(e.target.value)
    }
    return (
        <div>
            {editmode &&    <>
                <h1>Update product</h1>
                <input type="text" value={titleStore} onChange={handleInput}/>
                <button onClick={()=>handleSave(id)}>Save</button>
                <button onClick={()=>setEditmode(false)}>Cancel</button>
            </>}

            <br />
            <h1>All products</h1>
            {newproduct?.map((value, index) => (
                <div key={index}>
                    <h1>{value.title}</h1>
                    <button onClick={() => handleDelete(value.id)}>delete</button>
                    <button onClick={() => handleUpdate(value)}>Update</button>
                </div>
            ))}


        </div>
    )
}

export default Products