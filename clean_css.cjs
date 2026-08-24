const fs = require('fs');
const postcss = require('postcss');

const files = [
    'src/styles/global.css',
    'style.css'
];

const plugin = postcss.plugin('purge-cursor', () => {
    return (root) => {
        root.walkRules(rule => {
            if (rule.selector.includes('custom-cursor') || 
                rule.selector.includes('cursor-dot') || 
                rule.selector.includes('cursor-outline')) {
                rule.remove();
            }
        });
        root.walkAtRules('media', atRule => {
            if (atRule.nodes.length === 0) {
                atRule.remove();
            }
        });
    };
});

files.forEach(file => {
    if (fs.existsSync(file)) {
        const css = fs.readFileSync(file, 'utf8');
        postcss([plugin]).process(css, { from: file, to: file }).then(result => {
            fs.writeFileSync(file, result.css);
            console.log(`Cleaned ${file}`);
        });
    }
});
