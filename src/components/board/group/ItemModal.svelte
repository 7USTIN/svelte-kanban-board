<script lang="ts">
    export let showModal: boolean
    export let title: string
    export let groups: any[]
    export let iGroup: number
    export let iItem: number

    let titleEl: HTMLElement
    let showGroupsList = false

    const closeModal = () => showModal = false

    $: if(titleEl) {
        if(title) {
            const range = document.createRange()
            const sel = window.getSelection()
            range.setStart(titleEl.childNodes[0], title.length)
            sel.removeAllRanges()
            sel.addRange(range)
        }
        titleEl.focus()
    }

    const closeGroupsList = () => showGroupsList = false
    const openGroupsList = () => showGroupsList = true

    const changeGroup = (idx: number) => {
        let item = groups[iGroup].items.splice(iItem, 1)
        groups[idx].items = [...item, ...groups[idx].items]
        groups = groups
    }
</script>

<section on:click|self={closeModal}>
    <div class="modal">
        <div class="close">
            <i class="material-icons" on:click={closeModal}>close</i>
        </div>

        <div class="content-wrapper">
            <div
                class="item-title"
                contenteditable="true"
                bind:this={titleEl}
                bind:innerHTML={title}
                placeholder="Untitled"
                spellcheck="false"
            />

            <div class="property-wrapper">
                <div class="property-name">
                    <i class="material-icons">subject</i>
                    <div>Group</div>
                </div>

                <div 
                    class="property-groups" 
                    style={showGroupsList && "background: rgba(242, 241, 238, 0.6);"}
                    on:click|self={openGroupsList}
                >
                    <div class="groups-name" style={`background: #${groups[iGroup].color}`} on:click={openGroupsList}>
                        {groups[iGroup].name}
                    </div>
                    {#if showGroupsList}
                        <div class="invisible" on:click={closeGroupsList} />
                        <div class="groups-list-wrapper" on:click|self={closeGroupsList}>
                            <div class="groups-list">
                                <p>Select an option</p>
                                {#each groups as { name }, iList (iList)}
                                    <div class="name-wrapper" on:click={() => changeGroup(iList)}>
                                        <div class="name" style={`background: #${groups[iList].color}`}>{name}</div>
                                    </div>
                                {/each}
                            </div>
                        </div>
                     {/if}
                </div>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    section {
        position: fixed; 
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.4);
        cursor: pointer !important;
        z-index: 999;

        .modal {
            display: flex;
            flex-direction: column;
            position: absolute;
            margin: 0 auto;
            max-width: 977px;
            border-radius: 3px;
            background: white;
            box-shadow: rgba(15, 15, 15, .05) 0px 0px 0px 1px, rgba(15, 15, 15, .1) 0px 5px 10px, rgba(15, 15, 15, .2) 0px 15px 40px;
            top: 72px;
            left: 72px;
            right: 72px;
            bottom: 72px;
            height: calc(100% - 144px);
            overflow: auto;
            cursor: default;

            @media screen and (max-width: 425px) {
                top: 24px;
                left: 24px;
                right: 24px;
                bottom: 24px;
            }

            .close {
                position: relative;
                width: 100%;
                top: 0;
                right: 0;
                height: 45px;
                display: flex;
                align-items: center;

                i { 
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    right: 10px;
                    margin-left: auto;
                    user-select: none;
                    padding: 2px;
                    border-radius: 3px;
                    cursor: pointer;

                    &:hover {
                        background: rgba(55, 53, 47, 0.08);
                    }
                }
            }

            .content-wrapper {
                padding: 60px 12.5% 0;
                width: 100%;
                display: flex;
                flex-direction: column;

                .item-title {
                    white-space: pre-wrap;
                    word-break: break-word;
                    color: rgb(55, 53, 47);
                    caret-color: rgb(55, 53, 47);
                    font-size: 14px;
                    line-height: 1.2;
                    min-height: 1em;
                    padding: 3px 2px;
                    font-weight: 700;
                    font-size: 40px;
                    cursor: text;

                    &:empty::before {
                        content: attr(placeholder);
                        color: rgba(55, 53, 47, 0.45);
                    }
                }

                .property-wrapper {
                    display: flex;
                    padding: 8px 0 4px 0;

                    .property-name {
                        display: flex;
                        align-items: center;
                        height: 32px;
                        width: 160px;
                        color: rgba(55, 53, 47, 0.6);
                        user-select: none;
                        border-radius: 3px;
                        margin: 0px 6px;
                        font-size: 15px;

                        i {
                            padding-right: 8px;
                        }
                    }

                    .property-groups {
                        position: relative;
                        user-select: none;
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                        border-radius: 3px;
                        width: 100%;
                        min-height: 34px;
                        padding: 0px 8px;

                        &:hover {
                            background: rgba(55, 53, 47, 0.08);
                        }
    
                        .groups-name {
                            border-radius: 3px;
                            height: 20px;
                            padding: 0 6px;
                            font-size: 15px;
                            color: #37352f;
                            text-align: left;
                            line-height: 120%;
                            z-index: 1000;
                        }

                        .invisible {
                            position: fixed;
                            top: 0;
                            left: 0;
                            z-index: 100;
                            width: 100vw;
                            height: 100vw;
                            background: transparent;
                            cursor: initial;
                        }

                        .groups-list-wrapper {
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: auto;
                            min-height: 34px;
                            max-height: 70vh;
                            border-top-left-radius: 3px;
                            border-top-right-radius: 3px;
                            box-shadow: rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 3px 6px, rgba(15, 15, 15, 0.2) 0px 9px 24px;
                            z-index: 1100;
                            cursor: pointer;

                            .groups-list {
                                background: white;
                                position: absolute;
                                top: 34px;
                                width: 100%;
                                display: flex;
                                flex-direction: column;
                                box-shadow: rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 3px 6px, rgba(15, 15, 15, 0.2) 0px 9px 24px;
                                padding: 6px 0;
                                border-bottom-left-radius: 3px;
                                border-bottom-right-radius: 3px;
                            
                                p {
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    padding:  6px 14px 8px;
                                    color: rgba(55, 53, 47, 0.6);
                                    font-size: 13px;
                                    font-weight: 600;
                                    line-height: 120%;
                                    user-select: none;
                                    cursor: initial;
                                }

                                .name-wrapper {
                                    cursor: pointer;
                                    width: 100%;
                                    min-height: 30px;
                                    line-height: 120%;
                                    display: flex;
                                    align-items: center;

                                    &:hover {
                                        background: rgba(55, 53, 47, 0.1)
                                    }

                                    .name {
                                        width: fit-content;
                                        border-radius: 3px;
                                        height: 20px;
                                        padding: 0 6px;
                                        font-size: 15px;
                                        color: #37352f;
                                        text-align: left;
                                        line-height: 120%;
                                        margin: 0 14px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    ::-webkit-scrollbar {
        background: transparent;
    }

    ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background: #D3D1CB;
    }

    ::-webkit-scrollbar-track {
        background: #EDECE9;
    }
</style>