<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
      <div class="topbar-menu">
        <a href="javascript:;">小米商城</a>
        <a href="javascript:;">MUI</a>
        <a href="javascript:;">云服务</a>
        <a href="javascript:;">协议规则</a>
      </div>
      <div class="topbar-user">
        <a href="javascript:;">登录</a>
        <a href="javascript:;">注册</a>
        <a href="javascript:;" class="my-cart"><span class="icon-cart "></span>购物车</a>
      </div>
    </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href=""></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img"></div>
                    <div class="pro-name"></div>
                    <div class="pro-price"></div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children"></div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword">
            <a href="javascript:;" ></a>
          </div>
        </div>
      </div>
    </div>
    </div>
  
</template>

<script>
export default {
  name: "nav-header",
  data(){
    return{
      username:'aa',
      phoneList:[]
    }
  },
  mounted(){
    this.getProductList()
  },
  methods:{
    getProductList(){
      this.axios.get('/products',{
        params:{
          categoryID:'100012'
        }
      }).then((res)=>{
        if(res.list>6){
          this.phoneList = res.list.slice(0,6);
        }
      })
    }
  }

};
</script>

<style lang="scss">
@import "../assets/scss/base.scss";
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
    .header{

      .nav-topbar{
        height: 39px;
        line-height: 39px;
        background-color:#333333;
        color: #b0b0b0;
      }
      .container{ 
        @include flex();
        a{
          display: inline-block;
          color:#b0b0b0 ;
          margin-right: 17px;
        }
        .my-cart{
          width: 110px;
          background-color: #FF6600;
          text-align: center;
          color:#ffffff;
          .icon-cart{
            @include bgImg(16px,12px,'/public/imgs/icon-cart-checked.png')
            // display: inline-block;
            // width: 16px;
            // height: 12px;
            // background: url('/public/imgs/icon-cart-checked.png') no-repeat center;
            // background-size: contain;
            // margin-right: 4px;
          }
        }
      }
      .nav-header{
        margin-top:20px;
        .container{
          position: relative;
          height: 112px;
          display: flex;
          justify-content:space-between ;
          align-items: center;
          .header-logo{
            display: inline-block;
            width: 55px;
            height: 55px;
            background-color:#FF6600;
            a{
              display:inline-block;
              width: 110px;
              height: 55px;
              &:before{
                content: '';
                 @include bgImg(55px,55px,'../../public/imgs/mi-logo.png',55px);
                 transition: margin .2s ;
              }
              &:after{
                content: '';
                @include bgImg(55px,55px,'../../public/imgs/mi-home.png',55px);
              }
              &:hover:before{
                margin-left: -55px;
                transition: margin .2s ;
              }
            }
          }
          .header-menu{
            display: inline-block;
            width: 643px;
            padding-left:209px;
            .item-menu{
              display: inline-block;
              color:#333333;
              font-weight: bold;
              font-size: 16px;
              line-height: 112px;
              margin-right:20px;
                span{
                  cursor: pointer;
                }
                &:hover{
                  color:#FF6600;
                  .children{
                    height: 220px;
                    opacity: 1;
                  }
                }
                .children{
                  position: absolute;
                  top: 112px;
                  left:0;
                  width: 1226px;
                  height: 0;
                  opacity: 0;
                  border-top:1px solid  #E5E5E5;
                  box-shadow: 0px 7px 6px 0px rgba(0, 0,0, 0.11);
                  z-index:10;
                  transition: all  0.5s ease;
                  .product{
                    float: left;
                    position: relative;
                    width: 16.66%;
                    height: 220px;
                    font-size:12px;
                    line-height:12px;
                    &::before{
                    content:"";
                    position: absolute;
                    top:28px;
                    right:0;
                    border-left:1px solid $colorF;
                    height: 100px;
                    width: 1px;
                  }
                    a{
                      display: inline-block;
                      
                    }
                    img{
                      width: auto;
                      height: 111px;
                      margin-top: 26px;
                    }
                    .pro-img{
                      height: 137px;

                    }
                    .pro-name{
                      font-weight: bold;
                      margin-top:19px;
                      color:$colorB;
                    }
                    .pro-price{
                      color:$colorA;
                      text-align: center;
                    }
                  }
                }
            }
          }
          .header-search{
            width: 319px;
            .wrapper{
              height: 50px;
              border:1px solid #E0E0E0;
              display: flex;
              align-items: center;
              input {
                border:none;
                box-sizing:boder-box;
                border-right:1px solid #E0E0E0;
                width: 264px;
                height: 50px;
                padding-left: 14px;
              }
              a{
                @include bgImg(18px,18px,'/public/imgs/icon-search.png');
                margin-left: 14px;
              }
            }
            
          }
        }

      }
    }
</style>
