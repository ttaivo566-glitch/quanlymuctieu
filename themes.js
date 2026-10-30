/* CHỦ ĐỀ GIAO DIỆN — thêm/bớt/sửa tại đây, không cần đụng index.html.
   Mỗi chủ đề là 1 object trong mảng. Muốn thêm ngày lễ mới: copy 1 khối, đổi id + nội dung.
   - title/subtitle/icon : bảng tên của lịch
   - auto {from,to}      : khoảng ngày "MM-DD" tự bật khi chọn "Tự động theo ngày lễ"
   - vars                : màu & hình dạng ô lịch (khóa nào không khai báo sẽ lấy từ "default")
       --cell-border: viền ô | --radius: bo góc ô (vd '4px 16px 4px 16px') | --task-bg/--task-text: màu khối công việc trong ô
   - fontUrl             : link Google Fonts cho font tiêu đề. PHẢI chọn font có hỗ trợ tiếng Việt (trang fonts.google.com, lọc Language = Vietnamese)
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
      '--font': "'Segoe UI', system-ui, sans-serif", '--font-title': "'Segoe UI', system-ui, sans-serif",
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
      '--font-title': "'Pirata One', Georgia, 'Times New Roman', serif",
      '--head-bg': 'linear-gradient(135deg,#ff7518,#6a1b9a 70%,#1a0f24)'
    },
    fontUrl: 'https://fonts.googleapis.com/css2?family=Pirata+One&display=swap',
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
      '--font-title': "'Pacifico', Georgia, 'Times New Roman', serif",
      '--head-bg': 'linear-gradient(135deg,#c62828,#1b5e20)'
    },
    fontUrl: 'https://fonts.googleapis.com/css2?family=Pacifico&display=swap',
    mark: '🎁', decor: { emoji: ['❄️', '⛄', '🎄', '✨'], count: 18 }
  }
  /* Ví dụ thêm Tết:
  , { id:'tet', name:'Tết', icon:'🧧', title:'Lịch Xuân', subtitle:'Chúc mừng năm mới',
      auto:{from:'01-20',to:'02-20'}, vars:{'--primary':'#d32f2f','--task-bg':'#fbc02d','--task-text':'#7f0000'},
      mark:'🧧', decor:{emoji:['🌸','🧧'],count:14} } */
];
