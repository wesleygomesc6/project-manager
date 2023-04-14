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
                            <v-text-field v-model="member.name" label="Name" type="text"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field v-model="member.status" label="Status" type="text"></v-text-field>
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
export default {
    name: 'NewMember',
    props: ['ativar', 'member', 'maxId'],
    data() {
        return {
            formTitle: 'New Member',
        }
    },


    methods: {
        salvar() {
            let id = this.maxId
            this.member.id = ++id
            this.$emit('newMember', this.member)
            this.$emit('fechar')
        }
    }
}
</script>