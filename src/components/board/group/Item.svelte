<script lang="ts">
    import ItemOptions from "./ItemOptions.svelte"

    export let title: string
    export let text: string
    export let id: number
    export let iItem: number
    export let groups: any[]
    export let iGroup: number
    export let focusItem: {focus: boolean, id: number}
    export let handleRenameItem: (e) => void

    let unfocusable = false
    let inputEl: HTMLElement

    $: if(focusItem.focus && inputEl && focusItem.id === id) {
        inputEl.focus()
        document.execCommand('selectAll', false, null);
        focusItem.focus = false
    }

    $: if(document.activeElement.className !== "item-title") {
        unfocusable = true
    }
</script>

<div class="item-wrapper">
    <div 
        class="item-title"
        class:unfocusable
        contenteditable="true"
        bind:this={inputEl}
        bind:innerHTML={title}
        placeholder="Untitled"
        spellcheck="false"
    />
    <div class="more-wrapper">
        <ItemOptions bind:groups {iGroup} {id} {iItem} on:renameItem={handleRenameItem}/>
    </div>
</div>

<style lang="scss">
    .item-wrapper {
        margin-bottom: 8px;
        padding: 8px 10px 10px;
        display: block;
        box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px;
        border-radius: 3px;
        background: white;
        user-select: none;
        min-height: 40px;
        cursor: pointer;
        position: relative;
        transition: background 20ms ease-out 0s;

        &:hover {
            background: rgba(55, 53, 47, 0.05);
        }

        &:hover .more-wrapper {
            opacity: 1;
            visibility: visible;
        }

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

        .more-wrapper {
            opacity: 0;
            visibility: hidden;
            position: absolute;
            top: 8px;
            right: 8px;
            transition: 200ms;

            @media screen and (max-width: 800px) {
                opacity: 1;
                visibility: visible;
            }
        }
    }
</style>