<template>
  <div>
    <el-table :data="articles">
      <el-table-column prop="title" label="日期" width="140"></el-table-column>
      <el-table-column prop="body" label="姓名" width="120"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      articles:[]
    };
  },
  created(){
    this.$http.get("articles", this.artice).then(res=>{
      this.articles = res.data
    })
  }
  
};
</script>

<style>
</style>