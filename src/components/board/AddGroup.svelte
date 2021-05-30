<script lang="ts">
    import { createEventDispatcher } from "svelte"

    export let groups: any[]

    const dispatch = createEventDispatcher()

    const addGroup = () => {
        groups = [...groups, {name: `Group ${groups.length + 1}`, items: []}]
        dispatch("addedGroup")
    }
</script>

<button on:click={addGroup}>
    <i class="material-icons">add</i>
    <p>Add a group</p>
</button>

<style lang="scss">
    button {
        user-select: none;
        background: none;
        border: none;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        white-space: nowrap;
        border-radius: 3px;
        font-size: 14px;
        padding: 3px 8px 3px 3px;
        color: rgba(55, 53, 47, 0.5);
        height: 28px;

        i {
            font-size: 22px;
            margin-right: 2px;
        }

        &:hover {
            background: rgba(55, 53, 47, 0.1)
        }
    }
</style>