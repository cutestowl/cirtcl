class AudioManager {
    constructor() {
        // 建立音訊環境
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        this.bgmBuffer = null;
        this.bgmSource = null;
        this.startTime = 0; // 音樂開始播放的硬體時間點
    }

    // 載入音樂檔案並解碼
    async loadAudio(bgmUrl) {
        const response = await fetch(bgmUrl);
        const arrayBuffer = await response.arrayBuffer();
        
        // 解碼成記憶體緩衝區
        this.bgmBuffer = await this.ctx.decodeAudioData(arrayBuffer);
    }

    // 播放音樂
    playBGM() {
        if (!this.bgmBuffer) return;

        // 每次播放都要重新建立 Source 節點
        this.bgmSource = this.ctx.createBufferSource();
        this.bgmSource.buffer = this.bgmBuffer;
        this.bgmSource.connect(this.ctx.destination);

        // 記錄硬體時鐘的當前時間
        this.startTime = this.ctx.currentTime;
        
        // 立即播放
        this.bgmSource.start(0);
        return Date.now();
    }

    // 獲取音樂精確播放秒數 (取代 Date.now() 或 performance.now())
    getCurrentTime() {
        if (this.startTime === 0) return 0;
        return this.ctx.currentTime - this.startTime;
    }

    // 停止音樂
    stopBGM() {
        if (this.bgmSource) {
            this.bgmSource.stop();
            this.startTime = 0;
        }
    }
}

const audio = new AudioManager();
