<script lang="ts">
    import { randomColor } from "../../../utils/colors" 
    import HeaderMain from "./HeaderMain.svelte"
    import HeaderOptions from "./HeaderOptions.svelte"

    export let focusInput: boolean
    export let iGroups: number
    export let groups: any[]
    export let name: string

    let groupColor = randomColor()
</script>

<div class="group-header">
    <div class="sub-wrapper">
        <HeaderMain bind:groups bind:name {iGroups} {focusInput} {groupColor} />
    </div>

    <div class="sub-wrapper">
        <HeaderOptions bind:groups bind:groupColor {iGroups} />
    </div>
</div>

<style lang="scss">
    .group-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 260px;
        height: 28px;
        margin-bottom: 12px;

        .sub-wrapper {
            display: flex;
            align-items: center;
        }
    }
</style>