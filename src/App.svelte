<script lang="ts">

</script>

<main>
	<p>Hello World</p>
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
		font-family: "Open Sans", sans-serif;
		background: white;
		color: rgb(55, 53, 47);
	}
</style>