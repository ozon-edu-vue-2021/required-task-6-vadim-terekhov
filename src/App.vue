<template>
  <div id="app">
    <my-table
      :data="data"
      :sort="sort"
      @sortHandlerClick="sortHandlerClick"
    >Таблица</my-table>
    <my-pagination 
      :page="page"
      :totalPage="totalPage"
      @nextPage="nextPage"
      @gotoPage="gotoPage"
    />
  </div>
</template>

<script>
import axios from 'axios';
import MyTable from '@/components/MyTable.vue';
import MyPagination from '@/components/MyPagination.vue';
export default {
  name: 'App',
  components: {
    MyTable, MyPagination
  },
  data(){
    return {
      data: [],
      perPage: 15,
      page: 1,
      total: 150,
      sortField: 'id',
      sort:{
        flagId: true,//ID по возрастанию
        flagBody: true,//Body по возрастанию
        flagEmail: true,//Email по возрастанию
        flagName: true,//Name по возрастанию
      }
    }
  },
  computed:{
    totalPage(){
      return Math.ceil(this.total / this.perPage);
    }
  },
  methods:{
    async getDataAPI(sortSucces = false){
      try {
        const start = (this.page - 1) * this.perPage;
        const end = this.page * this.perPage;
        const response = await axios(`https://jsonplaceholder.typicode.com/comments?_start=${start}&_end=${end}`);  
        this.data = response.data;
        if (sortSucces){
          if (this.sortField === 'id'){
            this.sort.flagId ? this.data.sort( (a,b) => a.id - b.id) : this.data.sort( (a,b) => b.id - a.id);
          }else if (this.sortField === 'body'){
            this.sort.flagBody 
            ? this.data.sort( (a,b) => {
              if (a.body > b.body) return 1
              if (a.body < b.body) return -1
              return 0
            }) 
            : this.data.sort( (a,b) => {
              if (b.body > a.body) return 1
              if (b.body < a.body) return -1
              return 0
            });
          }else if (this.sortField === 'email'){
            this.sort.flagEmail
            ? this.data.sort( (a,b) => {
              if (a.email > b.email) return 1
              if (a.email < b.email) return -1
              return 0
            }) 
            : this.data.sort( (a,b) => {
              if (b.email > a.email) return 1
              if (b.email < a.email) return -1
              return 0
            });
          }else if (this.sortField === 'name'){
            this.sort.flagName
            ? this.data.sort( (a,b) => {
              if (a.name > b.name) return 1
              if (a.name < b.name) return -1
              return 0
            }) 
            : this.data.sort( (a,b) => {
              if (b.name > a.name) return 1
              if (b.name < a.name) return -1
              return 0
            });
          }
        }
      } catch (error) {
        console.error(error);
      }
    },
    nextPage(page){
      this.page = this.page + page;
      this.getDataAPI(true);
    },
    gotoPage(page){
      this.page = page;
      this.getDataAPI(true);
    },
    sortHandlerClick(target){
      switch (target) {
        case 'id':
          this.sortField = 'id';
          this.sort.flagId = !this.sort.flagId;  
          break;
        case 'body':
          this.sortField = 'body';
          this.sort.flagBody = !this.sort.flagBody;
          break;
        case 'email':
          this.sortField = 'email';
          this.sort.flagEmail = !this.sort.flagEmail;
          break;
        case 'name':
          this.sortField = 'name';
          this.sort.flagName = !this.sort.flagName;
          break;
      }
      this.getDataAPI(true);
    }
  },
  created(){
    this.getDataAPI();
  },
}
</script>

<style>
*{
  box-sizing: border-box;
}
html,body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
