import { Metadata } from "next"
import Navigation from "../components/navigation"
import SalesLayout from "./about-us/company/jobs/sales/layout"
import Sales from "./about-us/company/jobs/sales/page"
import AboutUsLayout from "./about-us/layout"


export const metadata :Metadata = {
  title:{
    template: "%s | Next Movies",
    default: "Next Movies"
  },
  description: 'The best movies on the best framework',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {/* <AboutUsLayout>
          <SalesLayout>
            <Sales/>
          </SalesLayout>
        </AboutUsLayout> */}
        {children}
      </body>
    </html>
  )
}
