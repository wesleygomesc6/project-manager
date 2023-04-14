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
            projects: [],
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
        this.$axios.$get('/api/projects.json').then(res => {
            this.projects = res.projects
            this.calcStatus()
        })
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