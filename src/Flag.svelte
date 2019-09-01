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

    let options = [answer, ...getUnique(Countries, 3)]
    shuffle(options)
</script>

<style>
    div {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    img, input.answer {
        border: 2px solid #efede6;
        width: 200px;
        margin: 2em;
    }
    .correct {
        color: green;
    }
    .incorrect {
        color: red;
    }
    .switch {
        position: absolute;
        right: 9em;
        bottom: 10em;
        display: inline-block;
        width: 40px;
        height: 20px;
    }
    .switch input[type="checkbox"] {
        display: none;
    }
    .switch input:checked + .knob {
        animation: colorChange 0.4s linear forwards;
    }
    .switch input:checked + .knob:before {
        animation: turnON 0.4s linear forwards;
    }
    @keyframes colorChange {
        from { background-color: #ccc; }
        50% { background-color: #A4D9AD; }
        to { background-color: #4BD663; }
    }
    @keyframes turnON {
        from { transform: translateX(0px); }
        to { transform: translateX(20.2px); }
    }
    .knob {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        border-radius: 20px;
    }
    .knob:before {
        position: absolute;
        background-color: white;
        content: "";
        left: 2px;
        top: 2px;
        width: 16px;
        height: 16px;
        border-radius: 50%;
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