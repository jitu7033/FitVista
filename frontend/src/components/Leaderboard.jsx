import React, { useEffect, useState } from "react";
import { Trophy } from "lucide-react";

export default function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState([]);

  // Fetch leaderboard data from the backend
  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/leaderboard/top");
        const data = await response.json();
        setLeaderboardData(data);
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <div className="fixed h-[100vh] w-[100vw] bg-violet-200 flex justify-center items-center">
      <div className="w-[90vw] mt-8 mb-8 max-w-4xl p-6 bg-violet-900 text-white rounded-lg border border-gray-800">
        <h2 className="text-4xl font-extrabold text-white mb-6 text-left tracking-wide">🏆 Leaderboard</h2>

        <div className="overflow-y-auto overflow-x-auto max-h-[400px] no-scrollbar">
          <table className="min-w-full table-auto text-white">
            <thead className="bg-violet-500 text-lg font-semibold text-white rounded-t-lg">
              <tr>
                <th className="px-6 py-4 text-left">Rank</th>
                <th className="px-6 py-4 text-left">Player</th>
                <th className="px-6 py-4 text-right">Score</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((player, index) => (
                <tr
                  key={index}
                  className={`transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-600 ${
                    index < 3 ? "bg-gray-900" : "bg-gray-800"
                  }`}
                >
                  <td className="px-6 py-4 flex items-center gap-4 text-lg font-medium">
                    {index < 3 && <Trophy className="text-yellow-500" size={24} />} #{index + 1}
                  </td>
                  <td className="px-6 py-4 text-lg font-semibold">{player.email}</td>
                  <td className="px-6 py-4 text-right text-lg font-bold">{player.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-left text-gray-400 mt-6 text-sm">
          Top players are highlighted with a trophy icon and vibrant gradient backgrounds!
        </p>
      </div>
    </div>
  );
}
