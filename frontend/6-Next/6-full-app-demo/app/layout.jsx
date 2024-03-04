import '@/assets/styles/globals.css'

export const metadata = {
    title: 'PropertyPulse | Find the Perfect Rental',
    description: 'Find the perfect rental property with PropertyPulse.',
}

const MainLayout = ({children})=> {
  return (
    <html lang ='en'>
        <body>
            <div id='app'>{children}</div>
        </body>
    </html>
  )
}

export default MainLayout