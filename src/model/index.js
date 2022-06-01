export class Helper {

    // Detail
    // 午前00:00 . YYYY年MM月DD日 . Twitter Web App
    static currentDateFullString(){
        let dt = new Date();

        let year = dt.getFullYear();
        let month = dt.getMonth()+1;
        let date = dt.getDate();
        let hour24 = dt.getHours().toString().padStart(2, "0");
        let minutes = dt.getMinutes().toString().padStart(2, "0");

        let hour12 = hour24 % 12;

        let hourStr = hour24 < 12 ? "午前" : "午後";

        let dateString = ` ${hourStr} ${hour12}:${minutes}・${year}年${month}月${date}日`;

        return dateString;
    }





}