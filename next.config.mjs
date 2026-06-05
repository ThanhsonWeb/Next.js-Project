/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cmzzfqlehqfrztjvsxrk.supabase.co",
				port: "",
				pathname: "/storage/v1/object/public/**",
			},
		],
	},
	// output: "export",
	//  deploy your app as a static export (pure HTML/CSS/JS with no server).
};

export default nextConfig;
