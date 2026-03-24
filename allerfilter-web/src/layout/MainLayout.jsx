import { Outlet } from 'react-router-dom'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import SideAd from '@/components/ad/SideAd'
import './Layout.css'

    function MainLayOut() {
        return (
            <>
                <Header />
                <div className="layout">
                    <aside className='side-left'>
                        <SideAd />
                    </aside>

                    <main className="content">
                        <Outlet></Outlet>
                    </main>

                    <aside className='side-right'>
                        <SideAd />
                    </aside>
                </div>
                <Footer />
            </>
        )
    }
export default MainLayOut