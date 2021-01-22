export function createCache() {
    const globalData = {
      
    };
    return {
      set(key, val) {
        globalData[key] = val;
        wx.setStorageSync(key, val);
      },
      get(key) {
        return wx.getStorageSync(key) || '';
      }
    }
  }
  