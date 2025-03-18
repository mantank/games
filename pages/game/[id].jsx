import AdBanner from '../../components/AdBanner';

export default function GamePage() {
  return (
    <div className="game-page-layout">
      {/* 左侧广告 */}
      <div className="left-sidebar">
        <AdBanner 
          slot="您的左侧广告位ID"
          format="vertical"
          responsive={false}
          style={{
            width: '160px',
            height: '600px',
            position: 'sticky',
            top: '20px'
          }}
        />
      </div>

      {/* 游戏主内容区 */}
      <div className="game-content">
        {/* 游戏标题上方横幅 */}
        <AdBanner 
          slot="您的顶部广告位ID"
          format="horizontal"
          style={{ marginBottom: '20px' }}
        />

        {/* 游戏标题和游戏框架 */}
        <h1>游戏标题</h1>
        <div className="game-frame">
          {/* 游戏iframe */}
        </div>

        {/* 游戏下方横幅 */}
        <AdBanner 
          slot="您的底部广告位ID"
          format="horizontal"
          style={{ marginTop: '20px' }}
        />
      </div>

      {/* 右侧广告 */}
      <div className="right-sidebar">
        <AdBanner 
          slot="您的右侧广告位ID"
          format="vertical"
          responsive={false}
          style={{
            width: '160px',
            height: '600px',
            position: 'sticky',
            top: '20px'
          }}
        />
      </div>
    </div>
  );
} 