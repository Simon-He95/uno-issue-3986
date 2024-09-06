import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

// if remove that line, dev serve report: Entry module not found. Did you add `import 'uno.css'` in your main entry?
// else, build report: Rollup failed to resolve import "uno.css"

// import 'uno.css';

createApp(App).mount('#app');
