export class JapaneseDate extends Date {
  constructor(dateString: string, timeZone: 'UTC' | 'EST' | 'CST' | 'MST' | 'PST') {
    // Dateコンストラクタを使って元の日付を生成
    const utcDate = new Date(dateString);

    // タイムゾーンに応じたオフセットを計算
    const offsetHours = (() => {
      switch (timeZone) {
        case 'EST':
          return 14; // UTC-5 → UTC+9 (14時間差)
        case 'CST':
          return 15; // UTC-6 → UTC+9 (15時間差)
        case 'MST':
          return 16; // UTC-7 → UTC+9 (16時間差)
        case 'PST':
          return 17; // UTC-8 → UTC+9 (17時間差)
        case 'UTC':
        default:
          return 9; // UTC → JST (9時間差)
      }
    })();

    // 日本時間に変換された日付オブジェクトを生成
    const jstTime = new Date(utcDate.getTime() + offsetHours * 60 * 60 * 1000);

    super(jstTime); // 親クラスのDateに変換後の日本時間を渡す
  }

  toDateTimeString() {
    const year = this.getFullYear();
    const month = String(this.getMonth() + 1).padStart(2, '0');
    const day = String(this.getDate()).padStart(2, '0');
    const hours = String(this.getHours()).padStart(2, '0');
    const minutes = String(this.getMinutes()).padStart(2, '0');
    const seconds = String(this.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
  }

  toDisplayTimeString() {
    const splitTime = this.toLocaleTimeString().split(':');
    const displayTime = splitTime[0] + ':' + splitTime[1];
    return displayTime;
  }
}
