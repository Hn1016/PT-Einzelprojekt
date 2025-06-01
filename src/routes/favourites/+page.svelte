<script>
    import Player from '$lib/Player.svelte';
    let { data } = $props();
    let players = data.players;
</script>

<h1>Your Favourite Esport Players</h1>

<a href="/favourites/create"> Add new Player </a>

<ul class="player-list">
    {#each players as player}
        <Player {player} />
    {/each}
</ul>



<p>{players.length} players loaded</p>

<style>
    .player-list {
        padding: 0;
        margin: 0;
        max-width: 600px;
    }
</style>