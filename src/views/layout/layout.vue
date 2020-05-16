<template>

    <el-container class="layout" >
      <el-header>
        <navbar/>
      </el-header>
      <el-container :style="height">
        <el-aside class="fl">
          <sidebar/>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>

</template>

<script>
import { Navbar,Sidebar } from './components';
export default {
  name:'Layout',
  components:{
    Navbar,
    Sidebar
  },
  data(){
    return{
      height:{
        height:window.innerHeight - 60 + 'px'
      }
    }
  }
    
}
</script>

<style lang="scss">
.layout{
  min-width: 300px;
  .el-header {
    line-height: 60px;
    border-bottom:1px solid #bbb;

  }
  .el-aside {
    overflow-x: hidden;
    height: 100%;
    width:200px !important;
    
  }
  
  .el-main {
    height: 100%;
  }
  
  
}

</style>