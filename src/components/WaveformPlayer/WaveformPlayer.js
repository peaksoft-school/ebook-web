import React, { useEffect, useRef, useState } from "react";
import classes from './WaveformPlayer.module.css'
import WaveSurfer from "wavesurfer.js";
import PauseIcon from "../PauseIcon/PauseIcon";
import PlayIcon from "../PlayIcon/PlayIcon";

const formWaveSurferOptions = ref => ({
  container: ref,
  progressColor: "OrangeRed",
  waveColor:"#969696",
  cursorColor: "#00000000",
  barWidth: 0.5,
  responsive: true,
  barGap:2,
  height: 30,
  normalize: true,
  partialRender: true
});

const WaveformPlayer =({ url, time })=> {
  const waveformPlayerRef = useRef(null);
  const wavesurfer = useRef(null);
  const [playing, setPlay] = useState(false);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    setPlay(false);
    const options = formWaveSurferOptions(waveformPlayerRef.current);
    wavesurfer.current = WaveSurfer.create(options);
    wavesurfer.current.load(url);
    wavesurfer.current.on("ready", function() {
      if (wavesurfer.current) {
        wavesurfer.current.setVolume(volume);
        setVolume(volume);
      }
    });
    return () => wavesurfer.current.destroy();
  }, [url]);

  const playHundler = () => {
    setPlay(true);
    wavesurfer.current.playPause();
  };

  const pauseHundler = () => {
    setPlay(false);
    wavesurfer.current.playPause();
  };

  return <div className={classes.containerForAudioPlayer}>
    <div className="controls">
      {playing && <PauseIcon onClick={pauseHundler}/>}
      {!playing &&<PlayIcon onClick={playHundler}/>}
    </div>
    <div className={classes.waveformContainer}>
      <div id="waveformPlayer" ref={waveformPlayerRef} />
    </div>
    <div className={classes.time}>{time}</div>
  </div>

}
export default WaveformPlayer