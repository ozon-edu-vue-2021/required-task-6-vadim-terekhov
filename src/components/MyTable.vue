<template>
  <div class="table">
    <div class="table-title">
      <slot>Заголовок</slot>
    </div>
    <div class="table-header">
      <p class="table-header-item table-header-id"
        @click="sortHandlerClick('id')"
      >id
        <font-awesome-icon class="sort" icon="sort-numeric-up" v-if="sort.flagId"/>
        <font-awesome-icon class="sort" icon="sort-numeric-down" v-else/>
      </p>
      <p class="table-header-item"
        @click="sortHandlerClick('body')"
      >body
        <font-awesome-icon class="sort" icon="sort-alpha-up" v-if="sort.flagBody"/>
        <font-awesome-icon class="sort" icon="sort-alpha-down" v-else/>
      </p>
      <p class="table-header-item"
        @click="sortHandlerClick('email')"
      >email
        <font-awesome-icon class="sort" icon="sort-alpha-up" v-if="sort.flagEmail"/>
        <font-awesome-icon class="sort" icon="sort-alpha-down" v-else/>
      </p>
      <p class="table-header-item"
        @click="sortHandlerClick('name')"
      >name
        <font-awesome-icon class="sort" icon="sort-alpha-up" v-if="sort.flagName"/>
        <font-awesome-icon class="sort" icon="sort-alpha-down" v-else/>
      </p>
    </div>
    <div class="table-body">
      <my-table-row 
        v-for="item in data"
        :key="item.id"
        :itemData="item"
      />
    </div>
  </div>
</template>

<script>
import MyTableRow from '@/components/MyTableRow.vue';
export default {
  name: 'MyTable',
  components:{ MyTableRow },
  props:{
    data:{
      type: Array,
      default: () => [],
    },
    sort:{
      type: Object,
      default: () => {},
    }
  },
  methods:{
    sortHandlerClick(target){
      this.$emit('sortHandlerClick',target);
    }
  }
}
</script>

<style scoped>
.table{
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  font-size: 14px;
}
.table-title{
  background-color: bisque;
  padding: 20px;
  font-size: 20px;
  text-transform: uppercase;
  width: 100%;
  margin-bottom: 10px;
}
.table-header{
  display: flex;
  background-color: burlywood;
  text-transform: uppercase;
  line-height: 40px;
  position: sticky;
  top: 0;
}
.table-header-item{
  margin: 0;
  flex: 1 0 25%;
  border-right: 1px solid black;
}
.table-header-item:hover{
  cursor: pointer;
}
.table-header-item:last-child{
  border-right: 0;
}
.table-header-id{
  flex: 1 0 7%;
}
.sort{
  margin-left: 5px;
}
</style>