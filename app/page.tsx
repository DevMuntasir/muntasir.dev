import Layout from "@/components/layout/Layout"
import Home2 from "@/components/sections/Home2"

export default function Home() {

	return (
		<>
			<Layout headerStyle={2} footerStyle={2}>
				<Home2 />
				{/* <Static2 /> */}
				{/* <Service1 />
				<Projects1 />
				<Resume1 />
				<Skills1 />
				<Brands1 />
				<Testimonials1 />
				<Blog1 />
				<Contact1 /> */}
			</Layout>
		</>
	)
}