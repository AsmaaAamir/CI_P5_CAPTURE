import React from "react";
import styles from '../../src/style/WelcomePage.module.css';
import { NavLink } from "react-router-dom";



/* Welcome page wih option ot sign in and sign up */

const Welcomepage = () => {
    return (
        <div>
            <div className={styles.Container}>
                <div className="col-md offset=md Text">
                    <h1 className={styles.Text}>Capture</h1>
                    <p className="text-">
                        <br/>
                        <h3>Welcome!</h3>
                        <br/>
                        Capture the moments and share it with your loved one and the world. Become the next inspiration for someone..!
                        <br/>
                    </p>
                    <div className={styles.WelcomeButton}>
                        <NavLink  to="/signin" >
                            <button className={styles.WelcomeButton1}>Sign In </button>
                        </NavLink>
                        <NavLink  to="/signup" >
                            <button className={styles.WelcomeButton2}>Sign Up </button>
                        </NavLink>
                    </div>
                </div>
            </div>    
            <div className={styles.Footer}>
                <NavLink  to="/home" >
                    <i class="fa-solid fa-house"></i>
                </NavLink>
                <NavLink  to="/profile" >
                     <i class="fa-solid fa-user"></i>
                </NavLink>

            </div>    
        
        </div>
        
    );
}


export default Welcomepage;