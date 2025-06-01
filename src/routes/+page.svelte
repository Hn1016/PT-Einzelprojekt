<script>
    let { data } = $props();
    let champions = data.Champions;

    let searchType = $state("");
    let searchDifficulty = $state("");
    let selectedChampion = $state(null);

    function handleSearch(e) {
        e.preventDefault();

        const filtered = champions.filter(
            (c) =>
                c.tags.some(
                    (tag) =>
                        tag.toLowerCase().trim() ===
                        searchType.toLowerCase().trim(),
                ) && Number(c.info.difficulty) === Number(searchDifficulty),
        );

        selectedChampion = filtered;
    }
</script>

<h1>Champion Finder</h1>

<form onsubmit={handleSearch}>
    <div class="form-group">
        <label class="form-lable" for="searchType">Type:</label>
        <input
            type="text"
            class="form-control"
            placeholder="fighter, mage, support, tank, marksman, or assassin"
            bind:value={searchType}
        />
    </div>

    <div class="form-group">
        <label class="form-lable" for="searchDifficulty">Difficulty:</label>
        <input
            type="number"
            class="form-control"
            placeholder="1–10"
            bind:value={searchDifficulty}
        />
    </div>

    <button type="submit" class="btn btn-primary mt-2"
        >Find Random Champion</button
    >
</form>

{#if selectedChampion}
    <h2>Matching Champions:</h2>
    <ul>
        {#each selectedChampion as champ}
            <li>
                <h3>{champ.name}</h3>
                <p>{champ.title}</p>
            </li>
        {/each}
    </ul>
{:else if searchType || searchDifficulty}
    <p>No matching champions found.</p>
{/if}

<h1>Cinema Collection</h1>

<div class="videos">
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/I76wvt0aEE4"
    title="Champion Video 1"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>

  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/ZHhqwBwmRkI"
    title="Champion Video 2"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>

  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/aR-KAldshAE"
    title="Champion Video 3"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>

  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/zF5Ddo9JdpY"
    title="Champion Video 4"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>

<style>
  .videos {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .videos iframe {
    max-width: 100%;
    border-radius: 8px;
  }
</style>