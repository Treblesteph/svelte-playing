<script>
    import Map from './Map.svelte';
    import { stripString } from './Utils.js';
    
    export let code;
    export let gameType;
    export let answer;
    export let difficult;
    export let value = '';
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

{#if gameType === 'flag'}
    <img src='https://raw.githubusercontent.com/Treblesteph/svelte-playing/master/src/flags/{country}.png' alt='flag of {country}'/>
{:else if gameType === 'map'}
    <Map answer={answer} code={code} />
{/if}
<form on:submit={e => e.preventDefault()}>
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