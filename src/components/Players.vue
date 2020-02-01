<template>
 <div class="container">
   <div class="actions">
     <button class="button" type="button" v-on:click="add()"> Novo Jogador </button>
   </div>
<table>
  <thead>
    <td></td>
    <td>Jogador</td>
  </thead>
  <tbody>
     <tr v-for="item in players">
      <td width="80">
        <button class="button button-outline"  title="Remover" v-on:click="remove(item)"><i class="icofont-trash icofont-lg"></i></button>
      </td>
      <td>{{ item.name }}</td>
     </tr>

  </tbody>
  <tfoot v-if="!players.length">
    <tr>
    <td colspan="2"> Cadê os jogadores? Tem nenhum aqui!</td>
    </tr>
  </tfoot>
  </table>
  </div>
</template>

<script>
import Player from '@/models/Player'
export default {
  name: 'Players',
  mounted () {
    if (localStorage.players) this.players = JSON.parse(localStorage.players);
    if (localStorage.rodadaAtual) this.rodadaAtual = JSON.parse(localStorage.rodadaAtual);
  },
  data () {
    return {
      players: [],
      rodadaAtual: null
    }
  },
  methods: {
    getPoint: function() {
      if(!this.players.length || !this.rodadaAtual ) return 10;

      let lowest = 10;
      this.players.forEach((a)=>{
        lowest = lowest > a.points? a.points : lowest
       });
      console.log(lowest)
      return lowest;
    },
    add: function () {
      const player = prompt('Nome');
      if(!player || !player.length) return;
      this.players.push(new Player(player ,this.getPoint()));
      localStorage.players = JSON.stringify(this.players);
    },
    remove: function(item){
      this.players = this.players.filter(i=>i.uniqueId != item.uniqueId);
      localStorage.players = JSON.stringify(this.players);
      if(!this.players.length){
        this.rodadaAtual = 0;
        localStorage.rodadaAtual = JSON.stringify(this.rodadaAtual);

      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
tfoot td{
  text-align: center
}
</style>
