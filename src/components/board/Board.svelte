<script lang="ts">
    import { groupsData } from "../../utils/groupsData"
    import Group from "./group/Group.svelte"
    import AddGroup from "./AddGroup.svelte"

    let groups = groupsData
    let focusHeader = false
</script>

<section>
    {#each groups as {name, items}, iGroup (iGroup)}
        <Group bind:groups bind:focusHeader bind:items {name} {iGroup} />
    {/each}

    <AddGroup bind:groups on:addedGroup={() => focusHeader = true} />
</section>

<style lang="scss">
    section {
        display: flex;
    }
</style>