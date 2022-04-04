import React from 'react';
import './Blogs.css';
const Blogs = () => {
    return (
        <div className='blogs-container'>
            <h1>React Question</h1>
            <h2>Question No1 : What is context api?</h2>
            <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier.The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
            <h2>Question No2 : What is Semantic tag?</h2>
            <p>Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page. Text that is enclosed in the code tag is immediately recognized by the browser as some type of coding language.Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation. For example, a p tag indicates that the enclosed text is a paragraph. This is both semantic and presentational because people know what paragraphs are, and browsers know how to display them.On the flip side of this equation, tags such as B and I are not semantic. They define only how the text should look (bold or italic), and don't provide any additional meaning to the markup.</p>
            <h2>Question No3 : What is diffrence between inline-block and inline-block-element</h2>
            <h3>inline : </h3>
            <p>Inline elements display in a line. They do not force the text after them to a new line.An anchor (or link) is an example of an inline element. You can put several links in a row, and they will display in a line.</p>
            <h3>inline block : </h3>
            <p>Block level elements take up space by default. They will stack down the page.A paragraph is a block level element. Each new paragraph tag will stack vertically. Block level tags take up as much horizontal space as possible and push the next block level element down.</p>
        </div>
    );
};

export default Blogs;