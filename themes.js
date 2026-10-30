/* CHỦ ĐỀ GIAO DIỆN — thêm/bớt/sửa tại đây, không cần đụng index.html.
   Mỗi chủ đề là 1 object trong mảng. Muốn thêm ngày lễ mới: copy 1 khối, đổi id + nội dung.
   - title/subtitle/icon : bảng tên của lịch
   - auto {from,to}      : khoảng ngày "MM-DD" tự bật khi chọn "Tự động theo ngày lễ"
   - vars                : màu & hình dạng ô lịch (khóa nào không khai báo sẽ lấy từ "default")
       --cell-border: viền ô | --radius: bo góc ô (vd '4px 16px 4px 16px') | --task-bg/--task-text: màu khối công việc trong ô
   - fontUrl             : link Google Fonts cho font tiêu đề. PHẢI chọn font có hỗ trợ tiếng Việt (trang fonts.google.com, lọc Language = Vietnamese)
   - fireworks {colors[]} : bật pháo hoa với các màu liệt kê (để null nếu không cần)
   - mark                : biểu tượng đứng trước số việc trong ô
   - decor {emoji[],count}: biểu tượng rơi nhẹ ở nền (để decor:null nếu không cần) */
window.CAL_THEMES = [
  {
    id: 'default', name: 'Mặc định', icon: '📅', title: 'Lịch Công Việc', subtitle: 'Ghi chú & nhắc việc',
    vars: {
      '--bg': '#eef2f7', '--bg2': '#d9e4f3', '--panel': '#ffffff', '--text': '#1f2937', '--muted': '#6b7280',
      '--primary': '#2563eb', '--on-primary': '#ffffff', '--cell': '#ffffff', '--cell-hover': '#eff6ff',
      '--cell-off': '#f1f3f6', '--today': '#fde68a', '--border': '#e2e6ec', '--task-bg': '#dbeafe',
      '--task-text': '#1e3a8a', '--weekend': '#dc2626', '--radius': '8px', '--cell-border': '1px solid #e2e6ec',
      '--font': "'Segoe UI', system-ui, sans-serif", '--title-w': '700', '--font-title': "'Segoe UI', system-ui, sans-serif",
      '--head-bg': 'linear-gradient(135deg,#2563eb,#7c3aed)'
    },
    mark: '📌', decor: null
  },
  {
    id: 'halloween', name: 'Halloween', icon: '🎃', title: 'Lịch Ma Quái', subtitle: 'Việc cần làm kẻo ma bắt!',
    auto: { from: '10-20', to: '11-01' },
    vars: {
      '--bg': '#160d1f', '--bg2': '#2b1240', '--panel': '#2a1838', '--text': '#f6eaff', '--muted': '#b9a2cf',
      '--primary': '#ff7518', '--on-primary': '#1a0f24', '--cell': '#2a1838', '--cell-hover': '#3d2354',
      '--cell-off': '#1e1129', '--today': '#6b3a00', '--border': '#5a3578', '--task-bg': '#ff7518',
      '--task-text': '#1a0f24', '--weekend': '#ffa45c', '--radius': '3px 16px 3px 16px',
      '--cell-border': '2px dashed #5a3578',
      '--font-title': "'Grenze Gotisch', Georgia, 'Times New Roman', serif", '--title-w': '700',
      '--head-bg': 'linear-gradient(135deg,#ff7518,#6a1b9a 70%,#1a0f24)'
    },
    fontUrl: 'https://fonts.googleapis.com/css2?family=Grenze+Gotisch:wght@700&display=swap',
    mark: '🎃', decor: { emoji: ['🎃', '🦇', '👻', '🕸️'], count: 14 }
  },
  {
    id: 'christmas', name: 'Giáng sinh', icon: '🎄', title: 'Lịch Giáng Sinh', subtitle: 'Mùa của yêu thương',
    auto: { from: '12-10', to: '12-26' },
    vars: {
      '--bg': '#f3faf5', '--bg2': '#d8ecde', '--panel': '#ffffff', '--text': '#1c2b22', '--muted': '#5d7466',
      '--primary': '#c62828', '--on-primary': '#ffffff', '--cell': '#ffffff', '--cell-hover': '#fdecea',
      '--cell-off': '#e9f2ec', '--today': '#c8e6c9', '--border': '#b9d6c1', '--task-bg': '#c62828',
      '--task-text': '#ffffff', '--weekend': '#c62828', '--radius': '18px',
      '--cell-border': '2px solid #cfe5d5',
      '--font-title': "'Pacifico', Georgia, 'Times New Roman', serif", '--title-w': '400',
      '--head-bg': 'linear-gradient(135deg,#c62828,#1b5e20)'
    },
    fontUrl: 'https://fonts.googleapis.com/css2?family=Pacifico&display=swap',
    mark: '🎁', decor: { emoji: ['❄️', '⛄', '🎄', '✨'], count: 18 }
  }
  ,{
    id: 'newyear', name: 'Tết Dương lịch 2027', icon: '🎆', title: 'Chào Năm Mới 2027', subtitle: 'Vạn sự khởi đầu nan, vạn sự hanh thông',
    auto: { from: '12-27', to: '01-03' },
    vars: {
      '--bg': '#0a1030', '--bg2': '#1b2a63', '--panel': '#14204a', '--text': '#f4f6ff', '--muted': '#a9b6e6',
      '--primary': '#ffc83d', '--on-primary': '#0a1030', '--cell': '#14204a', '--cell-hover': '#20337a',
      '--cell-off': '#0e1738', '--today': '#5b4700', '--border': '#2f428a', '--task-bg': '#ffc83d',
      '--task-text': '#0a1030', '--weekend': '#ff8fa3', '--radius': '10px', '--cell-border': '1px solid #2f428a',
      '--font-title': "'Merriweather', Georgia, 'Times New Roman', serif", '--title-w': '900',
      '--head-bg': 'linear-gradient(135deg,#0a1030,#3b2a8c 55%,#ffc83d)'
    },
    fontUrl: 'https://fonts.googleapis.com/css2?family=Merriweather:wght@900&display=swap',
    fireworks: { colors: ['#ffc83d', '#ff5d8f', '#4dd2ff', '#ffffff', '#7CFF6B'] },
    mark: '🥂', decor: { emoji: ['✨', '🎉', '🥂', '🎊'], count: 12 }
  },
  {
    id: 'tet', name: 'Tết Nguyên Đán Đinh Mùi', icon: '🧧', title: 'Xuân Đinh Mùi 2027', subtitle: 'Chúc mừng năm mới — Vạn sự như ý',
    auto: { from: '01-24', to: '02-11' },   /* Tết âm lịch đổi theo năm: nhớ sửa from/to mỗi năm */
    vars: {
      '--bg': '#fff4e0', '--bg2': '#ffd6a8', '--panel': '#fffaf0', '--text': '#4a1010', '--muted': '#8a5a3a',
      '--primary': '#c8102e', '--on-primary': '#fff3c4', '--cell': '#fffaf0', '--cell-hover': '#ffe9c2',
      '--cell-off': '#f4e0c2', '--today': '#ffd54f', '--border': '#e0b25c', '--task-bg': '#c8102e',
      '--task-text': '#ffe9a8', '--weekend': '#c8102e', '--radius': '14px', '--cell-border': '2px solid #e0b25c',
      '--font-title': "'Playfair Display', Georgia, 'Times New Roman', serif", '--title-w': '800',
      '--head-bg': 'linear-gradient(135deg,#b3001b,#e8202f 60%,#f5b700)'
    },
    fontUrl: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@800&display=swap',
    fireworks: { colors: ['#ffd700', '#ff3b30', '#ffb300', '#ffffff'] },
    mark: '🧧', decor: { emoji: ['🌸', '🧧', '🏮', '🐐', '🌼'], count: 16 }
  },
  {
    id: 'valentine', name: 'Valentine', icon: '💝', title: 'Lịch Yêu Thương', subtitle: 'Mỗi ngày đều là một ngày để yêu',
    auto: { from: '02-12', to: '02-14' },
    vars: {
      '--bg': '#fff0f5', '--bg2': '#ffd3e3', '--panel': '#ffffff', '--text': '#4a1530', '--muted': '#9a5a74',
      '--primary': '#e91e63', '--on-primary': '#ffffff', '--cell': '#ffffff', '--cell-hover': '#ffe3ee',
      '--cell-off': '#fbe6ee', '--today': '#ffc1d6', '--border': '#f5b5cc', '--task-bg': '#e91e63',
      '--task-text': '#ffffff', '--weekend': '#d81b60', '--radius': '22px 22px 22px 6px',
      '--cell-border': '2px solid #f5b5cc',
      '--font-title': "'Lobster', Georgia, 'Times New Roman', serif", '--title-w': '400',
      '--head-bg': 'linear-gradient(135deg,#e91e63,#ff80ab)'
    },
    fontUrl: 'https://fonts.googleapis.com/css2?family=Lobster&display=swap',
    mark: '💘', decor: { emoji: ['💖', '🌹', '💌', '💕'], count: 16 }
  }
  /* Ví dụ thêm chủ đề mới: copy một khối ở trên, đổi id, tên, màu, fontUrl, mark, decor. */
];
