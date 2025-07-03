import React, {useState} from "react";
import {forumThreads} from "@/Utils/dummyData";

const ForumPage = () => {
const [threads, setThreads] = useState(forumThreads);
  const [search, setSearch] = useState("");
  const [selectedThread, setSelectedThread] = useState(null);
  const [newReply, setNewReply] = useState("");

  const filteredThreads = threads.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleReply = () => {
    if (!newReply.trim()) return;

    const updated = threads.map((t) => {
      if (t.id === selectedThread.id) {
        return {
          ...t,
          replies: [
            ...t.replies,
            { id: Date.now(), author: "Saya", content: newReply },
          ],
        };
      }
      return t;
    });

    setThreads(updated);
    setNewReply("");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Forum Diskusi</h2>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Cari topik..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 w-full mb-4 rounded"
      />

      {/* Thread list */}
      <div className="grid gap-4 mb-8">
        {filteredThreads.map((thread) => (
          <div
            key={thread.id}
            className="border p-4 rounded cursor-pointer hover:bg-gray-50"
            onClick={() => setSelectedThread(thread)}
          >
            <h3 className="font-semibold text-lg">{thread.title}</h3>
            <p className="text-sm text-gray-600">
              oleh {thread.author} · Kategori: {thread.category}
            </p>
            <div className="text-sm mt-2 text-gray-700">
              {thread.content.slice(0, 100)}...
            </div>
            <div className="mt-1 text-xs text-blue-600">
              Tag: {thread.tags.join(", ")}
            </div>
          </div>
        ))}
      </div>

      {/* Thread detail & reply */}
      {selectedThread && (
        <div className="border-t pt-4">
          <h3 className="text-xl font-semibold mb-2">
            {selectedThread.title}
          </h3>
          <p className="text-sm mb-2 text-gray-700">
            {selectedThread.content}
          </p>

          <h4 className="mt-4 font-semibold">Balasan:</h4>
          <ul className="list-disc ml-6 mb-2">
            {selectedThread.replies.map((r) => (
              <li key={r.id}>
                <span className="font-semibold">{r.author}</span>: {r.content}
              </li>
            ))}
          </ul>

          <textarea
            className="border w-full p-2 mt-2 rounded"
            rows="2"
            placeholder="Tulis balasan..."
            value={newReply}
            onChange={(e) => setNewReply(e.target.value)}
          ></textarea>
          <button
            onClick={handleReply}
            className="mt-2 bg-blue-600 text-white px-4 py-2 rounded"
          >
            Kirim Balasan
          </button>
        </div>
      )}
    </div>
  );
  
};

export default ForumPage;
