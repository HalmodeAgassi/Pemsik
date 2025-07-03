export const modules = [
    {id: 1,  title: 'React Dasar', status: 'selesai' },
    {id: 2,  title: 'React Lanjutan', status: 'belum selesai' },
    {id: 3,  title: 'React Hooks', status: 'selesai' },
    {id: 4,  title: 'React Router', status: 'belum selesai' },
    {id: 5,  title: 'React Context', status: 'selesai' },
    {id: 6,  title: 'React Redux', status: 'belum selesai' },
    {id: 7,  title: 'React Testing', status: 'selesai' },
    {id: 8,  title: 'React Performance', status: 'belum selesai' },
    {id: 9,  title: 'React Native', status: 'selesai' },
    {id: 10, title: 'React Native Lanjutan', status: 'belum selesai' },
];

export const quizzes = [
    {id: 1, question: 'apa itu React?', options: ['Library', 'Framework', 'Language', 'Database'], answer: 'Library'},
    {id: 2, question: 'apa itu JSX?', options: ['JavaScript XML', 'JavaScript XSS', 'JavaScript XSS', 'JavaScript XSS'], answer: 'JavaScript XML'},
    {id: 3, question: 'apa itu state?', options: ['Data', 'Komponen', 'Props', 'Event'], answer: 'Data'},
    {id: 4, question: 'apa itu props?', options: ['Data', 'Komponen', 'State', 'Event'], answer: 'Data'},
    {id: 5, question: 'apa itu komponen?', options: ['Bagian dari UI', 'Bagian dari State', 'Bagian dari Props', 'Bagian dari Event'], answer: 'Bagian dari UI'},
    {id: 6, question: 'apa itu event?', options: ['Aksi pengguna', 'Data', 'Komponen', 'Props'], answer: 'Aksi pengguna'},
    {id: 7, question: 'apa itu React Router?', options: ['Routing', 'State Management', 'Komponen', 'Props'], answer: 'Routing'},
    {id: 8, question: 'apa itu React Hooks?', options: ['Fitur baru', 'State Management', 'Komponen', 'Props'], answer: 'Fitur baru'},
    {id: 9, question: 'apa itu React Context?', options: ['State Management', 'Komponen', 'Props', 'Event'], answer: 'State Management'},
    {id: 10, question: 'apa itu React Redux?', options: ['State Management', 'Komponen', 'Props', 'Event'], answer: 'State Management'},
];

export const achievements = [
    {id: 1, title: 'Belajar React Dasar', description: 'selesai 3 modul', rarity: 'common', progress: 100},
    {id: 2, title: 'Belajar React Lanjutan', description: 'selesai 2 modul', rarity: 'uncommon', progress: 80},
    {id: 3, title: 'Belajar React Hooks', description: 'selesai 1 modul', rarity: 'rare', progress: 60},
    {id: 4, title: 'Belajar React Router', description: 'selesai 1 modul', rarity: 'epic', progress: 40},
    {id: 5, title: 'Belajar React Context', description: 'selesai 1 modul', rarity: 'legendary', progress: 20},
    {id: 6, title: 'Belajar React Redux', description: 'selesai 1 modul', rarity: 'mythic', progress: 10},
    {id: 7, title: 'Belajar React Testing', description: 'selesai 1 modul', rarity: 'common', progress: 100},
    {id: 8, title: 'Belajar React Performance', description: 'selesai 1 modul', rarity: 'uncommon', progress: 80},
    {id: 9, title: 'Belajar React Native', description: 'selesai 1 modul', rarity: 'rare', progress: 60},
    {id: 10, title: 'Belajar React Native Lanjutan', description: 'selesai 1 modul', rarity: 'epic', progress: 40},
];

export const learningProgress = [
  { week: "Week 1", progress: 25 },
  { week: "Week 2", progress: 50 },
  { week: "Week 3", progress: 70 },
  { week: "Week 4", progress: 90 },
];

export const categoryTime = [
  { category: "Programming", time: 5 },
  { category: "Database", time: 3 },
  { category: "Network", time: 2 },
];

export const moduleStatus = [
  { status: "Selesai", value: 6 },
  { status: "Sedang Berjalan", value: 2 },
  { status: "Belum Dimulai", value: 2 },
];

export const areaData = [
  { day: "Senin", hours: 1 },
  { day: "Selasa", hours: 1.5 },
  { day: "Rabu", hours: 2 },
  { day: "Kamis", hours: 0.5 },
  { day: "Jumat", hours: 1 },
];

export const radarData = [
  { subject: "Programming", score: 90 },
  { subject: "Database", score: 70 },
  { subject: "Network", score: 50 },
  { subject: "UI/UX", score: 60 },
  { subject: "Softskill", score: 80 },
];

export const forumThreads = [
  {
    id: 1,
    category: "Pemrograman",
    author: "Agus",
    title: "Bagaimana cara pakai useEffect?",
    content: "Saya bingung kapan sebaiknya useEffect digunakan.",
    replies: [
      { id: 1, author: "Budi", content: "Gunakan ketika ingin efek samping setelah render." },
    ],
    tags: ["react", "hooks"],
    pinned: false,
    solved: false,
  },
  {
    id: 2,
    category: "Database",
    author: "Rina",
    title: "Normalisasi database",
    content: "Apa perbedaan 2NF dan 3NF?",
    replies: [],
    tags: ["mysql", "normalisasi"],
    pinned: false,
    solved: false,
  },
];

export const students = [
  { name: "Andi", score: 80, progress: 90, hours: 4 },
  { name: "Budi", score: 60, progress: 50, hours: 2 },
  { name: "Cici", score: 45, progress: 30, hours: 1 },
  { name: "Dina", score: 90, progress: 100, hours: 5 },
];

export const contents = [
  { title: "React Dasar", views: 150 },
  { title: "State Management", views: 50 },
  { title: "Database Normalisasi", views: 20 },
];

