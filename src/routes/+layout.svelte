<script>
    import './styles.css';
    let { children } = $props()
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Home</a>

    <div class="collapse navbar-collapse">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="/champions">Champions</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="/favourites">Esport Players</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

<div class = "container">
    {@render children()}
</div>