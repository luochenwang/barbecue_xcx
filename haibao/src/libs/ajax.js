import Taro from '@tarojs/taro';
import { createCache } from "./globalData";
const globalData = createCache();
// c.set("test", 100);
// console.log(c.get("test"));

const DOMAIN = 'https://campaign5.method-ad.cn/hypertherm/';
export function ajax(options = {}) {
    return new Promise((resolve, reject) => {
        var openid = globalData.get("openid");
        let obj = Object.assign({}, options.data || {}, {openid:openid});
        if(openid){
            getdata(options,obj,resolve,reject);
        }else{
            wx.login({
              success (res) {
                if (res.code) {
                  Taro.request({
                        url: DOMAIN + options.url + '?rndv='+Math.random() + '&act=getOpenid',
                        data: {
                            code:res.code
                        },
                        method:'post',
                        header:{
                            'Content-Type':'application/x-www-form-urlencoded'
                        },
                        success (res) {
                            if(res.data.status == 1){
                                globalData.set('openid',res.data.openid);
                                getdata(options,obj,resolve,reject);
                            }
                        },
                        fail(e){
                            reject(e);
                        }
                    });
                } else {
                  console.log('登录失败！' + res.errMsg)
                }
              }
            });
        }
    })
}


function getdata(options,obj,resolve,reject){
    Taro.request({
        url: DOMAIN + options.url + '?rndv='+Math.random() + '&act='+obj.act,
        data: obj,
        method:'post',
        header:{
            'Content-Type':'application/x-www-form-urlencoded'
        },
        success (res) {
            resolve(res.data);
        },
        fail(e){
            reject(e);
        }
    });
}
