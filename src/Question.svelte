<script>
    import { stripString } from './Utils.js';
    
    export let answer;
    export let difficult;
    export let handleSubmit;
    export let value = undefined;
    export let options;

    $: country = stripString(answer)
</script>

<style>
    img, input.answer {
        border: 2px solid #efede6;
        width: 200px;
        margin: 2em;
    }
</style>

<img src='https://raw.githubusercontent.com/Treblesteph/svelte-playing/master/src/flags/{country}.png' alt='flag of {country}'/>
<form on:submit={handleSubmit}>
    {#if !difficult}
        {#each options as option}
            <label>
                <input type=radio bind:group={value} value={option} />
                {option}
            </label>
        {/each}
    {:else}
        <input class='answer' placeholder='enter your guess' bind:value={value}/>
    {/if}
</form>