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

<div class="item-wrapper">
    <div 
        class="item-title"
        class:unfocusable
        contenteditable="true"
        bind:innerHTML={title}
        use:focusEl
        placeholder="Untitled"
        spellcheck="false"
    />
    <div class="more-wrapper">
        <i class="material-icons more-icon">more_horiz</i>
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
        overflow: hidden;
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

            .more-icon {
                background: white;
                border-radius: 3px;
                box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px;
                padding: 2px 3px;
                cursor: pointer;
                font-size: 20px;
                color: rgba(55, 53, 47, 0.6);

                &:hover {
                    background: rgb(239, 239, 238);
                }
            }
        }
    }
</style>