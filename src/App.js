import styles from './App.module.css';
import NavBar from './componets/NavBar';
import { Route, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div className={styles.App}>
        <NavBar />
        <Container class={styles.MainBody}>
            <Switch>
                <Route exact path="/" render={( ) => <h1>Home</h1>}/>
                <Route exact path="/signin" render={( ) => <h1>Sing In</h1>}/>
                <Route exact path="/signup" render={( ) => <h1>Sign Up</h1>}/>

            </Switch>
        
        </Container>

    </div>
  );
}

export default App;