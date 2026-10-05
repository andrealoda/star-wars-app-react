import { Ping } from 'ldrs/react'
import 'ldrs/react/Ping.css'

function Loader() {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '300px' }}>
            <Ping size="150" speed="2" color="#4fd8ff" />
        </div>
    )
}

export default Loader;