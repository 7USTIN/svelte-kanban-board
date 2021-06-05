<script lang="ts">
	import Header from "./components/Header.svelte"
	import Board from "./components/board/Board.svelte"
</script>

<main>
	<Header />
	<Board />
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
		padding: 100px 0;
	}

	main {
		margin: auto;
		padding: 0 5vw;
		width: fit-content;
		min-width: 95vw;
	}

	:global(::-webkit-scrollbar) {
        background: transparent;
    }

    :global(::-webkit-scrollbar) {
        width: 10px;
        height: 10px;
    }

    :global(::-webkit-scrollbar-thumb) {
        background: #D3D1CB;
    }

    :global(::-webkit-scrollbar-track) {
        background: #EDECE9;
    }
</style>