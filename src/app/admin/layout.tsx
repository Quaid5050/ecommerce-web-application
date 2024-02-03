import type { Metadata } from 'next'
import Script from 'next/script';
import Image from 'next/image'

{/* General CSS Files */ }
import "./assets/css/app.min.css"
{/* Template CSS */}
import "./assets/css/style.css"
import "./assets/css/components.css"
{/* Custom style CSS */}
import "./assets/css/custom.css"
import {DashboardFooter, DashboardNavbar, DashboardSidebar, ThemeSettings} from "@/components/dashboard/layout";


export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Admin Dashboard',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <>
        {/* blank.html  21 Nov 2019 03:54:41 GMT */}
        <meta charSet="UTF-8" />
        <meta
            content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no"
            name="viewport"
        />
        <div  />
        <div id="app">
          <div className="main-wrapper main-wrapper-1">
            <div className="navbar-bg" />
            {/* Navbar */}
            <DashboardNavbar/>
            {/*Dashboard sidebar*/}
            <DashboardSidebar />
            {/*end Dashboard sidebar*/}
            {/* Main Content */}
            <div className="main-content">
              <section className="section">
                <div className="section-body">
                  {  /* add content here */}
                  {children}
                </div>
              </section>
              {/* Theme Setting*/}
              <ThemeSettings/>
              {/* end Theme Setting */}
            </div>
            {/* Dashboard Footer */}
            <DashboardFooter/>
            {/* end Dashboard Footer */}
          </div>
        </div>
        <Script src="/dashboard-assets/js/app.min.js"></Script>
        <Script src="/dashboard-assets/js/scripts.js"></Script>
        <Script src="/dashboard-assets/js/custom.js"></Script>
      </>

  )
}
