<script lang="ts">
    export let title: string
    export let text: string
    export let id: number
    export let groups: any[]
    export let iGroups: number
    export let focusItem: boolean

    let unfocusable = false

    const focusEl = node => {
        if(focusItem) {
            node.focus()
            unfocusable = false
            focusItem = false
        }

        if(document.activeElement.className !== "item-title") {
            unfocusable = true
        }
    }
</script>

<div class="item-wrapper" on:click={() => console.log("d")}>
    <div 
        class="item-title"
        class:unfocusable
        contenteditable="true"
        bind:innerHTML={title}
        use:focusEl
        placeholder="Untitled"
        spellcheck="false"
    />
</div>

<style lang="scss">
    .item-wrapper {
        margin-bottom: 8px;
        padding: 8px 10px 10px;
        display: block;
        box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px;
        border-radius: 3px;
        background: white;
        overflow: hidden;
        user-select: none;
        min-height: 40px;
        cursor: pointer;

        .item-title {
            white-space: pre-wrap;
            word-break: break-word;
            color: rgb(55, 53, 47);
            caret-color: rgb(55, 53, 47);
            font-size: 14px;
            line-height: 1.5;
            min-height: 1em;
            font-weight: 600;

            &:empty::before {
                content: attr(placeholder);
                color: rgba(55, 53, 47, 0.45);
            }
        }

        .unfocusable {
            pointer-events: none;
        }
    }
</style>