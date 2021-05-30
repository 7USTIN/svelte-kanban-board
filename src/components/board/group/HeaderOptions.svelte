<script lang="ts">
    import { addItem } from "../../../utils/groupsData" 

    export let groups: any[]
    export let iGroups: number
</script>

<div>
    <i class="options material-icons">more_horiz</i>
</div>
<div on:click={() => groups[iGroups].items = addItem(groups, iGroups)}>
    <i class="options material-icons">add</i>
</div>

<style lang="scss">
    .options {
        user-select: none;
        padding: 2px;
        border-radius: 3px;
        font-size: 20px;
        color: rgba(55, 53, 47, 0.75);
        background: none;
        cursor: pointer;

        &:hover {
            background: rgba(55, 53, 47, 0.08);
        }
    }
</style>