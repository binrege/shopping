<template>
    <div class="msgcenter">
        <van-nav-bar title="消息中心" left-arrow @click-left="onClickLeft"/>
        <div class="msg" v-for="(msg,index) in msgs" :key="index">
            <div class="msgimage">
                <div class="image"><img :src="msg.image"/></div>
            </div>
            <div class="msgtext">
                <div class="textup">
                    <div class="upleft">活动精选</div>
                    <div class="date">{{msg.data}}</div>
                </div>
                <div class="textdown">
                    <div
                            class="msgdescrible"
                            style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis;width:76%"
                    >{{msg.text}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        data() {
            return {
                msgs: []
            };
        },
        //模拟数据
        mounted() {
            axios
                .get("api/msg")
                .then(response => {
                    let res = response.data;
                    if (res.code === 200) {
                        this.msgs = res.data;
                    }
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                });
        },
        methods: {
            onClickLeft(){
                this.$router.push("/");
            },
        }
    };
</script>

<style lang="scss" scoped>
    .msg {
        height: 90px;
        width: 100%;
        border-bottom: 1px solid #f5f5f5;
        display: flex;
    }
    .msgimage {
        border-radius: 100%;
        height: 46px;
        width: 12%;
        position: relative;
        margin-left: 10px;
        margin-top: 10px;
        background-color: #e8315d;
    }
    .image {
        border-radius: 100%;
        height: 28px;
        width: 66%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    img {
        height: 100%;
        width: 100%;
        max-width: 100%;
        max-height: 100%;
    }
    .msgtext {
        height: auto;
        width: 88%;
    }
    .textup {
        height: 40%;
        width: auto;
        display: flex;
        justify-content: space-between;
    }
    .upleft {
        height: 31px;
        width: 80px;
        font-weight: 700;
        font-size: 16px;
        padding-top: 5px;
        margin-top: 4px;
    }
    .date {
        height: 25px;
        width: 72px;
        font-size: 12px;
        color: #c4c7ce;
        text-align: end;
        padding-right: 10px;
        padding-top: 6px;
        margin-top: 7px;
    }
    .textdown {
        height: 60%;
        width: auto;
    }
    .msgdescrible {
        height: 30px;
        width: 84%;
        font-weight: 700;
        font-size: 14px;
        text-align: start;
        margin-left: 8%;
        margin-top: 3px;
    }
</style>