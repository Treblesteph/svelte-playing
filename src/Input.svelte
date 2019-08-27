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
        width: 200px;
    }
</style>

<div>
    <input bind:value={country} />
    <img src='https://raw.githubusercontent.com/Treblesteph/svelte-playing/master/src/flags/{country}.png' alt='flag of {country}'/>
</div>