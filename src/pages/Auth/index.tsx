import './styles.scss';
import { Route } from 'react-router-dom';
import Login from './components/Login';

const Auth = () => (
  <div className="auth-container">

    <div className="auth-content">
        <Route path="/auth/login">
          <Login/>
        </Route>
        <Route path="/auth/register">
          <h1>Cadastro</h1>
        </Route>
        <Route path="/auth/recover">
          <h1>Recuperação</h1>
        </Route>
    </div>
  </div>
);

export default Auth;