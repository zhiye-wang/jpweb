<template>
	<el-button type="text" v-text="keepTime" @click="StartCountDown"></el-button>
</template>

<script>
	export default {
		name:'jiake',
		data() {
        return {
            keepTime: '倒计时',
            limittime:100,
            settime: '',
            flag: false
        }
    },
    methods: {
        StartCountDown() {
            var mydate = new Date();
            mydate.setMinutes(mydate.getMinutes() + this.limittime);
            this.settime=mydate;

            let time = setInterval(() => {
                if (this.flag == true) {
                    clearInterval(time)
                }
                this.timeDown()
            }, 100)
        },
        timeDown() {
            const endTime = new Date(this.settime);
            const nowTime = new Date();
            let leftTime = parseInt((endTime.getTime() - nowTime.getTime()) / 1000);
            let d = parseInt(leftTime / (24 * 60 * 60));
            let h = this.formate(parseInt(leftTime / (60 * 60) % 24));
            let m = this.formate(parseInt(leftTime / 60 % 60));
            let s = this.formate(parseInt(leftTime % 60));
            if (leftTime <= 0) {
                this.flag = true;
                alert("时间到，停止作答");
            }
            this.keepTime = `${h}:${m}:${s}`;
        },
        formate(time) {
            if (time >= 10) {
                return time
            } else {
                return `0${time}`
            }
        }
	}
}
</script>