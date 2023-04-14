<template>
    <v-row justify="center" class="ma-1">
        <NewMember to-string to-locale-string :ativar="dialog" :member="member" @fechar="dialog = false" :maxId="max"
            @newMember="novo" />
        <v-col cols="12">
            <v-data-table :headers="headers" :items="members" class="elevation-1" :search="search">
                <template v-slot:top>
                    <v-toolbar flat>
                        <v-toolbar-title>{{ titleTable }}</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line class="mx-2"
                            hide-details></v-text-field>

                        <v-btn color="primary" dark class="my-auto" @click.stop="dialog = true">
                            New
                        </v-btn>
                    </v-toolbar>
                </template>
                <template v-slot:item.actions="{ item }">
                    <!-- <v-icon small color="primary" class="mr-3" @click="editItem(item)"
                        title="EDITAR">mdi-square-edit-outline</v-icon> -->
                    <v-icon small color="error" title="EXCLUIR" @click="deleteItem(item)">
                        mdi-delete</v-icon>
                </template>
            </v-data-table>
        </v-col>
    </v-row>
</template>
<script>
import NewMember from '~/components/NewMember.vue';
import Member from '~/models/Members';
export default {
    name: "membersPage",
    data() {
        return {
            member: new Member(),
            members: [
                {
                    id: 1,
                    name: "Bill Gates",
                    status: "Management"
                },
                {
                    id: 2,
                    name: "Stive Jobs",
                    status: "Developer"
                },
                {
                    id: 3,
                    name: "Hello World",
                    status: "Architect"
                },
                {
                    id: 4,
                    name: "James Web",
                    status: "Tester"
                }
            ],
            titleTable: "Members",
            search: "",
            dialog: false,
            headers: [
                { text: "Id", value: "id" },
                { text: "Name", value: "name" },
                { text: "Status", value: "status" },
                { text: "Actions", value: "actions", align: 'center', width: '10%' },
            ],
        };
    },
    computed: {
        max() {
            const maxId = this.members.map(element => {
                return element.id;
            })
            return Math.max(...maxId)
        }
    },
    methods: {
        novo(val) {
            this.members.push(val)
            this.member = new Member()
        },
        deleteItem(item) {
            this.members.pop(this.members.indexOf(item))
        }
    },
    components: { NewMember }
}
</script>