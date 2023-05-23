<h2>Register</h2>

<form action="/cinetech/register" method="POST" class="registerForm">
    <input type="text" name="login" id="login" placeholder="Login" />
    <div class="errorLogin"></div>
    <input type="password" name="password" id="password" placeholder="Password" />
    <input type="password" name="passwordConf" id="passwordConf" placeholder="Confirm password" />
    <div class="errorPass"></div>
    <button type="submit">Register</button>
</form>