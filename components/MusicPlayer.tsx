"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaRedoAlt } from "react-icons/fa";
import Image from "next/image";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [showVolume, setShowVolume] = useState(false);
  
  // NEW: Track if user is currently dragging the slider
  const [isDragging, setIsDragging] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      // ONLY update state if the user is NOT dragging
      if (!isDragging) {
        setCurrentTime(audio.currentTime);
      }
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
      audio.volume = 0.5;
    };
    
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    
    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [isDragging]); // Add isDragging to dependencies

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // 1. When user starts dragging
  const handleSeekStart = () => {
    setIsDragging(true);
  };

  // 2. While user is dragging (updates visual slider only)
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
  };

  // 3. When user releases (updates actual audio)
  const handleSeekEnd = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = currentTime;
    }
    setIsDragging(false);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const handleRestart = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      setCurrentTime(0);
      if (!isPlaying) {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <motion.section
      id="music"
      className="min-h-screen flex items-center justify-center p-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="max-w-md w-full"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-light text-rose-600 mb-8 text-center">
          While we wait for Tuesday...
        </h2>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-pink-200">
          <div className="w-full aspect-square rounded-lg mb-6 overflow-hidden relative">
            <Image 
              src="/pasilyo.jpg" 
              alt="Pasilyo album cover"
              fill
              className="object-cover"
            />
          </div>

          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Pasilyo
            </h3>
            <p className="text-lg text-gray-500">
              Sunkissed Lola
            </p>
          </div>

          {/* UPDATED PROGRESS BAR */}
          <div className="mb-4">
            <input
              type="range"
              min="0"
              max={duration || 100} // prevent max=0 if loading
              value={currentTime}
              onMouseDown={handleSeekStart} // Start Drag
              onTouchStart={handleSeekStart} // Start Drag (Mobile)
              onChange={handleSeek}         // Visual Update
              onMouseUp={handleSeekEnd}     // Commit Change
              onTouchEnd={handleSeekEnd}    // Commit Change (Mobile)
              className="w-full h-2 bg-pink-200 rounded-lg cursor-pointer accent-rose-500"
            />
            
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          <div className="flex justify-center items-center gap-6 mb-6">
            <div className="relative">
              <motion.button
                onClick={() => setShowVolume(!showVolume)}
                className="w-12 h-12 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center hover:bg-rose-200 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {volume === 0 ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
              </motion.button>

              <AnimatePresence>
                {showVolume && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white rounded-lg shadow-xl p-4 border border-pink-200 w-16"
                  >
                    <div className="flex flex-col items-center gap-4">
                      <span className="text-xs text-gray-500 font-medium">
                        {Math.round(volume * 100)}%
                      </span>
                      <div className="h-32 flex items-center justify-center">
                        {/* Updated Volume Slider as well */}
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.01"
                          value={volume}
                          onChange={handleVolumeChange}
                          className="w-32 h-2 bg-pink-200 rounded-lg cursor-pointer accent-rose-500 -rotate-90 origin-center"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.button
              onClick={togglePlay}
              className="w-16 h-16 rounded-full bg-rose-500 text-white flex items-center justify-center shadow-lg hover:bg-rose-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} className="ml-1" />}
            </motion.button>

            <motion.button
              onClick={handleRestart}
              className="w-12 h-12 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center hover:bg-rose-200 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaRedoAlt size={20} />
            </motion.button>
          </div>

          <audio
            ref={audioRef}
            src="/pasilyo.mp3"
            onEnded={() => setIsPlaying(false)}
          />
        </div>
      </motion.div>
    </motion.section>
  );
}