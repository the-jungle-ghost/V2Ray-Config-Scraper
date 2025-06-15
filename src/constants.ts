export const CONFIG_URLS = {
  MAIN_REPO: 'https://github.com/Danialsamadi/v2ray-configsapp',
  ALL_CONFIGS: 'https://github.com/Danialsamadi/v2ray-configsapp/raw/main/All_Configs_Sub.txt',
  ALL_CONFIGS_BASE64: 'https://github.com/Danialsamadi/v2ray-configsapp/raw/main/All_Configs_base64_Sub.txt',
  VMESS: 'https://github.com/Danialsamadi/v2ray-configsapp/raw/main/Splitted-By-Protocol/vmess.txt',
  VLESS: 'https://github.com/Danialsamadi/v2ray-configsapp/raw/main/Splitted-By-Protocol/vless.txt',
  TROJAN: 'https://github.com/Danialsamadi/v2ray-configsapp/raw/main/Splitted-By-Protocol/trojan.txt',
  SHADOWSOCKS: 'https://github.com/Danialsamadi/v2ray-configsapp/raw/main/Splitted-By-Protocol/ss.txt',
  SHADOWSOCKSR: 'https://github.com/Danialsamadi/v2ray-configsapp/raw/main/Splitted-By-Protocol/ssr.txt',
} as const;

export const SUBSCRIPTION_URLS = [
  'https://raw.githubusercontent.com/Danialsamadi/v2ray-configsapp/refs/heads/main/Sub1.txt',
  'https://raw.githubusercontent.com/Danialsamadi/v2ray-configsapp/refs/heads/main/Sub2.txt',
  'https://raw.githubusercontent.com/Danialsamadi/v2ray-configsapp/refs/heads/main/Sub3.txt',
  'https://raw.githubusercontent.com/Danialsamadi/v2ray-configsapp/refs/heads/main/Sub4.txt',
  'https://raw.githubusercontent.com/Danialsamadi/v2ray-configsapp/refs/heads/main/Sub5.txt',
  'https://raw.githubusercontent.com/Danialsamadi/v2ray-configsapp/refs/heads/main/Sub6.txt',
  'https://raw.githubusercontent.com/Danialsamadi/v2ray-configsapp/refs/heads/main/Sub7.txt',
  'https://raw.githubusercontent.com/Danialsamadi/v2ray-configsapp/refs/heads/main/Sub8.txt',
  'https://raw.githubusercontent.com/Danialsamadi/v2ray-configsapp/refs/heads/main/Sub9.txt',
  'https://raw.githubusercontent.com/Danialsamadi/v2ray-configsapp/refs/heads/main/Sub10.txt',
  'https://raw.githubusercontent.com/Danialsamadi/v2ray-configsapp/refs/heads/main/Sub11.txt',
  'https://raw.githubusercontent.com/Danialsamadi/v2ray-configsapp/refs/heads/main/Sub12.txt',
  'https://raw.githubusercontent.com/Danialsamadi/v2ray-configsapp/refs/heads/main/Sub13.txt',
  'https://raw.githubusercontent.com/Danialsamadi/v2ray-configsapp/refs/heads/main/Sub14.txt',
] as const;

export const CLIENT_GUIDES = {
  WINDOWS: {
    NEKORAY: {
      name: 'NekoRay',
      url: 'https://github.com/MatsuriDayo/nekoray'
    },
    V2RAYN: {
      name: 'V2rayN',
      url: 'https://github.com/2dust/v2rayN'
    },
    HIDDIFY: {
      name: 'Hiddify-Next',
      url: 'https://github.com/hiddify/hiddify-next'
    }
  },
  LINUX: {
    NEKORAY: {
      name: 'NekoRay',
      url: 'https://github.com/MatsuriDayo/nekoray'
    },
    HIDDIFY: {
      name: 'Hiddify-Next',
      url: 'https://github.com/hiddify/hiddify-next'
    }
  },
  ANDROID: {
    V2RAYNG: {
      name: 'V2rayNG',
      url: 'https://github.com/2dust/v2rayNG'
    },
    HIDDIFYNG: {
      name: 'Hiddify-Next',
      url: 'https://github.com/hiddify/hiddify-next'
    },
    NEKOBOX: {
      name: 'NekoBox',
      url: 'https://github.com/MatsuriDayo/NekoBoxForAndroid'
    }
  },
  IOS: {
    STREISAND: {
      name: 'Streisand',
      url: 'https://apps.apple.com/us/app/streisand/id6450534064'
    },
    FAIR: {
      name: 'Fair',
      url: 'https://apps.apple.com/us/app/fair-vpn/id1533873488'
    },
    SHADOWROCKET: {
      name: 'ShadowRocket',
      url: 'https://apps.apple.com/us/app/shadowrocket/id932747118'
    }
  }
} as const;

export const REFRESH_INTERVAL = 600; // 10 minutes in seconds