<template>
  <div>
    <el-table border :data="articles">
      <el-table-column prop="title" label="日期" width="140"></el-table-column>
      <el-table-column prop="body" label="姓名" width="120"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="edit(scope.row._id)">编辑</el-button>
          <el-button size="mini" type="danger" @click="remove(scope.row._id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      articles: []
    };
  },
  created() {
    this.ListArticles()
  },
  methods: {
    ListArticles() {
      this.$http.get("articles", this.artice).then(res => {
        this.articles = res.data;
      });
    },
    edit(id) {
      this.$router.push(`/articles/${id}/edit`)
    },
    remove(id) {
      this.$http.delete(`articles/${id}`).then(res => {
        this.$message({
          message: "文章删除成功",
          type: "success"
        });
        this.ListArticles()
      });
    }
  }
};
</script>

<style>
</style>