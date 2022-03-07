import React from "react";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
{
        title: "Mobile Devices",
    path: "#",
	icon: <FaIcons.FaMobile />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Phones",
		path: "/Category/phone",
		icon: <FaIcons.FaMobile />,
	},
	{
		title: "Mobile Tablets",
		path: "/Category/tablets",
		icon: <IoIcons.IoIosPaper />,
	},
	],
},
{
    title: "Computing",
       path: "#",
	icon: <FaIcons.FaLaptop />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Laptop",
		path: "/Category/laptop",
		icon: <FaIcons.FaLaptop />,
		cName: "sub-nav",
	},
	{
		title: "Computer Accessories",
		path: "/Category/computer-accessories",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
	{
		title: "Server",
		path: "/Category/servers",
		icon: <IoIcons.IoIosPaper />,
	},
	],
},
{
	title: "Accessories",
	path: "#",
    icon: <FaIcons.FaPhone />,
    
    iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Smart Watches",
		path: "/events/events1",
		icon: <IoIcons.IoIosPaper />,
	},
	{
		title: "HeadPhones",
		path: "/events/events2",
		icon: <IoIcons.IoIosPaper />,
        },
    {
		title: "Gadgets",
		path: "/events/events2",
		icon: <IoIcons.IoIosPaper />,
	}
	]
},
{
	title: "Games",
	path: "#",
	icon: <FaIcons.FaEnvelopeOpenText />,

	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Video games",
		path: "/events/events1",
		icon: <IoIcons.IoIosPaper />,
	},
	{
		title: "Game Console",
		path: "/events/events2",
		icon: <IoIcons.IoIosPaper />,
	},
	],
},

];
