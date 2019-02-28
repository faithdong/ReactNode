/*
 * @Author: zhongxd 
 * @Date: 2019-02-28 18:22:32 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2019-02-28 19:42:21
 */


export function getRedirectPath({ type, avatar }) {
  let url = (type === 'boss') ? '/boss' : '/genius';
  if (!avatar) {
    url += 'info';
  }
  return url;
}