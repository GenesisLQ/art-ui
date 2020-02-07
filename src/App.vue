<template>
  <div id="app">
    <!-- 普通按钮 -->
    <div class="row">
      <art-button @click="fn">按钮</art-button>
      <art-button type="primary">按钮</art-button>
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
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    fn () {
      console.log('123')
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
