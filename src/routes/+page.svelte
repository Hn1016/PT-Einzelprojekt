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

<h1>Cinematic Collection</h1>

<div class="container video-grid">
  <div class="row g-4">
    <div class="col-md-6">
      <iframe
        class="video-frame w-100"
        height="315"
        src="https://www.youtube.com/embed/I76wvt0aEE4"
        title="Season 2025"
        frameborder="0"
        allowfullscreen
      ></iframe>
      <div class="video-title">Champion Video 1</div>
    </div>

    <div class="col-md-6">
      <iframe
        class="video-frame w-100"
        height="315"
        src="https://www.youtube.com/embed/ZHhqwBwmRkI"
        title="Season 2024"
        frameborder="0"
        allowfullscreen
      ></iframe>
      <div class="video-title">Champion Video 2</div>
    </div>

    <div class="col-md-6">
      <iframe
        class="video-frame w-100"
        height="315"
        src="https://www.youtube.com/embed/aR-KAldshAE"
        title="Season 2020"
        frameborder="0"
        allowfullscreen
      ></iframe>
      <div class="video-title">Champion Video 3</div>
    </div>

    <div class="col-md-6">
      <iframe
        class="video-frame w-100"
        height="315"
        src="https://www.youtube.com/embed/zF5Ddo9JdpY"
        title="Season 2019"
        frameborder="0"
        allowfullscreen
      ></iframe>
      <div class="video-title">Champion Video 4</div>
    </div>
  </div>
</div>

<style>
  .video-grid {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .video-frame {
    border-radius: 10px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    transition: transform 0.2s ease;
  }

  .video-frame:hover {
    transform: scale(1.03);
  }

  .video-title {
    text-align: center;
    margin-top: 0.5rem;
    font-weight: 600;
    color: #fff;
  }

  
</style>