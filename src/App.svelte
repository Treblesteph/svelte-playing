<script>
	import Flag from './Flag.svelte';
	export let name;
</script>

<style>
	h1 {
		color: purple;
		text-align: center;
	}
</style>

<h1>Hello {name}!</h1>
<Flag />