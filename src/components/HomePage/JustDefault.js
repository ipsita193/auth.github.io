import React from 'react';
import Title from '../Title';

export default function JustDefault() {
    return (
        <div className="just-default">
           <div className="inside-container">
               <Title title="just default sectiom" color="#aab5b9" />

               <div className="just-default-center">
                   <div className="just-texts">
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, perspiciatis? Autem debitis facere nihil temporibus deleniti error quasi incidunt atque, quas iure non quis et numquam dolorum excepturi quisquam illo.</p>

                   </div>
                   <div className="just-video">
                   <iframe   src="https://www.youtube.com/embed/g-5O2HTbk08" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{border:"none"}}></iframe>
                   </div>
               </div>
           </div>
        </div>
    )
}
