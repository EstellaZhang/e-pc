<template>

    <el-container class="layout" >
      <el-header>
        <navbar/>
      </el-header>
      <el-container :style="height">
        <el-aside width="200px" class="fl">
          <Menubar/>
        </el-aside>
        <el-main>
          main
        </el-main>
      </el-container>
    </el-container>

</template>

<script>
import { Navbar,Menubar } from './components';
export default {
  name:'Layout',
  components:{
    Navbar,
    Menubar
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
  min-width: 500px;
  .el-header {
    line-height: 60px;
    border-bottom:1px solid #bbb;

  }
  .el-aside {
    height: 100%;
  }
  
  .el-main {
    height: 100%;
  }
  
  
}

</style>