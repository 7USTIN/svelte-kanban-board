<script lang="ts">
    import { generateId } from "../../../utils/groupsData"
    import { createEventDispatcher } from "svelte"

    export let groups: any[]
    export let iGroup: number
    
    const disptach = createEventDispatcher()

    const addItem = () => {
        window.getSelection().removeAllRanges()
        groups[iGroup].items = [
            ...groups[iGroup].items, 
            { id: generateId(groups), title: "", text: "" }
        ]
        disptach("renameItem", {id: groups[iGroup].items[groups[iGroup].items.length - 1].id})
    }
</script>

<button on:click={addItem}>
    <i class="material-icons">add</i> 
    New
</button>

<style lang="scss">
    button {
        border: none;
        background: none;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        white-space: nowrap;
        height: 32px;
        border-radius: 3px;
        font-size: 14px;
        padding: 0 8px 0 6px;
        color: rgba(55, 53, 47, 0.5);
        width: 100%;

        i {
            font-size: 22px;
            margin-right: 2px;
        }

        &:hover {
            background: rgba(55, 53, 47, 0.1)
        }
    }
</style>