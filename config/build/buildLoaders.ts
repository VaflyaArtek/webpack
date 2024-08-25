import {ModuleOptions} from 'webpack'
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/types";

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
    const isDev = options.mode === 'development';

    const cssLoaderWithModules = {
        loader: "css-loader",
        options: {
            // modules: {
            //     localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
            // },
            modules: true,
        },
    }

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            cssLoaderWithModules,
            "sass-loader",
        ],
    }

    const tsLoader = {
        // ts loader can working with jsx
        // if typescript was not used, you would need to configure the babel-loader
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [scssLoader, tsLoader]
}