<template>
  <div>
    <el-form @submit.native.prevent="saveArticle" ref="form" :model="artice" label-width="80px">
      <el-form-item label="文章标题">
        <el-input v-model="artice.title"></el-input>
      </el-form-item>
      <el-form-item label="文章内容">
        <el-input type="textarea" v-model="artice.body"></el-input>
      </el-form-item>
      <el-form-item label="文章类别">
        <el-radio-group v-model="artice.type">
          <el-radio label="随笔"></el-radio>
          <el-radio label="前端"></el-radio>
          <el-radio label="后端"></el-radio>
          <el-radio label="基础知识"></el-radio>
        </el-radio-group>
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
      //调用增加文章接口
      this.$http.post("articles", this.artice).then(res => {
        console.log(res);
        this.$message({
          message: "文章创建成功",
          type: "success"
        });
        // 创建成功后通过编程式导航跳转到/articles/index
        this.$router.push("/articles/index");
      });
    }
  }
};
</script>

<style>
</style>