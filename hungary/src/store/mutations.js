let mutations ={
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
      }
}
export {mutations}