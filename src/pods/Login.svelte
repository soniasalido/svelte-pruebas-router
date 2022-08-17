<script>
    import { user, isLoggedIn } from '../core/stores/user.ts'
    import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
    import { navigate } from "svelte-routing";
    import { auth, provider } from '../core/Authentication/firebase.js';


    // Acceso mediante Google
    const login = async () => {
        try {
            // [START auth_google_signin_popup_modular]
            signInWithPopup(auth, provider)
                .then((result) => {
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    const credential = GoogleAuthProvider.credentialFromResult(result);
                    const token = credential.accessToken;
                    // The signed-in user info.
                    const $user = result.user;
                    console.log($user);
                    console.log(token);
                    // ...
                }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
            // [END auth_google_signin_popup_modular]
            $isLoggedIn = true;

        } catch (error) {
            console.error(error);
        }

        navigate('members', { replace: true });
        console.log($isLoggedIn);
    };

    // Acceso mediando correo y contraseña
    let email = '';
    let password = '';
    const handleClick = () => {
        if(!email.trim() || !password.trim()){
            alert("Por favor, ingrese su nombre de usuario y contraseña");
            return
        }

        user.setUser({
            email: email,
            password: password
        });

        navigate('members', { replace: true });
    }

</script>

<div>
    <h1>Login</h1>
    <form>
        <input
                type="email"
                placeholder="Email"
                bind:value={email}
        >
        <input
                type="password"
                placeholder="Password"
                bind:value={password}
        >
        <button on:click={ handleClick }>Acceder</button>
        <button on:click={ login }>Acceder con Google</button>
    </form>
</div>