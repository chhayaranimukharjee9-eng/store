// ============================================================
//  Nexus Store — সেটিংস ফাইল
//  ফায়ারবেস চালু করলে অ্যাপগুলো অ্যাডমিন ড্যাশবোর্ড থেকেই ম্যানেজ করবি,
//  তখন নিচের APPS লিস্ট শুধু "শুরুর নমুনা" হিসেবে কাজ করে।
// ============================================================

const STORE = {
  name: "Nexus Store",
  tagline: "The best apps, in one place",

  // 👑 তোর নিজের Gmail (ছোট হাতের অক্ষরে)। এই ইমেইলে লগইন করলেই অ্যাডমিন ড্যাশবোর্ড পাবি
  adminEmail: "",

  // 🔑 শুধু ফায়ারবেস ছাড়া (লোকাল) মোডে লাগে
  adminPin: "1234",

  // 💬 তোর WhatsApp নম্বর, দেশের কোডসহ, যেমন "919876543210"। দিলে "যোগাযোগ" বাটন চালু হবে
  whatsapp: "",

  // ☁️ ফায়ারবেস কনফিগ (সেটআপ গাইডের ধাপ ৫ থেকে কপি করে বসা)। ফাঁকা থাকলে লোকাল মোডে চলবে
  firebase: { apiKey: "", authDomain: "", projectId: "", appId: "" },

  catIcons: { "Fitness": "💪", "Tools": "🛠️", "Games": "🎮", "Education": "📚", "Other": "📦" },

  // স্পেশাল কালেকশন: অ্যাপের id দিয়ে সাজা
  collections: [
    { title: "🏋️ For Gym Owners", ids: ["power-gym", "ascend"] },
    { title: "⚔️ Game-style Fitness",   ids: ["solo-leveling", "ascend"] }
  ]
};

// শুরুর নমুনা অ্যাপ। link: "#" বদলে আসল লিংক দিস।
// icon / banner / screenshots: ছবির লিংক (https://...) অথবা assets.js-এর তৈরি ছবি ("img:নাম")।
// নিজের আসল স্ক্রিনশট দিতে চাইলে ছবি কোথাও আপলোড করে তার https:// লিংক এখানে বসা।
// ডাউনলোড/রেটিং ০ থেকে শুরু হয়, আসল ইউজার ব্যবহার করলে নিজে বাড়বে।
const APPS = [
  {
    id: "solo-leveling", name: "Solo Leveling Fitness", dev: "Your Name",
    icon: "img:solo-leveling-icon", banner: "img:solo-leveling-banner", color: ["#7c3aed", "#2563eb"], cat: "Fitness",
    type: "web", link: "#", version: "1.2.0", size: "2 MB", rating: 0,
    downloads: 0, updated: "2026-11-13", featured: true, price: 0, badge: "editor",
    desc: "Do your daily workout and level up",
    long: "A Solo Leveling-style daily quest system. Finish your workout every day, earn XP and turn yourself into the strongest hunter.",
    whatsnew: "Added new daily quests and fixed small bugs.",
    perms: ["No permissions needed"], video: "", screenshots: ["img:solo-leveling-1", "img:solo-leveling-2", "img:solo-leveling-3"]
  },
  {
    id: "power-gym", name: "Power Gym", dev: "Your Name",
    icon: "img:power-gym-icon", banner: "img:power-gym-banner", color: ["#ef4444", "#f97316"], cat: "Fitness",
    type: "web", link: "#", version: "1.0.3", size: "3 MB", rating: 0,
    downloads: 0, updated: "2026-11-08", featured: true, price: 0, badge: "verified",
    desc: "Gym member and payment management app",
    long: "Manage gym members, memberships, payments and attendance in one place. Built for gym owners.",
    whatsnew: "Shows a reminder before a membership expires.",
    perms: ["Saves data (on the phone only)"], video: "", screenshots: ["img:power-gym-1", "img:power-gym-2", "img:power-gym-3"]
  },
  {
    id: "ascend", name: "Ascend", dev: "Your Name",
    icon: "img:ascend-icon", banner: "img:ascend-banner", color: ["#06b6d4", "#3b82f6"], cat: "Fitness",
    type: "web", link: "#", version: "0.9.1", size: "2.5 MB", rating: 0,
    downloads: 0, updated: "2026-11-10", featured: true, price: 0, badge: "new",
    desc: "Anime-style fitness and diet tracker",
    long: "Track your workouts and diet in an anime-game style rank system.",
    whatsnew: "First public version.",
    perms: ["Saves data (on the phone only)"], video: "", screenshots: ["img:ascend-1", "img:ascend-2", "img:ascend-3"]
  },
  {
    id: "promptforge", name: "PromptForge", dev: "Your Name",
    icon: "img:promptforge-icon", banner: "img:promptforge-banner", color: ["#10b981", "#059669"], cat: "Tools",
    type: "web", link: "#", version: "1.1.0", size: "4 MB", rating: 0,
    downloads: 0, updated: "2026-11-11", featured: false, price: 0, badge: "hot",
    desc: "3D AI prompt generator",
    long: "Type any idea and it builds a great AI prompt for you.",
    whatsnew: "3D animation is smoother now.",
    perms: ["Internet"], video: "", screenshots: ["img:promptforge-1", "img:promptforge-2", "img:promptforge-3"]
  }
];
