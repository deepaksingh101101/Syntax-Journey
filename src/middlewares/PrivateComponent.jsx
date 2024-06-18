
import {Navigate, Outlet} from 'react-router-dom'


export default function PrivateComponent() {
    const auth=localStorage.getItem("accessToken")
  return (
    auth?<Outlet/>:<Navigate to='/'/>
  )
}
