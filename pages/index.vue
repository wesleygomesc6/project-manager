<template>
  <v-row justify="center" class="ma-1">
    <v-col cols="12" md="10">
      <v-row class="d-block">
        <h3>{{ titleOfHome }}</h3>
        <p>{{ descriptionOfHome }}
        </p>
        <v-list>
          <template v-for="(item, i) in listItems">
            <v-list-item>
              <v-list-item-action>
                <v-icon color="primary">{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                {{ item.text }}
              </v-list-item-content>
            </v-list-item>
          </template>

        </v-list>
        <p>{{ complemento }}
        </p>
      </v-row>

    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      titleOfHome: 'Bem-Vindo(a) ao gerenciador de projetos.',
      descriptionOfHome: 'Aqui você ira encontrar informações sobre os projetos e seus respectivos membros e atividades desempenhadas, tais como:',
      listItems: [
        { icon: 'mdi-percent', text: 'Status do Projeto' },
        { icon: 'mdi-account-multiple', text: 'Quantidade de Membros' },
        { icon: 'mdi-sigma', text: 'Quantidade de Atividades' },
        { icon: 'mdi-list-status', text: 'Atividades Concluidadas' },
        { icon: 'mdi-badge-account-outline', text: 'Responsavel Pela Execução' }
      ],
      complemento: 'Vale ressaltar que, como é uma aplicação estática, nenhuma alteração realizada pelo "CRUD" será persistida em banco de dados, pois trata-se apenas de uma simulação.'

    }
  },
  methods: {

  }
}
</script>
