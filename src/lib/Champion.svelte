<script>
    let { champion } = $props();
    let { _id, name, title, tags, blurb, info, key } = champion ?? {};
</script>

<div class="card">
    <img
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
        alt={champion.name}
    />
    <h3><a href={`/champions/${champion._id}`}>{champion.name}</a></h3>
    <h5>{title}</h5>
    <h6>{tags}</h6>
</div>

<style>
    .card {
        height: 250px;
        width: 400px;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        margin: 10px;
        width: 200px;
        background-color: rgb(64, 81, 100);
    }
    .card h3 {
        margin: 5px 0;
        color: deepskyblue;
    }
    .card h5 {
        margin: 5px 0;
        color: rgb(90, 167, 218);
    }
    .card h6 {
        margin: 5px 0;
        color: gray;
    }
    .card img {
        width: 100%;
        height: 100px;
        border-radius: 5px;
    }
</style>
