import React from "react";
import styles from "../../src/style/WelcomePage.module.css";
import { NavLink } from "react-router-dom";

/* Welcome page wih option ot sign in and sign up */

const Welcomepage = () => {
    return (
        <div className={styles.Container}>
            <div className="row">
                <div className="col-md-8 offset=md-2 Text">
                    <h1 className={styles.Text}>Capture</h1>
                    <p className="text-center">
                        <hr/>
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
        </div>
      
    );
};


export default Welcomepage;