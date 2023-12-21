import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import harvardArt from './data/harvardArt';
import GalleryNavigation from './components/GalleryNavigation';

console.log(harvardArt)

function Layout(){
  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records} />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

const router = createBrowserRouter([
{
  element : <Layout/>,
  children: [
    {
      path: '/galleries',
      element:
        <>
          <h2> Harvard Art Museum </h2>
          <p>
            Look, but Don&apos;t Touch. Please select a Gellery in the navigation bar.
          </p>
        </>
    },
    { 
      path: "*",
      element: <h2>Page Not Found</h2>
    }
  ]
}
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;

