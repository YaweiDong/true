let mutations = {
  api1(state, n) {
    state.api1 = n;
    console.log(state.api1)
  },
  //添加商品
  plus(state,a){
    a.count++;
    if(state.arrnum.indexOf(a) == -1){
           state.arrnum.push(a); 
    }
    state.number += a.price
  },
  //移除商品
  minus(state,a){
    a.count--;
    for(var i=0;i<state.arrnum.length;i++){
         if(state.arrnum[i].count == 0){
            state.arrnum.splice(i,1); 
         }
    };
    state.number -= a.price
  },
   //声明点击图片传入值
  photoname(state,res){
    this.state.photoname = res;
  },
  //清空
  clearCart(state){
    for(var i=0;i<state.arrnum.length;i++){
         state.arrnum.splice(i,1); 
         i--
    }
    state.arrnum.number = 0;
  },
  back1(state, n1) {
    state.parameter1 = n1;
  },
  back2(state, n2) {
    state.parameter2 = n2;
  },
  logining(state, lo) {
    state.login1 = lo;
  },
  dizhi(state, ad) {
    state.address += ad;
  },
  inp1(state, n) {
    state.input1 = n
  },
  inp2(state, n) {
    state.input2 = n
  },
  inp3(state, n) {
    state.input3 = n
  },
  inp4(state, n) {
    state.input4 = n
  },
  states(state,n){
    state.statu = n;
  },
  locationnames(state,n){
    state.locationname = n;
  },
  addids(state,n){
    state.addid = n;
  }
}
export {
  mutations
};