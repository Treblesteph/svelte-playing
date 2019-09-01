<script>
    import { Countries } from './Countries.js';
    import { getUnique, shuffle } from './Utils.js';
    import Answer from './Answer.svelte';
    import Percent from './Percent.svelte';
    import Question from './Question.svelte';
    import Toggle from './Toggle.svelte';

    let difficult;
    let percent = 40;
    let guess;
    let answer;
    let options;

    const nextFlag = () => {
        console.log('next')
        const countries = [...Countries];
        const indexOfAnswer = Math.floor(Math.random()*countries.length);
        answer = countries[indexOfAnswer];
        let answercorrect;
        countries.splice(indexOfAnswer, 1)
        options = [answer, ...getUnique(countries, 3)]
        shuffle(options)
        guess = undefined;
    }
    nextFlag()
</script>

<style>
    div {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
</style>

<div>
    <img src='https://raw.githubusercontent.com/Treblesteph/svelte-playing/master/src/flags/{country}.png' alt='flag of {country}'/>
    <!-- <input class='answer' bind:value={answer} /> -->
    <form>
        {#if !difficult}
            {#each options as option}
                <label>
                    <input type=radio bind:group={guess} value={option} />
                    {option}
                </label>
            {/each}
        {:else}
            <input class='answer' placeholder='enter your guess' bind:value={guess}/>
        {/if}
    </form>
    {#if guess}
        <p>You have guessed {guess}...</p>
        {#if stripString(guess) === stripString(answer)}
            <p class='correct'>✅ that is correct!</p>
            <button value="Next Flag" onClick="window.location.reload();">Next Flag</button>
        {:else}
            <p class='incorrect'>❌ that is incorrect try again!</p>
        {/if}
    {:else}
        <label class="switch"> 
            <input type=checkbox bind:checked={difficult} />
            <span class="knob"></span>
            <br>
            <p>toggle impossible mode</p>
        </label>
    {/if}
</div>