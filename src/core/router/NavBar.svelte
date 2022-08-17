<script lang="ts">
    import {Link, navigate} from "svelte-routing";
    import { user } from '../stores/user';

    const handleClick = () => {
        user.setUser({
            email: '',
            password: '',
        });

        navigate("/login", { replace: true });
    }
</script>

<nav>
    {#if $user.email}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/members">Members</Link>
        <button on:click={ handleClick }>Logout</button>
    {:else}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
    {/if}
</nav>