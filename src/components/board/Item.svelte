<script lang="ts">
    export let title: string
    export let text: string
    export let id: number
    export let groups: any[]
    export let iGroups: number
</script>

<div class="item-wrapper">
    {title}
</div>

<style lang="scss">
    .item-wrapper {
        margin-bottom: 8px;
    }
</style>