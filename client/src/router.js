import VueRouter from 'vue-router'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import About from './pages/About'
import AnimeDetails from './pages/AnimeDetails'
import WatchList from './pages/WatchList'


const routes = [
  {path:'/home', component:Home, name:'Home'},
  {path: '/signin', component:SignIn, name:'SignIn' },
  {path: '/', component:SignUp, name:'SignUp' },
  {path: '/about', component:About, name:'About' },
  {path: '/details/:anime_id', component:AnimeDetails, name:'AnimeDetails' },
  {path: '/watchlist', component:WatchList, name:'WatchList' }
]


export default new VueRouter({ routes, mode: 'history' })