<script>
  let { form } = $props();
</script>

<a href="/favourites" class="back-link">← Back</a>

<h1 class="form-title">Add a new Player</h1>

<form method="POST" action="?/create" class="player-form">
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" id="name" name="name" required />
  </div>

  <div class="form-group">
    <label for="real_name">Real Name</label>
    <input type="text" id="real_name" name="real_name" required />
  </div>

  <div class="form-group">
    <label for="country">Country</label>
    <input type="text" id="country" name="country" required />
  </div>

  <div class="form-group">
    <label for="age">Age</label>
    <input type="number" id="age" name="age" required />
  </div>

  <button type="submit" class="btn">Add Player</button>
</form>

{#if form?.success}
  <p class="alert success">Player added successfully!</p>
{:else if form?.error}
  <p class="alert error">Error adding player: {form.error}</p>
{/if}

<style>
  .form-title {
    color: #015a82;
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  .back-link {
    display: inline-block;
    margin-bottom: 1rem;
    color: #0077cc;
    text-decoration: none;
  }

  .player-form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    gap: 1rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
  }

  label {
    font-weight: bold;
    margin-bottom: 0.4rem;
  }

  input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
  }

  .btn {
    padding: 0.6rem 1.2rem;
    background-color: #0077ff;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .btn:hover {
    background-color: #005fcc;
  }

  .alert {
    margin-top: 1.5rem;
    padding: 1rem;
    border-radius: 6px;
    font-weight: bold;
    max-width: 400px;
  }

  .alert.success {
    background-color: #d1f5d3;
    color: #155724;
    border: 1px solid #a3e6a5;
  }

  .alert.error {
    background-color: #ffe0e0;
    color: #721c24;
    border: 1px solid #f5c6cb;
  }
</style>