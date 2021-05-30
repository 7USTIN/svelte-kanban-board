<script lang="ts">
    import { groupsData } from "../../utils/groupsData"
    import Group from "./Group.svelte"
    import AddGroup from "./AddGroup.svelte"

    let groups = groupsData
    let focusHeader = false
</script>

<section>
    {#each groups as {name, items}, iGroups (iGroups)}
        <Group bind:groups bind:focusHeader {name} {items} {iGroups} />
    {/each}

    <AddGroup bind:groups on:addedGroup={() => focusHeader = true} />
</section>

<style lang="scss">
    section {
        display: flex;
    }
</style>