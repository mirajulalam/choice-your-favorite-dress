import React from 'react';
import './Blogs.css';
const Blogs = () => {
    return (
        <div className='blogs-container'>
            <h1>React Question</h1>
            <h2>Question No1 : What is context api?</h2>
            <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier.The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
        </div>
    );
};

export default Blogs;