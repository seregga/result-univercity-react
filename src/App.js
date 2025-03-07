import './App.css';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';

function App() {
    const handleSigninSubmit = (data) => {
        console.log('Signin:', data)
      }
    
      const handleSignupSubmit = (data) => {
        console.log('Signup:', data)
      }
    
      return (
        <div className='auth'>
          <h1>Авторизация</h1>
          <Signin onSubmit={handleSigninSubmit} />
          <h1>Регистрация</h1>
          <Signup onSubmit={handleSignupSubmit} />
        </div>
      );
}

export default App