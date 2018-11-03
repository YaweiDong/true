export default {
    //context:上下文，类似store对象
    //{commit}=context
    asyReduce({commit},n){
      //异步请求成功后，触发mutations函数
      setTimeout(()=>{
        // context.commit('reduce',n);
        commit('reduce',n);
      },1000);
    }
  }