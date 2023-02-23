import React from 'react'
import { VscAdd, VscAccount, VscFolderOpened } from 'react-icons/vsc'
import { FiUpload, FiSettings, FiLogIn } from 'react-icons/fi'
import { TbReportSearch } from 'react-icons/tb'
const Sidebar = () => {
    return (
    <div className=''>
            <div className='bar d-flex flex-column align-items-center justify-content-evenly'>
            <div className="bg"></div>
            <VscAdd size={35} />
            <VscAccount size={35} />
            <VscFolderOpened size={35} />
            <FiUpload size={35} />
            <TbReportSearch size={35} />
            <FiSettings size={35} />
            <FiLogIn size={35} />

        </div>
    </div>
    )
}

export default Sidebar