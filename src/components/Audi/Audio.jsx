import React, { useEffect, useRef } from 'react';
const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    // Функция для запуска воспроизведения
    const playVideo = () => {
      videoElement.play().catch((error) => {
        console.error('Автопроигрывание заблокировано:', error);
      });
    };

    // Запуск воспроизведения при монтировании компонента
    playVideo();

    // Очистка: остановка воспроизведения при размонтировании компонента
    return () => {
      videoElement.pause();
      videoElement.currentTime = 0;
    };
  }, []);

  return (
    <video ref={videoRef} src={src} muted playsInline />
  );
};

export default VideoPlayer;