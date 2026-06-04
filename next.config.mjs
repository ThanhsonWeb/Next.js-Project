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
		qualities: [75, 80, 100],
	},
};

export default nextConfig;
