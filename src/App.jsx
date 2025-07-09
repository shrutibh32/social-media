import React, {  useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import './App.css'
import CreatePost from "./Components/CreatePost";

import PostList from "./Components/PostList";
import PostListProvider from "./store/post-context";
export default function App() {

const [selectedTab,setSelectedTab]=useState("Home");   



  return (
    <PostListProvider>
      <div className="app-container">
      <Sidebar selectedtab={selectedTab} setSelectedTab={setSelectedTab}/>
      <div className="container">
      <Header/>
      {selectedTab==='Home'?<PostList/>:<CreatePost/>}
      
      
      <Footer/>
      </div>
    </div>
    </PostListProvider>
  );
}
