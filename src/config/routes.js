import Dashboard from '../screens/Dashboard/Dashboard'
import SireDirectory from '../screens/SireDirectory/SireDirectory'
import AdvancedSearch from '../screens/AdvancedSearch/AdvancedSearch'

const routes = [
    {
      path: "/",
      exact: true,
      component: Dashboard
    },
    {
      path: "/siredirectory",
      component: SireDirectory
    },
    {
      path: "/search",
      component: AdvancedSearch
    }
]
  
export default routes