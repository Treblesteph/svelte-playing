<script>
	import Game from './Game.svelte';
	export let name;
</script>

<style>
	h1 {
		color: purple;
		text-align: center;
	}
</style>

<h1>Which country?</h1>
<Game />