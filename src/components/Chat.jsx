import { useState } from "react";
import { db, auth } from "../firebase-config";
import {
  collection,
  addDoc,
  where,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

const Chat = ({room}) => {

  // const room =props;

  const [newMessage , setNewMessage] = useState("")
  const messagesRef = collection(db, "users");


  const handesubmit = async(e) => {
    e.preventDefault();
    console.log(newMessage)
    if (newMessage === "") return;
    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room,
    });

    setNewMessage("");


  };

  // const handlesubmit = async (event) => {
  //   event.preventDefault();

  //   if (newMessage === "") return;
  //   await addDoc(messagesRef, {
  //     text: newMessage,
  //     createdAt: serverTimestamp(),
  //     user: auth.currentUser.displayName,
  //     room,
  //   });

  //   setNewMessage("");
  // };


  return (
    <div>
        <form onSubmit={handesubmit}>
          <input placeholder="type msg.."

          onChange={(e) => setNewMessage(e.target.value)}

          
          ></input>
          <button type="submit" >send</button>
        </form>
    </div>
  )
}

export default Chat