<script>
    import { Countries } from './Countries.js';
    import { getUnique, shuffle, stripString } from './Utils.js';

    const indexOfAnswer = Math.floor(Math.random()*Countries.length);
    const answer = Countries[indexOfAnswer];
    const country = stripString(answer)
    let guess;
    let difficult = false;
    Countries.splice(indexOfAnswer, 1)

    let options = [answer, ...getUnique(Countries, 3)]
    shuffle(options)
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