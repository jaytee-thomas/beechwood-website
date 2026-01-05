'use client';

import { useState } from 'react';
import { Clock, User, Calendar } from 'lucide-react';

const schedule = [
  { time: '9 AM', mon: 'Alice', tue: 'Bob', wed: 'Alice', thu: 'Carol', fri: 'Bob' },
  { time: '12 PM', mon: 'Bob', tue: 'Carol', wed: 'Bob', thu: 'Alice', fri: 'Carol' },
  { time: '3 PM', mon: 'Carol', tue: 'Alice', wed: 'Carol', thu: 'Bob', fri: 'Alice' },
  { time: '6 PM', mon: 'Alice', tue: 'Bob', wed: 'Alice', thu: 'Carol', fri: 'Bob' },
];

const employees = [
  { name: 'Alice', color: 'bg-purple-500/20 border-purple-500/50 text-purple-400' },
  { name: 'Bob', color: 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400' },
  { name: 'Carol', color: 'bg-yellow-500/20 border-yellow-500/50 text-yellow-400' },
];

export default function ClockWorkDemo() {
  const [selectedCell, setSelectedCell] = useState<string | null>(null);

  return (
    <div className="min-h-full bg-gradient-to-br from-orange-900/20 to-purple-900/20 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-black text-white mb-2">AI-Optimized Schedule</h3>
          <p className="text-gray-400">This week's workforce schedule</p>
        </div>

        {/* Schedule Grid */}
        <div className="bg-[#0a0a1f]/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 mb-6 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left text-gray-400 font-bold pb-4 pr-4">Time</th>
                <th className="text-center text-gray-400 font-bold pb-4 px-2">Mon</th>
                <th className="text-center text-gray-400 font-bold pb-4 px-2">Tue</th>
                <th className="text-center text-gray-400 font-bold pb-4 px-2">Wed</th>
                <th className="text-center text-gray-400 font-bold pb-4 px-2">Thu</th>
                <th className="text-center text-gray-400 font-bold pb-4 px-2">Fri</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((row, i) => (
                <tr key={i}>
                  <td className="text-gray-300 font-bold py-2 pr-4">{row.time}</td>
                  {['mon', 'tue', 'wed', 'thu', 'fri'].map((day) => {
                    const employee = row[day as keyof typeof row];
                    const emp = employees.find(e => e.name === employee);
                    const cellId = `${day}-${i}`;
                    return (
                      <td key={day} className="px-2 py-2">
                        <button
                          onClick={() => setSelectedCell(cellId)}
                          className={`w-full px-3 py-2 rounded-lg border ${emp?.color} font-bold text-sm transition-all hover:scale-105 ${
                            selectedCell === cellId ? 'ring-2 ring-purple-500' : ''
                          }`}
                        >
                          {employee}
                        </button>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Employee Legend */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {employees.map((emp) => (
            <div key={emp.name} className={`border rounded-xl p-4 ${emp.color}`}>
              <div className="flex items-center gap-2 mb-2">
                <User className="w-5 h-5" />
                <span className="font-bold">{emp.name}</span>
              </div>
              <div className="text-sm opacity-75">20 hrs this week</div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
            <Clock className="w-8 h-8 text-green-400 mb-3" />
            <div className="text-3xl font-black text-white mb-1">30%</div>
            <div className="text-sm text-gray-400">Faster Scheduling</div>
          </div>
          <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6">
            <Calendar className="w-8 h-8 text-purple-400 mb-3" />
            <div className="text-3xl font-black text-white mb-1">15%</div>
            <div className="text-sm text-gray-400">Cost Reduction</div>
          </div>
        </div>
      </div>
    </div>
  );
}



