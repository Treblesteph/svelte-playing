<script>
    import { Countries } from './Countries.js';
    import { onMount } from "svelte";
    import { chooseProjection, getData } from './mapTools.js';
    import { stripString } from './Utils.js';

    export let answer;
    export let code;

    let data = [];
    let continentData = [];
    let continents = ['africa', 'asia', 'europe', 'northamerica', 'oceania', 'southamerica'];
    
    let continent;
    let projection;
    $: country = stripString(answer)
    console.log('this country:', `${stripString(answer)}/${code}`)

    onMount(async function() {

        const getAsync = async item => {
            return await getData(item)
        }

        const joinData = async () => {
            return await Promise.all(continents.map(item => getAsync(item)))
        }

        data = await joinData()
        console.log('country shapes:', data)
        
        const contIndex = data.findIndex(row => row.find(c => c.id === code));
        continent = continents[contIndex]

        continentData = data[contIndex]
        console.log(continentData)

        console.log('continent:', continent)
    });
        
    $: projection = chooseProjection(continent);
</script>

<svg width={ 800 } height={ 500 } viewBox="0 0 800 600">
    <g className="countries">
        {#each continentData as dat}
                {console.log(dat)}
            <path
                d={projection(dat)}
                stroke={'white'}
                fill={dat.id === code ? 'tomato' : 'teal'}
                strokeWidth={1}
            />
        {/each}
    </g>
</svg>