// class swipeges{
//     async swipegesture(){
//         async function swipe(startX, startY, endX, endY) {
//             await browser.performActions([{
//                 type: 'pointer',
//                 id: 'finger1',
//                 parameters: { pointerType: 'touch' },
//                 actions: [
//                     { type: 'pointerMove', duration: 0, x: startX, y: startY },
//                     { type: 'pointerDown', button: 0 },
//                     { type: 'pointerMove', duration: 1000, x: endX, y: endY },
//                     { type: 'pointerUp', button: 0 }
//                 ]
//             }]);
//         }
        
//         async function tap(x, y) {
//             await browser.performActions([{
//                 type: 'pointer',
//                 id: 'finger1',
//                 parameters: { pointerType: 'touch' },
//                 actions: [
//                     { type: 'pointerMove', duration: 0, x, y },
//                     { type: 'pointerDown', button: 0 },
//                     { type: 'pointerUp', button: 0 }
//                 ]
//             }]);
//             await browser.releaseActions();
//         }
    
    
        
        
//     }
// }
// module.exports=new swipeges();