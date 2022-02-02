<script>
	import Navbar from '../components/Navbar.svelte';
</script>

<div class="p-b max-w-6xl mx-auto">
	<Navbar />
	<slot></slot>
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
