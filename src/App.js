// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="margin">
      <div class="center">
        <div class="box">
          <h1 class="center">Instagram</h1>
          <div class="center"><input class="bodybuttons" type="username" placeholder="phone number, username or email" /></div><br />
          <div class="center"><input class="bodybuttons" type="password" placeholder="Password" /></div>
          <div class="center"><button class="login">Log in</button></div>
          <a class="center" href="https://www.instagram.com/accounts/password/reset/">
            <h4>Forgot Password ?</h4>
          </a>
        </div></div>
      <div class="center">
        <div class="box">
          <h4 class="center">Don't have account?<a href="https://www.instagram.com/accounts/emailsignup/"> Sign up</a>
          </h4>
        </div></div>
      <h3 class="center">Get the app</h3>
        <div class="center">
        <button>Get it on<a
          href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D75F4C0DE-1FEF-41CF-AC46-FBB375665245%26utm_content%3Dlo%26utm_medium%3Dbadge&pli=1">
          <div>Google play</div>
        </a></button></div>
    </div>

  );
}

export default App;
