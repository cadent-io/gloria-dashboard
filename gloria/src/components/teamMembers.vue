<template>
    <div class="create-bot">
        <h1>Add team members</h1>
        <form class="md-layout">
            <fieldset class="team-meambers">
                <md-field>
                    <md-input name="search" placeholder="Search for team members" autocomplete="given-name" v-model="form.search"
                        :disabled="sending" />
                    <md-button class="md-primary search" v-on:click="search(form.search)">Search</md-button>
                </md-field>
                <md-list v-if="this.searchResults">
                    <md-list-item v-for="item in searchResults">
                        <md-avatar>
                            <img :src="item.img" alt="People">
                        </md-avatar>
                        <span class="md-list-item-text">{{item.name}}</span>
                        <md-field>
                            <md-select v-model="item.role" name="role" id="role">
                                <md-option value="Admin">Admin</md-option>
                                <md-option value="Tester">Tester</md-option>
                            </md-select>
                        </md-field>
                        <md-button type="button" class="md-primary add" v-on:click="addMember(item)">ADD</md-button>
                    </md-list-item>

                </md-list>
                <md-list v-if="this.teamMembers">
                    <md-list-item v-for="item in teamMembers">
                        <md-avatar>
                            <img :src="item.img" alt="People">
                        </md-avatar>
                        <span class="md-list-item-text">{{item.name}}</span>
                        <md-field>
                            <!-- <md-select v-model="item.role" name="role" id="role" >
                <md-option value="Admin">Admin</md-option>
                <md-option value="Tester">Tester</md-option>
            </md-select> -->
                        </md-field>
                        <span class="md-list-item-text">{{item.role}}</span>
                        <!-- <md-button type="button" class="md-primary" v-on:click="addMember(item)">ADD</md-button> -->
                    </md-list-item>

                </md-list>
                <md-button type="button" class="md-primary add" v-on:click="save">Save</md-button>
            </fieldset>
        </form>
    </div>
</template>

<script>
    import {
        validationMixin
    } from 'vuelidate'

    export default {
        name: 'TeamMembers',
        data: () => ({
            form: {
                search: null,

            },
            userSaved: false,
            sending: false,
            lastUser: null,
            searchResults: [],
            teamMembers: []

        }),
        methods: {
            search(search) {
                console.log(search);
                //call to api
                this.searchResults = [{
                        name: 'Alex Nelson',
                        img: 'https://placeimg.com/40/40/people/1',
                        role: null,
                        status: 'active'
                    },
                    {
                        name: 'Nelson',
                        img: 'https://placeimg.com/40/40/people/2',
                        role: null,
                        status: 'offline'
                    },
                    {
                        name: 'Peter',
                        img: 'https://placeimg.com/40/40/people/3',
                        role: null,
                        status: 'offline'
                    },

                ]

            },
            addMember(item) {
                console.log(item)
                this.teamMembers.push(item)
                console.log(this.teamMembers)
            },
            save() {
                // call to api
                console.log(this.teamMembers);
            },
        }
    }
</script>

<style lang="scss" scoped>
    .md-progress-bar {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
    }

    .body,
    form {
        background-color: rgb(229, 229, 229);
    }

    fieldset {
        background-color: white;
        margin: 0 auto;
        width: 75%;
        border: none;
        height: 100vh;
    }

    input {
        border: 1px solid rgba(216, 213, 213, 0.8) !important;
        border-radius: 5px !important;
        padding: 25px !important;
        width: 50%;
        margin: 15px;
        margin-right: 0px;
        text-align: left;
    }

    label {
        padding: 20px;
        display: block;
        text-align: left;
        font-weight: bold;
    }

    .md-chips.md-field,
    .md-menu.md-select {
        border: 1px solid rgba(216, 213, 213, 0.8) !important;
        border-radius: 5px !important;
        width: 40% !important;
        margin: 15px;
        text-align: center;
        padding: 10px;

    }

    .md-menu-content-container .md-scrollbar .md-theme-default {
        background-color: red;
    }

    .save {
        box-shadow: 2px 5px 4px 4px rgba(215, 215, 215, .5);
        margin: 0 auto !important;

    }

    img {
        cursor: pointer
    }

    .search,
    .add {
        background-color: rgb(43, 128, 217);
        color: white;
        border-radius: 5px;
        width: 20%;
        height: 52px;
        margin-left: 0px;
        margin-top: 15px !important;
    }

    .add {
        margin-top: 0px !important;
    }

    .md-list .md-field {
        width: 28%;
    }

    .md-list-item-text {
        overflow: initial;
    }
</style>