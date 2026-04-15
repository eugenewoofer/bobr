import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BobrView from '@/views/BobrView.vue'
import GalleryView from '@/views/GalleryView.vue'
import FactsView from '@/views/FactsView.vue'
import HabitatView from '@/views/HabitatView.vue'
import SpeciesView from '@/views/SpeciesView.vue'
import VideoView from '@/views/VideoView.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/bobr', name: 'bobr', component: BobrView },
  { path: '/gallery', name: 'gallery', component: GalleryView },
  { path: '/facts', name: 'facts', component: FactsView },
  { path: '/habitat', name: 'habitat', component: HabitatView },
  { path: '/species', name: 'species', component: SpeciesView },
  { path: '/video', name: 'video', component: VideoView },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
