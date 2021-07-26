import React from 'react';
import Title from '../Title';


export default function AboutProduct() {
    return (
        <div className="aboutContact">
          <div className="inside-container">
              <Title title="contact us" color="grey" />
             <div className="aboutContact-center">

                 <div className="aboutContact-info">
                 <p><span><i className='fas fa-user'></i></span>Nick Carter</p>

                    <p><span><i className='fas fa-phone-alt'></i></span>+30 666-32-444</p>

                    <p><span><i className='fas fa-envelope'></i></span>ncarter@gmail.com</p>

                    <p><span><i className='fas fa-user'></i></span>street jones,21 Athens (Greece)</p>
                 </div>

                 <div className="aboutContact-form">
                 <form >
                     <div className="inputs">
                         <label htmlFor="name">name</label><br/>
                         <input type="text"/>
                     </div>

                     <div className="inputs">
                         <label htmlFor="name">email</label><br/>
                         <input type="email"/>
                     </div>
                     <div className="textarea">
                         <label htmlFor="message">message</label>
                         <textarea name="" id="" cols="30" rows="5"></textarea>
                     </div>

                     <button type="button" className="btn">Submit</button>


                 </form>
             </div>
                 
             </div>

           
          </div>
        </div>
    )
}
