import React from 'react';
import { GuideSection } from './GuideSection';
import { BypassList } from './BypassList';
import { useLanguage } from '../context/LanguageContext';

export function GuidesPage() {
  const { t, language } = useLanguage();
  const bypassList = "localhost;127.*;10.*;172.16.*;172.17.*;172.18.*;172.19.*;172.20.*;172.21.*;172.22.*;172.23.*;172.24.*;172.25.*;172.26.*;172.27.*;172.28.*;172.29.*;172.30.*;172.31.*;192.168.*";

  // English guides
  const enGuides = [
    {
      title: 'Setting up V2Ray on Windows',
      platform: 'Windows',
      steps: [
        {
          title: 'Download a V2Ray client',
          description: 'Download and install V2RayN, NekoRay, or Hiddify-Next from their official GitHub repositories.'
        },
        {
          title: 'Import subscription',
          description: 'Right-click on the V2RayN icon in the system tray, select "Import from clipboard", and paste the subscription link.'
        },
        {
          title: 'Update subscription',
          description: 'Right-click on the subscription and select "Update subscription" to fetch the latest configs.'
        },
        {
          title: 'Connect',
          description: 'Select a server from the list and click "Set as active server". Then enable the V2Ray service.'
        }
      ]
    },
    {
      title: 'Setting up V2Ray on Android',
      platform: 'Android',
      steps: [
        {
          title: 'Download a V2Ray client',
          description: 'Download and install V2RayNG or Hiddify-Next from Google Play Store or their GitHub repositories.'
        },
        {
          title: 'Import subscription',
          description: 'Open the app and tap on the "+" icon. Select "Import Config from Clipboard" and paste the subscription link.'
        },
        {
          title: 'Update subscription',
          description: 'Long press on the subscription and select "Update" to fetch the latest configs.'
        },
        {
          title: 'Connect',
          description: 'Tap on a server from the list and then tap on the "Connect" button at the bottom.'
        }
      ]
    },
    {
      title: 'Setting up V2Ray on iOS',
      platform: 'iOS',
      steps: [
        {
          title: 'Download a V2Ray client',
          description: 'Download and install Streisand, Fair, or ShadowRocket from the App Store.'
        },
        {
          title: 'Import subscription',
          description: 'Open the app and tap on the "+" icon. Choose "Import from clipboard" and paste the subscription link.'
        },
        {
          title: 'Test configs',
          description: 'Hold on the subscription part and choose "Latency" to check all configs.'
        },
        {
          title: 'Connect',
          description: 'Choose a config with good latency and tap on it to connect.'
        }
      ]
    },
    {
      title: 'Setting up V2Ray on Linux',
      platform: 'Linux',
      steps: [
        {
          title: 'Download a V2Ray client',
          description: 'Download and install NekoRay or Hiddify-Next from their GitHub repositories.'
        },
        {
          title: 'Import subscription',
          description: 'Open the app, go to Subscriptions, click "Add", and paste the subscription link.'
        },
        {
          title: 'Update subscription',
          description: 'Right-click on the subscription and select "Update" to fetch the latest configs.'
        },
        {
          title: 'Connect',
          description: 'Double-click on a server from the list to connect.'
        }
      ]
    },
    {
      title: 'Setting Up System Proxy',
      platform: 'System',
      steps: [
        {
          title: 'Open System Settings',
          description: 'Open your operating system settings.'
        },
        {
          title: 'Navigate to Proxy Settings',
          description: 'Go to the proxy section in your system settings.'
        },
        {
          title: 'Configure Proxy Settings',
          description: 'Set IP: 127.0.0.1 and Port: 10809'
        },
        {
          title: 'Set Bypass List',
          description: 'Add the following to bypass list:',
          customContent: <div className="preserve-ltr" dir="ltr"><BypassList list={bypassList} /></div>
        },
        {
          title: 'Enable System Proxy',
          description: 'Turn on the system proxy setting.'
        },
        {
          title: 'Configure V2Ray Client',
          description: 'Return to your V2Ray client (like V2RayN) and after selecting your config, set it to use system proxy.'
        }
      ]
    },
    {
      title: 'Using Proxifier for System-Wide Tunneling',
      platform: 'Proxifier',
      steps: [
        {
          title: 'Download Proxifier',
          description: 'Download and install Proxifier from https://proxifier.com/download/'
        },
        {
          title: 'Activate Proxifier',
          description: 'Use one of the following activation keys: L6Z8A-XY2J4-BTZ3P-ZZ7DF-A2Q9C (Portable Edition), 5EZ8G-C3WL5-B56YG-SCXM9-6QZAP (Standard Edition), or P427L-9Y552-5433E-8DSR3-58Z68 (Mac OS)'
        },
        {
          title: 'Configure Proxy Server',
          description: 'Go to Profile > Proxy Server and click Add. Enter IP: 127.0.0.1 and Port based on your V2Ray client (V2rayN: 10808, Netch: 2801, SSR: 1080, Mac V2rayU: 1086). Select SOCKS5 as the protocol.'
        },
        {
          title: 'Start Using',
          description: 'Now your entire system traffic will be tunneled through the proxy.'
        }
      ]
    }
  ];

  // Persian guides
  const faGuides = [
    {
      title: <>نصب <span className="preserve-ltr">V2Ray</span> روی ویندوز</>,
      platform: 'Windows',
      steps: [
        {
          title: <>دانلود کلاینت <span className="preserve-ltr">V2Ray</span></>,
          description: <>نرم‌افزار <span className="preserve-ltr">V2RayN</span>، <span className="preserve-ltr">NekoRay</span> یا <span className="preserve-ltr">Hiddify-Next</span> را از مخازن رسمی گیت‌هاب دانلود و نصب کنید.</>
        },
        {
          title: 'وارد کردن اشتراک',
          description: <>روی آیکون <span className="preserve-ltr">V2RayN</span> در نوار وظیفه راست کلیک کنید، گزینه <span className="preserve-ltr">"Import from clipboard"</span> را انتخاب کنید و لینک اشتراک را وارد کنید.</>
        },
        {
          title: 'به‌روزرسانی اشتراک',
          description: <>روی اشتراک راست کلیک کنید و گزینه <span className="preserve-ltr">"Update subscription"</span> را انتخاب کنید تا پیکربندی‌های جدید دریافت شوند.</>
        },
        {
          title: 'اتصال',
          description: <>یک سرور را از لیست انتخاب کنید و روی <span className="preserve-ltr">"Set as active server"</span> کلیک کنید. سپس سرویس <span className="preserve-ltr">V2Ray</span> را فعال کنید.</>
        }
      ]
    },
    {
      title: <>نصب <span className="preserve-ltr">V2Ray</span> روی اندروید</>,
      platform: 'Android',
      steps: [
        {
          title: <>دانلود کلاینت <span className="preserve-ltr">V2Ray</span></>,
          description: <>نرم‌افزار <span className="preserve-ltr">V2RayNG</span> یا <span className="preserve-ltr">Hiddify-Next</span> را از گوگل پلی استور یا مخازن گیت‌هاب دانلود و نصب کنید.</>
        },
        {
          title: 'وارد کردن اشتراک',
          description: <>برنامه را باز کنید و روی آیکون <span className="preserve-ltr">"+"</span> ضربه بزنید. گزینه <span className="preserve-ltr">"Import Config from Clipboard"</span> را انتخاب کنید و لینک اشتراک را وارد کنید.</>
        },
        {
          title: 'به‌روزرسانی اشتراک',
          description: <>روی اشتراک فشار طولانی دهید و گزینه <span className="preserve-ltr">"Update"</span> را انتخاب کنید تا پیکربندی‌های جدید دریافت شوند.</>
        },
        {
          title: 'اتصال',
          description: <>روی یک سرور از لیست ضربه بزنید و سپس روی دکمه <span className="preserve-ltr">"Connect"</span> در پایین صفحه ضربه بزنید.</>
        }
      ]
    },
    {
      title: <>نصب <span className="preserve-ltr">V2Ray</span> روی <span className="preserve-ltr">iOS</span></>,
      platform: 'iOS',
      steps: [
        {
          title: <>دانلود کلاینت <span className="preserve-ltr">V2Ray</span></>,
          description: <>نرم‌افزار <span className="preserve-ltr">Streisand</span>، <span className="preserve-ltr">Fair</span> یا <span className="preserve-ltr">ShadowRocket</span> را از اپ استور دانلود و نصب کنید.</>
        },
        {
          title: 'وارد کردن اشتراک',
          description: <>برنامه را باز کنید و روی آیکون <span className="preserve-ltr">"+"</span> ضربه بزنید. گزینه <span className="preserve-ltr">"Import from clipboard"</span> را انتخاب کنید و لینک اشتراک را وارد کنید.</>
        },
        {
          title: 'تست پیکربندی‌ها',
          description: <>روی بخش اشتراک نگه دارید و گزینه <span className="preserve-ltr">"Latency"</span> را انتخاب کنید تا تمام پیکربندی‌ها بررسی شوند.</>
        },
        {
          title: 'اتصال',
          description: 'یک پیکربندی با تأخیر مناسب را انتخاب کنید و روی آن ضربه بزنید تا متصل شوید.'
        }
      ]
    },
    {
      title: <>نصب <span className="preserve-ltr">V2Ray</span> روی لینوکس</>,
      platform: 'Linux',
      steps: [
        {
          title: <>دانلود کلاینت <span className="preserve-ltr">V2Ray</span></>,
          description: <>نرم‌افزار <span className="preserve-ltr">NekoRay</span> یا <span className="preserve-ltr">Hiddify-Next</span> را از مخازن گیت‌هاب دانلود و نصب کنید.</>
        },
        {
          title: 'وارد کردن اشتراک',
          description: <>برنامه را باز کنید، به بخش <span className="preserve-ltr">Subscriptions</span> بروید، روی <span className="preserve-ltr">"Add"</span> کلیک کنید و لینک اشتراک را وارد کنید.</>
        },
        {
          title: 'به‌روزرسانی اشتراک',
          description: <>روی اشتراک راست کلیک کنید و گزینه <span className="preserve-ltr">"Update"</span> را انتخاب کنید تا پیکربندی‌های جدید دریافت شوند.</>
        },
        {
          title: 'اتصال',
          description: 'روی یک سرور از لیست دابل کلیک کنید تا متصل شوید.'
        }
      ]
    },
    {
      title: 'تنظیم پروکسی سیستم',
      platform: 'System',
      steps: [
        {
          title: 'باز کردن تنظیمات سیستم',
          description: 'تنظیمات سیستم عامل خود را باز کنید.'
        },
        {
          title: 'رفتن به تنظیمات پروکسی',
          description: 'به بخش پروکسی در تنظیمات سیستم بروید.'
        },
        {
          title: 'پیکربندی تنظیمات پروکسی',
          description: <>آی‌پی: <span className="preserve-ltr">127.0.0.1</span> و پورت: <span className="preserve-ltr">10809</span> را تنظیم کنید.</>
        },
        {
          title: 'تنظیم لیست استثناها',
          description: 'موارد زیر را به لیست استثناها اضافه کنید:',
          customContent: <div className="preserve-ltr" dir="ltr"><BypassList list={bypassList} /></div>
        },
        {
          title: 'فعال‌سازی پروکسی سیستم',
          description: 'تنظیمات پروکسی سیستم را روشن کنید.'
        },
        {
          title: <>پیکربندی کلاینت <span className="preserve-ltr">V2Ray</span></>,
          description: <>به کلاینت <span className="preserve-ltr">V2Ray</span> خود (مانند <span className="preserve-ltr">V2RayN</span>) برگردید و پس از انتخاب پیکربندی، آن را تنظیم کنید تا از پروکسی سیستم استفاده کند.</>
        }
      ]
    },
    {
      title: <>استفاده از <span className="preserve-ltr">Proxifier</span> برای تونل کردن کل سیستم</>,
      platform: 'Proxifier',
      steps: [
        {
          title: <>دانلود <span className="preserve-ltr">Proxifier</span></>,
          description: <>نرم‌افزار <span className="preserve-ltr">Proxifier</span> را از <span className="preserve-ltr">https://proxifier.com/download/</span> دانلود و نصب کنید.</>
        },
        {
          title: <>فعال‌سازی <span className="preserve-ltr">Proxifier</span></>,
          description: <>از یکی از کلیدهای فعال‌سازی زیر استفاده کنید: <span className="preserve-ltr">L6Z8A-XY2J4-BTZ3P-ZZ7DF-A2Q9C</span> (نسخه قابل حمل)، <span className="preserve-ltr">5EZ8G-C3WL5-B56YG-SCXM9-6QZAP</span> (نسخه استاندارد) یا <span className="preserve-ltr">P427L-9Y552-5433E-8DSR3-58Z68</span> (مک)</>
        },
        {
          title: 'پیکربندی سرور پروکسی',
          description: <>به <span className="preserve-ltr">Profile &gt; Proxy Server</span> بروید و روی <span className="preserve-ltr">Add</span> کلیک کنید. آی‌پی: <span className="preserve-ltr">127.0.0.1</span> و پورت مبتنی بر کلاینت <span className="preserve-ltr">V2Ray</span> خود را وارد کنید (<span className="preserve-ltr">V2rayN: 10808, Netch: 2801, SSR: 1080, Mac V2rayU: 1086</span>). پروتکل <span className="preserve-ltr">SOCKS5</span> را انتخاب کنید.</>
        },
        {
          title: 'شروع استفاده',
          description: 'اکنون تمام ترافیک سیستم شما از طریق پروکسی تونل می‌شود.'
        }
      ]
    }
  ];

  // Choose guides based on current language
  const guides = language === 'en' ? enGuides : faGuides;

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">{t('guides.title')}</h2>
        <p className="text-gray-600">
          {t('guides.description')}
        </p>
      </div>

      {guides.map((guide, index) => (
        <GuideSection
          key={index}
          title={guide.title}
          platform={guide.platform}
          steps={guide.steps}
        />
      ))}
    </div>
  );
} 