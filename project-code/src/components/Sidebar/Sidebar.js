import '../Sidebar/sidebar.css'


function Sidebar(){

    return(
        <nav id="sidebar-container" className='sidebar'>
            
            <ul>
                <h2>Find Job By Country</h2>
                <li>United States</li>
                <li>Canada</li>
                <li>Mexico</li>
                <li>United Kingdom</li>
                <li>Brazil</li>
            </ul>
        </nav>

    )
}

export default Sidebar;