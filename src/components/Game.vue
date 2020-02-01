<template>
    <div class="container">

        <table>
            <thead>
                <tr>
                    <td colspan="3" style="text-align:right">                        
                        <button :disabled="rodadaAtual <1" class="button restart-button" type="button" v-on:click="restart()"> Reiniciar </button>
                        <div class="winner" v-if="ended">
                            <span><small>Quem ganhou foi </small> <strong>{{ended.name}}</strong></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th></th>
                    <th>Nome</th>
                    <th>Pts</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in players">
                    <td width="50px" style="max-width: 50px !important;">
                        <button v-if="finalizar" class="button button-outline" :disabled="!item.playing || ended" title="Vencedor" v-on:click="setWinner(item)"><i class="icofont-win-trophy icofont-lg"></i></button>
                        <button v-if="!finalizar" class="button button-outline" :disabled="!item.playing || ended" title="Correr" v-on:click="item.playing=!item.playing"><i class="icofont-runner icofont-lg"></i></button>
                    </td>
                    <td width="150"> {{ item.name }}</td>
                    <td width="20%">{{ item.points }}</td>
                </tr>
                <tr v-if="!players.length">
                    <td colspan="3" style="text-align:center">
                        Não tem ninguem pra jogar! :/
                        <router-link class="button button-outline" to="/jogadores">Cadastre alguem</router-link>
                    </td> 
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td>
                        <button :disabled="ended || !players.length" class="button" type="button" v-on:click="showWinnerButton()"> Finalizar Rodada </button>

                    </td>
                    <td></td>
                    <td>
                        Rodada
                        <strong>{{rodadaAtual}}</strong>
                    </td>

                </tr>
            </tfoot>
        </table>
    </div>

</template>

<script>
    export default {
        name: 'Game',

        mounted() {
            if (localStorage.players) this.players = JSON.parse(localStorage.players);
            if (localStorage.rodadaAtual) this.rodadaAtual = JSON.parse(localStorage.rodadaAtual);
        },
        data() {
            return {
                players: [],
                rodadaAtual: 1,
                vencedor: null,
                showVencedor: false,
                finalizar: false
            }
        },
        computed : {
            ended: function() {
                let withPoints = this.players.filter(p=> p.points>0);
                return  withPoints.length > 1 ? false : withPoints[0]; 
            }
        },
        methods: {
            updatePoints: function(item) {
                this.players.forEach(p => {
                    if (p.points > 0) {
                        if (p.uniqueId == item.uniqueId) {
                            return;
                        }
                        if (p.playing) {
                            p.points = p.points > 1 ? p.points - 2 : 0;
                        } else {
                            p.points--;
                        }
                    }

                    p.playing = true;
                });
            },
            setWinner: function(item) {

                this.finalizar = false;
                this.updatePoints(item);
                localStorage.players = JSON.stringify(this.players);
                this.rodadaAtual++;
                localStorage.rodadaAtual = JSON.stringify(this.rodadaAtual);
            },
            showWinnerButton: function() {
                this.finalizar = true;
            },
            restart: function() {
                this.rodadaAtual = 0;
                this.players.forEach(p => {
                        p.playing = true;
                        p.points = 10;
                    });
                localStorage.players = JSON.stringify(this.players);
                localStorage.rodadaAtual = JSON.stringify(this.rodadaAtual);
                }
            }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    tfoot td {
        text-align: right;
    }
    
    td:first-child,
    th:first-child {
        max-width: 50px !important;
    }
    
    td button {
        padding: 0px 5px !important;
        margin: 0;
    }
    .restart-button {
        float:left
    }

    .winner {
        display: inline-block
    }
</style>