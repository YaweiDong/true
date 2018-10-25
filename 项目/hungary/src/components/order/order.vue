<template>
    <div>
        <div class="top"></div>
        <ol>
            <li>
                <div class="order">
                    <img src="../elema/img/1.png" alt="">
                    <span class="span1">吃啥啦></span>
                    <span class="span2">支付超时</span>
                    <span class="span3">2018-10-24 10:24</span>
                </div>
            </li>
        </ol>
    </div>
</template>
<script>
    export default{
        
    }
</script>
<style scoped ="scoped">
.top{
    background-color:dodgerblue;
    width: 100%;
    height: 0.457rem;
}
.order{
    padding: 0.15rem 0 0 0.1rem; 
    border-bottom:  0.01rem solid rgb(230, 230, 230);
    overflow: hidden;
}
.order img{
    width: 0.6rem;
    /* border: 1px solid red */
    float: left;
}
.span2{
    float: right;
}
.span3{
    position:absolute;
    top:0.85rem;
    left: 0.7rem;
}
</style>