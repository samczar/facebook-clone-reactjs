import {
	EmojiFlags,
	LocalHospital,
	People,
	Chat,
	Storefront,
	VideoLibrary,
	ExpandMoreOutlined,
} from '@material-ui/icons'
import React from 'react'
import SidebarRow from './SidebarRow'
import './Sidebar.css'

function Sidebar() {
	return (
		<div className="sidebar">
			<SidebarRow
				src="https://avatars0.githubusercontent.com/u/5194440?s=400&u=a63e9e24ce363589c8e453dca8cee71bf85d064c&v=4"
				title="SamCzar Heavens"
			/>
			<SidebarRow Icon={LocalHospital} title="COVID-19 Information Centre" />
			<SidebarRow Icon={EmojiFlags} title="Friends" />
			<SidebarRow Icon={People} title="Pages" />
			<SidebarRow Icon={Chat} title="Messengers" />
			<SidebarRow Icon={Storefront} title="Marketplace" />
			<SidebarRow Icon={VideoLibrary} title="Videos" />
			<SidebarRow Icon={ExpandMoreOutlined} title="More" />
		</div>
	)
}

export default Sidebar
