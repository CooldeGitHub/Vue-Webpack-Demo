<!--
 * @Descripttion: 
 * @version: 
 * @Author: pengjie.ye
 * @Date: 2019-10-20 14:10:19
 * @LastEditors: pengjie.ye
 * @LastEditTime: 2019-10-20 15:00:43
 -->
<script>
export default {
    render:function(createElement){
        if(this.items.length){
            return createElement(
                'ul',
                this.items.map(
                    function(item){
                        return createElement('li',item.title)
                    }
                )
            )
        }else{
            return createElement(
                'h'+this.level,
                this.$slots.default
            )
        }
    },
    props:{
        level:{
            type:Number,
            required:true
        },
        items:null
    }
}
</script>