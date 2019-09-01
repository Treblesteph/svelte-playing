<script>
    import { stripString } from './Utils.js';

    export let correctanswer;
    export let guessanswer;
    export let handleClick;

    $: correct = stripString(guessanswer) === stripString(correctanswer);
</script>

<style>
    .correct {
        color: green;
    }
    .incorrect {
        color: red;
    }
</style>

<p>You have guessed {guessanswer}...</p>
{#if correct}
    <p class='correct'>✅ that is correct!</p>
    <button value='next' on:click={handleClick}>Next Flag</button>
{:else}
    <p class='incorrect'>❌ that is incorrect try again!</p>
{/if}