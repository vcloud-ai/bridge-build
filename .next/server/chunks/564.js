exports.id = 564;
exports.ids = [564];
exports.modules = {

/***/ 7564:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const {
  spawn
} = __webpack_require__(2081);

const moment = __webpack_require__(2245);

const terminate = __webpack_require__(7987);

const {
  getCameraById
} = __webpack_require__(1546);

const ffmpegVersion = process.env.FFMPEG_VERSION || 4;

class StreamsHandler {
  constructor() {
    _defineProperty(this, "addStream", deviceInfo => {
      const isAdded = global.streams.find(stream => stream.info.id === deviceInfo.id);
      if (isAdded) return;
      const stream = new Streamer(deviceInfo);
      global.streams.push(stream);
      stream.init();
    });

    _defineProperty(this, "destroyStream", async id => {
      const stream = global.streams.find(stream => stream.info.id === id);
      if (!stream) return;
      await stream.stop();
      global.streams = global.streams.filter(stream => stream.info.id !== id);
    });

    _defineProperty(this, "updateStream", async id => {
      const stream = global.streams.find(stream => stream.info.id === id);
      if (!stream) return;
      await stream.update();
    });
  }

}

class Streamer {
  constructor(deviceInfo) {
    this.info = deviceInfo;
    this.streamProcess = null;
    this.isStopped = false;
    this.restartTimeout = null;
    this.streamUrl = null;
    this.publicStreamCheckerInterval = null;
    this.isCheckingPublicStream = false;
  }

  init() {
    this.isStopped = false;
    this.streamUrl = this.info.url;

    if (this.info.secondUrl && !this.info.isMainStream) {
      this.streamUrl = this.info.secondUrl;
    }

    console.log({
      ffmpegVersion: +ffmpegVersion,
      originalUrl: this.streamUrl,
      url: this.info.proxyUrl,
      timestamp: moment().format('YYYY/MM/DD HH:mm:ss')
    });
    const timeoutOpt = +ffmpegVersion < 5 ? '-stimeout' : '-timeout';
    const cmd = ['-rtsp_transport', 'tcp', timeoutOpt, '10000000', '-loglevel', 'error', '-i', unescape(this.streamUrl), '-c', 'copy', '-f', 'rtsp', this.info.proxyUrl];
    this.streamProcess = spawn('ffmpeg', cmd);
    this.streamProcess.stderr.on('data', data => {
      console.log(`camera id ====> ${this.info.id}`);
      console.log(data.toString('utf8'));
    });
    this.streamProcess.stdout.on('data', data => {// console.log(`camera id ====> ${this.info.id}`);
      // console.log(data.toString("utf8"));
    });
    this.publicStreamCheckerInterval = setInterval(this.checkPublicUrl.bind(this), 5 * 1000);
    this.streamProcess.on('close', () => {
      if (this.isStopped) return;
      this.restartTimeout = setTimeout(this.init.bind(this), 15000);
    });
  }

  async checkPublicUrl() {
    // console.log('should check ==> ', !this.isCheckingPublicStream);
    if (this.isCheckingPublicStream) return; // console.log('checking');

    this.isCheckingPublicStream = true;
    const timeoutOpt = +ffmpegVersion < 5 ? '-stimeout' : '-timeout';
    const cmd = `-rtsp_transport tcp -v error ${timeoutOpt} 10000000 -print_format json -show_error ${this.info.proxyUrl}`.split(' ');
    const probeUrl = spawn('ffprobe', cmd); // probeUrl.stderr.on('data', (err) => {
    //   console.log(err.toString('utf8'));
    //   if (err.toString('utf8').includes('unspecified size')) {
    //     // ERROR
    //     console.log('ERROR IN CHECKER');
    //     if (this.isStopped) return;
    //     this.reinit();
    //   }
    // });
    // probeUrl.stdout.on('data', (data) => {
    //   // console.log('checking url validity...');
    //   const result = data.toString('utf8');
    //   // console.log(result);
    //   if (result.includes('error')) {
    //     // ERROR
    //     // console.log('ERROR IN CHECKER ::: camera ===> ', this.info.url);
    //     if (this.isStopped) return;
    //     this.reinit();
    //   }
    // });

    probeUrl.on('close', (code, signal) => {
      // console.log({ code, signal });
      this.isCheckingPublicStream = false;

      if (code) {
        // ERROR
        console.log('ERROR IN CHECKER ::: camera ===> ', this.info.proxyUrl);
        if (this.isStopped) return;
        this.reinit();
      }
    });
  }

  async stop() {
    this.isStopped = true;
    clearTimeout(this.restartTimeout);
    await this.kill();
  }

  async reinit() {
    await this.stop();
    this.init();
  }

  async update() {
    this.info = await getCameraById(this.info.id);
    await this.kill();
  }

  async kill() {
    clearInterval(this.publicStreamCheckerInterval);
    if (!this.streamProcess?.pid) return;
    return new Promise(res => {
      terminate(this.streamProcess.pid, () => {
        this.streamProcess = null;
        res();
      });
    });
  }

}

const streamsHandler = new StreamsHandler();
module.exports = streamsHandler;

/***/ })

};
;