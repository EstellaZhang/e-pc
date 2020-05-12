<template>
  <div class="navBar clearfix">
      <div class="fl logo">
        <img width="150" src="@/assets/logo_row.png" alt="logo" title="logo">
        <!-- <input type="text" placeholder="请输入关键词..."> -->
      </div>
      <div class="fr user">
        <el-dropdown trigger="hover" @command="handleCommand" @visible-change="scaleIcon">
          <div class="el-dropdown-link clearfix">
            <div class="fl userInfo clearfix">
              <div v-if="hasAvatar" class="fl">
                <el-avatar :size="50" alt="user" title="user" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                <span>user</span>
              </div>
              <div v-else>
                <el-avatar class="noAva" :size="50" alt="user" title="user"> user </el-avatar>
              </div>
            </div>
            <div class="fr">
              <i class="el-icon-caret-right" :class="isrotate?'clock':'antiClock'"/>
            </div>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="baseInfo">基本信息</el-dropdown-item>
            <el-dropdown-item command="updatePwd">修改密码</el-dropdown-item>
            <el-dropdown-item command="logOut">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
  </div>
</template>

<script>
export default {
  name:"Navbar",
  data(){
    return{
      hasAvatar:false,      //是否有头像
      isrotate:false,       //是否旋转
    }
  },
  methods:{
    // 悬浮用户头像 旋转icon
    scaleIcon(visible){
      if(visible){
        this.isrotate = true;
      } else {
        this.isrotate = false;
      }
      // if(!visible) this.isrotate = false;
    }, 
    // 点击用户头像 下拉菜单的操作
    handleCommand(command) {
      console.log('command',command)
    }
  }

}
</script>

<style lang="scss">
.navBar{
  width:100%;
  height: 60px;
  line-height: 60px;
  .user{
    height:60px;
    .el-dropdown{
      height:60px;
      .el-dropdown-link {
        border-left:1px solid #ddd;
        width: 100px;
        height: 60px;
        cursor: pointer;
        .userInfo{
          overflow: hidden;
          .el-avatar{
            display: inline-block;
            margin-top: 5px;
            text-align: center;
            background: #aaa;
            border-radius: 50%;
            color:#fff;
            outline: none;
            &.noAva{
              margin-left: 20px;
            }
            img{
              width: 50px;
              height: 50px;
              border-radius: 50%;
            }
          }
        }
        .el-icon-caret-right.antiClock{
          transition: 0.4s linear;
          transform: rotate(-90deg);
          -ms-transform: rotate(-90deg);		/* IE 9 */
          -webkit-transform: rotate(-90deg);	/* Safari and Chrome */
          -o-transform: rotate(-90deg);		/* Opera */
          -moz-transform: rotate(-90deg);		/* Firefox */
        }
        .el-icon-caret-right.clock{
          transition: 0.4s linear;
          transform: rotate(90deg);
          -ms-transform: rotate(90deg);		/* IE 9 */
          -webkit-transform: rotate(90deg);	/* Safari and Chrome */
          -o-transform: rotate(90deg);		/* Opera */
          -moz-transform: rotate(90deg);		/* Firefox */
        }
      }
    }
  }
}
</style>