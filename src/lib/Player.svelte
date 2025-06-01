<script>
  let { player } = $props();
  let { _id, name, real_name, country, age } = player ?? {};
</script>

<li class="player-item">
  <h2><a href={`/favourites/${player._id}`}>{player.name}</a></h2>
  <span>({real_name}) - {country} - {age}</span>



</li>

<style>
  .player-item {
    margin: 8px 0;
    font-size: 1rem;
    list-style: none;
    border-bottom: 1px solid #444;
    padding-bottom: 5px;
  }
</style>
