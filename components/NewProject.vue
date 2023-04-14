<template>
    <v-dialog v-model="ativar" max-width="600px" persistent>
        <v-card>
            <v-card-title>
                <span class="text-h5 my-4"> {{ formTitle }} </span>
            </v-card-title>
            <v-card-text>
                <v-form>
                    <v-row class="d-flex">
                        <v-col cols="12">
                            <v-text-field v-model="project.name" label="Name" type="text"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field v-model="project.description" label="Descriprion" type="text"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-text-field v-model="project.qtdAtividades" label="Qtd. Activies" type="number"
                                hide-spin-buttons></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-text-field v-model="project.qtdAtividadesConcluidas" label="Qtd. Activies Completed"
                                type="number" hide-spin-buttons></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-autocomplete @click="getMembers" v-model="project.members" :items="members" item-text="name"
                                label="Members" hide-selected item-value="name" small-chips clearable return-object dense
                                multiple deletable-chips no-data-text="Nenhum membro encontrado">
                            </v-autocomplete>
                        </v-col>
                    </v-row></v-form>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="error" text @click="$emit('fechar')"> Cancelar </v-btn>
                <v-btn color="blue darken-1" text @click="salvar"> Salvar </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>
import Member from '~/models/Members'
export default {
    name: 'NewProject',
    props: ['ativar', 'project', 'maxId'],
    data() {
        return {
            formTitle: 'New Project',
            member: new Member(),
            members: []
        }
    },


    methods: {
        getMembers() {
            this.$axios.$get('/api/members.json').then(res => this.members = res.members)
        },
        salvar() {
            let id = this.maxId
            this.project.id = ++id
            this.$emit('newProject', this.project)
            this.$emit('fechar')
        }
    }
}
</script>