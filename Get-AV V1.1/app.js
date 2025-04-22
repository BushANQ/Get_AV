function analyzeOutput() {
    const input = document.querySelector('.search-input').value;
    const loading = document.getElementById('loading');
    const results = document.getElementById('results');
    const countElement = document.getElementById('count');
    
    // 如果输入为空，显示提示
    if (!input.trim()) {
        results.innerHTML = `
            <div class="empty-result">
                <i class="fas fa-exclamation-circle"></i>
                <p>请输入 tasklist /svc 命令的输出结果</p>
            </div>
        `;
        return;
    }
    
    // 显示加载动画
    loading.style.display = 'block';
    results.innerHTML = '';
    
    // 模拟异步分析过程
    setTimeout(() => {
        const foundAV = {};
        const lines = input.toLowerCase().split('\n');
        
        // 分析每一行
        for (const line of lines) {
            for (const [avName, signatures] of Object.entries(avSignatures)) {
                if (signatures.some(sig => line.includes(sig.toLowerCase()))) {
                    if (!foundAV[avName]) {
                        foundAV[avName] = [];
                    }
                    
                    // 避免重复添加相同的进程
                    if (!foundAV[avName].includes(line.trim())) {
                        foundAV[avName].push(line.trim());
                    }
                }
            }
        }

        // 更新结果显示
        const avCount = Object.keys(foundAV).length;
        countElement.textContent = avCount;

        if (avCount === 0) {
            results.innerHTML = `
                <div class="empty-result">
                    <i class="fas fa-check-circle"></i>
                    <p>未检测到已知的安全软件</p>
                </div>
            `;
        } else {
            // 按字母顺序排序结果
            const sortedAV = Object.keys(foundAV).sort().reduce((obj, key) => {
                obj[key] = foundAV[key];
                return obj;
            }, {});
            
            for (const [avName, processes] of Object.entries(sortedAV)) {
                const card = document.createElement('div');
                card.className = 'av-card';
                
                const html = `
                    <div class="av-name">${avName}</div>
                    <ul class="process-list">
                        ${processes.map(p => `<li class="process-item"><i class="fas fa-angle-right"></i> ${p}</li>`).join('')}
                    </ul>
                `;
                
                card.innerHTML = html;
                results.appendChild(card);
            }
        }

        // 隐藏加载动画
        loading.style.display = 'none';
    }, 1500);
}

// 页面加载完成后添加事件监听器
document.addEventListener('DOMContentLoaded', function() {
    // 添加回车键提交功能
    document.querySelector('.search-input').addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && e.ctrlKey) {
            analyzeOutput();
        }
    });
    
    // 添加提示信息
    const textarea = document.querySelector('.search-input');
    textarea.title = "粘贴 tasklist /svc 命令的输出结果，按 Ctrl+Enter 快速分析";
});
