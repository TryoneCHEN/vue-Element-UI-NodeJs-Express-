<template>
  <div>
    <el-form @submit.native.prevent="saveArticle" ref="form" :model="artice" label-width="80px">
      <el-form-item label="文章标题">
        <el-input v-model="artice.title"></el-input>
      </el-form-item>
      <el-form-item label="文章内容">
        <el-input type="textarea" v-model="artice.body"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      artice: {}
    };
  },
  methods: {
    saveArticle() {
      this.$http.put(`articles/${this.$route.params.id}`, this.artice).then(res => {
        console.log(res);
        this.$message({
          message: "保存成功",
          type: "success"
        });
        this.$router.push("/articles/index");
      });
    },
    fetch() {
        // 通过路由this.$route.获取它的params.id
      this.$http.get(`articles/${this.$route.params.id}`).then(res => {
        this.artice = res.data;
      });
    }
  },
  created() {
    this.fetch();
  }
};
</script>

<style>
</style>