<script>
    let country = 'uganda';
</script>

<style>
    div {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    img, input {
        border: 2px solid #efede6;
        width: 200px;
    }
</style>

<div>
    <input bind:value={country} />
    <img src='https://raw.githubusercontent.com/Treblesteph/svelte-playing/master/src/flags/{country.toLowerCase().split(" ").join("")}.png' alt='flag of {country}'/>
</div>