<template>
    <v-row justify="center" class="ma-1">
        <v-col cols="12">
            <NewProject :ativar="dialog" :project="project" @fechar="dialog = false" :maxId="max" to-locale-string to-string
                @newProject="novo" />

            <v-data-table :headers="headers" :items="projects" :search="search" class="elevation-1">
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
                <template v-slot:item.members="{ item }">
                    <ul>
                        <template v-for="(member, index) in item.members">
                            <li>{{ member.name }}</li>
                        </template>
                    </ul>
                </template>
                <template v-slot:item.status="{ item }">
                    <v-slider readonly v-model="item.status" thumb-color="primary" thumb-label="always" :thumb-size="25">
                        <template v-slot:thumb-label="{ value }">
                            {{ value }}%
                        </template>
                    </v-slider>
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
import NewProject from '~/components/NewProject.vue';
import Project from '~/models/Projects';
export default {
    name: "projectsPage",
    components: { NewProject },
    data() {
        return {
            project: new Project(),
            projects: [
                {
                    id: 1,
                    name: "Primeiro Projeto",
                    description: "Testando com Vue.js",
                    qtdAtividades: 210,
                    qtdAtividadesConcluidas: 170,
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
                        }
                    ]
                },
                {
                    id: 4,
                    name: "Modelo de projeto em Vue",
                    description: "Este projeto tem a finalidade de demonstrar algo importante.",
                    qtdAtividades: 325,
                    qtdAtividadesConcluidas: 52,
                    members: [
                        {
                            id: 2,
                            name: "Stive Jobs",
                            status: "Developer"
                        },
                        {
                            id: 4,
                            name: "James Web",
                            status: "Tester"
                        }
                    ]
                },
                {
                    id: 2,
                    name: "Projeto Vue.js github",
                    description: "Testando com Vue.js deploy on git",
                    qtdAtividades: 212,
                    qtdAtividadesConcluidas: 95,
                    members: [
                        {
                            id: 4,
                            name: "James Web",
                            status: "Tester"
                        }
                    ]
                },
                {
                    id: 3,
                    name: "Hello World",
                    description: "Testando com Vue.js",
                    qtdAtividades: 175,
                    qtdAtividadesConcluidas: 93,
                    members: [
                        {
                            id: 1,
                            name: "Bill Gates",
                            status: "Management"
                        }
                    ]
                },
                {
                    id: 5,
                    name: "GitHub for only sql",
                    description: "Description of projects",
                    qtdAtividades: 742,
                    qtdAtividadesConcluidas: 561,
                    members: [
                        {
                            id: 4,
                            name: "James Web",
                            status: "Tester"
                        }
                    ]
                }
            ],
            titleTable: "Projects",
            dialog: false,
            search: "",
            headers: [
                { text: "Id", value: "id" },
                { text: "Name", value: "name" },
                { text: "Description", value: "description" },
                { text: "Members", value: "members" },
                { text: "Activities", value: "qtdAtividades" },
                { text: "Completed Activities", value: "qtdAtividadesConcluidas" },
                { text: "Conclusion", value: "status", width: "20%" },
                { text: "Actions", value: "actions", align: 'center', width: '5%' },
            ],
        };
    },

    created() {

        this.calcStatus()

    },
    computed: {
        max() {
            const maxId = this.projects.map(element => {
                return element.id;
            })
            return Math.max(...maxId)
        }
    },
    methods: {
        calcStatus() {
            this.projects.map(element => {
                element.status = Math.round((element.qtdAtividadesConcluidas / element.qtdAtividades) * 100)
            })
        },
        novo(val) {
            this.project = val
            this.project.status = Math.round((this.project.qtdAtividadesConcluidas / this.project.qtdAtividades) * 100)
            this.projects.push(this.project)
            this.project = new Project()
        },
        deleteItem(item) {
            this.projects.pop(this.projects.indexOf(item))
        }
    },
}
</script>