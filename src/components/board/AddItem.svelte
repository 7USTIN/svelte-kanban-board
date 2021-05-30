<script lang="ts">
    import { addItem } from "../../utils/groupsData"
    import { createEventDispatcher } from "svelte"

    export let groups: any[]
    export let iGroups: number
    
    const disptach = createEventDispatcher()

    const handleClick = () => {
        groups[iGroups].items = addItem(groups, iGroups)
        disptach("addedItem")
    }
</script>

<button on:click={handleClick}>
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