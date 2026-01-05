'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, MapPin, Phone, AlertCircle, CheckCircle } from 'lucide-react';

export default function BeaconDemo() {
  const [isEmergency, setIsEmergency] = useState(false);
  const [alertSent, setAlertSent] = useState(false);

  const handleEmergency = () => {
    setIsEmergency(true);
    setTimeout(() => setAlertSent(true), 2000);
  };

  const handleReset = () => {
    setIsEmergency(false);
    setAlertSent(false);
  };

  return (
    <div className="flex items-center justify-center min-h-full p-8 bg-gradient-to-br from-red-900/20 to-purple-900/20">
      <div className="max-w-md w-full">
        {!isEmergency ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center space-y-8"
          >
            <div className="mb-8">
              <Shield className="w-24 h-24 text-red-500 mx-auto mb-4" />
              <h3 className="text-3xl font-black text-white mb-2">Emergency Alert</h3>
              <p className="text-gray-400">Tap the button to send instant alert to first responders</p>
            </div>

            <button
              onClick={handleEmergency}
              className="w-64 h-64 mx-auto bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center shadow-2xl shadow-red-500/50 hover:shadow-red-500/70 transition-all transform hover:scale-105 active:scale-95"
            >
              <span className="text-white text-2xl font-black">EMERGENCY</span>
            </button>

            <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
              <MapPin className="w-4 h-4" />
              <span>Location: Nashville, TN</span>
            </div>
          </motion.div>
        ) : !alertSent ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center space-y-8"
          >
            <AlertCircle className="w-24 h-24 text-red-500 mx-auto animate-pulse" />
            <h3 className="text-3xl font-black text-white">Sending Alert...</h3>
            <div className="space-y-4">
              <div className="bg-[#0a0a1f]/50 border border-red-500/30 rounded-lg p-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <span>Contacting local authorities...</span>
                </div>
              </div>
              <div className="bg-[#0a0a1f]/50 border border-red-500/30 rounded-lg p-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <span>Sharing your exact location...</span>
                </div>
              </div>
              <div className="bg-[#0a0a1f]/50 border border-red-500/30 rounded-lg p-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <span>Notifying emergency contacts...</span>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center space-y-8"
          >
            <CheckCircle className="w-24 h-24 text-green-500 mx-auto" />
            <h3 className="text-3xl font-black text-white">Alert Sent!</h3>
            <div className="space-y-4">
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
                <p className="text-green-400 font-bold mb-2">Help is on the way</p>
                <p className="text-gray-400 text-sm">First responders have been notified and are en route to your location.</p>
              </div>
              <div className="bg-[#0a0a1f]/50 border border-purple-500/30 rounded-lg p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Response Time:</span>
                  <span className="text-white font-bold">~4 minutes</span>
                </div>
              </div>
              <div className="bg-[#0a0a1f]/50 border border-purple-500/30 rounded-lg p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Location Accuracy:</span>
                  <span className="text-white font-bold">±8 meters</span>
                </div>
              </div>
            </div>
            <button
              onClick={handleReset}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-bold transition-all"
            >
              Reset Demo
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
