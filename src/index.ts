import {MyGeolocationData as MyGeolocationData1} from "./solution1";
import {MyGeolocationData as MyGeolocationData2} from "./solution2";

// 解決法１の呼び出し
const myGeolocationData1 = new MyGeolocationData1();
// init()での初期化が完了したらmove()を呼び出す
myGeolocationData1.init().then(() => {
    myGeolocationData1.move(2,10);
});


// 解決法２の呼び出し
MyGeolocationData2.init().then(myGeolocationData2 => {
    myGeolocationData2.move(2,10)
});