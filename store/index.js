export const state = () => ({
    menu: undefined,
  });
  
  export const mutations = {
    setMenuInfos(state, list) {
      state.menu = list[0];
    },
  };
  
  export const actions = {
    async nuxtServerInit({ commit }) {
      let files = await require.context('~/assets/content/site/', false, /\.json$/);
      let menu = files.keys().map(key => {
        let res = files(key);
        res.slug = key.slice(2, -5);
        return res;
      });
      await commit('setMenuInfos', menu);
    },
  };