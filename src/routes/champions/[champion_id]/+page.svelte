<script>
    let {data} = $props();
</script>

<a href="/champions">Back to Champions List</a>
<h1>Champion Details</h1>

<table>
  <tbody>
    <tr>
      <td><strong>id:</strong></td>
      <td>{data.id}</td>
    </tr>
    <tr>
      <td><strong>Name:</strong></td>
      <td>{data.name}</td>
    </tr>
    <tr>
      <td><strong>Title:</strong></td>
      <td>{data.title}</td>
    </tr>
    <tr>
      <td><strong>Lore:</strong></td>
      <td>{data.blurb}</td>
    </tr>
    <tr>
      <td><strong>Attack:</strong></td>
      <td>{data.info.attack}</td>
    </tr>
    <tr>
      <td><strong>Defense:</strong></td>
      <td>{data.info.defense}</td>
    </tr>
    <tr>
      <td><strong>Magic:</strong></td>
      <td>{data.info.magic}</td>
    </tr>
    <tr>
      <td><strong>Difficulty:</strong></td>
      <td>{data.info.difficulty}</td>
    </tr>
   
  </tbody>
</table>
<img class="img" src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${data.i}_0.jpg`} alt={data.name} />

<style>
    .img {
        width: 70%;
        height: auto;
    }
</style>