<script context="module">
	export async function load() {
		const url = 'https://pokeapi.co/api/v2/pokemon?limit=150';

		const res = await fetch(url);
		const data = await res.json();
		const loadedPokemon = data.results.map((data, index) => {
			return {
				id: index + 1,
				name: data.name,
				image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
					index + 1
				}.png`
			};
		});

		return {
			props: {
				pokemon: loadedPokemon
			}
		};
	}
</script>

<script>
	// import { pokemon } from '../stores/pokestore';
	import PokemonCard from '../components/PokemonCard.svelte';
	export let pokemon;
	// console.log($pokemon);
	let searchTerm = '';
	let filteredPokemon = [];

	$: {
		if (searchTerm) {
			filteredPokemon = pokemon.filter((poke) =>
				poke.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
			);
		} else {
			filteredPokemon = [...pokemon];
		}
	}
</script>

<svelte:head>
	<title>Pokedex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Svelte-Kit Pokedex</h1>

<input
	class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
	type="text"
	placeholder="Search Pokemon..."
	bind:value={searchTerm}
/>

<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
	{#each filteredPokemon as poke (poke.id)}
		<PokemonCard {poke} />
	{/each}
</div>
