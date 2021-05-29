<script lang="ts">
    let title = "Svelte Kanban board"
</script>

<svelte:head>
    <title>{title ? title : "Untitled"}</title>
</svelte:head>

<header>
    <input 
        type="text" 
        aria-label={title ? title : "Untitled"} 
        placeholder="Untitled" 
        bind:value={title} 
        autocomplete="false"
        spellcheck="false"
    />
</header>

<style lang="scss">
    header {
        input {
            caret-color: rgb(55, 53, 47);
            border: none;
            font-size: 40px;
            font-weight: 700;
            line-height: 1.2;

            &::placeholder {
                color: rgba(55, 53, 47, 0.25);
            }
        }
    }
</style>