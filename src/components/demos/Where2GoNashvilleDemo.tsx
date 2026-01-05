'use client';

import { useState } from 'react';
import { MapPin, Music, Calendar, Clock } from 'lucide-react';

const mockEvents = [
  {
    name: 'Live Music at The Bluebird Cafe',
    venue: 'Bluebird Cafe',
    type: 'Live Music',
    time: 'Tonight 8:00 PM',
    distance: '0.8 mi',
    icon: '🎸'
  },
  {
    name: 'Food Truck Festival',
    venue: 'Centennial Park',
    type: 'Food & Drink',
    time: 'Today 5:00 PM',
    distance: '1.2 mi',
    icon: '🍔'
  },
  {
    name: 'Honky Tonk Tuesday',
    venue: 'Tootsies Orchid Lounge',
    type: 'Live Music',
    time: 'Tonight 9:00 PM',
    distance: '2.1 mi',
    icon: '🎵'
  },
  {
    name: 'Comedy Show',
    venue: 'Zanies Nashville',
    type: 'Entertainment',
    time: 'Tonight 7:30 PM',
    distance: '1.5 mi',
    icon: '😂'
  }
];

export default function Where2GoNashvilleDemo() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  return (
    <div className="min-h-full bg-gradient-to-br from-yellow-900/20 to-purple-900/20 p-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-black text-white mb-2">Tonight in Nashville</h3>
          <p className="text-gray-400">Real-time events happening now</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {mockEvents.map((event, index) => (
            <button
              key={index}
              onClick={() => setSelectedEvent(index)}
              className={`bg-[#0a0a1f]/50 backdrop-blur-sm border rounded-2xl p-6 text-left hover:border-yellow-500/50 transition-all transform hover:scale-105 ${
                selectedEvent === index ? 'border-yellow-500/50 ring-2 ring-yellow-500/20' : 'border-purple-500/30'
              }`}
            >
              <div className="text-4xl mb-3">{event.icon}</div>
              <h4 className="font-bold text-white mb-2">{event.name}</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>{event.venue}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs">
                    {event.type}
                  </span>
                  <span className="text-gray-500 text-xs">{event.distance} away</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {selectedEvent !== null && (
          <div className="mt-8 bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-6 h-6 text-yellow-400" />
              <span className="font-bold text-white">Event Details</span>
            </div>
            <p className="text-gray-300 mb-4">
              {mockEvents[selectedEvent].name} at {mockEvents[selectedEvent].venue}
            </p>
            <button className="w-full px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg font-bold hover:shadow-lg hover:shadow-yellow-500/50 transition-all">
              Get Directions
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

