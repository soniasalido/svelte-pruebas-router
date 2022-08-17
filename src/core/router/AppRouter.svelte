<script>
    import { Router, Route } from "svelte-routing";
    import Home from '../../pods/Home.svelte'
    import Login from '../../pods/Login.svelte'
    import About from '../../pods/About.svelte'
    import Members from "../../pods/Members.svelte";
    import NavBar from "./NavBar.svelte";
</script>

<div>
    <Router>
        <NavBar />

        <Route path="/">
            <Home />
        </Route>

        <Route path="/login">
            <Login />
        </Route>

        <Route path="/about">
            <About />
        </Route>

        <Route path="/members">
            <Members />
        </Route>
    </Router>
</div>


