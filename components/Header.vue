<template>
    <div>
        <div class="header-container">
            <div class="top-bar wrap">
                <div class="top-in wrap-in">
                    <div class="top-left">
                        <a class="btn-collect">加入收藏</a>
                        <p>适龄提示：本平台游戏适合18周岁及以上用户</p>
                    </div>
                    <a></a>

                    <div class="top-right">
                        <a class="btn-login">登录</a>
                        <a class="btn-res">注册</a>
                    </div>
                    <!-- <div class="top-right" v-else>
                        <p>
                            欢迎您，<span
                                class="nicknames"
                                >seo</span
                            >
                        </p>
                        <a class="btn-logout">退出</a>
                    </div> -->
                </div>
            </div>
            <div class="header-bar wrap">
                <div class="header-in wrap-in">
                    <nuxt-link :to="{ path: '/' }">
                        <div
                            class="logo"
                            :style="{
                                backgroundImage: 'url(' + logoImgUrl + ')',
                            }"
                        ></div>
                    </nuxt-link>

                    <nav>
                        <ul>
                            <li v-for="(nav, index) in navList" :key="index" :class="{'active':index==0}">
                                <nuxt-link :to="{ path: nav.route }">
                                    {{ nav.name }}
                                    <em></em>
                                </nuxt-link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import logo from "@/assets/images/common/logo-header.png";
    export default {
        data() {
            return {
                logoImgUrl: logo,
                navList: [
                    {
                        name: "首页",
                        path: "homePage",
                    },
                    {
                        name: "手游中心",
                        path: "",
                    },
                    {
                        name: "用户中心",
                        path: "",
                    },
                    {
                        name: "积分商城",
                        path: "",
                    },
                    {
                        name: "客服中心",
                        path: "",
                    },
                ],
            };
        },
        created() {},
        mounted() {},
        methods: {},
    };
</script>

<style scoped lang="less">
    .header-container {
        .top-bar {
            height: 33px;
            line-height: 33px;
            border-bottom: 1px solid #ddd;
            background: #f7f7f7;
            .top-in {
                height: 100%;
                display: flex;
                justify-content: space-between;
                line-height: 33px;
                .top-left {
                    color: #999;
                    font-size: 14px;
                    display: flex;
                    justify-content: flex-start;
                    .btn-collect {
                        display: block;
                        height: 14px;
                        line-height: 14px;
                        color: #999;
                        padding-left: 20px;
                        margin-top: 10px;
                        background: url("~assets/images/common/icon-collect.png")
                            no-repeat 1px -11px;
                        transition: all 0.2s ease-out;
                        padding-right: 14px;
                        border-right: 1px #ccc solid;
                        &:hover {
                            background-position-y: -43px;
                            color:@primaryColor;
                        }
                    }
                    p {
                        margin-left: 16px;
                    }
                }
                .top-right {
                    height: 20px;
                    padding: 0 6px;
                    border: 1px #ddd solid;
                    border-radius: 2em;
                    background: #fff;
                    margin-top: 6px;
                    display: flex;
                    justify-content: flex-start;
                    .nicknames {
                        cursor: pointer;
                        &:hover {
                            text-decoration: underline;
                        }
                    }
                    a,
                    p {
                        display: block;
                        height: 14px;
                        line-height: 14px;
                        color: #999;
                        padding-left: 15px;
                        margin-top: 3px;
                        transition: all 0.2s ease-out;
                        padding-right: 8px;
                        border-right: 1px #ccc solid;
                    }
                    a {
                        &.btn-login {
                            background: url("~assets/images/common/icon-login.png")
                                no-repeat 0 1px;
                            margin-left: 8px;
                        }
                        &.btn-res {
                            background: url("~assets/images/common/icon-res.png")
                                no-repeat 0 2px;
                            margin-left: 8px;
                        }
                        &.btn-logout {
                            padding-left: 8px;
                            color: #666;
                        }
                        &:hover {
                            color:@primaryColor;
                            &.btn-login {
                                background-position-y: -13px;
                            }
                            &.btn-res {
                                background-position-y: -13px;
                            }
                        }
                        &:last-of-type {
                            border-right: none;
                        }
                    }
                    p {
                        padding-left: 8px;
                        color: #666;
                        span {
                            color:@primaryColor;
                        }
                    }
                }
            }
        }
        .header-bar {
            height: 80px;
            .header-in {
                height: 100%;
                display: flex;
                justify-content: space-between;
                .logo {
                    width: 200px;
                    height: 80px;
                    background: url("~assets/images/common/logo-header.png")
                        no-repeat 1px center;
                }
                nav {
                    // margin-left: 340px;
                    margin-top: 2px;
                    ul {
                        display: flex;
                        justify-content: flex-end;
                        li {
                            margin: 0 18px 0 19px;
                            height: 78px;
                            line-height: 78px;
                            color: #666;
                            font-size: 20px;
                            position: relative;
                            em {
                                width: 0;
                                height: 4px;
                                position: absolute;
                                bottom: 10px;
                                margin: 0 auto;
                                left: 0;
                                right: 0;
                                transition: width 0.3s;
                                // .gradientBg();
                                background: linear-gradient(
                                    -90deg,
                                    rgba(253, 147, 83, 1),
                                    rgba(241, 69, 60, 1)
                                );
                            }
                            &:last-of-type {
                                margin-right: 0;
                            }
                            &:first-of-type {
                                margin-left: 0;
                            }
                            &:not(:first-of-type) {
                                &:before {
                                    display: block;
                                    content: " ";
                                    width: 1px;
                                    height: 12px;
                                    background: #ccc;
                                    left: -18px;
                                    top: 34px;
                                    position: absolute;
                                }
                            }
                            &:hover,
                            &.active {
                                color:@primaryColor;
                                a {
                                    color:@primaryColor;
                                }
                                em {
                                    width: 100%;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
