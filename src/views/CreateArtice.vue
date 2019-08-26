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
        <el-button type="primary" native-type="submit">立即创建</el-button>
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
      this.$http.post("articles", this.artice).then(res => {
        console.log(res)
        this.$message({
          message: "文章创建成功",
          type: "success"
        });
        this.$router.push("/articles/index");
      });
    }
  }
};
</script>

<style>
</style>