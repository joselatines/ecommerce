import Footer from '../../components/shared/Footer';
import Navbar from '../../components/shared/Navigation';

interface Props {
	children: React.ReactNode;
}

const navItems = [
	{ name: 'Log', link: '/log' },
	{ name: 'Cart', link: '/cart' },
];

const MainLayout = ({ children }: Props) => {
	return (
		<>
			<Navbar navItems={navItems}>{children}</Navbar>
			<Footer />
		</>
	);
};

export default MainLayout;
