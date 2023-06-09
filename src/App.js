import styles from './App.module.css';
import { Route, Switch } from "react-router-dom";

import Container from "react-bootstrap/Container";
import NavBar from './componets/NavBar';
import WelcomePage from './componets/WelcomePage';
import SignInForm from './pages/auth/SignInForm';
import SignUpForm from './pages/auth/SignUpForm';

function App() {
  return (
    <div className={styles.App}>
        <NavBar />
        <Container class={styles.MainBody}>
            <Switch>
                <Route exact path="/" render={( ) => <WelcomePage /> } />
                <Route exact path="/signin" render={( ) => <SignInForm />}/>
                <Route exact path="/signup" render={( ) => <SignUpForm />}/>

            </Switch>
        
        </Container>

    </div>
  );
}

export default App;