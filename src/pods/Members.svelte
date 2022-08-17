<script lang="ts">
    import { user } from "../core/stores/user";
    import { onMount } from "svelte";
    import { navigate } from "svelte-routing";

    onMount(() => {
        if (!$user.email) {
            navigate("/login", { replace: true });
        }
    });
</script>

<main>
    <h1>Members</h1>

    {#if $user}
        <p>You are logged in as <strong>{$user.email}</strong>.</p>
    {/if}
</main>