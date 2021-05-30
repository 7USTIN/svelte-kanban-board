<script lang="ts">
    import HeaderMain from "./HeaderMain.svelte"
    import HeaderOptions from "./HeaderOptions.svelte"

    export let focusInput: boolean
    export let iGroups: number
    export let groups: any[]
    export let name: string
</script>

<div class="group-header">
    <div class="sub-wrapper">
        <HeaderMain bind:groups bind:name {iGroups} {focusInput} />
    </div>

    <div class="sub-wrapper">
        <HeaderOptions bind:groups {iGroups} />
    </div>
</div>

<style lang="scss">
    .group-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 260px;
        height: 28px;
        margin-bottom: 16px;

        .sub-wrapper {
            display: flex;
            align-items: center;
        }
    }
</style>