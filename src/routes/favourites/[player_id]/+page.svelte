<script>
    let { data } = $props();
    let player = data.player;
</script>

<a href="/favourites" class="back-link">← Back to Favourites</a>
<h1>Update Player</h1>

<form method="POST" class="player-form">
  <input type="hidden" name="player_id" value={player._id} />

  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" id="name" name="name" value={player.name} required />
  </div>

  <div class="form-group">
    <label for="real_name">Real Name</label>
    <input type="text" id="real_name" name="real_name" value={player.real_name} required />
  </div>

  <div class="form-group">
    <label for="country">Country</label>
    <input type="text" id="country" name="country" value={player.country} required />
  </div>

  <div class="form-group">
    <label for="age">Age</label>
    <input type="number" id="age" name="age" value={player.age} required />
  </div>

  <div class="form-actions">
    <button type="submit" name="action" value="update" class="btn-primary">Update Player</button>
    <button type="submit" name="action" value="delete" class="btn btn-danger">Delete</button>
  </div>
</form>

{#if data.form?.success}
    Player updated successfully!
{/if}

<style>
    .back-link {
        display: inline-block;
        margin-bottom: 1rem;
        color: deepskyblue;
        text-decoration: none;
    }

    .player-form {
        max-width: 500px;
        background: #f9f9f9;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .form-group {
        margin-bottom: 1.5rem;
    }

    label {
        display: block;
        font-weight: 600;
        margin-bottom: 0.5rem;
        color: #222;
    }

    input[type="text"],
    input[type="number"] {
        width: 100%;
        padding: 0.6rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 1rem;
    }

    .btn-primary {
        background-color: deepskyblue;
        color: white;
        border: none;
        padding: 0.7rem 1.2rem;
        font-size: 1rem;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn-primary:hover {
        background-color: #00a0d1;
    }
</style>