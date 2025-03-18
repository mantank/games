import { useEffect, useRef } from 'react';

export default function AdBanner({ slot, format = 'auto', responsive = true, style = {} }) {
  const adRef = useRef(null);

  useEffect(() => {
    const loadAd = () => {
      try {
        if (typeof window !== 'undefined' && window.adsbygoogle) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      } catch (error) {
        console.error('AdSense 加载错误:', error);
      }
    };

    // 确保 AdSense 脚本已加载
    if (document.readyState === 'complete') {
      loadAd();
    } else {
      window.addEventListener('load', loadAd);
      return () => window.removeEventListener('load', loadAd);
    }
  }, []);

  return (
    <div className="ad-container" style={{ textAlign: 'center', margin: '20px auto', ...style }}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block', overflow: 'hidden' }}
        data-ad-client="ca-pub-1276532464726109"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  );
} 