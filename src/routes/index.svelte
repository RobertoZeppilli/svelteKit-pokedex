<script>
	import { pokemon } from '../stores/pokestore';

	// console.log($pokemon);
</script>

<svelte:head>
	<title>Pokedex</title>
</svelte:head>

<h1>SvelteKit Pokedex</h1>

{#each $pokemon as poke (poke.id)}
    <p>{poke.name}</p>
{/each}
