<script lang="ts">
    export let showModal: boolean

    const closeModal = () => showModal = false
</script>

<section on:click|self={closeModal}>
    <div class="modal">
        <i class="material-icons" on:click={closeModal}>close</i>
        Lorem Ipsum
    </div>
</section>

<style lang="scss">
    section {
        position: fixed; 
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.4);
        cursor: default !important;
        z-index: 999;

        .modal {
            position: absolute;
            margin: 0 auto;
            max-width: 977px;
            border-radius: 3px;
            background: white;
            box-shadow: rgba(15, 15, 15, .05) 0px 0px 0px 1px, rgba(15, 15, 15, .1) 0px 5px 10px, rgba(15, 15, 15, .2) 0px 15px 40px;
            top: 72px;
            left: 72px;
            right: 72px;
            height: calc(100% - 144px);
        }
    }
</style>