import '@site/css/tailwind.css'
import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'
import focus from '@alpinejs/focus'
import persist from '@alpinejs/persist'

window.Alpine = Alpine
Alpine.plugin(collapse)
Alpine.plugin(focus)
Alpine.plugin(persist)

Alpine.start()
