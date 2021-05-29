<script lang="ts">
    import { groupsData } from "../../utils/groupsData"
    import Group from "./Group.svelte"
    import AddGroup from "./AddGroup.svelte"

    let groups = groupsData
    let focusInput = false
</script>

<section>
    {#each groups as {name, items}, iGroups (iGroups)}
        <Group bind:groups bind:focusInput {name} {items} {iGroups} />
    {/each}

    <AddGroup bind:groups on:addedGroup={() => focusInput = true} />
</section>

<style lang="scss">
    section {
        display: flex;
    }
</style>