import React from 'react'
import './Header.css'
import {
	SearchRounded,
	Facebook,
	Home,
	Flag,
	SubscriptionsOutlined,
	StorefrontOutlined,
	SupervisedUserCircle,
	Add,
	ExpandMore,
	Forum,
	NotificationsActive,
} from '@material-ui/icons'
import { Avatar, IconButton } from '@material-ui/core'

function Header() {
	return (
		<div className="header">
			<div className="header__left">
				<Facebook fontSize="large" />
				<div className="header__input">
					<SearchRounded />
					<input type="text" placeholder="Search Facebook" />
				</div>
			</div>
			<div className="header__center">
				<div className="header__option header__option--active">
					<Home fontSize="large" />
				</div>
				<div className="header__option">
					<Flag fontSize="large" />
				</div>
				<div className="header__option">
					<SubscriptionsOutlined fontSize="large" />
				</div>
				<div className="header__option">
					<StorefrontOutlined fontSize="large" />
				</div>
				<div className="header__option">
					<SupervisedUserCircle fontSize="large" />
				</div>
			</div>
			<div className="header__right">
				<div className="header__info">
					<Avatar />
					<h4>samczar heavens</h4>
				</div>
				<IconButton>
					<Add />
				</IconButton>
				<IconButton>
					<Forum />
				</IconButton>
				<IconButton>
					<NotificationsActive />
				</IconButton>
				<IconButton>
					<ExpandMore />
				</IconButton>
			</div>
		</div>
	)
}

export default Header
