<script lang="ts">
    export let groups: any[]
    export let name: string
    export let iGroups: number
    export let focusInput: boolean
    export let groupColor: string

    const focusEl = node => {
        if(focusInput && iGroups + 1 === groups.length) {
            node.focus()
            document.execCommand('selectAll', false, null);
        }
    }
</script>

<button class="name-wrapper">
    <div 
        on:click={() => document.execCommand('selectAll', false, null)}
        style={`background: #${groupColor};`} 
        contenteditable="true" 
        placeholder="New Group" 
        bind:innerHTML={name} 
        use:focusEl 
        spellcheck="false"  
    />
</button>
<div class="item-counter">
    {groups[iGroups] ? groups[iGroups].items.length : "0"}
</div>

<style lang="scss">
    .name-wrapper {
        user-select: none;
        cursor: pointer;
        overflow: hidden;
        padding: 4px;
        border-radius: 3px;
        width: fit-content;
        border: none;
        background: none;

        &:hover {
            background: rgba(55, 53, 47, 0.1);
        }

        &:focus-within:hover {
            background: none;
            cursor: text;
        }

        div {
            border-radius: 3px;
            padding: 1px 6px;
            font-size: 15px;
            color: rgb(55, 53, 47);
            text-align: left;
            line-height: 120%;

            &:empty::before {
                content: attr(placeholder);
                color: rgba(55, 53, 47, 0.4);
            }

            &:focus {
                background: transparent;
                padding: 6px 7px;
                width: 150px;
                box-shadow: rgba(15, 15, 15, 0.1) 0 0 0 1px inset;
                background: rgba(242, 241, 238, 0.4) !important;
            }
        }
    }

    .item-counter {
        user-select: none;
        padding: 1px 6px;
        margin-left: 5px;
        border-radius: 3px;
        font-size: 15px;
        color: rgba(55, 53, 47, 0.75);
        font-weight: 500;
        background: rgba(55, 53, 47, 0.08);
    }
</style>