import { RouterProvider, createBrowserRouter } from "react-router-dom"
import CountryApp from "../CountryApp"
import { HomePage, OnePage, TwoPage } from "../pages"


const router = createBrowserRouter([
    {
      path: '/',
      element: <CountryApp />, 
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path:'/page-one',
          element:<OnePage />
        },
        {
          path:'/page-two',
          element:<TwoPage />
        }
      ]
    },
])
const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default AppRouter