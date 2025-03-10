
import React, { useState, useEffect, useRef } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as poseDetection from '@tensorflow-models/pose-detection';

export default function SitUpCounter() {
  const [count, setCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isRunning, setIsRunning] = useState(false);
  const [selectedTime, setSelectedTime] = useState(60);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const detectorRef = useRef(null);
  const lastPositionRef = useRef('standing'); // Tracks the user's position
  const lastCountTimeRef = useRef(0); // Debounce mechanism

  useEffect(() => {
    const loadModel = async () => {
      await tf.ready();
      detectorRef.current = await poseDetection.createDetector(poseDetection.SupportedModels.MoveNet);
      startCamera();
    };
    loadModel();
  }, []);

  useEffect(() => {
    let interval;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  useEffect(() => {
    let animationFrameId;
    const detect = async () => {
      if (!detectorRef.current || !videoRef.current) return;

      const poses = await detectorRef.current.estimatePoses(videoRef.current);
      if (poses.length > 0) {
        const keypoints = poses[0].keypoints;
        const leftShoulder = keypoints.find(p => p.name === 'left_shoulder');
        const rightShoulder = keypoints.find(p => p.name === 'right_shoulder');
        const leftHip = keypoints.find(p => p.name === 'left_hip');
        const rightHip = keypoints.find(p => p.name === 'right_hip');
        const leftKnee = keypoints.find(p => p.name === 'left_knee');
        const rightKnee = keypoints.find(p => p.name === 'right_knee');
        const leftAnkle = keypoints.find(p => p.name === 'left_ankle');
        const rightAnkle = keypoints.find(p => p.name === 'right_ankle');

        if (
          leftShoulder &&
          rightShoulder &&
          leftHip &&
          rightHip &&
          leftKnee &&
          rightKnee &&
          leftAnkle &&
          rightAnkle
        ) {
          // Calculate average Y positions for shoulders, hips, knees, and ankles
          const shoulderY = (leftShoulder.y + rightShoulder.y) / 2;
          const hipY = (leftHip.y + rightHip.y) / 2;
          const kneeY = (leftKnee.y + rightKnee.y) / 2;
          const ankleY = (leftAnkle.y + rightAnkle.y) / 2;

          // Calculate vertical distances
          const shoulderHipDistance = Math.abs(shoulderY - hipY);
          const hipKneeDistance = Math.abs(hipY - kneeY);
          const kneeAnkleDistance = Math.abs(kneeY - ankleY);

          // Define thresholds for sit-up detection
          const sitUpThreshold = 50; // Adjust based on user height and camera distance
          const lieDownThreshold = 20; // Adjust based on user height and camera distance

          // Check if the user is in a sit-up position
          if (shoulderHipDistance > sitUpThreshold && hipKneeDistance < lieDownThreshold) {
            if (lastPositionRef.current === 'lying' && Date.now() - lastCountTimeRef.current > 1000) {
              lastPositionRef.current = 'sitting';
            }
          } else if (shoulderHipDistance < lieDownThreshold && hipKneeDistance > sitUpThreshold) {
            if (lastPositionRef.current === 'sitting') {
              setCount((prev) => prev + 1);
              lastPositionRef.current = 'lying';
              lastCountTimeRef.current = Date.now(); // Debounce
            }
          }
        }
      }

      drawPose(poses);
      animationFrameId = requestAnimationFrame(detect);
    };

    if (isRunning) {
      detect();
    } else {
      cancelAnimationFrame(animationFrameId);
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [isRunning]);

  const drawPose = (poses) => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    poses.forEach(({ keypoints }) => {
      keypoints.forEach((point) => {
        if (point.score > 0.3) {
          ctx.beginPath();
          ctx.arc(point.x, point.y, 5, 0, 2 * Math.PI);
          ctx.fillStyle = 'yellow';
          ctx.fill();
        }
      });
    });
  };
  const startCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoRef.current.srcObject = stream;
  };

  const startTimer = () => {
    setCount(0);
    setTimeLeft(selectedTime);
    setIsRunning(true);
  };

  const stopTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setCount(0);
    setTimeLeft(selectedTime);
    setIsRunning(false);
  };

  return (
    <div className="mt-30 flex flex-col items-center justify-center space-y-4 p-4">
      <h2 className="text-2xl font-bold">SQUAT COUNTER</h2>
      <div className="relative w-120 h-95 border rounded-md overflow-hidden">
        <video ref={videoRef} autoPlay playsInline className="absolute top-0 left-0 w-full h-full" />
        <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" width="640" height="480" />
      </div>
      <div className="flex space-x-4 items-center">
        <select value={selectedTime} onChange={(e) => setSelectedTime(Number(e.target.value))} className="p-2 border rounded-md">
          <option value={60}>1 Minute</option>
          <option value={120}>2 Minutes</option>
          <option value={180}>3 Minutes</option>
        </select>
        <button onClick={startTimer} className="px-4 py-2 bg-blue-500 text-white font-bold rounded-md shadow-md">Start</button>
        <button onClick={stopTimer} className="px-4 py-2 bg-yellow-500 text-white font-bold rounded-md shadow-md">Stop</button>
        <button onClick={resetTimer} className="px-4 py-2 bg-red-500 text-white font-bold rounded-md shadow-md">Reset</button>
      </div>
      <div className="text-center space-y-2">
        <div className="text-lg font-bold">Time Left: {timeLeft}s</div>
        <div className="text-2xl font-bold text-yellow-500">Squats: {count}</div>
      </div>
    </div>
  );
}