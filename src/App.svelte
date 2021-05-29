<script lang="ts">
	import Header from "./components/Header.svelte"
</script>

<main>
	<Header />
</main>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');

	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		outline: none;

		&:focus {
			outline: none;
		}
	}

	:global(body) {
		background: white;
		font-family: "Open Sans", sans-serif;
		color: rgb(55, 53, 47);
	}

	:global(input) {
		font-family: "Open Sans", sans-serif;
		color: rgb(55, 53, 47);
		white-space: pre-wrap;
		word-break: break-word;
		text-overflow: ellipsis;
	}

	main {
		padding: 100px 150px;
	}
</style>