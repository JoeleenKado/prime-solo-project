import React from "react";
import './Program.css'
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  // <div className="container">
    // <div id='article-container'>
      <article id='program'>
        <h2>Welcome to Virtual Gallery</h2>
      <p>
       
       -If you are an artist, I invite you to share your art with the world.
        Once you have registered as an artist, you can start publishing art in your Studio. Your published work 
        is immediately viewable in your Gallery. Head over to the Forum to see work done by 
        other artists.
       </p><p> 
        - If you are a guest, please enjoy the complimentary art, on loan from the Art Institue of Chicago.
        you may regiseter for an account and head to the forum for Art viewing.
       
        
        </p>
<p>
        *under development*: Virtual Gallery also trains you as an artist. We help you see your strengths and weaknesses with our Like System.
        Your most popular work will be the first work viewable my others visiting your gallery. The end result is that
        VG advocates your best work and helps you see where you can use work.

        
      </p>
      </article>
    
  
  
);

export default AboutPage;
