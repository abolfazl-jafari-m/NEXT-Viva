import type {NextConfig} from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    images : {
        loader :"custom",
        loaderFile :"./src/components/shop/shared/imageLoader/imageLoader.ts",
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'api.alikooshesh.ir',
                port :"3000",
                pathname   :"/assets/**",
            },
        ],
    },
    experimental: {
        authInterrupts: true,
    },
};

const withNextIntl = createNextIntlPlugin(
    "./src/lib/i18n/request.ts"
)



export default withNextIntl(nextConfig);