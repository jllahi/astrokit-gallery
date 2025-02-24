export interface NavigationItem {
  title: string
  path: string // | URL
  // children?: NavItem[] // | NavItem
}

export const navigation: NavigationItem[] = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Blog',
    path: '/posts',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
  // {
  // 	title: "Features",
  // 	path: "#",
  // 	children: [
  // 		{ title: "Action", path: "/" },
  // 		{ title: "Another action", path: "#" },
  // 		{ title: "Dropdown Submenu", path: "#" },
  // 		{ title: "404 Page", path: "/404" },
  // 	],
  // },
]

export default navigation
