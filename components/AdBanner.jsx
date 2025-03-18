import { useEffect, useRef } from 'react';

export default function AdBanner({ slot, format = 'auto', responsive = true, style = {} }) {
  const adRef = useRef(null);

  useEffect(() => {
    try {
      // 确保 AdSense 代码加载完成
      if (window.adsbygoogle) {
        // 推送新广告
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error('AdSense 错误:', error);
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