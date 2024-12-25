const CONFIG_EMOJIS = {
  vmess: [
    '🚀', '⚡', '🔥', '💫', '✨', '🌟', '💨', '🎯', 
    '🌠', '⭐', '🌍', '🌎', '🌏', '🛸', '🎪', '🌈',
    '💝', '💎', '🔮', '🎨', '🎭', '🎪', '🎢', '🎡'
  ],
  vless: [
    '🌈', '🌊', '🌪️', '🎭', '🎪', '🎡', '🎢', '🎠',
    '🌺', '🌸', '🌼', '🌻', '🌹', '🌷', '🌱', '🌿',
    '🍀', '🎋', '🎍', '🎭', '🎪', '🎨', '🎯', '🎲'
  ],
  trojan: [
    '🐎', '🗡️', '⚔️', '🛡️', '🏰', '🗝️', '🔐', '🔒',
    '👑', '⚜️', '🎪', '🎭', '🎨', '🎯', '🎲', '🎮',
    '🏹', '🗿', '🎪', '🎭', '🎨', '🎯', '🎲', '🎮'
  ],
  shadowsocks: [
    '👻', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗',
    '🌘', '🌙', '🌚', '🌛', '🌜', '🌝', '⭐', '✨',
    '💫', '⚡', '🌟', '🔮', '🎭', '🎪', '🎨', '🎯'
  ]
};

export function getRandomEmoji(type: keyof typeof CONFIG_EMOJIS): string {
  const emojis = CONFIG_EMOJIS[type];
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
}