const reduce = () => {
    const now = new Date(); //當下時間
    const start = new Date('2023/11/13 11:00:00'); //倒數計時開始時間
    const end = new Date('2023/11/15 23:59:59'); //倒數計時結束時間
    const A = Math.floor(now.getTime() - start.getTime()); //當下已消耗時間量
    const C = Math.floor(end.getTime() - start.getTime()); //全部的時間量

    if( A > 0 ){
        const B = C - A; //全部的時間量 減去 當下已消耗時間量 等於 還剩下的時間量
        const resPeople = Math.ceil( 82 * (B/C)); // 200人 乘以 還剩下的時間量的佔比 得出 還剩下的人數
        // 當人數小於5人時，還是顯示剩下5人
        if(resPeople < 5){
            document.querySelector('.people-number').textContent = 5;
        }else{
            document.querySelector('.people-number').textContent = String(resPeople);
        }
    }
}
// 改成每秒鐘更新一次，提升網頁效能
setInterval(reduce, 1000);