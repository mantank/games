/**
 * Sitemap Generator Script
 * This script generates an XML sitemap based on the games data
 */

/**
 * Generate sitemap entries for all games
 * This should be run on a schedule (e.g., daily) to keep the sitemap up-to-date
 */
function generateSitemap() {
    // Make sure gamesData is available
    if (!window.gamesData || !Array.isArray(window.gamesData)) {
        console.error('Games data not available for sitemap generation');
        return;
    }
    
    // Load existing sitemap
    fetch('/sitemap.xml')
        .then(response => response.text())
        .then(sitemap => {
            // Parse the XML
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(sitemap, "text/xml");
            const urlset = xmlDoc.querySelector('urlset');
            
            // Remove any existing game URLs
            const existingUrls = xmlDoc.querySelectorAll('url');
            const gameUrlsToRemove = [];
            
            for (let i = 0; i < existingUrls.length; i++) {
                const url = existingUrls[i];
                const loc = url.querySelector('loc');
                if (loc && loc.textContent.includes('/game.html?id=')) {
                    gameUrlsToRemove.push(url);
                }
            }
            
            gameUrlsToRemove.forEach(url => urlset.removeChild(url));
            
            // Add entries for each game
            window.gamesData.forEach(game => {
                const url = xmlDoc.createElement('url');
                
                const loc = xmlDoc.createElement('loc');
                loc.textContent = `https://happygame.help/game.html?id=${game.id}`;
                url.appendChild(loc);
                
                const changefreq = xmlDoc.createElement('changefreq');
                changefreq.textContent = 'weekly';
                url.appendChild(changefreq);
                
                const priority = xmlDoc.createElement('priority');
                
                // Set priority based on game attributes
                let priorityValue = 0.5; // Default
                
                if (game.isFeatured || game.featured) {
                    priorityValue = 0.8;
                }
                
                if (game.isNew || game.new) {
                    priorityValue = 0.9;
                }
                
                // Popular games get higher priority
                if (game.popularity > 90) {
                    priorityValue = Math.max(priorityValue, 0.8);
                }
                
                priority.textContent = priorityValue.toFixed(1);
                url.appendChild(priority);
                
                urlset.appendChild(url);
            });
            
            // Serialize back to XML
            const serializer = new XMLSerializer();
            const updatedSitemap = serializer.serializeToString(xmlDoc);
            
            // In a real environment, you would write this back to the file
            // Here we're just logging it
            console.log('Updated sitemap:', updatedSitemap);
            
            // In a real environment:
            // - Save the updated XML to the server
            // - Ping search engines to let them know the sitemap was updated
            //   e.g., fetch('https://www.google.com/ping?sitemap=https://happygame.help/sitemap.xml')
        })
        .catch(error => {
            console.error('Error generating sitemap:', error);
        });
}

// 立即执行sitemap生成
document.addEventListener('DOMContentLoaded', function() {
    console.log('正在生成包含新游戏的网站地图...');
    setTimeout(generateSitemap, 2000); // 延迟2秒执行，确保游戏数据已加载
});

// For testing in the browser
if (typeof window !== 'undefined' && document.readyState === 'complete') {
    generateSitemap();
} else if (typeof window !== 'undefined') {
    window.addEventListener('load', generateSitemap);
}

// Export for Node.js usage
if (typeof module !== 'undefined') {
    module.exports = { generateSitemap };
} 