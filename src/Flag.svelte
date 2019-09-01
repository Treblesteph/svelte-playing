<script>
    import { Countries } from './Countries.js';
    import { getUnique, shuffle } from './Utils.js';
    import Answer from './Answer.svelte';
    import Percent from './Percent.svelte';
    import Question from './Question.svelte';
    import Toggle from './Toggle.svelte';

    let difficult;
    let correctcount = 5;
    let answeredcount = 10;
    let guess;
    let answer;
    let options;

    $: percent = answeredcount === 0 ? 0 : Math.round(100*correctcount/answeredcount)

    const nextFlag = () => {
        const countries = [...Countries];
        const indexOfAnswer = Math.floor(Math.random()*countries.length);
        answer = countries[indexOfAnswer];
        let answercorrect;
        countries.splice(indexOfAnswer, 1)
        options = [answer, ...getUnique(countries, 3)]
        shuffle(options)
        guess = '';
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
    <Question
        answer={answer}
        difficult={difficult}
        options={options}
        bind:value={guess}
    />
    
    {#if guess}
        <Answer
            correctanswer={answer}
            guessanswer={guess}
            handleClick={nextFlag}
        />
    {:else}
        <Toggle bind:difficulty={difficult}/>
    {/if}
    <!-- <Percent percent={percent} /> -->
</div>