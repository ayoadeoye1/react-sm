import React, { useRef, useEffect } from 'react';

function Media() {
const firstName = useRef(null);
const passRef = useRef(null);
const submitRef = useRef(null);

useEffect(() =>{firstName.current.focus()}, [])

function firstDown(e){
    if(e.keyCode === 13){
        passRef.current.focus()
    }
}

function passDown(e){
    if(e.keyCode === 13){
       submitRef.current.focus()
    }
}

function subDown(e){
    if(e.keyCode === 13){
       alert('submitted sucessfully');
    }
}
    return ( 
        <div>
            <h2 className="log">log-in</h2>
            <center>
                <input ref = {firstName} onKeyDown={firstDown} className="mail" type="email" placeholder="Enter Your E-mail or Phone number" /><br />
                <input ref={passRef} onKeyDown={passDown} className="password" type="password" placeholder="Enter Your Password" /><br />
                <input ref={submitRef} onKeyDown={subDown} className="submit" type="submit" value="Log In" />
            </center>
        </div>
    );
}

// class Media extends Component {
   
//     onClick = () =>{
//         alert("this is your g-mail "+ this.firstName.value + ",and this is your password " + this.password.value )
//     }
//     onKeyUp = (target, e) =>{
//         if(e.keyCode === 13){
//             switch( target){
//                 case 'firstName': 
//                 this.password.focus(); 
//                 break;
//                 case 'password': 
//                 this.submit.focus(); 
//                 break;
//                 default: this.firstName.focus(); 
//                 break;
//             }
//         }
//     }
//     render() {
//         return ( 
//             <div>
//                 <h2 className="log">log-in</h2>
//                 <center>
//                     <input ref={(input) => {this.firstName = input}} onKeyUp={this.onKeyUp.bind(this, 'firstName')} className="mail" type="email" placeholder="Enter Your E-mail or Phone number" /><br />
//                     <input ref={(pass) => {this.password = pass}} onKeyUp={this.onKeyUp.bind(this, 'password')} className="password" type="password" placeholder="Enter Your Password" /><br />
//                     <input ref={(log) => {this.submit = log}} onClick={this.onClick} onKeyUp={this.onKeyUp.bind(this, 'submit')} className="submit" type="submit" value="Log In" />
//                 </center>
//             </div>
//         );
//     }
// }
 
export default Media;