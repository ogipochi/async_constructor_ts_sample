/**
 * GeoLocationAPIを利用して緯度・軽度の情報を取得して
 * 位置情報を扱うクラス
 */
 export class MyGeolocationData {
    // 緯度
    private latitude: number;
    // 軽度
    private longitude: number;

    /**
     * コンストラクタ
     * 現在の緯度と軽度を取得してプロパティにセットして
     * 現在の緯度経度をコンソールに出力
     */
    constructor(){
    }


    /**
     * 初期化処理をPromiseで処理
     * @returns 
     */
    init = () => {
        return new Promise<void>((resolve, reject) => {
            navigator.geolocation.getCurrentPosition((position) => {
                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude;      
                this.logInfo("INIT"); 
                resolve();   
            },(err) =>{
                reject(err);
            }); 
        });
    }

    /**
     * 指定された緯度・軽度分移動した後、現在の緯度軽度をコンソールに出力
     * @param addedLongitude 
     * @param addedLatitude 
     */
    move = (addedLongitude: number, addedLatitude: number) => {
        this.longitude += addedLongitude;
        this.latitude += addedLatitude;

        this.logInfo("MOVE");
    }

    /**
     * 情報をコンソールログに出力する
     */
    logInfo = (signature: string) => {
        console.log(`【${signature}】lng = ${this.longitude}, lat = ${this.latitude}`);
    }
}


