export function createCache() {
    const globalData = {
      
    };
    return {
      set(key, val) {
        globalData[key] = val;
      },
      get(key) {
        return  globalData[key];
      }
    }
  }
  