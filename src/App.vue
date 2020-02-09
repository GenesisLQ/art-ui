<template>
  <div id="app">
    <!-- 普通按钮 -->
    <div class="row">
      <art-button @click="fn">按钮</art-button>
      <art-button type="primary" @click="visible = true">按钮</art-button>
      <art-button type="success">按钮</art-button>
      <art-button type="warning">按钮</art-button>
      <art-button type="danger">按钮</art-button>
      <art-button type="info">按钮</art-button>
    </div>
    <!-- 朴素按钮 -->
    <div class="row">
      <art-button plain icon="art-icon-sousuo-">按钮</art-button>
      <art-button plain icon="art-icon-sousuo-" type="primary">按钮</art-button>
      <art-button plain icon="art-icon-sousuo-" type="success">按钮</art-button>
      <art-button plain icon="art-icon-sousuo-" type="warning">按钮</art-button>
      <art-button plain icon="art-icon-sousuo-" type="danger">按钮</art-button>
      <art-button plain icon="art-icon-sousuo-" type="info">按钮</art-button>
    </div>
    <!-- 圆角按钮 -->
    <div class="row">
      <art-button round>按钮</art-button>
      <art-button round type="primary">按钮</art-button>
      <art-button round type="success">按钮</art-button>
      <art-button round type="warning">按钮</art-button>
      <art-button round type="danger">按钮</art-button>
      <art-button round type="info">按钮</art-button>
    </div>
    <!-- 禁用按钮 -->
    <div class="row">
      <art-button round disabled>按钮</art-button>
      <art-button round disabled type="primary">按钮</art-button>
      <art-button round disabled type="success">按钮</art-button>
      <art-button round disabled type="warning">按钮</art-button>
      <art-button round disabled type="danger">按钮</art-button>
      <art-button round disabled type="info">按钮</art-button>
    </div>
    <!-- 圆形 icon -->
    <div class="row">
      <art-button circle icon="art-icon-shoucang-"></art-button>
      <art-button circle icon="art-icon-shouye" type="primary"> </art-button>
      <art-button circle icon="art-icon-cha-" type="success"> </art-button>
      <art-button circle icon="art-icon-paixu-" type="warning"> </art-button>
      <art-button circle icon="art-icon-sousuo-" type="danger"> </art-button>
      <art-button circle icon="art-icon-dingwei-" type="info"> </art-button>
    </div>

    <!-- 对话框 -->
    <div class="row">
      <!-- <art-dialog title="温馨提示"></art-dialog> -->
      <art-dialog :visible.sync="visible" width="30%">
        <!-- 就表示 template 是用来渲染名为 title 的插槽 -->
        <template v-slot:title>
          <h3>标题</h3>
        </template>
        我是内容啊
        <template v-slot:footer>
          <art-button @click="visible = false">取消</art-button>
          <art-button type="primary" @click="visible = false">确定</art-button>
        </template>
      </art-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false
    }
  },
  name: 'app',
  methods: {
    fn () {
      console.log('按钮可以点击')
    },
    close (value) {
      this.visible = value
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  margin-top: 40px;
  margin-left: 100px;
}
.row {
  margin-bottom: 20px;
  .art-button {
    margin-right: 20px;
  }
}
</style>
