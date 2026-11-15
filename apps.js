// ============================================================
//  Nexus Store — সেটিংস ফাইল
//  ফায়ারবেস চালু করলে অ্যাপগুলো অ্যাডমিন ড্যাশবোর্ড থেকেই ম্যানেজ করবি,
//  তখন নিচের APPS লিস্ট শুধু "শুরুর নমুনা" হিসেবে কাজ করে।
// ============================================================

const STORE = {
  name: "Nexus Store",
  tagline: "সেরা অ্যাপ, এক জায়গায়",

  // 👑 তোর নিজের Gmail (ছোট হাতের অক্ষরে)। এই ইমেইলে লগইন করলেই অ্যাডমিন ড্যাশবোর্ড পাবি
  adminEmail: "",

  // 🔑 শুধু ফায়ারবেস ছাড়া (লোকাল) মোডে লাগে
  adminPin: "1234",

  // 💬 তোর WhatsApp নম্বর, দেশের কোডসহ, যেমন "919876543210"। দিলে "যোগাযোগ" বাটন চালু হবে
  whatsapp: "",

  // ☁️ ফায়ারবেস কনফিগ (সেটআপ গাইডের ধাপ ৫ থেকে কপি করে বসা)। ফাঁকা থাকলে লোকাল মোডে চলবে
  firebase: { apiKey: "", authDomain: "", projectId: "", appId: "" },

  catIcons: { "ফিটনেস": "💪", "টুলস": "🛠️", "গেম": "🎮", "শিক্ষা": "📚", "অন্যান্য": "📦" },

  // স্পেশাল কালেকশন: অ্যাপের id দিয়ে সাজা
  collections: [
    { title: "🏋️ জিম ওনারদের জন্য", ids: ["power-gym", "ascend"] },
    { title: "⚔️ গেমের মতো ফিটনেস",   ids: ["solo-leveling", "ascend"] }
  ]
};

// শুরুর নমুনা অ্যাপ। link: "#" বদলে আসল লিংক দিস।
// ডাউনলোড/রেটিং ০ থেকে শুরু হয়, আসল ইউজার ব্যবহার করলে নিজে বাড়বে।
const APPS = [
  {
    id: "solo-leveling", name: "Solo Leveling Fitness", dev: "তোর নাম",
    emoji: "⚔️", icon: "", color: ["#7c3aed", "#2563eb"], cat: "ফিটনেস",
    type: "web", link: "#", version: "1.2.0", size: "2 MB", rating: 0,
    downloads: 0, updated: "2026-11-13", featured: true, price: 0, badge: "editor",
    desc: "রোজকার এক্সারসাইজ করে লেভেল আপ কর",
    long: "Solo Leveling স্টাইলের ডেইলি কোয়েস্ট সিস্টেম। প্রতিদিন এক্সারসাইজ শেষ কর, XP জেত, আর নিজেকে সবচেয়ে শক্তিশালী হান্টারে বদলে ফেল।",
    whatsnew: "নতুন ডেইলি কোয়েস্ট যোগ হয়েছে, ছোটখাটো বাগ ঠিক করা হয়েছে।",
    perms: ["কোনো অনুমতি লাগে না"], video: "", screenshots: []
  },
  {
    id: "power-gym", name: "Power Gym", dev: "তোর নাম",
    emoji: "🏋️", icon: "", color: ["#ef4444", "#f97316"], cat: "ফিটনেস",
    type: "web", link: "#", version: "1.0.3", size: "3 MB", rating: 0,
    downloads: 0, updated: "2026-11-08", featured: true, price: 0, badge: "verified",
    desc: "জিম মেম্বার ও পেমেন্ট ম্যানেজমেন্ট অ্যাপ",
    long: "জিমের মেম্বার, মেম্বারশিপ, পেমেন্ট আর হাজিরা এক জায়গায় ম্যানেজ কর। জিম ওনারদের জন্য বানানো।",
    whatsnew: "মেম্বারশিপ শেষ হওয়ার আগে রিমাইন্ডার দেখায়।",
    perms: ["ডাটা সেভ (শুধু ফোনে)"], video: "", screenshots: []
  },
  {
    id: "ascend", name: "Ascend", dev: "তোর নাম",
    emoji: "🔥", icon: "", color: ["#06b6d4", "#3b82f6"], cat: "ফিটনেস",
    type: "web", link: "#", version: "0.9.1", size: "2.5 MB", rating: 0,
    downloads: 0, updated: "2026-11-10", featured: true, price: 0, badge: "new",
    desc: "অ্যানিমে স্টাইল ফিটনেস ও ডায়েট ট্র্যাকার",
    long: "ওয়ার্কআউট আর ডায়েট ট্র্যাক কর অ্যানিমে গেমের মতো র‍্যাঙ্ক সিস্টেমে।",
    whatsnew: "প্রথম পাবলিক ভার্সন।",
    perms: ["ডাটা সেভ (শুধু ফোনে)"], video: "", screenshots: []
  },
  {
    id: "promptforge", name: "PromptForge", dev: "তোর নাম",
    emoji: "🤖", icon: "", color: ["#10b981", "#059669"], cat: "টুলস",
    type: "web", link: "#", version: "1.1.0", size: "4 MB", rating: 0,
    downloads: 0, updated: "2026-11-11", featured: false, price: 0, badge: "hot",
    desc: "৩ডি এআই প্রম্পট জেনারেটর",
    long: "যেকোনো আইডিয়া লিখলেই দারুণ এআই প্রম্পট বানিয়ে দেয়।",
    whatsnew: "৩ডি অ্যানিমেশন আরও স্মুথ হয়েছে।",
    perms: ["ইন্টারনেট"], video: "", screenshots: []
  }
];
