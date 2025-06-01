<script>
    import Champion from "$lib/Champion.svelte";
    let { data } = $props();
    let champions = data.Champions;
</script>

<h1>List of champions</h1>

<div class="container">
    <div class="row">
        {#each data.champions as champion}
            <div class="col">
                <Champion {champion} />
            </div>
        {/each}
    </div>
</div>

