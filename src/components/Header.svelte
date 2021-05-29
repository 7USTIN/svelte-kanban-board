<script lang="ts">
    let title = "Svelte Kanban board"
</script>

<svelte:head>
    <title>{title ? title : "Untitled"}</title>
</svelte:head>

<header>
    <div 
        contenteditable="true" 
        placeholder="Untitled" 
        bind:innerHTML={title} 
        spellcheck="false"
    />
</header>

<style lang="scss">
    header {
        margin-bottom: 32px;

        div {
            caret-color: rgb(55, 53, 47);
            border: none;
            font-size: 40px;
            font-weight: 700;
            line-height: 1.2;
            word-break: break-all;

            &:empty::before {
                content: attr(placeholder);
                color: rgba(55, 53, 47, 0.25);
            }
        }
    }
</style>