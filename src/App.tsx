import React, { useState, useEffect } from 'react';
import { ConfigCard } from './components/ConfigCard';
import { TabBar } from './components/TabBar';
import { Header } from './components/Header';
import { getConfigCounts } from './utils/configUtils';
import { VPNConfig, ConfigTab } from './types/config';
import { REFRESH_INTERVAL } from './constants';
import { fetchConfigs } from './services/configService';
import { fetchSubscriptionContent, setCachedSubscription } from './services/subscriptionService';

function App() {
  const [configs, setConfigs] = useState<VPNConfig[]>([]);
  const [activeTab, setActiveTab] = useState<ConfigTab>('all');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [countdown, setCountdown] = useState(REFRESH_INTERVAL);

  const refreshData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Fetch both configs and subscription content
      const [newConfigs, newSubscription] = await Promise.all([
        fetchConfigs(),
        fetchSubscriptionContent()
      ]);

      setConfigs(newConfigs);
      setCachedSubscription(newSubscription);
      setCountdown(REFRESH_INTERVAL);
    } catch (err) {
      setError('Failed to fetch configurations. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshData();
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          refreshData();
          return REFRESH_INTERVAL;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const filteredConfigs = configs.filter((config) => 
    activeTab === 'all' || config.type === activeTab
  );

  const counts = getConfigCounts(configs);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        <Header 
          onRefresh={refreshData}
          loading={loading}
          countdown={countdown}
        />

        <TabBar
          activeTab={activeTab}
          onTabChange={setActiveTab}
          counts={counts}
        />

        {error && (
          <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-4 sm:mb-6 text-sm sm:text-base">
            {error}
          </div>
        )}

        <div className="space-y-4">
          {filteredConfigs.map((config, index) => (
            <ConfigCard key={index} config={config} index={index} />
          ))}
        </div>

        {!loading && filteredConfigs.length === 0 && (
          <div className="text-center py-8 sm:py-12 text-gray-500 text-sm sm:text-base">
            No configurations found for this type.
          </div>
        )}
      </div>
    </div>
  );
}

export default App;